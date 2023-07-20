import axios from "axios"

const BASE_URL = "http://localhost:5008/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWU5YTI0NzM4ZjdjNzY5M2Q5MjQ5NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTg0Nzc2MywiZXhwIjoxNjkwMTA2OTYzfQ.bjjgzcsQ_U7Kf2mg-z_xl-GlcneKYMpjVpzbgQyCqfg"
export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})