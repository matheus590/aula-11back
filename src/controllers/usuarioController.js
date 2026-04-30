const usuarioModel = require("../models/usuarioModel");

const getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await usuarioModel.getAll();
    return res.status(200).json(usuarios);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar usuários", detalhe: error.message });
  }
};

const getUsuarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await usuarioModel.getById(id);
    
    if (!usuario) return res.status(404).json({ message: "Usuário não encontrado" });
    
    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar o usuário", detalhe: error.message });
  }
};

const createUsuario = async (req, res) => {
  try {
    const { nome } = req.body;
    const novoUsuario = await usuarioModel.create(nome);
    return res.status(201).json(novoUsuario);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar usuário", detalhe: error.message });
  }
};

const updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome } = req.body;
    
    const usuarioAtualizado = await usuarioModel.update(id, nome);
    
    if (!usuarioAtualizado) return res.status(404).json({ message: "Usuário não encontrado para atualizar" });
    
    return res.status(200).json(usuarioAtualizado);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar usuário", detalhe: error.message });
  }
};

const removeUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    const usuarioDeletado = await usuarioModel.remove(id);
    
    if (!usuarioDeletado) return res.status(404).json({ message: "Usuário não encontrado para deletar" });
    
    return res.status(200).json({ message: "Usuário deletado com sucesso", usuario: usuarioDeletado });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao deletar usuário", detalhe: error.message });
  }
};

module.exports = {
  getAllUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  removeUsuario
};