import { User } from "../model/user.model.js";

export default class UserRepo {
    async create(payload) {
        return await User.create(payload);
    }
    async findByEmail(email){
        return await User.findOne({email}).lean();
    }
    async findById(id){
        return await User.findById(id).lean();
    }
}