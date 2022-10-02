$(document).ready(function() {
    $(function() {
        //categories navbar
        $(".header_bottom_nav_list_li").on("mouseenter mouseleave", function() {
            $(this).children().slideToggle(500);
            $(this).toggleClass("header_bottom_nav_list_li_hover");
        })
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
            $(this).siblings().slideToggle(500);
            $(this).toggleClass("content_main_faq_answer_btn_unit_hover");
        })
    })
})