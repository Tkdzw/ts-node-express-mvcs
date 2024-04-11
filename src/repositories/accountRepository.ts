import { AccountCreateRequestDto } from "../dtos/Account/AccountCreateRequestDto";
import { AccountUpdateRequestDto } from "../dtos/Account/AccountUpdateRequestDto";
import Account from "../models/account";

export class AccountRepository {
  async getAllAccounts(): Promise<Account[]> {
    return Account.findAll();
  }

  async addAccount(user: AccountCreateRequestDto): Promise<AccountCreateRequestDto> {
    return Account.create(user);
  }

  async getAccountById(id: number): Promise<Account | null> {
    return Account.findByPk(id);
  }

  async getAccountByEmail(email: string): Promise<Account | null> {
    return Account.findOne({ where: { email } });
  }
  // async getAccountByAccountname(username: string): Promise<Account | null> {
  //   return Account.findOne({ where: { username } });
  // }

  async deleteAccount(id: number): Promise<number> {
    return Account.destroy({ where: { id } });
  }

  async updateAccount(id: number, user: AccountUpdateRequestDto): Promise<number> {
    const [affectedCount] = await Account.update(user, { where: { id } });
    return affectedCount;
  }
}
