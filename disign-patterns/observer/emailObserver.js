const pagamentoEventos = require("./pagamentoEvento");

pagamentoEventos.on("pagamentoConfirmado", (pedido) => {

    console.log(
        `✉️ [E-mail] Enviando confirmação para ${pedido.emailCliente}...`
    );

});

