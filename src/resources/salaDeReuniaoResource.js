const express = require('express');
const router = express.Router();
const SalaDeReuniao = require('../models/SalaDeReuniao');

router.post('/salas', async (req, res) => {
    try {
        const { capacidade } = req.body;
        const salaDeReuniao = new SalaDeReuniao({ capacidade });
        await salaDeReuniao.save();
        res.status(201).json(salaDeReuniao);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/salas', async (req, res) => {
    try {
        const salasDeReuniao = await SalaDeReuniao.find();
        res.json(salasDeReuniao);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/salas/:id', async (req, res) => {
    try {
        const salaDeReuniao = await SalaDeReuniao.findById(req.params.id);
        if (salaDeReuniao === null) {
            return res.status(404).json({ message: 'Sala de reunião não encontrada' });
        }
        res.json(salaDeReuniao);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/salas/:id', async (req, res) => {
    try {
        const salaDeReuniao = await SalaDeReuniao.findById(req.params.id);
        if (salaDeReuniao === null) {
            return res.status(404).json({ message: 'Sala de reunião não encontrada' });
        }
        await salaDeReuniao.remove();
        res.json({ message: 'Sala de reunião excluída com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
