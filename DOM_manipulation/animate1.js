$(function(){
     var theColors= ["#f00","#0f0","#00f"];
      var fruit =["apples","pears","oranges","bananas"];
   
         $(".box").click(function(){
           
            var randomNum=Math.floor(Math.random()*3);
            $(".box").css("background-color",theColors[randomNum]);      
   })
         $("#aBorder").click(function(){
            $(".box").toggleClass("theBorder");   
   })
         $("#slideToggleA").click(function(){
            $(".a").slideToggle(2000);
   })
         $("#fade").click(function(){
            $(".b").fadeToggle(3000);
   })
         $("#fruit").click(function(){
             randomFruit=Math.floor(Math.random()*4);
             if (randomFruit==0){
                 $(".b").html("");
             } else {
            $(".b").html("<h3>I would like "+fruit[randomFruit]+".</h3>");}
   })
         $("#berries").click(function(){
            $(".b").append("<h3>Don't forget the berries.</h3>");})
         
         
         
})