jQuery(document).ready(function($){

    //-------------------------------------------
    // Menu Dropdowns
    //-------------------------------------------

	$('.menu li ul.sub-menu').attr('class', 'sub-menu subhide');	
	$('.main-nav .menu li').hover(
		function() { $('> ul', this).attr('class', 'sub-menu subshow');},
		function() { $('> ul', this).attr('class', 'sub-menu subhide');}
	);

	$('.mobile-nav .menu li.menu-item-has-children').prepend( "<a href='#' class='navdrop'><span>subnav</span></a>" );
	$('.mobile-nav .menu .navdrop').toggle(
		function() { $('~ ul', this).attr('class', 'sub-menu subshow');},
		function() { $('~ ul', this).attr('class', 'sub-menu subhide');}
	);
	$('.mobile-nav .menu .navdrop').toggle(
		function() { $(this).attr('class','navdropover');},
		function() { $(this).attr('class','navdrop');}
	);

    //-------------------------------------------
    // Tab clicking thingy
    //-------------------------------------------

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

    //-------------------------------------------
    // Paralax Scroll for front page items
    //-------------------------------------------

    $(window).bind('scroll', function(e) {
        parallaxScroll();
    });

    var $window = $(window);
    
	function parallaxScroll(){
		var s = $(window).scrollTop(),
          	d = $(document).height(),
          	c = $(window).height();
        percentage = ((s / (d - c)) * 100).toFixed(1);

    
		$('#parallax-bg1').css('background-position','0px '+(50-(s/5))+'px');
		$('#parallax-bg2').css('background-position','100% '+(50-(s/5))+'%');
		$('#video-background').css('top', ((s/4)));
		

	    //-------------------------------------------
	    // MENU SMALLER WHEN SCROLL
	    //-------------------------------------------

		if (percentage >= .2){
          $( ".topbar" ).addClass( "scrolled" ); 
          $( ".navarea" ).addClass( "scrolled" ); 
          $( ".subnav" ).addClass( "scrolled" ); 
        }
        if (percentage < .2){
          $( ".topbar" ).removeClass( "scrolled" );
          $( ".navarea" ).removeClass( "scrolled" );
          $( ".subnav" ).removeClass( "scrolled" );
        }
	}
	$window.on('scroll resize', parallaxScroll);
});



