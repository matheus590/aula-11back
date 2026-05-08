const express = require('express'); 
const router = express.Router(); 
const  turmaController = require('../controllers/turmaController.js'); 

// Lista todas as turmas
router.get('/', turmaController.getAllTurmas); 

// Obtém turmas de um curso
router.get('/curso/:cursoId', turmaController.getTurmasByCurso);

// Obtém uma turma pelo ID
router.get('/:id', turmaController.getTurmaById);

// Cria uma nova turma (espera nome_curso, identificador_turma, userId no body)
router.post('/', turmaController.createTurma); 
 
// Atualiza uma turma pelo ID (espera nome_curso, identificador_turma, userId no body)
router.put('/:id', turmaController.updateTurma); 
 
// Remove uma turma pelo ID
router.delete('/:id', turmaController.removeTurma); 
 
module.exports = router;