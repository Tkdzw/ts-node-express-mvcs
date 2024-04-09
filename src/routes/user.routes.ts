import { Router } from "express";
import { UserController } from "../controllers/userController";

const userRouter = Router();

userRouter.get("/", UserController.getAllUsers);
userRouter.post("/", UserController.addUser);

export default userRouter;
