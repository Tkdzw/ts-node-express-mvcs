import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const sequelize = new Sequelize({
  dialect: "mysql", // Specify your database dialect
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USER || "pos_db",
  password: process.env.DB_PASSWORD || "posdb@2016",
  database: process.env.DB_NAME || "newDatabase",
  logging: false, // Disable logging SQL queries (optional)
  define: {
    timestamps: false, // Disable timestamps for all models (optional)
  },
});

export default sequelize;
