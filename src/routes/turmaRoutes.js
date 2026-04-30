const express = require('express'); 
const router = express.Router(); 
const  turmaController = require('../controllers/turmaController.js'); 

// Lista todas as turmas
router.get('/', turmaController.getAllTurmas); 

// Obtém uma turma pelo ID
router.get('/:id', turmaController.getTurmaById);

// Obtém turmas de um curso
router.get('/curso/:cursoId', turmaController.getTurmasByCurso);
 
// Cria uma nova turma (espera id_curso, ano_letivo, periodo no body)
router.post('/', turmaController.createTurma); 
 
// Atualiza uma turma pelo ID (espera id_curso, ano_letivo, periodo no body)
router.put('/:id', turmaController.updateTurma); 
 
// Remove uma turma pelo ID
router.delete('/:id', turmaController.removeTurma); 
 
module.exports = router;