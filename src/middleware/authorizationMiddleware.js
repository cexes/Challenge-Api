const axios = require('axios');

async function authorizationMiddleware(req, res, next) {
    try {
        const response = await axios.get('https://run.mocky.io/v3/5794d450-d2e2-4412-8131-73d0293ac1cc');
        console.log(response.data); 
        if (response.status === 200 && response.data.message === 'Autorizado') {
            return true;
        } else {
            res.status(403).json({ error: "Transação não autorizada" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao consultar o serviço autorizador externo');
    }
}

module.exports = authorizationMiddleware;
