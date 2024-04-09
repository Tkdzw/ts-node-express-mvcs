import { UserCreateRequestDto } from "../dtos/Users/UserCreateRequestDto";
import { UserUpdateRequestDto } from "../dtos/Users/UserUpdateRequestDto";
import User from "../models/user";

export class UserRepository {
  static async getAllUsers(): Promise<User[]> {
    return User.findAll();
  }

  static async addUser(user: UserCreateRequestDto): Promise<User> {
    return User.create(user);
  }

  static async getUserById(id: number): Promise<User | null> {
    return User.findByPk(id);
  }

  static async getUserByEmail(email: string): Promise<User | null> {
    return User.findOne({ where: { email } });
  }
  // static async getUserByUsername(username: string): Promise<User | null> {
  //   return User.findOne({ where: { username } });
  // }

  static async deleteUser(id: number): Promise<number> {
    return User.destroy({ where: { id } });
  }

  static async updateUser(id: number, user: UserUpdateRequestDto): Promise<number> {
    const [affectedCount] = await User.update(user, { where: { id } });
    return affectedCount;
  }
}
