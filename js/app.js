console.log( Object.keys( window ) );
console.log( Object.keys( document ) );


jQuery(document).ready(function($){


	// top-nav checker
	var url = location.origin + location.pathname;
	$('#top-nav a').each(function(){
		var link = $(this).attr('href');
		if( link.match(url) ){
			$(this).addClass('active');
		}
	});
	
});
