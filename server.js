const express = require('express');
const bodyParser = require('body-parser');
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/add',add);
app.use('/get',retrieve);

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/README.md');
})
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