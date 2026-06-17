import mongoose from "mongoose";
import env from "../config/env.js"
import logger from "../config/logger.js";
export const connecDB = async () => {
    await mongoose.connect(env.MONGO_URL);
    logger.info("mongodb connected");
};