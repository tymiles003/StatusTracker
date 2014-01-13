'use strict';
var STService = require('./STService.js'),
    restify = require('restify'),
    server = restify.createServer(),
    st = new STService();
    
server.use(restify.bodyParser());

server.use(
    function crossOrigin(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        return next();
    }
);

//REST Methods
server.post('/login', function(req, res, next) {
    st.authenticateUser(req.params.username, req.params.password, res);
});

server.post('/export', function(req, res, next){
    st.exportToExcel(res);
});

server.post('/register', function(req, res, next){
    var newEmployeeData = {
        name: req.params.username,
        password:  req.params.password,
        fName: req.params.firstName
    };
    
    st.registerUser(newEmployeeData, res);
});

server.listen(8081, function () {
    console.log('%s listening at %s', server.name, server.url);
});