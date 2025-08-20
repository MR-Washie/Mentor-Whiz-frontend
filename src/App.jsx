// App.jsx
import React, { useEffect } from "react";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Public pages
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Plan from "./pages/Plan";
import Faqs from "./pages/Faqs";
import ServiceSection from "./section/ServiceSection";
import OurMentor from "./homePageSeeAll/OurMentor";
import TopperStudentList from "./homePageSeeAll/TopperStudentList";

// Auth pages
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassword";

// User pages (some protected)
import BecomeMentor from "./pages/BecomeMentor";
import ContactUs from "./pages/ContactUs";
import ProfilePage from "./pages/ProfilePage";
import EditProfile from "./pages/EditProfile";
import Feedback from "./homePageSeeAll/Feedback";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";

// Admin pages and route guard
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/AdminDashboard";
import AdminJobsList from "./admin/jobs/AdminJobsList";
import AdminJobCreate from "./admin/jobs/AdminJobCreate";
import AdminJobEdit from "./admin/jobs/AdminJobEdit";
import AdminRoute from "./admin/AdminRoute"; // wrapper that checks role === "admin"

import { useAuthStore } from "./store/useAuthStore";

// Optional simple loader
function PageLoader() {
  return (
    <div className="w-full py-10 flex items-center justify-center text-gray-600">
      Loading...
    </div>
  );
}

// AuthGate to avoid flashing protected pages before auth check completes
function AuthGate({ children }) {
  const { isCheckingAuth } = useAuthStore();
  if (isCheckingAuth) return <PageLoader />;
  return children;
}

// Route wrappers
function RequireAuth() {
  const { authUser } = useAuthStore();
  const location = useLocation();
  if (!authUser) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return <Outlet />;
}

function PublicOnly() {
  // redirects logged-in users away from login/signup
  const { authUser } = useAuthStore();
  if (authUser) return <Navigate to="/" replace />;
  return <Outlet />;
}

export default function App() {
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <AuthGate>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/our-services" element={<ServiceSection />} />
            <Route path="/our-mentor" element={<OurMentor />} />
            <Route path="/topper-student-list" element={<TopperStudentList />} />

              <Route path="/jobs" element={<Jobs />} />

              {/* Dynamic route for individual job detail view */}
              <Route path="/jobs/:id" element={<JobDetails />} />

            {/* Public-only (auth pages) */}
            <Route element={<PublicOnly />}>
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>

            {/* Mixed: forgot password can be public */}
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Protected user routes */}
            <Route element={<RequireAuth />}>
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/become-mentor" element={<BecomeMentor />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/profile/edit" element={<EditProfile />} />
              <Route path="/feedback" element={<Feedback />} />
            </Route>

            {/* Admin routes */}
            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <AdminLayout />
                </AdminRoute>
              }
            >
              <Route index element={<AdminDashboard />} />
              <Route path="jobs" element={<AdminJobsList />} />
              <Route path="jobs/new" element={<AdminJobCreate />} />
              <Route path="jobs/:id/edit" element={<AdminJobEdit />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<div className="p-8 text-center">404 Not Found</div>} />
          </Routes>
        </AuthGate>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}
