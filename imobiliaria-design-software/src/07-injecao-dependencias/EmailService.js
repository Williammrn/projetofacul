class EmailService {
    enviar(destinatario, mensagem) {
        console.log(
            `E-mail enviado para ${destinatario}: ${mensagem}`
        );
    }
}

module.exports = EmailService;