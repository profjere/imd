$(window).bind('scroll',function(e){
    parallaxScroll();
    
});

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    //console.log(scrolled);
    $('#text').css('top',(0-(scrolled*.3))+'px');
    $('#lightning').css('top',(0-(scrolled*2.7))+'px');
    $('#thebackground').css('top',(0-(scrolled*.25))+'px');
}