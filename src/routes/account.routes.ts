import { Router } from "express";
import { AccountController } from "../controllers/accountController";
import { AccountService } from '../services/accountService';
import { AccountRepository } from "../repositories/accountRepository";
import { AccountMapper } from "../services/mapper/accounts.mapper";

const userRepository = new AccountRepository();
const accountMapper = new AccountMapper();

// Create AccountService instance with AccountRepository and AccountMapper dependencies
const userService = new AccountService(userRepository,accountMapper);
const userController = new AccountController(userService); // Create AccountController instance with AccountService dependency

const accountRouter = Router();

accountRouter.get("/", userController.getAllAccounts.bind(userController)); 
accountRouter.get("/:id", userController.getAccountById.bind(userController)); 
accountRouter.post("/", userController.addAccount.bind(userController)); 

export default accountRouter;
