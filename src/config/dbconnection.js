const mysql = require('mysql2');

const connectionPool = mysql.createPool({
    user: 'root',
    password: 'Pomelo1.!',
    host: 'localhost',
    port: 3306,
    database: 'funko',
    connectionLimit: 5,
    waitForConnections: true,
    queueLimit: 0
});

connectionPool.getConnection((err, conn) => {
    if (err) {
        console.log('Error en la conexión a la BD:' + err);
    } else {
        console.log('Conectado a la BD con éxito.');
        conn.release();
    }
});

module.exports = {
    dbConnectionPool: connectionPool.promise()
}
