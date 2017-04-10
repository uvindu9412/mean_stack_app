var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path =require('path');


var app = express();

const route =require('./routes/route');

mongoose.connect('mongodb://localhost:27017/contactlist');

mongoose.connection.on('connected',function(err){
    if(err){
        console.log('Error Over Here' + err);
    }
});

mongoose.connection.on('error',function(){
    console.log('Connected to database');
});

const port =3000;

app.use(cors());

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/api',route);

app.get('/',function(req,res){
    res.send('Hello');
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
});