import axios from "axios";

export const register  = async (user) => {
    return (
        await axios.post(`${import.meta.env.VITE_APP_API}/register`, user)
    )
}

export const login  = async (user) => {
    return (
        await axios.post(`${import.meta.env.VITE_APP_API}/login`, user)
    )
}