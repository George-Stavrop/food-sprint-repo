import axios from "axios"

export const API_URL = "django.georgeestav.dns.cloud.com/api";

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    }
})