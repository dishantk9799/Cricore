import dotenv from "dotenv";
dotenv.config();
import z from "zod";
import appConstant from "../constant/app.constant.js";

const envSchema=z.object({
    PORT:z.coerce.number().default(appConstant.PORT),
    MONGO_URL:z.string(),
    NODE_ENV:z.string().default(appConstant.NODE_ENV),
    LOGGER_LEVEL:z.string().default(appConstant.LOGGER_LEVEL) 
});

const parsed = envSchema.safeParse(process.env);

if(!parsed.success){
    console.log("check your env");
}

export default parsed.data;