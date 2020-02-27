const express = require('express');
const mongo = require('mongoose');

var User = require('./Event.js');

var app = express();



app.use(express.json());

app.use(express.static('../FrontEnd/public'));






app.get('/', (req, res) => {
    res.render()
});



app.listen(3000, () =>{
    console.log('Listening on Port 3000');
});
