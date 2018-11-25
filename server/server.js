//const fetch = require("node-fetch");
var request = require('request');
const edamamEnvVars = require("./edamamEnvVar.js") 

var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');
var fs = require('fs');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

app.get('/', function(req, res) {
	res.send("Default testing response");
})

app.post('/uploadAndProcess', function(req, res) {
	fs.writeFile("out.png", req.body.base64Img, 'base64', function(err) {
	  console.log(err);
	});
	client
		.labelDetection('./out.png')
		.then(results => {
			const labels = results[0].labelAnnotations
			res.send(labels);
		})
	
})

app.get('/queryRecipe', function(req, res) {
	var ingredientArray = ["Apple", "Flour", "Onions"]//req.query.ingredients
	var ingredientString = ingredientArray.join(",");
	const url = "https://api.edamam.com/search?q=chicken&app_id=a2f3eb05&app_key=28465817b5ea90aaa8e5ce019f5f5d61";

	request(url, function(error, response, body) {
			res.send(JSON.parse(body).hits);
		})
})

app.listen(8101);

