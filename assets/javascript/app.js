$(document).ready(function() {
    //page navigation
    $('.scrollspy').scrollSpy();

    //nav bar trigger and function
    $('.sidenav').sidenav();

    $('.collapsible').collapsible();

    $('.tooltipped').tooltip();

    $('.anchor-list').on('click', function(evt) {
        evt.preventDefault();
        console.log($(this).attr('href'));
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 1000);
    });

    // TYPE FORM
    (function() {
        var qs,
            js,
            q,
            s,
            d = document,
            gi = d.getElementById,
            ce = d.createElement,
            gt = d.getElementsByTagName,
            id = 'typef_orm',
            b = 'https://embed.typeform.com/';
        if (!gi.call(d, id)) {
            js = ce.call(d, 'script');
            js.id = id;
            js.src = b + 'embed.js';
            q = gt.call(d, 'script')[0];
            q.parentNode.insertBefore(js, q);
        }
    })();
});
