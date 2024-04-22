const express = require('express');
const router = express.Router();
const salaDeReuniaoController = require('../controllers/salaDeReuniaoController');

router.post('/', salaDeReuniaoController.createSalaDeReuniao);
router.get('/', salaDeReuniaoController.listSalasDeReuniao);
router.get('/:id', salaDeReuniaoController.getSalaDeReuniaoById);
router.delete('/:id', salaDeReuniaoController.deleteSalaDeReuniao);

module.exports = router;
