//var http = require('http');
const express = require("express");
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const port = process.env.PORT || 3000
let app = express();
const path = require('path');
const appRouter = express.Router();

/*const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json);*/

const base = ('./src/weather/current');

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css',express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js',express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js',express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'twig');

app.use('/', appRouter);

appRouter.route('/')
    .get( (req,res) => {
        res.render(
            'index',
            {
                nav: [{link:'/test',title: 'Perfect Run'}]
            }
        );
    });

appRouter.route('/test')
    .get(((req, res) => {
        res.render('demo');
    }));

appRouter.route('/base')
    .get(((req, res) => {
        res.render(
            'base',
            [base]
            );
    }));

/*app.get('/', (req,res) => {
    res.render(
        'index',
        {
            nav: [{link:'/test',title: 'Perfect Run'}]
        }
        );
})*/
/*app.get('/test', (req,res) => {
    res.render('demo');
})*/


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
