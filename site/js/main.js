$( document ).ready(function() {
    outdatedBrowser({
        bgColor: '#f25648',
        color: '#ffffff',
        lowerThan: 'boxShadow',
        languagePath: 'site/outdatedbrowser/fr.html'
    });

    $('section').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			tabAuthorized = $(this).attr('data-boundaries').split(",");
            $(this).removeClass('hideIfNotVisible');
        }
	});
})