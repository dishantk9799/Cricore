import jwt from "jsonwebtoken";
import env from "../../../config/env.js"
import NotFound from "../../../shared/error/notFound.error.js";
import { successResponse } from "../../../shared/utils/successResponse.js";
import { app_config } from "../../../constant/app.constant.js";
import AuthSerivce from "./auth.service.js";
export default class AuthController {
    constructor() {
        this.userService = new AuthSerivce();
    }

    async refreshAccessToken(req, res) {
        const { accessToken } = this.userService.RefreshAccessToken(req.cookies.refreshToken);
        res.cookie("accessToken", accessToken, app_config.cookie.accessToken);
        return successResponse(res);
    }
    async getMe(req, res) {
        return successResponse(res, "User Verified", req.user);
    }
    async GoogleCallback(req, res) {

        const { accessToken, refreshToken } = await this.userService.CreateUser(req.user);

        res.cookie("refreshToken", refreshToken, app_config.cookie.refreshToken);
        res.cookie("accessToken", accessToken, app_config.cookie.accessToken);

    }
}