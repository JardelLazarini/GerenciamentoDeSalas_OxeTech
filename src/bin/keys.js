module.exports = {
    server: {
        port: process.env.port || 3000
    },
    database: {
        connection: process.env.connection ||  'mongodb+srv://root:1234@mgmtroom.h65yeun.mongodb.net/?retryWrites=true&w=majority&appName=mgmtRoom'
    },
    auth: {
        secret: 'c1c2c3c4c5'
    }
}
