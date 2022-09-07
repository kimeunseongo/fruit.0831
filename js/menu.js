
$(function(){

    $('.menu li').mouseover(function(){

        $(this).children('.sub1').stop().slideDown();

      }).mouseout(function(){

        $('.sub1').stop().slideUp();

      });

 });
