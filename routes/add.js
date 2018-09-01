var express = require('express');
var router = express();
var {addUser} = require('./../db.js');

router.post('/data',(req,res) => {
    console.log(req.body);
    addUser(req.body,() => res.send(req.body));
});

module.exports = router;