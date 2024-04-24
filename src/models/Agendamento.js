const mongoose = require('mongoose');
const { Schema } = mongoose;

const agendamentoSchema = new Schema({
    usuario: {
        type: String,
        //ref: 'usuarios',
        required: true
    },
    sala: {
        type: String,
        //ref: 'salas', 
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
