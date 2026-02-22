import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/errorMiddleWares.js";

// routes
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

// endpoints
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);


app.use(errorHandler);

export default app;
