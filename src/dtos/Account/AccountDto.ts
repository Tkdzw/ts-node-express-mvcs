export interface AccountDto {
  id?: number;
  name: string;
  email: string;
  passwordHash: string;
  activationToken: string;
  activated: Date;
  verificationToken: string;
  verified: Date;
  resetToken: string;
  created: Date;
  updated: Date;  
  }