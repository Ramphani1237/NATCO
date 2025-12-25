import React, { useEffect, useState } from "react";
import api from "../../services/api";

const FacultyDashboard = () => {
  const [faculty, setFaculty] = useState(null);

  useEffect(() => {
    api.get("/faculty/profile")
      .then((res) => setFaculty(res.data))
      .catch(() => alert("Failed to load profile"));
  }, []);

  if (!faculty) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <div style={styles.nav}>
        <h2>NATCO Cancer Centre – Faculty Portal</h2>
        <button
          style={styles.logout}
          onClick={() => {
            localStorage.clear();
            window.location.href = "/faculty/login";
          }}
        >
          Logout
        </button>
      </div>

      {/* Profile Card */}
      <div style={styles.card}>
        <h3>Faculty Profile</h3>
        <p><strong>Name:</strong> {faculty.name}</p>
        <p><strong>Email:</strong> {faculty.email}</p>
        <p><strong>Role:</strong> {faculty.role}</p>
        <p><strong>Department:</strong> {faculty.department}</p>
        <p>
          <strong>Status:</strong>{" "}
          <span style={{ color: "green" }}>Approved</span>
        </p>
      </div>

      {/* Department Section */}
      <div style={styles.card}>
        <h3>Department</h3>
        <p>You are assigned to:</p>
        <h4>{faculty.department}</h4>
      </div>

      {/* Future Sections */}
      <div style={styles.card}>
        <h3>Upcoming Features</h3>
        <ul>
          <li>Notices & circulars</li>
          <li>Duty schedules</li>
          <li>Patient assignments</li>
          <li>Reports</li>
        </ul>
      </div>
    </div>
  );
};

export default FacultyDashboard;

/* ================= STYLES ================= */

const styles = {
  page: {
    background: "#f4f6f8",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif"
  },
  nav: {
    background: "#003366",
    color: "white",
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logout: {
    background: "#cc0000",
    color: "white",
    border: "none",
    padding: "8px 16px",
    cursor: "pointer"
  },
  card: {
    background: "white",
    margin: "24px auto",
    padding: "24px",
    maxWidth: "700px",
    borderRadius: "6px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  }
};
