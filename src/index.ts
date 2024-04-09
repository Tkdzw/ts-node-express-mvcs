import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import routes from "./routes/routesIndex";
import sequelize from "./sequalize";

// Load environment variables based on NODE_ENV
if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.production" });
} else {
  dotenv.config({ path: ".env.development" });
}

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Use the userRouter for all routes related to users
app.use(routes);

// Sync Sequelize models with the database
sequelize
  .sync()
  .then(() => {
    console.log('Database synced');
   
  })
  .catch((err: any) => { // Use type assertion here
    console.error('Error syncing database:', err);
  });



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
