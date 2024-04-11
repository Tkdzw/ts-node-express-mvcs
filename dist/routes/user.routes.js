"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const userService_1 = require("../services/userService");
const userRepository_1 = require("../repositories/userRepository");
const userRepository = new userRepository_1.UserRepository();
const userService = new userService_1.UserService(userRepository);
const userController = new userController_1.UserController(userService); // Create UserController instance with UserService dependency
const userRouter = (0, express_1.Router)();
userRouter.get("/", userController.getAllUsers.bind(userController)); // Bind the instance method to the controller instance
userRouter.post("/", userController.addUser.bind(userController)); // Bind the instance method to the controller instance
exports.default = userRouter;
