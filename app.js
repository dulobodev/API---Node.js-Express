require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose")

const User = require("./usuarioModel")

// pega as variaveis do ambiente e coloca em uma variavel local
const dbUser = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const app = express()

app.use(express.json());

app.get("/", (requisicao, resposta) => {
  resposta.status(200).send(carro2025);
});

app.get("/:sigla", (req, res) => {
  const siglaInformada = req.params.sigla.toUpperCase();
  const carro = carro2025.find(
    (infoCarro) => infoCarro.sigla === siglaInformada
  );
  if (!carro) {
    res.status(404).send("Sigla não encontrada");
    return;
  }
  res.status(200).send(carro);
});

// faz a conexao com o mongodb
mongoose
  .connect(
    `mongodb+srv://${dbUser}:${password}@clusterapi.aeczj.mongodb.net/?retryWrites=true&w=majority&appName=ClusterAPI`
  )
  .then(() => {
    app.listen(3000);
    console.log("Conectou ao banco e o servidor porta 3000");
  })
  .catch((err) => console.log(err));
