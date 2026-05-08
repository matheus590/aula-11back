const express = require('express'); 
const router = express.Router(); 
const configController = require('../controllers/configController.js'); 

// Lista todas as configurações
router.get('/', configController.getAllConfigs); 

// Obtém uma configuração    pelo ID
router.get('/:id', configController.getConfigById);
 
// Cria uma nova configuração (espera meta, id_doacoes no body)
router.post('/', configController.createConfig); 
 
// Atualiza uma configuração pelo ID (espera meta, id_doacoes no body)
router.put('/:id', configController.updateConfig); 
 
// Remove uma configuração pelo ID
router.delete('/:id', configController.removeConfig); 
 
module.exports = router;