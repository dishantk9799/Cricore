import { User } from "../model/user.model.js";

class UserRepo {
    async create(payload) {
        return await User.create(payload);
    }
    async findByEmail(email){
        return await User.findOne({email});
    }
    async findById(id){
        return await User.findById(id);
    }
}