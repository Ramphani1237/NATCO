import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "../../styles/auth.css";

export default function FacultyLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/auth/login", {
        email,
        password
      });
      console.log("LOGIN RESPONSE:", res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", "FACULTY");

      navigate("/faculty/profile");

    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h2 className="auth-title">Faculty Login</h2>
        <p className="auth-subtitle">
          NATCO Cancer Centre – Faculty Access
        </p>

        <form onSubmit={handleLogin} className="auth-form">

          <input
            type="email"
            placeholder="Faculty Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <div className="auth-error">{error}</div>}

          <button
            type="submit"
            className="auth-button"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Login"}
          </button>

        </form>

        <div className="auth-footer">
          <button
            className="auth-link"
            onClick={() => navigate("/")}
          >
            ← Back to Home
          </button>
        </div>

      </div>
    </div>
  );
}
