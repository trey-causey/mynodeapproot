//var http = require('http');
let express = require('express');
let chalk = require('chalk');
const port = process.env.PORT || 3000
let app = express();

app.get('/', function (req,res) {
    res.send('hello from my app');
})
app.listen(port, function () {
    console.log(`listening on port ${chalk.green(port)}`);
});



/*var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var message = 'It works!\n',
        version = 'NodeJS ' + process.versions.node + '\n',
        response = [message, version].join('\n');
    res.end(response);
});
server.listen();*/
