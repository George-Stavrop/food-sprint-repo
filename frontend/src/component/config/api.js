import axios from "axios"

export const API_URL = "http://springboot-cluster-ip:8080";

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    }
})