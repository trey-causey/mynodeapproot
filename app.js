//var http = require('http');
let express = require('express');
let chalk = require('chalk');
let debug = require('debug')('app');
let morgan = require('morgan');
const port = process.env.PORT || 3000
let app = express();
let path = require('path');

app.use(morgan('combined'));

app.get('/', function (req,res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));

})
app.listen(port, function () {
    debug(`listening on port ${chalk.green(port)}`);
});



/*var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var message = 'It works!\n',
        version = 'NodeJS ' + process.versions.node + '\n',
        response = [message, version].join('\n');
    res.end(response);
});
server.listen();*/
