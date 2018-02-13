$(function(){
  //for accordion
    
  var accordion = $('.accordion');
  var headings = $('main h2');
  var paragraphs = $('main p');
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
    }); 
  
  