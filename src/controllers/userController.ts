import { Request, Response } from "express";
import { User } from "../models/user";
import { UserService } from "../services/userService";

export class UserController {
  static getAllUsers(req: Request, res: Response): void {
    const users = UserService.getAllUsers();
    res.json(users);
  }

  static addUser(req: Request, res: Response): void {
    const { id, name, email } = req.body as User;
    const newUser: User = { id, name, email };
    UserService.addUser(newUser);
    res.status(201).send("User added successfully");
  }
}
