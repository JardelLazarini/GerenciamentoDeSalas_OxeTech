const app = require('./src/bin/index');
const connectDB = require('./src/middleware/connection');
const keys = require('./src/bin/keys');

app.listen(keys.server.port, async () => {
    try {
        await connectDB();
        console.log("Está Funcionando");
    } catch (error) {
        console.error('Erro ao iniciar o servidor:', error.message);
        process.exit(1);
    }
});
