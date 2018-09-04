const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.load();

const add = require('./routes/add');
const retrieve = require('./routes/get');

var app = express();

mongoose.connect(process.env.DATABASE_URI,{ useNewUrlParser: true })
    .then(()=> console.log('connected to mlab'))
    .catch(err=>console.error('could not connect ',err));

var port = process.env.PORT || 4000;


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Access-Token, X-Key");
    next();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/add',add);
app.use('/get',retrieve);

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/README.md');
})

app.get('/display',(req,res) => {
    var url = "http://faketestapi.herokuapp.com/get/data";
    fetch(url, {
        method: 'POST',
        headers: {
            "Content-type": 'application/json;',
        },
        body:JSON.stringify({
            score:69
        }),
    })
    .then(response => response.json())
    .then(json => {console.log(json); res.send(json)})
    .catch(err => res.send(err))
});
//for rest any url
app.get('*', (req, res) => {
    res.status(404).send({error:'no route',type:'get'});
});

app.post('*', (req, res) => {
    res.status(404).send({error:'no route ',type:'post'});
});

app.listen(port,()=>{
    console.log(`listining to ${port}`)
})