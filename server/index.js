import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { authRoutes } from "./routes/authRoutes.js";
import { residencyRoutes } from "./routes/residencyRoutes.js";



dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/auth", authRoutes);
app.use("/property", residencyRoutes);

app.listen(PORT, ()=>{
console.log("server running");
});