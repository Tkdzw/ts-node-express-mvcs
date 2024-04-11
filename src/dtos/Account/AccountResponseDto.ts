import { AccountDto } from "./AccountDto";

export interface AccountResponseDto extends Omit<AccountDto, 'passwordHash' | 'activationToken' | 'activated' | 'verificationToken' | 'verified' | 'resetToken'> {
    isVerified: any;
    isActivated: any;
}