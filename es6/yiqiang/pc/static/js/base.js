$(document).ready(function() {
    //返回顶部
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 100) {
            $(".back-top").show(300);
        } else {
            $(".back-top").hide(300);
        }
    });
    $(".back-top").on("click",function(){
        $("html,body").animate({"scrollTop":0});
    });
    //懒加载效果
    $("img.lazy").lazyload({
        effect: "fadeIn"
    });
})