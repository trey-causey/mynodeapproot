//var http = require('http');
const express = require("express");
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const port = process.env.PORT || 3000
let app = express();
const path = require('path');

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css',express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js',express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js',express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'twig');

app.get('/', (req,res) => {
    res.render('index', {list: ['a','b','c'], title: 'Perfect Run'});
})
app.get('/test', (req,res) => {
    res.render('demo');
})
app.listen(port, () => {
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
