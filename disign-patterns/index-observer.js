const express = require("express");

const pagamentoEventos = require("./observer/pagamentoEvento");

// Ativar os observers
require("./observer/emailObserver");
require("./observer/estoqueObserver");
require("./observer/logisticaObserver");

const app = express();

app.use(express.json());

app.post("/checkout", (req, res) => {

    const {
        emailCliente,
        produtoId,
        quantidade,
        endereco
    } = req.body;

    const novoPedido = {
        idPedido: Math.floor(Math.random() * 10000),
        emailCliente,
        produtoId,
        quantidade,
        endereco,
        status: "pago"
    };

    console.log(
        `\n💳 [Checkout] Pagamento aprovado para o Pedido #${novoPedido.idPedido}!`
    );

    pagamentoEventos.emit(
        "pagamentoConfirmado",
        novoPedido
    );

    res.status(200).json({
        mensagem: "Compra realizada com sucesso!",
        pedidoId: novoPedido.idPedido
    });
});

app.listen(3000, () => {
    console.log("🛒 Servidor rodando na porta 3000");
});