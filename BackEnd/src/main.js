const express = require("express");
const cors = require("cors");

// Imports do projeto
const { routerUser } = require("./router/user/router-user");

const app = express();

// Definindo CORS
app.use(cors());

// Parses de json
app.use(express.json());

// Rota para teste
app.get("/", (request, response) => {
  response.status(200).json({
    status: "Rodando",
  });
});

// START Utilziando os routers
app.use(routerUser);
// END

// Iniciando o serviço
app.listen(4000, "127.0.0.1", () => {
  console.log("[SERVIDOR]: Serviço rodando na porta 4000!");
});
