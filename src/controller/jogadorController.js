import service from "../service/jogadorService.js";

async function Listar(req, res) {
    try {
        const jogadores = await service.Listar();

        res.json(jogadores);

    } catch (error) {
        res.status(500).json({
            mensagem: error.message
        });
    }
}

async function BuscarPorId(req, res) {
    try {

        const jogador = await service.BuscarPorId(req.params.id);

        res.json(jogador);

    } catch (error) {
        res.status(500).json({
            mensagem: error.message
        });
    }
}

async function BuscarPorNome(req, res) {
    try {

        const jogadores = await service.BuscarPorNome(req.params.nome);

        res.json(jogadores);

    } catch (error) {
        res.status(500).json({
            mensagem: error.message
        });
    }
}

async function Criar(req, res) {
    try {

        await service.Criar(req.body);

        res.status(201).json({
            mensagem: "Jogador criado com sucesso"
        });

    } catch (error) {
        res.status(500).json({
            mensagem: error.message
        });
    }
}

async function Atualizar(req, res) {
    try {

        await service.Atualizar(
            req.params.id,
            req.body
        );

        res.json({
            mensagem: "Jogador atualizado"
        });

    } catch (error) {
        res.status(500).json({
            mensagem: error.message
        });
    }
}

async function Excluir(req, res) {
    try {

        const tipo = req.query.tipo;

        await service.Excluir(
            req.params.id,
            tipo
        );

        res.json({
            mensagem: "Jogador excluído"
        });

    } catch (error) {
        res.status(500).json({
            mensagem: error.message
        });
    }
}

export default {
    Listar,
    BuscarPorId,
    BuscarPorNome,
    Criar,
    Atualizar,
    Excluir
};