const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/agendamentoController');

router.post('/', agendamentoController.createAgendamento);
router.get('/', agendamentoController.listAgendamentos);
router.get('/:id', agendamentoController.getAgendamentoById);
router.patch('/:id', agendamentoController.updateAgendamento);
router.delete('/:id', agendamentoController.deleteAgendamento);

module.exports = router;
