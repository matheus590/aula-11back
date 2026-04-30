const doacaoModel = require("../models/doacaoModel.js");

const getAllDoacoes = async (req, res) => {
  try {
    const doacoes = await doacaoModel.getAll();
    return res.status(200).json(doacoes);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar doações", detalhe: error.message });
  }
};

const getDoacaoById = async (req, res) => {
  try {
    const { id } = req.params;
    const doacao = await doacaoModel.getById(id);
    
    if (!doacao) return res.status(404).json({ message: "Doação não encontrada" });
    
    return res.status(200).json(doacao);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar a doação", detalhe: error.message });
  }
};

const getDoacoesByAluno = async (req, res) => {
  try {
    const { alunoId } = req.params;
    const doacoes = await doacaoModel.getByAlunoId(alunoId);
    return res.status(200).json(doacoes);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar doações deste aluno", detalhe: error.message });
  }
};

const createDoacao = async (req, res) => {
  try {
    const { alunoId, valor, data } = req.body;
    const novaDoacao = await doacaoModel.create(alunoId, valor, data);
    return res.status(201).json(novaDoacao);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar doação", detalhe: error.message });
  }
};

const updateDoacao = async (req, res) => {
  try {
    const { id } = req.params;
    const { alunoId, valor, data } = req.body;
    
    const doacaoAtualizada = await doacaoModel.update(id, alunoId, valor, data);
    
    if (!doacaoAtualizada) return res.status(404).json({ message: "Doação não encontrada para atualizar" });
    
    return res.status(200).json(doacaoAtualizada);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar doação", detalhe: error.message });
  }
};

const removeDoacao = async (req, res) => {
  try {
    const { id } = req.params;
    const doacaoDeletada = await doacaoModel.remove(id);
    
    if (!doacaoDeletada) return res.status(404).json({ message: "Doação não encontrada para deletar" });
    
    return res.status(200).json({ message: "Doação deletada com sucesso", doacao: doacaoDeletada });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao deletar doação", detalhe: error.message });
  }
};

module.exports = {
  getAllDoacoes,
  getDoacaoById,
  getDoacoesByAluno,
  createDoacao,
  updateDoacao,
  removeDoacao
};