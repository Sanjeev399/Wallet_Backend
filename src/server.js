import express from "express";
import dotenv from "dotenv";
import { initDB } from "./config/db.js";
import ratelimiter from "./middleware/rateLimiter.js";
import transactionsRoute from "./routes/transactionsRoute.js";
const app = express();

//middleware
app.use(ratelimiter);
app.use(express.json());
app.use("/api/transactions", transactionsRoute);

dotenv.config();
const PORT = process.env.PORT || 5001;

app.get("/", async (req, res) => {
  res.send("Its working");
});

initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on PORT:", PORT);
    console.log("App is Running");
  });
});
