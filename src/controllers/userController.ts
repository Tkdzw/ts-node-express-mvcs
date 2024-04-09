import { Request, Response } from 'express';
import { UserService } from '../services/userService';

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userService.getAllUsers();
      res.json(users);
    } catch (err) {
      console.error('Error fetching users:', err);
      res.status(500).send('Error fetching users');
    }
  }

  async addUser(req: Request, res: Response): Promise<void> {
    const user = req.body;
    try {
      const newUser = await this.userService.addUser(user);
      res.status(201).json(newUser);
    } catch (err) {
      console.error('Error adding user:', err);
      res.status(500).send('Error adding user');
    }
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    const id: number = parseInt(req.params.id, 10);
    const user = req.body;
    try {
      const updatedUser = await this.userService.updateUser(id, user);
      res.json(updatedUser);
    } catch (err) {
      console.error('Error updating user:', err);
      res.status(500).send('Error updating user');
    }
  }
}
