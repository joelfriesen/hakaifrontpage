jQuery(document).ready(function ($) {
    //$('iframe').not('iframe.juxtapose').each(function () {
    $('iframe').each(function () {
        $(this).wrap('<div class="flex-video"></div>');
    });

    if ($('div.trigger')) {
        $('div.trigger').click(function (e) {
            $(this).toggleClass('open')
                .toggleClass('close')
                .next()
                .slideToggle(100);

            e.preventDefault();
        });
    }
});