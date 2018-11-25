$ (function(){
	
	$ ("#rate").slider({
		
		value: 0,
		min: 0,
		max: 10,
		step: 1,
	
	slide: function( event, ui ) {
		$( "#Rating" ).val( ui.value + " out of 10");
	}
  });
  
  $( "#Rating" ).val("Please move the slider");
  
});
