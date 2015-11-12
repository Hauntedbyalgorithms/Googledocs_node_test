var GoogleSpreadsheet = require("google-spreadsheet");
var my_sheet = new GoogleSpreadsheet('1uv6bgFqD3qDVuv_YDSVqnB4yZpbtYsIMtsK9qp-coEA'); // Bibliographie

var express = require('express');
var app     = express();
var server  = require('http').createServer(app);
var port    = process.env.PORT || 3001;

/* ------------------------------------------------- */

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/searching', function(req, res){
	my_sheet.getRows(1, function(err, data){
    	res.send(data);
	});
});


server.listen(port);
console.log('Server started on ' + port);