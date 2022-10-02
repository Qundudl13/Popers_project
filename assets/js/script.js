$(document).ready(function() {
    $(function() {
        //categories navbar
        $("#nav_list_li_categories").on("mouseenter mouseleave", function() { 
            $(".header_bottom_nav_list_li_categories").slideToggle(500);
            $("#nav_list_li_categories").toggleClass("header_bottom_nav_list_li_hover");
        })
        $("#nav_list_li_news").on("mouseenter mouseleave", function() { 
            $(".header_bottom_nav_list_li_news").slideToggle(500);
            $("#nav_list_li_news").toggleClass("header_bottom_nav_list_li_hover");
        })
    })
    $(function() {
        //buy buttons
        $("#news_products_btn_1").on("mouseenter mouseleave", function() {
            $("#news_products_btn_1").toggleClass("content_main_news_products_unit_text_cost_1");
        })
        $("#news_products_btn_2").on("mouseenter mouseleave", function() {
            $("#news_products_btn_2").toggleClass("content_main_news_products_unit_text_cost_1");
        })
        $("#news_products_btn_3").on("mouseenter mouseleave", function() {
            $("#news_products_btn_3").toggleClass("content_main_news_products_unit_text_cost_1");
        })
        $("#news_products_btn_4").on("mouseenter mouseleave", function() {
            $("#news_products_btn_4").toggleClass("content_main_news_products_unit_text_cost_1");
        })
    })
    $(function() {
        //answer buttons
        $("#answer_btn_unit_1").click(function() {
            $("#answer_btn_unit_1_text").slideToggle(500);
            $("#answer_btn_unit_1").toggleClass("content_main_faq_answer_btn_unit_hover content_main_faq_answer_btn_unit");
        })
        $("#answer_btn_unit_2").click(function() {
            $("#answer_btn_unit_2_text").slideToggle(500);
            $("#answer_btn_unit_2").toggleClass("content_main_faq_answer_btn_unit_hover content_main_faq_answer_btn_unit");
        })
        $("#answer_btn_unit_3").click(function() {
            $("#answer_btn_unit_3_text").slideToggle(500);
            $("#answer_btn_unit_3").toggleClass("content_main_faq_answer_btn_unit_hover content_main_faq_answer_btn_unit");
        })
    })
})