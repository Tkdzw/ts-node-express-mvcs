import { AccountResponseDto } from "../../dtos/Account/AccountResponseDto";
import Account from "../../models/account";

export class AccountMapper {
  mapAccountToResponseDto(res: Account): AccountResponseDto {
    const { id, name, email, created, updated } = res;
    return {
      id,
      name,
      email,
      created,
      updated,
      isVerified: res.isVerified(), // Call the isVerified method on the entity
      isActivated: res.isActivated(), // Call the isActivated method on the entity
    };
  }

  mapAccountsToResponseDto(res: Account[]): AccountResponseDto[] {
    return res.map(res => this.mapAccountToResponseDto(res));
  }
}