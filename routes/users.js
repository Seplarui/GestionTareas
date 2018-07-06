var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var dbconfig = require('./../config/database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);


/* GET users listing. */
router.get('/kk', function(req, res, next) {
    connection.query('select * from tareasestados', function(err, resultados) {
        if (err) throw err;
        console.log('Resultados: ', resultados);
        res.send(resultados);
    });

});

module.exports = router;