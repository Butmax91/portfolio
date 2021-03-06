const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const serverStatic = require('serve-static');


const form = require('./controllers/mail');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',serverStatic(path.join(__dirname, '/dist')));
app.use(form);
const port = process.env.PORT || 8085;
app.listen(port);
