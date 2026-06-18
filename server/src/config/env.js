import dotenv from "dotenv";
dotenv.config();
import z from "zod";
import appConstant from "../constant/app.constant.js";

const envSchema = z.object({
    PORT: z.coerce.number().default(appConstant.PORT),
    MONGO_URL: z.string(),
    NODE_ENV: z.string().default(appConstant.NODE_ENV),
    LOGGER_LEVEL: z.string().default(appConstant.LOGGER_LEVEL),
    CORS_ORIGIN: z.string().default(appConstant.CORS_ORIGIN),
    RATELIMIT_WINDOWMS: z.coerce.number().default(appConstant.RATELIMIT_WINDOWMS),
    RATELIMIT: z.coerce.number().default(appConstant.RATELIMIT),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
    GOOGLE_CALLBACK_URL: z.string(),
    ACCESS_TOKEN_SECRET:z.string(),
    REFRESH_TOKEN_SECRET:z.string()
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
    console.error("❌ Invalid environment variables");
    console.error(parsed.error.format());
    process.exit(1);
}

export default parsed.data;