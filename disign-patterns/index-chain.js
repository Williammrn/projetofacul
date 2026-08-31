const express = require("express");

const {verificarEstoque} = 
    require("./chain/VerificarEstoque");

const processarPagamento =
    require("./chain/ProcessarPagamento");

const finalizarPedido =
    require("./chain/FinalizarPedido");

const app = express();

app.use(express.json());

// Chain of Responsibility
app.post(
    "/comprar",
    verificarEstoque,
    processarPagamento,
    finalizarPedido
);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});