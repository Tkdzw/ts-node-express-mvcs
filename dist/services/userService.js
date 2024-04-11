"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    constructor(userRepository) {
        this._userRepository = userRepository;
    }
    async getAllUsers() {
        try {
            const users = await this._userRepository.getAllUsers();
            return {
                data: users,
                message: 'Users retrieved successfully',
                status: 200,
                time: new Date().toISOString(),
            };
        }
        catch (err) {
            console.error('Error fetching users:', err);
            return {
                data: [],
                message: 'Error fetching users',
                status: 500,
                time: new Date().toISOString(),
            };
        }
    }
    async addUser(user) {
        try {
            const newUser = await this._userRepository.addUser(user);
            return {
                data: newUser,
                message: 'User added successfully',
                status: 201,
                time: new Date().toISOString(),
            };
        }
        catch (err) {
            console.error('Error adding user:', err);
            return {
                message: `Error adding user ${err}`,
                status: 500,
                time: new Date().toISOString(),
            };
        }
    }
    async getUserById(id) {
        try {
            const user = await this._userRepository.getUserById(id);
            if (user) {
                return {
                    data: user,
                    message: 'User retrieved successfully',
                    status: 200,
                    time: new Date().toISOString(),
                };
            }
            return {
                message: 'User not found',
                status: 200,
                time: new Date().toISOString(),
            };
        }
        catch (error) {
            return {
                message: `Error fetching user ${error}`,
                status: 500,
                time: new Date().toISOString(),
            };
        }
    }
    async updateUser(id, user) {
        try {
            const updatedUser = await this._userRepository.updateUser(id, user);
            return {
                // data: updatedUser,
                message: 'User updated successfully',
                status: 200,
                time: new Date().toISOString(),
            };
        }
        catch (err) {
            console.error('Error updating user:', err);
            return {
                message: `Error updating user ${err}`,
                status: 500,
                time: new Date().toISOString(),
            };
        }
    }
}
exports.UserService = UserService;
