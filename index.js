import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import CallRoute from "./routes/CallRoute.js";
import ComplaintRoute from "./routes/ComplaintRoute.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(CallRoute);
app.use(ComplaintRoute);

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running...");
});
