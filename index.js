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
	// Only the happy svg was working for me, the other images didn't display anything.
	var secretNum = req.query.v;
	var emote;
	if(secretNum == 1){
		emote = "Happy";
	} else if (secretNum == 2){
		emote = "Happy";
	} else if (secretNum == 3){
		emote = "Happy";
	} else if (secretNum == 4){
		emote = "Happy";
	}else if (secretNum == 5){
		emote = "Happy";
	}
	res.render('home', {emote: emote});
	console.log(secretNum);
	console.log(emote);
})

app.listen(3000);