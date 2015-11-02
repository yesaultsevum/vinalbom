(function(){
	$('.light').click(function(){
		
	});
	$('.standart').click(function(){
		
	});
	$('.premium').click(function(){
		
	});
	$('.nav li:last-child').on('click', function(e) {
        e.preventDefault();
        $('.contact-info').toggle();
    });
    $(document).mouseup(function(e){
    	var container = $('.contact-info');
         if(!container.is(e.target) && container.has(e.target).length === 0){
    	   container.hide();
         }
    });
    
	$('.type-list li').click(function(){ 
		     var type = $('.type-button');
			 var txt = $(this).text();
			 $('.type-list li').removeClass('active');
			 $(this).addClass('active');
			  type.text(txt);			 
	});
	$('.format-list li').click(function(){ 
		     var format = $('.format-button');
			 var txt = $(this).text();
			 $('.format-list li').removeClass('active');
			 $(this).addClass('active');
			  format.text(txt);			 
	});
	$('.pages-list li').click(function(){ 
		     var pages = $('.pages-button');
			 var txt = $(this).text();
			 $('.pages-list li').removeClass('active');
			 $(this).addClass('active');
			  pages.text(txt);			 
	});
    function priceAlbom(){
    	var type = $('.type-list').find('li.active').attr('data-param');
    	var format = $('.format-list').find('li.active').attr('data-param');
    	var pages = $('.pages-list').find('li.active').attr('data-param');
    	var total = type * format * pages;
    	var totalRound = Math.round(total);
    	return totalRound;
    	
    };
    $('li[data-param]').click( function(){
    	if($('.type-list li').hasClass('active') && $('.format-list li').hasClass('active') && $('.pages-list li').hasClass('active')){
    	    $('#rezult').val(priceAlbom() + ' грн');
    	    $('#rezult').focus();
        }
    });
    


    //  $('#rezult').click(function(){
    //     $('#rezult').val(priceAlbom() + ' грн');
    //     console.log('ok');

    // });
     //if(!$('.type-list').find('li.active') && !$('.format-list').find('li.active') && !$('.pages-list').find('li.active')){
      //$('#rezult').click(function(){
     //   $('#rezult').val(priceAlbom() + ' грн');
      //  console.log('ok');
     // });
      
     //}



})();