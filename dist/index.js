"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const routesIndex_1 = __importDefault(require("./routes/routesIndex"));
const sequalize_1 = __importDefault(require("./sequalize"));
// Load environment variables based on NODE_ENV
if (process.env.NODE_ENV === "production") {
    dotenv_1.default.config({ path: ".env.production" });
}
else {
    dotenv_1.default.config({ path: ".env.development" });
}
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
// Use the userRouter for all routes related to users
app.use(routesIndex_1.default);
// Sync Sequelize models with the database
sequalize_1.default
    .sync()
    .then(() => {
    console.log('Database synced');
})
    .catch((err) => {
    console.error('Error syncing database:', err);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(` DB HOST${process.env.DB_HOST}`);
});
