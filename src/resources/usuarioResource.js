const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

router.post('/usuarios', async (req, res) => {
    try {
        const { nome, cpf } = req.body;
        const usuario = new Usuario({ nome, cpf });
        await usuario.save();
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/usuarios/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (usuario === null) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.patch('/usuarios/:id', async (req, res) => {
    try {
        const { nome, cpf } = req.body;
        const usuario = await Usuario.findById(req.params.id);
        if (usuario === null) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        if (nome !== undefined) {
            usuario.nome = nome;
        }
        if (cpf !== undefined) {
            usuario.cpf = cpf;
        }
        await usuario.save();
        res.json(usuario);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/usuarios/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (usuario === null) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        await usuario.remove();
        res.json({ message: 'Usuário excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
