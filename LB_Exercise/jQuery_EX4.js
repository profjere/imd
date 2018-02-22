$(function(){
  //for accordion
    
  var accordion = $('.accordion');
  var headings = $('main h2');
  var paragraphs = $('main p');
    var openPort=false;
    
   
  //hide all paragraphs in the accordion
  paragraphs.hide();
  
  accordion.on('click','h2',function(){
      var t = $(this);
      var tPara = t.next();
      if (!tPara.is(':visible')){
          tPara.slideDown('normal');
      } else {
           tPara.slideUp('normal');
      }
 })
      
    
      
//for tabs
    var clickedOnTab = $('ul.tabs');
	clickedOnTab.on('click','li',function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');

      });
    
// for slideout
    
$("body").on("mousemove",function(event) {
    if (event.pageX < 100 && openPort==false) {
        $('.portfolio').animate({"width":200},{duration:500, easing:"easeInOutQuad", complete:openPort=true});
        $('.portfolio').removeClass('hideScroll');
        /*$('#wrapper').animate({"margin-left":200},500);*/
            
        } 
     });
    
$("body").on("mousemove",function(event) {
    if (event.pageX >250 && openPort==true) {
        $('.portfolio').animate({"width":-20},{duration:500, easing:"swing", complete:openPort=false});
        $('.portfolio').addClass('hideScroll');
        /*$('#wrapper').animate({"margin-left":0},500);*/
            
        } 
     });
    
    


//lightBox
theLightBox=$("li.openLightBox");
theLightBox.on('click',function() {
    
    var theImageLink = $(this).attr('data-light');

    var fullLink = "url('images/"+theImageLink+"')";
    $('.lightbox').animate({'height':'100%'}, 600, "linear");      
$('.lightbox_frame').animate({'height':'80%'}, 600, "linear");
    
    $('.lightbox_frame').css('background-image',fullLink);
    
});

    
$("#closure").on("click",function(event) { 
     $('.lightbox_frame').animate({'height':0}, 600, "linear");
    $('.lightbox').animate({'height':0}, 600, "linear");      
   
    
});
    
});
    
    
    
    
    

  
    
    
    
  