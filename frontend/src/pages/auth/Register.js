import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";
import "../../styles/auth.css";

export default function Register() {
  const [params] = useSearchParams();
  const token = params.get("token");
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await api.post("/auth/register", {
        ...form,
        token
      });

      alert(
        "Registration successful.\nYour account will be activated after admin approval."
      );

      // Redirect to faculty login after registration
      navigate("/faculty/login");

    } catch (err) {
      console.error("REGISTER ERROR:", err.response?.data);
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h2 className="auth-title">Faculty Registration</h2>
        <p className="auth-subtitle">
          NATCO Cancer Centre – Departmental Faculty Onboarding
        </p>

        <form onSubmit={submit} className="auth-form">

          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

          <input
            type="email"
            placeholder="Official Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Create Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            required
          />

          {error && <div className="auth-error">{error}</div>}

          <button
            type="submit"
            className="auth-button"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
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
