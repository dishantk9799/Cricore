import { email } from "zod";
import UserRepo from "../../repository/user.repository.js";
import { User } from "../../model/user.model.js";
import env from "../../config/env.js";
import jwt from "jsonwebtoken";
export default class AuthSerivce {
    constructor() {
        this.userRepo = new UserRepo();
    }

    async CreateUser(user) {
        const isUserPresent = await this.userRepo.findByEmail(user.emails[0].value);
        let result = isUserPresent;
        if (!isUserPresent) {
            const _user = await this.userRepo.create({
                email: user.emails[0].value,
                picture: user.photos[0].value,
                name: user.displayName
            });
            result = _user;
        }

        const data = {
            _id: result._id,
            email: user.emails[0].value,
            picture: user.photos[0].value,
            name: user.displayName
        }

        const refreshToken = jwt.sign(data, env.REFRESH_TOKEN_SECRET, { expiresIn: "30D" });
        const accessToken = jwt.sign(data, env.ACCESS_TOKEN_SECRET, { expiresIn: "1H" });

        return {accessToken,refreshToken};

    }
}