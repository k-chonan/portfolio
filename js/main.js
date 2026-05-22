//スムーズスクロール
jQuery(function(){
    jQuery('a[href^="#"]').click(function(){
        var speed = 500;
        var href= jQuery(this).attr("href");
        var target = jQuery(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        jQuery("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});
