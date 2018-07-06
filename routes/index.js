var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.send('index');
});
router.get('/estados', function(req, res, next) {
    //res.render('estados', { title: 'estados' });
    res.send('Estados');
})
module.exports = router;