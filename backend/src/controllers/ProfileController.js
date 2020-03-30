const connection = require('../database/connection');

module.exports = {
    async indexedDB(request, response) {
        const incidents = await connection('incidents').select('*').where('ong_id', request.headers.authorization);

        return response.json(incidents);
    }
}