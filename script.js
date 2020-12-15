// 게시판 scroll down
$(".mainmenu li").mouseover(function(){
    $(this).children(".submenu").stop().slideDown();
    $('.subback').stop().slideDown();
});
$(".mainmenu li").mouseout(function(){
    $(".submenu").stop().slideUp();
    $('.subback').stop().slideUp();
});

$(document).ready(function(){
    setInterval(function(){
        $(".slideimage").delay("2500");
        $(".slideimage").animate({marginTop:"-300px"},"500");
        $(".slideimage").delay("2500");
        $(".slideimage").animate({marginTop:"-600px"},"500");
        $(".slideimage").delay("2500");
        $(".slideimage").animate({marginTop:"-000px"},"500");
    });
});

$(document).ready(function(){
    $(".notitxt").click(function(){
        $("#table").show("fast");
        $(".gallery").hide("fast");
    });
    $(".galetxt").click(function(){
        $("#table").hide("fast");
        $(".gallery").show("fast");
    });
});
