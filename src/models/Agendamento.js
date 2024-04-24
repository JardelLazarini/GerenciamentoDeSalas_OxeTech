const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuarios',
        required: true
    },
    sala: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'salas', 
        required: true
    },
    horario: {
        type: Date,
        required: true
    },
    quantidadePessoas: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('agendamentos', agendamentoSchema);
