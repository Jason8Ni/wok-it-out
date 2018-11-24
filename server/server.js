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

app.get('/', (req, res) => {
  res.send('An alligator approaches!');
});

app.listen(8100, () => console.log('Gator app listening on port 8100!'));