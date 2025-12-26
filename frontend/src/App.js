import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import AdminLogin from "./pages/auth/AdminLogin";
import FacultyLogin from "./pages/auth/FacultyLogin";
import Register from "./pages/auth/Register";
import Donor from "./pages/Donor";
import dotenv from "dotenv";
dotenv.config();
import AdminDashboard from "./pages/admin/AdminDashboard";
import FacultyProfile from "./pages/faculty/FacultyDashboard";

import ProtectedRoute from "./components/ProtectedRoute";
console.log("ENV CHECK FROM APP:", import.meta.env.VITE_API_URL);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Main />} />

        {/* Auth */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/faculty/login" element={<FacultyLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donor" element={<Donor />} />


        {/* Admin */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Faculty Profile (Dashboard = Profile) */}
        <Route
          path="/faculty/profile"
          element={
            <ProtectedRoute role="FACULTY">
              <FacultyProfile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
