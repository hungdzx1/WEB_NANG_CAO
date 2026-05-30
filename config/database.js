const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'mysql-4ffb373-hungb3145-0027.c.aivencloud.com',
    port:  '21320',
    user: 'avnadmin',
    password: 'AVNS_4sSbc5WxVJwjl8azV_B',
    database: 'university_db',
    multipleStatements: true
});


module.exports = connection;