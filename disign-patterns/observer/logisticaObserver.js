const pagamentoEventos = require("./pagamentoEvento");

pagamentoEventos.on("pagamentoConfirmado", (pedido) => {

    console.log(
        `[Logística] Gerando etiqueta de envio para ${pedido.endereco}.`
    );

});

