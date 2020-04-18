var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');

var app = express();

app.use(express.static(__dirname + '/../public/'));
var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


app.get('/:id', (req, res) => {
  console.log('send file');
  res.sendFile(path.join(__dirname, '../public', '/index.html'));
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

