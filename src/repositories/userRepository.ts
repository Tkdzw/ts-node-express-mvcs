import { User } from "../models/user";

const users: User[] = [];

export class UserRepository {
  static getAllUsers(): User[] {
    return users;
  }

  static addUser(user: User): void {
    users.push(user);
  }
}
