$(document).ready(function() {
    $(function() {
        //categories navbar
        $(".header_bottom_nav_list_li").on("mouseenter mouseleave", function() {
            $(this).children().slideToggle(500);
            $(this).toggleClass("header_bottom_nav_list_li_hover");
        })
        for(let x of $(".header_bottom_nav_list_li_news_unit span")) {
            var textNav = $(x).text().split('');
            if(textNav.length > 19) {
                var textNavLong = textNav.join('');
                $(x).text(textNavLong.slice(0, 19) + "...");
            }
        }
    })
    $(function() {
        //buy buttons
        $(".content_main_news_products_unit_text_cost").on("mouseenter mouseleave", function() {
            $(this).toggleClass("content_main_news_products_unit_text_cost_1");
        })
    })
    $(function() {
        //answer buttons
        $(".content_main_faq_answer_btn_unit").click(function() {
            $(this).toggleClass("content_main_faq_answer_btn_unit_hover");
            $(this).parent().siblings().children().removeClass("content_main_faq_answer_btn_unit_hover");
            $(".content_main_faq_answer_btn_unit").not(this).siblings().hide(500);
            $(this).siblings().slideToggle(500);
        })
    })
})