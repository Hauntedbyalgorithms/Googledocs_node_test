function setup() {
	createCanvas(windowWidth, windowHeight);

	$.get('/searching', function(row_data) {

       var ul = $("#list");

       for(var i=0; i < row_data.length; i++) {
    		
    		console.log("row " + i + "   " + row_data[i].author + ", " + row_data[i].titre + ", " + row_data[i].annee + ", " + row_data[i].description + ", " + row_data[i].editeur);
    		
    		ul.append("<li>" + row_data[i].author + ", " + row_data[i].titre + ", " + row_data[i].annee + ", " + row_data[i].description + ", " + row_data[i].editeur + "</li>");
    	}
	});

	// $.ajax({
	// 	url:"https://docs.google.com/document/d/1xUxM7ANAhYxkD_lQuaFjmVJighTUorV295vC91ROBvY/pub"
	// }).done(function( data ) {
	// 	console.log(data);
	// 	$("#result").html(data);
	// });
}

