class Imobiliaria {
    constructor(emailService) {
        this.emailService = emailService;
    }

    notificarCliente(cliente, mensagem) {
        this.emailService.enviar(
            cliente.email,
            mensagem
        );
    }
}

module.exports = Imobiliaria;