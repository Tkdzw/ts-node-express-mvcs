"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    dialect: "mysql", // Specify your database dialect
    host: process.env.DB_HOST || "localhost",
    username: process.env.DB_USER || "pos_db",
    password: process.env.DB_PASSWORD || "posdb@2016",
    database: process.env.DB_NAME || "ts-node",
    logging: false, // Disable logging SQL queries (optional)
    define: {
        timestamps: false, // Disable timestamps for all models (optional)
    },
    // Auto-create the database if it doesn't exist
    // This option is useful for development but should be used with caution
    // Setting force: true will drop the existing tables and recreate them on every sync
    // Only use force: true in development or testing environments
    // Remove force: true in production to avoid data loss
    // force: true,
});
exports.default = sequelize;
