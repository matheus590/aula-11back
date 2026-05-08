const express = require('express');
const router = express.Router();
const vilwsController = require('../controllers/vilwsController');

// Obtém as doações detalhadas
router.get('/doacoes-detalhadas', vilwsController.getDoacoesDetalhadas);

// Obtém as turmas responsáveis
router.get('/turmas-responsaveis', vilwsController.getTurmasResponsaveis);

// Obtém o progresso das metas
router.get('/progresso-metas', vilwsController.getProgressoMetas);

module.exports = router;
