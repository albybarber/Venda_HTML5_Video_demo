jQuery(document).ready(function(){
    
	var v = document.getElementsByTagName('video')[0]; 
	//var v = jQuery("video").get(0); // Getting the first video element on the page and assigning it to var 'v'

// An array of objects that have time and sku values to show later.
	var products = [ 
		{
			time	:	433,
			sku		:	"eveningdress"
		},
		{
			time	:	438,
			sku		:	"hulabag"
		},
		{
			time	:	441,
			sku		:	"bottega"
		}		
	];
	
	jQuery('.skip').click(function() {
		v.currentTime = 427;	// calling the 'currentTime' method on the video element 	- Set current time to value
		v.play();				// calling the 'play' method on the video element			- Play the video

	});
	
	function loadComp(){
		console.log('you have a yoyo call back!	');
		jQuery('#catwalkProducts').show();
		
	}
	
	jQuery('.catwalk video').bind("timeupdate" ,function(){ // Binding the 'timeupdate' event (HTML5 API) to the video element - This fires every 250ms
			
		var time = v.currentTime;			// Getting the current time of the video+9
		var timeInSecs = parseInt(time);	// Return an in whole second

		var toAdd = jQuery.grep(products, function(prod) { // using the .grep method to go through the array and returning a object that matches the current time
			return prod.time == timeInSecs; 
		});
		
		
		// Simple if statments to check the time and 'load' via AJAX the products using a blank layout and a customised template.  
		if(toAdd.length == 1) {
			var prod = toAdd[0];
			var url = 'http://showcase.uat.venda.com/invt/' + prod.sku + '/&temp=catwalk&layout=blank';
			
			jQuery('#catwalkProducts').prepend("<div class='inner'></div>"); // creating a home for our new product
			jQuery('#catwalkProducts .inner:first-child').load(url,loadComp); // ajax loading the products using pre-made url in the home
			products.shift(); // shifting the current product object out of the array (so that it is not called again in the same second)
		}
	});
	
});
