"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const user_1 = __importDefault(require("../models/user"));
class UserRepository {
    async getAllUsers() {
        return user_1.default.findAll();
    }
    async addUser(user) {
        return user_1.default.create(user);
    }
    async getUserById(id) {
        return user_1.default.findByPk(id);
    }
    async getUserByEmail(email) {
        return user_1.default.findOne({ where: { email } });
    }
    // async getUserByUsername(username: string): Promise<User | null> {
    //   return User.findOne({ where: { username } });
    // }
    async deleteUser(id) {
        return user_1.default.destroy({ where: { id } });
    }
    async updateUser(id, user) {
        const [affectedCount] = await user_1.default.update(user, { where: { id } });
        return affectedCount;
    }
}
exports.UserRepository = UserRepository;
