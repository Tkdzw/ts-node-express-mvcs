import { AccountDto } from "./AccountDto";

export interface AccountCreateResponseDto extends Omit<AccountDto,'id'|'activated'| 'verified'|'resetToken'| 'passwordHash'> {

}