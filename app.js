require("dotenv").config();
const express = require("express");
const pool = require("./src/config/database"); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const configRoutes = require("./src/routes/configRoutes");
const doacaoRoutes = require("./src/routes/doacaoRoutes");
const turmaRoutes = require("./src/routes/turmaRoutes");
const usuarioRoutes = require("./src/routes/usuarioRoutes");

app.use("/api/configs", configRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/turmas", turmaRoutes);
app.use("/api/doacoes", doacaoRoutes);
app.get("/", (req, res) => {
  res.send("está funcionando!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Acesse http://localhost:${PORT}/api/configs`);
  console.log(`Acesse http://localhost:${PORT}/api/usuarios`);
  console.log(`Acesse http://localhost:${PORT}/api/turmas`);
  console.log(`Acesse http://localhost:${PORT}/api/doacoes`);
});
