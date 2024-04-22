const Agendamento = require('../models/Agendamento');

exports.createAgendamento = async (req, res) => {
    try {
        const { usuario, sala, horario, quantidadePessoas } = req.body;
        const agendamento = new Agendamento({ usuario, sala, horario, quantidadePessoas });
        await agendamento.save();
        res.status(201).json(agendamento);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.listAgendamentos = async (req, res) => {
    try {
        const agendamentos = await Agendamento.find();
        res.json(agendamentos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAgendamentoById = async (req, res) => {
    try {
        const agendamento = await Agendamento.findById(req.params.id);
        if (agendamento === null) {
            return res.status(404).json({ message: 'Agendamento não encontrado' });
        }
        res.json(agendamento);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateAgendamento = async (req, res) => {
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
};

exports.deleteAgendamento = async (req, res) => {
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
};
