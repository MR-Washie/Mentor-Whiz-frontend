import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function AdminRoute({ children }) {
  const { authUser, isCheckingAuth } = useAuthStore();
  if (isCheckingAuth) return null; // or a loader
  if (!authUser) return <Navigate to="/login" replace />;
  if (authUser.role !== "admin") return <Navigate to="/" replace />;
  return children;
}
