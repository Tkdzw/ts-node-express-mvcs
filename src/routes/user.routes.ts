import { Router } from "express";
import { UserController } from "../controllers/userController";
import { UserService } from '../services/userService';

// Instantiate UserService
const userService = new UserService();

// Instantiate UserController with UserService injected
const userController = new UserController(userService);

const userRouter = Router();

userRouter.get("/", userController.getAllUsers);
userRouter.post("/", userController.addUser);

export default userRouter;
