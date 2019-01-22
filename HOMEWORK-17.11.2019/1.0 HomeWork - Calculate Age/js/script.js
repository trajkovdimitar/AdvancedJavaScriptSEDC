// 1.0 HomeWork - Calculate Age

String.prototype.format = function() {
	
	var result = this;
	
	for ( i = 0; i < arguments.length; i++ ) {
		
		var pattern = new RegExp("\\{" + i + "\\}", "g" );
		result = result.replace( pattern, arguments[i] );
	}
	
	return result;
}

var println = function ( text ) {
		
	if ( text === undefined )
		text = "";	
	
	document.write( text + '</br>' );
}

var run = function () {

	var birth = new Date( 1994, 6, 13); // 0 is January
	
	println( "Birth: {0}".format( birth.toLocaleDateString() ) );
	
	var now = new Date();
	println( "Now: {0}".format( now.toLocaleDateString() ) );
	
	var age = now.getFullYear() - birth.getFullYear();
	
	if ( now.getMonth() >= birth.getMonth() && now.getDate() > birth.getDate() )
		age--;
	
	println( "Age: {0}".format( age ));
}

run();