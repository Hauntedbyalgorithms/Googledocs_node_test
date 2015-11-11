function setup() {
	createCanvas(windowWidth, windowHeight);

	$.get('/searching', function(row_data) {
       print(row_data);

       var ul = $("#list");

       for(var i=0; i < row_data.length; i++) {
    		console.log("row " + i + "   " + row_data[i].cars, row_data[i].boats);
    		ul.append("<li>" + row_data[i].cars + " " + row_data[i].boats + "</li>");
    	}
	});

	$.ajax({
		url:"https://docs.google.com/document/d/1xUxM7ANAhYxkD_lQuaFjmVJighTUorV295vC91ROBvY/pub"
	}).done(function( data ) {
		console.log(data);
		$("#result").html(data);
	});

}

