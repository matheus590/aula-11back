const turmaModel = require("../models/turmaModel");

const getAllTurmas = async (req, res) => {
  try {
    const turmas = await turmaModel.getAll();
    return res.status(200).json(turmas);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar turmas", detalhe: error.message });
  }
};

const getTurmaById = async (req, res) => {
  try {
    const { id } = req.params;
    const turma = await turmaModel.getById(id);
    
    if (!turma) return res.status(404).json({ message: "Turma não encontrada" });
    
    return res.status(200).json(turma);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar a turma", detalhe: error.message });
  }
};

const getTurmasByCurso = async (req, res) => {
  try {
    const { cursoId } = req.params;
    const turmas = await turmaModel.getByCursoId(cursoId);
    return res.status(200).json(turmas);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar turmas deste curso", detalhe: error.message });
  }
};

const createTurma = async (req, res) => {
  try {
    const { nome_curso, identificador_turma, userId } = req.body;
    const novaTurma = await turmaModel.create(nome_curso, identificador_turma, userId);
    return res.status(201).json(novaTurma);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar turma", detalhe: error.message });
  }
};

const updateTurma = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome_curso, identificador_turma, userId } = req.body;
    
    const turmaAtualizada = await turmaModel.update(id, nome_curso, identificador_turma, userId);
    
    if (!turmaAtualizada) return res.status(404).json({ message: "Turma não encontrada para atualizar" });
    
    return res.status(200).json(turmaAtualizada);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar turma", detalhe: error.message });
  }
};

const removeTurma = async (req, res) => {
  try {
    const { id } = req.params;
    const turmaDeletada = await turmaModel.remove(id);
    
    if (!turmaDeletada) return res.status(404).json({ message: "Turma não encontrada para deletar" });
    
    return res.status(200).json({ message: "Turma deletada com sucesso", turma: turmaDeletada });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao deletar turma", detalhe: error.message });
  }
};

module.exports = {
  getAllTurmas,
  getTurmaById,
  getTurmasByCurso,
  createTurma,
  updateTurma,
  removeTurma
};