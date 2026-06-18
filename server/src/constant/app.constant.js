export default {
    PORT: 4001,
    LOGGER_LEVEL: "info",
    NODE_ENV: "development",
    CORS_ORIGIN: "http://localhost:5173",
    RATELIMIT_WINDOWMS: 900000,
    RATELIMIT: 100
}

export const app_config = {
    cookie: {
        refreshToken: {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 30 * 24 * 60 * 60 * 1000
        },
        accessToken: {
            httpOnly: false,
            secure: false,
            sameSite: "lax",
            maxAge: 60 * 60 * 1000
        }
    }
}