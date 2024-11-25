import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/signUp";
import LoginPage from "./pages/Login";
import WelcomePage from "./pages/welcome";
import HomePage from "./pages/Home";
import Profile from "./pages/UserProfile";
import Admin from "./pages/Admin";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
