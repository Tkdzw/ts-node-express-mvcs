"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getAllUsers(req, res) {
        try {
            const users = await this.userService.getAllUsers();
            res.json(users);
        }
        catch (err) {
            console.error('Error fetching users:', err);
            res.status(500).send('Error fetching users');
        }
    }
    async addUser(req, res) {
        const user = req.body;
        try {
            const newUser = await this.userService.addUser(user);
            res.status(201).json(newUser);
        }
        catch (err) {
            console.error('Error adding user:', err);
            res.status(500).send('Error adding user');
        }
    }
    async updateUser(req, res) {
        const id = parseInt(req.params.id, 10);
        const user = req.body;
        try {
            const updatedUser = await this.userService.updateUser(id, user);
            res.json(updatedUser);
        }
        catch (err) {
            console.error('Error updating user:', err);
            res.status(500).send('Error updating user');
        }
    }
}
exports.UserController = UserController;
