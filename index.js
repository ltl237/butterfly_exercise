var express = require('express');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
	res.render('home', {user: 'lorenzo'});
})

app.listen(3000);