import { UserCreateRequestDto } from "../dtos/Users/UserCreateRequestDto";
import { UserUpdateRequestDto } from "../dtos/Users/UserUpdateRequestDto";
import User from "../models/user";

export class UserRepository {
  async getAllUsers(): Promise<User[]> {
    return User.findAll();
  }

  async addUser(user: UserCreateRequestDto): Promise<User> {
    return User.create(user);
  }

  async getUserById(id: number): Promise<User | null> {
    return User.findByPk(id);
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return User.findOne({ where: { email } });
  }
  // async getUserByUsername(username: string): Promise<User | null> {
  //   return User.findOne({ where: { username } });
  // }

  async deleteUser(id: number): Promise<number> {
    return User.destroy({ where: { id } });
  }

  async updateUser(id: number, user: UserUpdateRequestDto): Promise<number> {
    const [affectedCount] = await User.update(user, { where: { id } });
    return affectedCount;
  }
}
