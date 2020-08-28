const express = require("express");
const morgan = require('morgan');
let debug = require('debug')('wex');
let chalk = require('chalk');
const ports = process.env.PORT || 4500
let wex = express();
wex.use(morgan('tiny'));
/*const bodyParser = require('body-parser');
wex.use(bodyParser.urlencoded({extended:true}))
wex.use(bodyParser.json);*/

/*const { weather } = require("./src/weather/current");
const sendInfo = ("sendInfo")(weather);*/

wex.get('/',(req,res) => {
//const curr = ("sendInfo")
    res.send('hello');
})

wex.listen(ports, () => {
    debug(`listening on port ${chalk.green(ports)}`);
});