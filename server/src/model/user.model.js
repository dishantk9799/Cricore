import { Schema, model } from "mongoose";
import { ROLES } from "../constant/model.constant.js";
const userSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true, trim: true },
        password: { type: String },
        role: { type: String, enum: Object.values(ROLES), default: ROLES.SCORER },
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export const User = model('User', userSchema);