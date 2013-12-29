'use strict';

var restify = require('restify');

function respond(req, res, next) {
    res.send('hello ' + req.params.name);
}   

var server = restify.createServer();

server.use(
  function crossOrigin(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
  }
);

server.use(restify.bodyParser());

var authenticateUser = function(req, res, next){
        console.log('Authenticate has been hit with Parameters');
    console.log(req.params.username);
    console.log(req.params.password);
    
    if(req.params.username === 'haani' && req.params.password === 'haani@786'){
        res.send({ loginSuccess: 'yes', token: 'kajhlkDJHALKDAJD' });
    }else{
        res.send({ loginSuccess: 'no' });
        
    }
    console.log('Authenticate has been hit with Parameters');
    console.log(req.params.username);
    console.log(req.params.password);
};

server.get('/hello/:name', function(req, res, next){
    res.send('This is a successCallback for you');
});

server.post('/login', authenticateUser);

server.listen(8081, function () {
    console.log('%s listening at %s', server.name, server.url);
});