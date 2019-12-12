jQuery(document).ready(function($) {
	$(".wp-caption a[href*='/wp-content/uploads/'],.gallery-icon a[href*='/wp-content/uploads/'],.attachment a[href*='/wp-content/uploads/'],.historicalphotos,.fancy").fancybox({
	 	'titlePosition' : 'inside'
	 });
	$(".popupiframe").fancybox({
		'width'				: '75%',
		'height'			: '75%',
        'autoScale'     	: true,
        'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'titlePosition' 	: 'inside'
	});
	var popupParent = jQuery(".popupiframe").parent();
	jQuery(document).on('fancybox-cleanup', function() {
	  popupParent.find('.fancybox-inlinetmp').replaceWith(jQuery(".popupiframe"));
	});
});