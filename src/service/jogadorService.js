import * as repository from "../repositories/jogadorRepository.js";

async function Listar() {
    return await repository.Listar();
}

async function BuscarPorId(id) {
    return await repository.BuscarPorId(id);
}

async function BuscarPorNome(nome) {
    return await repository.BuscarPorNome(nome);
}

async function Criar(jogador) {
    return await repository.Criar(jogador);
}

async function Atualizar(id, jogador) {
    return await repository.Atualizar(id, jogador);
}

async function Excluir(id, tipo) {

    if (tipo === "definitiva") {
        return await repository.ExcluirDefinitiva(id);
    }

    return await repository.ExcluirLogica(id);
}

export default{
    Listar,
    BuscarPorId,
    BuscarPorNome,
    Criar,
    Atualizar,
    Excluir
};