const smc = require('simple-mongoose-creator');
smc.smc('agendamentos', {
    usuario: {
        type: String,
        required: true
    },
    sala: {
        type: String,
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

module.exports = smc;