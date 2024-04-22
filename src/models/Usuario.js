const smc = require('simple-mongoose-creator');
const mongoose = require('mongoose');

smc.smc('usuarios', {
    nome: {
        type: String,
        required: true,
        trim: true
    },
    cpf: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = smc;