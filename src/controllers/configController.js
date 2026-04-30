const configModel = require("../models/configModel.js");

const getAllConfigs = async (req, res) => {
  try {
    const configs = await configModel.getAll();
    return res.status(200).json(configs);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar configs", detalhe: error.message });
  }
};

const getConfigById = async (req, res) => {
  try {
    const { id } = req.params;
    const config = await configModel.getById(id);

    if (!config) return res.status(404).json({ message: "Config não encontrada" });

    return res.status(200).json(config);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar a config", detalhe: error.message });
  }
};

const createConfig = async (req, res) => {
  try {
    const { meta, id_doacoes } = req.body;
    const novaConfig = await configModel.create(meta, id_doacoes);
    return res.status(201).json(novaConfig);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar config", detalhe: error.message });
  }
};

const updateConfig = async (req, res) => {
  try {
    const { id } = req.params;
    const { meta, id_doacoes } = req.body;
    const configAtualizada = await configModel.update(id, meta, id_doacoes);

    if (!configAtualizada) return res.status(404).json({ message: "Config não encontrada para atualizar" });

    return res.status(200).json(configAtualizada);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar config", detalhe: error.message });
  }
};

const removeConfig = async (req, res) => {
  try {
    const { id } = req.params;
    const configDeletada = await configModel.remove(id);

    if (!configDeletada) return res.status(404).json({ message: "Config não encontrada para deletar" });

    return res.status(200).json({ message: "Config deletada com sucesso", config: configDeletada });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao deletar config", detalhe: error.message });
  }
};

module.exports = {
  getAllConfigs,
  getConfigById,
  createConfig,
  updateConfig,
  removeConfig,
};