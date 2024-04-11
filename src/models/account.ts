import { Model, DataTypes } from "sequelize";
import sequelize from "../sequalize";

interface AccountEntity {
  id?: number;
  name: string;
  email: string;
  passwordHash: string;
  activationToken?: string;
  activated?: Date;
  verificationToken?: string;
  verified?: Date;
  resetToken?: string;
  created: Date;
  updated: Date;
}
class Account extends Model<AccountEntity> implements AccountEntity {
  public id!: number;
  public name!: string;
  public email!: string;
  public passwordHash!: string;
  public activationToken!: string;
  public activated!: Date;
  public verificationToken!: string;
  public verified!: Date;
  public resetToken!: string;
  public created!: Date;
  public updated!: Date;

  // Implement the logic for boolean attributes
  public isVerified(): boolean {
    return !!this.verified; // Convert to boolean
  }

  public isActivated(): boolean {
    return !!this.activated; // Convert to boolean
  }
}

Account.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activationToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    activated: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    verificationToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    verified: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    resetToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "accounts", // Specify your table name
  }
);

export default Account;
