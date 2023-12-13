const dbConn = require('../config/dbconnection');

const getAll = async () => {
    try {
        const [data] = await dbConn.dbConnectionPool.query('SELECT * FROM product;');
        return data;
    } catch (error) {
        console.log('Error de BD' + error);
    } finally {
        dbConn.dbConnectionPool.releaseConnection();
    }
}

const getOne = async(id) => {
    try {
            const [data] = await dbConn.dbConnectionPool.query('SELECT * FROM product WHERE product_id = ?;', id);
            return data;
        } catch (error) {
            console.log('Error de BD' + error);
        } finally {
            dbConn.dbConnectionPool.releaseConnection();
        }
}

module.exports = {
    getAll,
    getOne
}
