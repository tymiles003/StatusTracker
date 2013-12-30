'use strict';
var STService = require('./STService.js');
var restify = require('restify');

var server = restify.createServer();

server.use(restify.bodyParser());

server.use(
    function crossOrigin(req, res, next ) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        return next();
    }
);

//REST Methods
server.post('/login', function(req, res, next){
    console.log('Login Hit');
    var st = new STService();
    var response = st.authenticateUser(req.params.username, req.params.password);
    res.send(response);    
});

server.listen(8081, function () {
    console.log('%s listening at %s', server.name, server.url);
});