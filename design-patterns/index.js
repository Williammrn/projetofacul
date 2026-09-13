const express = require("express");

const ImovelRepository = require("./src/repositories/ImovelRepository");
const ImovelService = require("./src/services/ImovelService");
const ImovelPageController = require("./src/controllers/ImovelPageController");

const app = express();

app.use(express.json());

// Criando o Repository
const imovelRepository = new ImovelRepository();

// Injeção de Dependência no Service
const imovelService = new ImovelService(imovelRepository);

// Injeção de Dependência no Controller
const imovelPageController = new ImovelPageController(imovelService);

// Rota para listar imóveis
app.get("/imoveis", (req, res) => {
    imovelPageController.listar(req, res);
});

// Rota para buscar imóvel por ID
app.get("/imoveis/:id", (req, res) => {
    imovelPageController.buscarPorId(req, res);
});

// Iniciando servidor
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});