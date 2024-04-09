import { ServiceResponseDto } from "../dtos/ServiceResponseDto";
import { UserCreateRequestDto } from "../dtos/Users/UserCreateRequestDto";
import { UserDto } from "../dtos/Users/UserDto";
import { UserUpdateRequestDto } from "../dtos/Users/UserUpdateRequestDto";
import User from "../models/user";
import { UserRepository } from "../repositories/userRepository";

export class UserService {

  private _userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
  }

  async getAllUsers(): Promise<ServiceResponseDto<User[]>> {
    try {
      const users = await this._userRepository.getAllUsers();
      return {
        data: users,
        message: 'Users retrieved successfully',
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

  async addUser(user: UserCreateRequestDto): Promise<ServiceResponseDto<User>> {
    try {
      const newUser = await this._userRepository.addUser(user);
      return {
        data: newUser,
        message: 'User added successfully',
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

  async getUserById(id: number): Promise<ServiceResponseDto<UserDto>> {
    try {
      const user = await this._userRepository.getUserById(id);

      if (user) {
        return {
          data: user,
          message: 'User retrieved successfully',
          status: 200,
          time: new Date().toISOString(),
        };
      }
      return {
        message: 'User not found',
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

  async updateUser(id: number, user: UserUpdateRequestDto): Promise<ServiceResponseDto<User>> {
    try {
      const updatedUser = await this._userRepository.updateUser(id, user);
      return {
        // data: updatedUser,
        message: 'User updated successfully',
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
