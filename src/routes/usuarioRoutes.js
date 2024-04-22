const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/usuarios', usuarioController.createUsuario);
router.get('/usuarios', usuarioController.listUsuarios);
router.get('/usuarios/:id', usuarioController.getUsuarioById);
router.patch('/usuarios/:id', usuarioController.updateUsuario);
router.delete('/usuarios/:id', usuarioController.deleteUsuario);

module.exports = router;
