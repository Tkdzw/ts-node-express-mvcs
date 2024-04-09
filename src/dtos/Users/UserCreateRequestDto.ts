import { UserDto } from "./UserDto";

export interface UserCreateRequestDto extends Omit<UserDto,'id'> {

}