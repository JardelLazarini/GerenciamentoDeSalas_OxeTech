const app = require('./index');
const connectDB = require('../middleware/connection');
const keys = require('./keys');

app.listen(keys.server.port, async () => {
    try {
        await connectDB();
        console.log("Está Funcionando");
    } catch (error) {
        console.error('Erro ao iniciar o servidor:', error.message);
        process.exit(1);
    }
});
