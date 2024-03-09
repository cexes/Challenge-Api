const { Pool } = require('pg');

module.exports = pool = new Pool ({
    database: 'challengeapi',
    user: 'spider_man',
    password: 'iron_man'
})
