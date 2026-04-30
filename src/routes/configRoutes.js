const express = require('express'); 
const router = express.Router(); 
const configController = require('../controllers/configController.js'); 

// Lista todas as configurações
router.get('/', configController.getAllConfigs); 

// Obtém uma configuração    pelo ID
router.get('/:id', configController.getConfigById);
 
// Cria uma nova configuração (espera nome, email, cpf, data_nascimento no body)
router.post('/', configController.createConfig); 
 
// Atualiza uma configuração pelo ID (espera nome, email, cpf, data_nascimento no body)
router.put('/:id', configController.updateConfig); 
 
// Remove uma configuração pelo ID
router.delete('/:id', configController.removeConfig); 
 
module.exports = router;