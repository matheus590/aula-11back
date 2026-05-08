const pool = require("../config/database.js");

const getAll = async () => {
  const result = await pool.query(
    `SELECT idd, qtd_leite, data_registro, id_turma, id_usuario 
     FROM doacoes 
     ORDER BY data_registro`
  );
  return result.rows;
};

const getById = async (idd) => {
  const result = await pool.query(
    `SELECT idd, qtd_leite, data_registro, id_turma, id_usuario 
     FROM doacoes 
     WHERE idd = $1`,
    [idd]
  );
  return result.rows[0];
};

const getByCursoId = async (cursoId) => {
  const result = await pool.query(
    `SELECT d.idd, d.qtd_leite, d.data_registro, d.id_turma, d.id_usuario
     FROM doacoes d
     JOIN turmas t ON d.id_turma = t.idt
     WHERE t.nome_curso = $1
     ORDER BY d.data_registro`,
    [cursoId]
  );
  return result.rows;
};

const create = async (qtd_leite, data_registro, id_turma, id_usuario) => {
  const result = await pool.query(
    `INSERT INTO doacoes (qtd_leite, data_registro, id_turma, id_usuario) 
     VALUES ($1, $2, $3, $4) RETURNING *`,
    [qtd_leite, data_registro, id_turma, id_usuario]
  );
  return result.rows[0];
};

const update = async (idd, qtd_leite, data_registro, id_turma, id_usuario) => {
  const result = await pool.query(
    `UPDATE doacoes 
     SET qtd_leite = $1, data_registro = $2, id_turma = $3, id_usuario = $4 
     WHERE idd = $5 RETURNING *`,
    [qtd_leite, data_registro, id_turma, id_usuario, idd]
  );
  return result.rows[0];
};

const remove = async (idd) => {
  const result = await pool.query("DELETE FROM doacoes WHERE idd = $1 RETURNING *", [idd]);
  return result.rows[0];
};

module.exports = {
  getAll,
  getById,
  getByCursoId,
  create,
  update,
  remove,
};