import { Request, Response } from 'express';
import { AccountService } from '../services/accountService';

export class AccountController {
  private accountService: AccountService;

  constructor(accountService: AccountService) {
    this.accountService = accountService;
  }

  async getAllAccounts(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.accountService.getAllAccounts();
      res.json(users);
    } catch (err) {
      console.error('Error fetching users:', err);
      res.status(500).send('Error fetching users');
    }
  }

  async getAccountById(req: Request, res: Response): Promise<void> {
    const id: number = parseInt(req.params.id, 10);
    try {
      const user = await this.accountService.getAccountById(id);
      res.json(user);
    } catch (err) {
      console.error('Error fetching user:', err);
      res.status(500).send('Error fetching user');
    }
  }

  async addAccount(req: Request, res: Response): Promise<void> {
    const user = req.body;
    try {
      const newAccount = await this.accountService.addAccount(user);
      res.status(201).json(newAccount);
    } catch (err) {
      console.error('Error adding user:', err);
      res.status(500).send('Error adding user');
    }
  }

  async deleteAccount(req: Request, res: Response): Promise<void> {
    const id: number = parseInt(req.params.id, 10);
    try {
      await this.accountService.deleteAccount(id);
      res.status(204).send();
    } catch (err) {
      console.error('Error deleting user:', err);
      res.status(500).send('Error deleting user');
    }
  }

  async updateAccount(req: Request, res: Response): Promise<void> {
    const id: number = parseInt(req.params.id, 10);
    const user = req.body;
    try {
      const updatedAccount = await this.accountService.updateAccount(id, user);
      res.json(updatedAccount);
    } catch (err) {
      console.error('Error updating user:', err);
      res.status(500).send('Error updating user');
    }
  }
}
