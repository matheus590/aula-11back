const pool = require("../config/database.js");

const getAll = async () => {
  const result = await pool.query(
    `SELECT idu, nome, email 
     FROM usuarios 
     ORDER BY nome`
  );
  return result.rows;
};

const getById = async (idu) => {
  const result = await pool.query(
    `SELECT idu, nome, email 
     FROM usuarios 
     WHERE idu = $1`,
    [idu]
  );
  return result.rows[0];
};

const create = async (nome, email) => {
  const result = await pool.query(
    `INSERT INTO usuarios (nome, email) 
     VALUES ($1, $2) RETURNING *`,
    [nome, email]
  );
  return result.rows[0];
};

const update = async (idu, nome, email) => {
  const result = await pool.query(
    `UPDATE usuarios 
     SET nome = $1, email = $2 
     WHERE idu = $3 RETURNING *`,
    [nome, email, idu]
  );
  return result.rows[0];
};

const remove = async (idu) => {
  const result = await pool.query(
    "DELETE FROM usuarios WHERE idu = $1 RETURNING *", 
    [idu]
  );
  return result.rows[0];
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};