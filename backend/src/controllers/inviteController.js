const Invite = require("../models/Invite");
const crypto = require("crypto");

exports.createInvite = async (req, res) => {
    const { role, department } = req.body;

    const token = crypto.randomBytes(24).toString("hex");

    const invite = await Invite.create({
        token,
        role,
        department,
        expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000
    });

    res.json({ token });
};


exports.getInvites = async (req, res) => {
    res.json(await Invite.find());
};
