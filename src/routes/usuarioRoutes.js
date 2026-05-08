const express = require('express'); 
const router = express.Router(); 
const usuarioController = require('../controllers/usuarioController.js'); 

// Lista todos os usuários
router.get('/', usuarioController.getAllUsuarios); 

// Obtém um usuário pelo ID
router.get('/:id', usuarioController.getUsuarioById);
 
// Cria um novo usuário (espera nome, email no body)
router.post('/', usuarioController.createUsuario); 
 
// Atualiza um usuário pelo ID (espera nome, email no body)
router.put('/:id', usuarioController.updateUsuario); 
 
// Remove um usuário pelo ID
router.delete('/:id', usuarioController.removeUsuario); 
 
module.exports = router;