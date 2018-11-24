var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');
 
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

app.get('/processImage', function(req, res) {
	client
		.labelDetection('../public/images/wok.jpg')
		.then(results => {
			const labels = results[0].labelAnnotations
			res.send(labels);
		})
	
})

app.listen(8100);
