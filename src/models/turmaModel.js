const pool = require("../config/database.js");

const getAll = async () => {
  const result = await pool.query(
    `SELECT idt, nome_curso, identificador_turma, userId 
     FROM turmas 
     ORDER BY idt`
  );
  return result.rows;
};

const getById = async (idt) => {
  const result = await pool.query(
    `SELECT idt, nome_curso, identificador_turma, userId 
     FROM turmas 
     WHERE idt = $1`,
    [idt]
  );
  return result.rows[0];
};

const getByCursoId = async (nome_curso) => {
  const result = await pool.query(
    `SELECT idt, nome_curso, identificador_turma, userId 
     FROM turmas 
     WHERE nome_curso = $1 
     ORDER BY identificador_turma`,
    [nome_curso]
  );
  return result.rows;
};

const create = async (nome_curso, identificador_turma, userId) => {
  const result = await pool.query(
    `INSERT INTO turmas (nome_curso, identificador_turma, userId) 
     VALUES ($1, $2, $3) RETURNING *`,
    [nome_curso, identificador_turma, userId]
  );
  return result.rows[0];
};

const update = async (idt, nome_curso, identificador_turma, userId) => {
  const result = await pool.query(
    `UPDATE turmas 
     SET nome_curso = $1, identificador_turma = $2, userId = $3 
     WHERE idt = $4 RETURNING *`,
    [nome_curso, identificador_turma, userId, idt]
  );
  return result.rows[0];
};

const remove = async (idt) => {
  const result = await pool.query(
    "DELETE FROM turmas WHERE idt = $1 RETURNING *", 
    [idt]
  );
  return result.rows[0];
};

const countAlunosAssociados = async (idt) => {
  const result = await pool.query(
    "SELECT COUNT(*) FROM alunos WHERE id_turma = $1", 
    [idt]
  );
  return parseInt(result.rows[0].count);
};

module.exports = {
  getAll,
  getById,
  getByCursoId,
  create,
  update,
  remove,
  countAlunosAssociados
};