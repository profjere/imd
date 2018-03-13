$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('.parallax').css('background-position','50% '+(0+(scrolled*.08))+'%');
    $('.parallax2').css('background-position','50% '+(0-(scrolled*0.01))+'%');
    $('.parallax3').css('background-position','50% '+(0+(scrolled*.07))+'%');
}