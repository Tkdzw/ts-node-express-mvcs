import { AccountDto } from "./AccountDto";

export interface AccountCreateRequestDto extends Omit<AccountDto, 'id' | 'activated' | 'verified' | 'resetToken'> {
    // password: string;
    // confirmPassword: string;
}