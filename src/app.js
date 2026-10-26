const express = require("express");
const jogadorRoutes = require("./router/jogador_rou.js");

const app = express();

app.use(express.json());

app.use("/jogadores", jogadorRoutes);

module.exports = app;