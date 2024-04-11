import { ServiceResponseDto } from "../dtos/ServiceResponseDto";
import { AccountCreateRequestDto } from "../dtos/Account/AccountCreateRequestDto";
import { AccountDto } from "../dtos/Account/AccountDto";
import { AccountUpdateRequestDto } from "../dtos/Account/AccountUpdateRequestDto";
import Account from "../models/account";
import { AccountRepository } from "../repositories/accountRepository";
import { AccountCreateResponseDto } from "../dtos/Account/AccountCreateResponseDto";
import { AccountResponseDto } from "../dtos/Account/AccountResponseDto";
import { AccountMapper } from "./mapper/accounts.mapper";

export class AccountService {

  private _accountRepository: AccountRepository;
  private _accountMapper: AccountMapper

  constructor(accountRepository: AccountRepository, accountMapper: AccountMapper) {
    this._accountRepository = accountRepository;
    this._accountMapper = accountMapper;
  }

  async getAllAccounts(): Promise<ServiceResponseDto<AccountResponseDto[]>> {
    try {
      const users = await this._accountRepository.getAllAccounts();

      const res = this._accountMapper.mapAccountsToResponseDto(users)

      return {
        data: res,
        message: 'Accounts retrieved successfully',
        status: 200,
        time: new Date().toISOString(),
      };
    } catch (err) {
      console.error('Error fetching users:', err);
      return {
        data: [],
        message: 'Error fetching users',
        status: 500,
        time: new Date().toISOString(),
      };
    }
  }

  async addAccount(user: AccountCreateRequestDto): Promise<ServiceResponseDto<AccountCreateResponseDto>> {
    try {

      user.passwordHash = "htwih34h093qhgiwejr0gjw9304j03wf0f0934";
      user.created = new Date();
      user.updated = new Date();
      // map AccountCreateRequestDto to Account(Entity)

      const res = await this._accountRepository.addAccount(user);
      return {
        data: res,
        message: 'Account added successfully',
        status: 201,
        time: new Date().toISOString(),
      };
    } catch (err) {
      console.error('Error adding user:', err);
      return {
        message: `Error adding user ${err}`,
        status: 500,
        time: new Date().toISOString(),
      };
    }
  }

  async getAccountById(id: number): Promise<ServiceResponseDto<AccountResponseDto>> {
    try {
      const user = await this._accountRepository.getAccountById(id);


      if (user) {
        const res = this._accountMapper.mapAccountToResponseDto(user)
        return {
          data: res,
          message: 'Account retrieved successfully',
          status: 200,
          time: new Date().toISOString(),
        };
      }
      return {
        message: 'Account not found',
        status: 200,
        time: new Date().toISOString(),
      }
    } catch (error) {
      return {
        message: `Error fetching user ${error}`,
        status: 500,
        time: new Date().toISOString(),
      }
    }
  }

  async deleteAccount(id: number): Promise<ServiceResponseDto<void>> {
    try {

      const deletedAccount = await this._accountRepository.deleteAccount(id);

      return {
        message: `Account with ID ' + ${deletedAccount} + ' has been successfully deleted`,
        status: 200,
        time: new Date().toISOString(),
      };

    } catch (err) {
      console.error('Error deleting user:', err);
      return {
        message: `Error deleting user ${err}`,
        status: 500,
        time: new Date().toISOString(),
      };
    }
  }

  async updateAccount(id: number, user: AccountUpdateRequestDto): Promise<ServiceResponseDto<Account>> {
    try {
      const updatedAccount = await this._accountRepository.updateAccount(id, user);
      return {
        // data: updatedAccount,
        message: 'Account updated successfully',
        status: 200,
        time: new Date().toISOString(),
      };
    } catch (err) {
      console.error('Error updating user:', err);
      return {
        message: `Error updating user ${err}`,
        status: 500,
        time: new Date().toISOString(),
      };
    }
  }

}
