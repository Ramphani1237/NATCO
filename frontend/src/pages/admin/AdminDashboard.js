import { useEffect, useState } from "react";
import api from "../../services/api";
import "../../styles/dashboard.css";

export default function AdminDashboard() {
  const [departments, setDepartments] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedDept, setSelectedDept] = useState(null);

  useEffect(() => {
    api.get("/departments").then(res => setDepartments(res.data));
    api.get("/admin/users").then(res => setUsers(res.data));
  }, []);

  const approveUser = async (id) => {
    await api.patch(`/admin/approve/${id}`);
    const updated = await api.get("/admin/users");
    setUsers(updated.data);
  };

  const generateInvite = async () => {
    const res = await api.post("/invite", {
      role: "FACULTY",
      department: selectedDept.name
    });

    const link = `${window.location.origin}/register?token=${res.data.token}`;
    navigator.clipboard.writeText(link);
    alert("Invite link copied:\n" + link);
  };

  return (
    <div className="dashboard-page">

      <div className="dashboard-header">
        <h2>Admin Dashboard</h2>
        <button
          className="btn-secondary btn"
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </div>

      <div className="dashboard-grid">

        {/* LEFT: DEPARTMENTS */}
        <div className="dashboard-card">
          <h3>Departments</h3>

          {departments.map(dept => (
            <div
              key={dept._id}
              className={`department-item ${
                selectedDept?._id === dept._id ? "active" : ""
              }`}
              onClick={() => setSelectedDept(dept)}
            >
              {dept.name}
            </div>
          ))}
        </div>

        {/* RIGHT: DETAILS */}
        <div className="dashboard-card">
          {!selectedDept && (
            <p>Select a department to manage faculty.</p>
          )}

          {selectedDept && (
            <>
              <h3>{selectedDept.name}</h3>

              <button className="btn" onClick={generateInvite}>
                + Generate Faculty Invite
              </button>

              <hr style={{ margin: "16px 0" }} />

              {users
                .filter(
                  u =>
                    u.department === selectedDept.name &&
                    u.role === "FACULTY"
                )
                .map(user => (
                  <div key={user._id} className="faculty-row">
                    <div>
                      <strong>{user.name}</strong>
                      <div className="faculty-status">
                        {user.status}
                      </div>
                    </div>

                    {user.status === "PENDING" && (
                      <button
                        className="btn"
                        onClick={() => approveUser(user._id)}
                      >
                        Approve
                      </button>
                    )}
                  </div>
                ))}
            </>
          )}
        </div>

      </div>
    </div>
  );
}
