const express = require("express");
const tabela = require("./tabelas");
const app = express();
const conexao = require("./sqlConnection");
const sqlConnection = require("./sqlConnection");
const consign = require("consign");
let porta = 3000;

module.exports = () => {

  app.use(express.json());
  consign().include("src/app/controllers").into(app);

  app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
  });
 

  sqlConnection.connect((error) => {
    if (error) {
      console.log("Erro ao conectar ao banco de dados.", error);
    } else {
      tabela.init(conexao);
    }
  });
  return app;
};
