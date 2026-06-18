import { app_config } from "../../constant/app.constant.js";
import AuthSerivce from "./auth.service.js";
export default class AuthController {
    constructor() {
        this.userService = new AuthSerivce();
    }

    async GoogleCallback(req, res) {
 
        const { accessToken, refreshToken } = await this.userService.CreateUser(req.user);
        
        res.cookie("refreshToken", refreshToken, app_config.cookie.refreshToken);
        res.cookie("accessToken", accessToken, app_config.cookie.accessToken);

    }
}