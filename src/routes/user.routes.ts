import { Router } from "express";
import { UserController } from "../controllers/userController";
import { UserService } from '../services/userService';
import { UserRepository } from "../repositories/userRepository";

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService); // Create UserController instance with UserService dependency

const userRouter = Router();

userRouter.get("/", userController.getAllUsers.bind(userController)); // Bind the instance method to the controller instance
userRouter.post("/", userController.addUser.bind(userController)); // Bind the instance method to the controller instance

export default userRouter;
