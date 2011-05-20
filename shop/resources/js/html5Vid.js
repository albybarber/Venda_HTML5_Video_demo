jQuery(document).ready(function(){
    
	var v = document.getElementsByTagName('video')[0];

	var prod1 = false;
	var prod2 = false;
	var prod3 = false;
	
	jQuery('video').bind('play', function()
    {
        //console.log('play event from bind listener');
		
        //works in all Browsers
    });
	
	jQuery(document).ready(function(){
    
	var v = document.getElementsByTagName('video')[0];

	var prod1 = false;
	var prod2 = false;
	var prod3 = false;
	
	jQuery('video').bind('play', function()
    {
        //console.log('play event from bind listener');
		
        //works in all Browsers
    });
	
	jQuery('.catwalk .add').click(function() {
		v.pause();
	});
	
	jQuery('.skip').click(function() {
		v.currentTime = 427;
		v.play();

	});
	
	jQuery('video').bind("timeupdate" ,function(){
			
		time = v.currentTime;
		var timeInSecs = parseInt(time);
		
		//console.log(time);
		if (timeInSecs == 433 && prod1 == false) {
				//console.log('YO: 435');
				jQuery('#catwalkProducts .suggestedproduct1').append().load("http://abarber2.prod.venda.com/invt/eveningdress/&temp=catwalk&layout=blank");
				prod1 = true;
				jQuery('#catwalkProducts').show();
		}
		
		if (timeInSecs == 438 && prod2 == false) {
				//console.log('YO: 438');
				jQuery('#catwalkProducts .suggestedproduct2').append().load("http://abarber2.prod.venda.com/invt/hulabag/&temp=catwalk&layout=blank");
				prod2 = true;
		}
		
		if (timeInSecs == 439 && prod3 == false) {
				//console.log('YO: 443');
				jQuery('#catwalkProducts .suggestedproduct3').append().load("http://abarber2.prod.venda.com/invt/bottega/&temp=catwalk&layout=blank");
				prod3 = true;
		}
		
				
		
        //works in all Browsers
		


	});

	
});
  

	
	jQuery('.skip').click(function() {
		v.currentTime = 427;
		v.play();
	});
	
	jQuery('video').bind("timeupdate" ,function(){
			
		time = v.currentTime;
		var timeInSecs = parseInt(time);
		
		//console.log(time);
		if (timeInSecs == 433 && prod1 == false) {
				//console.log('YO: 435');
				jQuery('#catwalkProducts .suggestedproduct1').append().load("http://abarber2.prod.venda.com/invt/eveningdress/&temp=catwalk&layout=blank");
				prod1 = true;
				jQuery('#catwalkProducts').show();
		}
		
		if (timeInSecs == 438 && prod2 == false) {
				//console.log('YO: 438');
				jQuery('#catwalkProducts .suggestedproduct2').append().load("http://abarber2.prod.venda.com/invt/hulabag/&temp=catwalk&layout=blank");
				prod2 = true;
		}
		
		if (timeInSecs == 439 && prod3 == false) {
				//console.log('YO: 443');
				jQuery('#catwalkProducts .suggestedproduct3').append().load("http://abarber2.prod.venda.com/invt/bottega/&temp=catwalk&layout=blank");
				prod3 = true;
		}
		
				
		
        //works in all Browsers
		


	});

	
});
  
