const express = require('express');
const bodyParser = require('body-parser');
const db = require("./src/config/db");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

db.on("open", () => {
  console.log("Conectado ao mongo! ");
});
db.on("error", err => {
  console.log(err);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});