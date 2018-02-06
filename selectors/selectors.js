$(function(){
    
    $("p").css("font-size","1.3em")
    $("h1").css("color","blue");
    $("header>h1").css("color","red");
    $("main>h1").addClass("theHeading");
    
    $("main>p:eq(0)  ").css("font-weight","bold");
    //replace with:first, :last
    
    $("main>p:eq(2)  ").siblings().css("color","green");
   
    
    $("main>p:eq(1)  ").nextAll().css("color","orange");
    //prevAll();
    
    
})