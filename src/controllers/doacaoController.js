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

const getDoacoesByCurso = async (req, res) => {
  try {
    const { cursoId } = req.params;
    const doacoes = await doacaoModel.getByCursoId(cursoId);
    return res.status(200).json(doacoes);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar doações deste curso", detalhe: error.message });
  }
};

const createDoacao = async (req, res) => {
  try {
    const { qtd_leite, data_registro, id_turma, id_usuario } = req.body;
    const novaDoacao = await doacaoModel.create(qtd_leite, data_registro, id_turma, id_usuario);
    return res.status(201).json(novaDoacao);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar doação", detalhe: error.message });
  }
};

const updateDoacao = async (req, res) => {
  try {
    const { id } = req.params;
    const { qtd_leite, data_registro, id_turma, id_usuario } = req.body;
    
    const doacaoAtualizada = await doacaoModel.update(id, qtd_leite, data_registro, id_turma, id_usuario);
    
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
  getDoacoesByCurso,
  createDoacao,
  updateDoacao,
  removeDoacao
};