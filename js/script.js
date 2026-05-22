$(document).ready(function() {
	$(".drawer").drawer();
});

// page-link
$(function(){
   $('a[href^=#]').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});

$(function(){
	$("#telpopup-frame").css("display", "none");
	$(".telpopup-open").click(function(){
		$("#telpopup-frame").show();
	});
	$(".telpopup-close").click(function(){
		$("#telpopup-frame").hide();
	});
});

// pagetop
$(function() {
    var showFlag = false;
    var topBtn = $('#page-top');
    topBtn.css('bottom', '-100px');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 30) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({'bottom' : '0px'}, 200);
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({'bottom' : '-100px'}, 200);
            }
        }
    });

	topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});



// fadein
$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 170){
                $(this).addClass('scrollin');
            }
        });
    });
});


//スクロールで伸びる線
$(window).on('scroll',function(){

  $(".JS_ScrollAnimationItem").each(function(){
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight){
      $(this).addClass('isActive');
    }
  });

//ハンバーガー
 });
 $(function(){
	 $('.accordion_one .ac_header').click(function(){
		 $(this).next('.ac_inner').slideToggle();
		 $(this).toggleClass("open");
	 });
 });

 (function($) {
var $nav   = $('#navArea');
var $btn   = $('.toggle_btn');
var $mask  = $('#mask');
var open   = 'open'; // class
// menu open close
$btn.on( 'click', function() {
 if ( ! $nav.hasClass( open ) ) {
	 $nav.addClass( open );
 } else {
	 $nav.removeClass( open );
 }
});
// mask close
$mask.on('click', function() {
 $nav.removeClass( open );
});
} )(jQuery);
