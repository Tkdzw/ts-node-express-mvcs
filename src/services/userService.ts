import { User } from "../models/user";
import { UserRepository } from "../repositories/userRepository";

export class UserService {
  static getAllUsers(): User[] {
    return UserRepository.getAllUsers();
  }

  static addUser(user: User): void {
    UserRepository.addUser(user);
  }
}
