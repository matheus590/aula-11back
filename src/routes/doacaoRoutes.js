// routes/doacaoRoutes.js 
const express = require('express'); 
const router = express.Router(); 
const doacaoController = require('../controllers/doacaoController.js'); 

// Lista todas as doações
router.get('/', doacaoController.getAllDoacoes); 

// Obtém doações de um curso
router.get('/curso/:cursoId', doacaoController.getDoacoesByCurso);

// Obtém uma doação pelo ID
router.get('/:id', doacaoController.getDoacaoById);

// Cria uma nova doação (espera qtd_leite, data_registro, id_turma, id_usuario no body)
router.post('/', doacaoController.createDoacao);

// Atualiza uma doação pelo ID (espera qtd_leite, data_registro, id_turma, id_usuario no body)
router.put('/:id', doacaoController.updateDoacao); 
 
// Remove uma doação pelo ID
router.delete('/:id', doacaoController.removeDoacao); 
 
module.exports = router;