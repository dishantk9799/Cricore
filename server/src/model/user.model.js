import { Schema, model } from "mongoose";
import { ROLES } from "../constant/model.constant.js";
const userSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true, trim: true },
        password: { type: String },
        role: { type: String, enum: Object.values(ROLES), default: ROLES.SCORER },
        isDeleted: { type: Boolean, default: false },
        picture: { type: String, default: "https://res.cloudinary.com/dlu50vy5k/image/upload/v1779796992/iuuji0fcb00xk252lz10.jpg" }
    },
    { timestamps: true }
);

export const User = model('User', userSchema);