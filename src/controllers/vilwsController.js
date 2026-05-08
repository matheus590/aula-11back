const viewsModel = require('../models/vilwsModel');

exports.getDoacoesDetalhadas = async (req, res) => {
    try {
        const linhas = await viewsModel.getDoacoesDetalhadas();
        res.json(linhas);
    } catch (err) {
        console.error('Erro ao buscar doações detalhadas: ', err);
        res.status(500).json({ error: 'Erro interno ao buscar doações detalhadas' });
    }
};

exports.getTurmasResponsaveis = async (req, res) => {
    try {
        const linhas = await viewsModel.getTurmasResponsaveis();
        res.json(linhas);
    } catch (err) {
        console.error('Erro ao buscar turmas responsáveis: ', err);
        res.status(500).json({ error: 'Erro interno ao buscar turmas responsáveis' });
    }
};

exports.getProgressoMetas = async (req, res) => {
    try {
        const linhas = await viewsModel.getProgressoMetas();
        res.json(linhas);
    } catch (err) {
        console.error('Erro ao buscar progresso das metas: ', err);
        res.status(500).json({ error: 'Erro interno ao buscar progresso das metas' });
    }
};
