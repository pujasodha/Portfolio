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
});
