import express from "express";
import env from "../config/env.js";
import helmet from "helmet";
import hpp from "hpp";
import compression from "compression";
import cors from "cors";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
export default function securityMiddleware(app) {
    app.use(cors({
        origin: env.CORS_ORIGIN,
        credentials: true
    }));

    app.use(cookieParser());

    app.use(rateLimit({
        windowMs: env.RATELIMIT_WINDOWMS,
        limit: env.RATELIMIT,
        legacyHeaders: true,
        message: "Too many request, Try again after few minutes",
    }));

    app.use(helmet());
    app.use(hpp());
    app.use(compression());
    app.use(express.json({ limit: "3mb" }));
    app.use(express.urlencoded({ extended: true, limit: "3mb" }));
}