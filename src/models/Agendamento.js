const smc = require('simple-mongoose-creator');

smc.smc('agendamentos', {
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


module.exports = smc;