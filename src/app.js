import express from "express";
import jogadorRoutes from "./router/jogadorRoutes.js";

const app = express();

app.use(express.json());

app.use("/jogadores", jogadorRoutes);

export default app;