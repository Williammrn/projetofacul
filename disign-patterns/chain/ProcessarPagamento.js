function processarPagamento(req, res, next) {

    const { cartao } = req.body;

    if (!cartao || cartao === "4111-invalid") {
        return res.status(402).json({
            erro: "Pagamento recusado."
        });
    }

    console.log("-> Pagamento aprovado.");

    next();
}

module.exports = processarPagamento;