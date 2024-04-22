const Usuario = require('../models/Usuario');

exports.createCliente = async (req, res) => {
    try {
        const { nome, cpf } = req.body;
        const cliente = new Usuario({ nome, cpf });
        await cliente.save();
        res.status(201).json(cliente);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.listClientes = async (req, res) => {
    try {
        const clientes = await Usuario.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getClienteById = async (req, res) => {
    try {
        const cliente = await Usuario.findById(req.params.id);
        if (cliente === null) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCliente = async (req, res) => {
    try {
        const { nome, cpf } = req.body;
        const cliente = await Usuario.findById(req.params.id);
        if (cliente === null) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        if (nome !== undefined) {
            cliente.nome = nome;
        }
        if (cpf !== undefined) {
            cliente.cpf = cpf;
        }
        await cliente.save();
        res.json(cliente);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteCliente = async (req, res) => {
    try {
        const cliente = await Usuario.findById(req.params.id);
        if (cliente === null) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        await cliente.remove();
        res.json({ message: 'Cliente excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
