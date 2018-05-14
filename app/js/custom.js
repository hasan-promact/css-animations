$(window).scroll(function () {
    
    var viewPortSize = $(window).height();
	
	$('section').each(function(){
		
		if(($(window).scrollTop() + viewPortSize) > $( this ).offset().top && ($(window).scrollTop()) < ($( this ).offset().top + $( this ).height())){
			$(this).addClass('activeAnimation');
		}else{
			$(this).removeClass('activeAnimation');
		}
		
		
	});
	
});