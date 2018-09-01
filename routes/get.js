var express = require('express');
var router = express();
const { getUser } = require('./../db.js');

router.post('/data',(req,res) =>{
    console.log(req.body);
    getUser(req.body,(result) => res.send(result))
}); 

module.exports = router;