var http = require('http');
var express = require('express');
var app = express();

app.get('/', function (req,res) {
    res.send('hellow from my app');
})
app.listen();
/*var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var message = 'It works!\n',
        version = 'NodeJS ' + process.versions.node + '\n',
        response = [message, version].join('\n');
    res.end(response);
});
server.listen();*/
