//All dependencies needed:
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

//Express app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/VRDisplayEvent.api+json' }));


//provides routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes.js')(app);


//starts server 
app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
});