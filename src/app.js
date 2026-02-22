import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/errorMiddleWares.js";

// routes
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// endpoints
app.use("/api/auth", authRoutes);


app.use(errorHandler);

export default app;
