var express = require('express')

// instantiating the express server
var app = express()
var port = 4000

app.use(function (req, res, next) {
  console.log('new req method is: ' + req.method, 'new req url is: ' + req.url)
  next()
})

app.use(express.static(__dirname + '/public'));



app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', {name: "Nurul Huda"});
});




app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
