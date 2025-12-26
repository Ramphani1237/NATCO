const User = require("../models/User");
const Invite = require("../models/Invite");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (user) =>
    jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: "1d"
    });

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credential" });

    if (!(await bcrypt.compare(password, user.password)))
        return res.status(400).json({ message: "Invalid credentials" });

    if (user.status !== "APPROVED")
        return res.status(403).json({ message: "Account not approved" });

    res.json({ token: generateToken(user), user });
};

exports.register = async (req, res) => {
    try {
        const { token, name, email, password } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        const invite = await Invite.findOne({ token, used: false });
        if (!invite) {
            return res.status(400).json({ message: "Invalid or expired invite" });
        }

        if (invite.expiresAt < new Date()) {
            return res.status(400).json({ message: "Invite expired" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role: invite.role,
            department: invite.department,
            status: "PENDING"
        });

        invite.used = true;
        await invite.save();

        res.status(201).json({
            message: "Registration successful. Await admin approval."
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

