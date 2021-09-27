
import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import messageRoutes from "./src/routes/messageRoutes";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/message", messageRoutes); 

app.get("/test", (req, res) => res.send("working"));



if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const __filename = fileURLToPath(import.meta.url); 
  const __dirname = dirname(__filename);

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html")); 
  });
}


const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server Running at port ${PORT}`));
