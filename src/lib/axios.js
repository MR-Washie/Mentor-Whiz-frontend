import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://mentorwhiz-backend.onrender.com",
    withCredentials: true,
})
