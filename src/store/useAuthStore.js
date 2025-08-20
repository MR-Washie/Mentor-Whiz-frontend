import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";



const BASE_URL = import.meta.env.VITE_BASE_URL;



export const useAuthStore = create((set, get) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isCheckingAuth: true,
    profile: null,
    isLoadingProfile: false,
    isUpdatingProfile: false,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check");

            set({ authUser: res.data});
        } catch (error) {
            console.log("Error in checkAuth: ", error);
            set({ authUser: null});
        } finally {
            set({ isCheckingAuth: false});
        }
    },

    signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      toast.success("Account created successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Logged in successfully");

      if (res.data?.role === "admin") navigate("/admin");
      else navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  

  fetchMyProfile: async () => {
      set({ isLoadingProfile: true });
      try {
        const res = await axiosInstance.get("/api/users/me");
        set({ profile: res.data });
      } catch (e) {
        console.error("fetchMyProfile error:", e);
        toast.error(e?.response?.data?.message || "Failed to load profile");
      } finally {
        set({ isLoadingProfile: false });
      }
    },

    updateMyProfile: async (payload) => {
      set({ isUpdatingProfile: true });
      try {
        const res = await axiosInstance.put("/api/users/me", payload);
        set({ profile: res.data, authUser: res.data }); // keep both in sync if used
        toast.success("Profile updated");
        return true;
      } catch (e) {
        console.error("updateMyProfile error:", e);
        toast.error(e?.response?.data?.message || "Update failed");
        return false;
      } finally {
        set({ isUpdatingProfile: false });
      }
    },
}))
