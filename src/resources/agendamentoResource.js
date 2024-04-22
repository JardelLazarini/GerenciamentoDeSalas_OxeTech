const express = require('express');
const router = express.Router();
const Agendamento = require('../models/Agendamento');

router.post('/agendamentos', async (req, res) => {
    try {
        const { usuario, sala, horario, quantidadePessoas } = req.body;
        const agendamento = new Agendamento({ usuario, sala, horario, quantidadePessoas });
        await agendamento.save();
        res.status(201).json(agendamento);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/agendamentos', async (req, res) => {
    try {
        const agendamentos = await Agendamento.find();
        res.json(agendamentos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/agendamentos/:id', async (req, res) => {
    try {
        const agendamento = await Agendamento.findById(req.params.id);
        if (agendamento === null) {
            return res.status(404).json({ message: 'Agendamento não encontrado' });
        }
        res.json(agendamento);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.patch('/agendamentos/:id', async (req, res) => {
    try {
        const { horario, quantidadePessoas } = req.body;
        const agendamento = await Agendamento.findById(req.params.id);
        if (agendamento === null) {
            return res.status(404).json({ message: 'Agendamento não encontrado' });
        }
        if (horario !== undefined) {
            agendamento.horario = horario;
        }
        if (quantidadePessoas !== undefined) {
            agendamento.quantidadePessoas = quantidadePessoas;
        }
        await agendamento.save();
        res.json(agendamento);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/agendamentos/:id', async (req, res) => {
    try {
        const agendamento = await Agendamento.findById(req.params.id);
        if (agendamento === null) {
            return res.status(404).json({ message: 'Agendamento não encontrado' });
        }
        await agendamento.remove();
        res.json({ message: 'Agendamento excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
