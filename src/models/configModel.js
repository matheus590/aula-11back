const pool = require("../config/database.js");

const getAll = async () => {
  const result = await pool.query(
    `SELECT idc, meta, id_doacoes 
     FROM config 
     ORDER BY idc`
  );
  return result.rows;
};

const getById = async (idc) => {
  const result = await pool.query(
    `SELECT idc, meta, id_doacoes 
     FROM config 
     WHERE idc = $1`,
    [idc]
  );
  return result.rows[0];
};

const create = async (meta, id_doacoes) => {
  const result = await pool.query(
    `INSERT INTO config (meta, id_doacoes) 
     VALUES ($1, $2) RETURNING *`,
    [meta, id_doacoes]
  );
  return result.rows[0];
};

const update = async (idc, meta, id_doacoes) => {
  const result = await pool.query(
    `UPDATE config 
     SET meta = $1, id_doacoes = $2 
     WHERE idc = $3 RETURNING *`,
    [meta, id_doacoes, idc]
  );
  return result.rows[0];
};

const remove = async (idc) => {
  const result = await pool.query(
    "DELETE FROM config WHERE idc = $1 RETURNING *", 
    [idc]
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