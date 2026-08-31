const pagamentoEventos = require("./pagamentoEvento");

pagamentoEventos.on("pagamentoConfirmado", (pedido) => {

    console.log(
        `📦 [Estoque] Baixando ${pedido.quantidade} unidade(s) do produto ${pedido.produtoId}.`
    );

});