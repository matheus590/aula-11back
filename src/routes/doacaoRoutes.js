// routes/doacaoRoutes.js 
const express = require('express'); 
const router = express.Router(); 
const doacaoController = require('../controllers/doacaoController.js'); 

// Lista todas as doações
router.get('/', doacaoController.getAllDoacoes); 

// Obtém uma doação pelo ID
router.get('/:id', doacaoController.getDoacaoById);

// Obtém doações de um aluno
router.get('/aluno/:alunoId', doacaoController.getDoacoesByAluno);
 
// Atualiza uma doação pelo ID (espera nome, email, cpf, data_nascimento, id_turma no body)
router.put('/:id', doacaoController.updateDoacao); 
 
// Remove uma doação pelo ID
router.delete('/:id', doacaoController.removeDoacao); 
 
module.exports = router;