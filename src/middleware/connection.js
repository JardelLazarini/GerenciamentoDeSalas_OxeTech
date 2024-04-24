const mongoose = require('mongoose');
const keys = require('../bin/keys');

const connectDB = async () => {
    try {
        await mongoose.connect(keys.database.connection);
        console.log('Conectado ao MongoDB');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
