import db from "../config/database.js";

async function Listar() {
    const [rows] = await db.query(
        "SELECT * FROM jogadores WHERE ativo = 1"
    );

    return rows;
}

async function BuscarPorId(id) {
    const [rows] = await db.query(
        "SELECT * FROM jogadores WHERE codigo_jogador = ?",
        [id]
    );

    return rows[0];
}

async function BuscarPorNome(nome) {
    const [rows] = await db.query(
        "SELECT * FROM jogadores WHERE nome_jogador LIKE ?",
        [`%${nome}%`]
    );

    return rows;
}

async function Criar(jogador) {
    const { nome_jogador, habilidade_principal } = jogador;

    const [result] = await db.query(
        "INSERT INTO jogadores(nome_jogador, habilidade_principal) VALUES (?, ?)",
        [nome_jogador, habilidade_principal]
    );

    return result;
}

async function Atualizar(id, jogador) {
    const { nome_jogador, habilidade_principal } = jogador;

    const [result] = await db.query(
        "UPDATE jogadores SET nome_jogador = ?, habilidade_principal = ? WHERE codigo_jogador = ?",
        [nome_jogador, habilidade_principal, id]
    );

    return result;
}

async function ExcluirLogica(id) {
    const [result] = await db.query(
        "UPDATE jogadores SET ativo = 0 WHERE codigo_jogador = ?",
        [id]
    );

    return result;
}

async function ExcluirDefinitiva(id) {
    const [result] = await db.query(
        "DELETE FROM jogadores WHERE codigo_jogador = ?",
        [id]
    );

    return result;
}

export default {
    Listar,
    BuscarPorId,
    BuscarPorNome,
    Criar,
    Atualizar,
    ExcluirLogica,
    ExcluirDefinitiva
};