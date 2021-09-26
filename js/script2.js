$(document).ready(function() {
 
 
 $(".menu > li").mouseenter(function(){
  $(".header").stop().animate({height:"120px"},300);
  $(".menu > li .sub").hide();
  $(this).find('.sub').css("display","block");
 })
 $(".menu").mouseleave(function(){
  $(".header").stop().animate({height:"72px"},300);
  $(".menu > li .sub").hide();
 })


});
