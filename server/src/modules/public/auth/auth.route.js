import express from "express";
import AuthController from "./auth.controller.js";
import passport from "passport";
import { authMiddleware } from "../../../middleware/authmiddleware.js";
import { asyncHandler } from "../../../shared/utils/asyncHandler.js";

const router = express.Router();
const authController = new AuthController();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'], prompt: "select_account" }));
router.get('/google/callback', passport.authenticate('google', { session: false }), authController.GoogleCallback.bind(authController));
router.get('/me', authMiddleware, asyncHandler(authController.getMe.bind(authController)));
router.get('/refreshToken', asyncHandler(authController.refreshAccessToken.bind(authController)));

export default router;