const Imobiliaria = require("./Imobiliaria");
const EmailService = require("./EmailService");

const emailService = new EmailService();

const imobiliaria = new Imobiliaria(
    emailService
);

const cliente = {
    nome: "William",
    email: "william@email.com"
};

imobiliaria.notificarCliente(
    cliente,
    "Seu imóvel foi cadastrado com sucesso."
);