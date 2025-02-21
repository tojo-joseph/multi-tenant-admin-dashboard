import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB Connection Error", err));

app.get("/", (req, res) => {
  res.send("get request works!");
});

const PORT = process.env.PORT || 3021;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
