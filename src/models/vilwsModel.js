const pool = require('../config/database');

exports.getDoacoesDetalhadas = async () => {
    const text = 'SELECT * FROM vw_doacoes_detalhadas';
    const result = await pool.query(text);
    return result.rows;
};

exports.getTurmasResponsaveis = async () => {
    const text = 'SELECT * FROM vw_turmas_responsaveis';
    const result = await pool.query(text);
    return result.rows;
};

exports.getProgressoMetas = async () => {
    const text = 'SELECT * FROM vw_progresso_metas';
    const result = await pool.query(text);
    return result.rows;
};