$(document).ready(function() {
    $(function() {
        $("#nav_list_li_categories").on("mouseenter mouseleave", function() {
            $(".header_bottom_nav_list_li_categories").slideToggle(500);
            $("#nav_list_li_categories").toggleClass("header_bottom_nav_list_li_hover");
        })
        $("#nav_list_li_news").on("mouseenter mouseleave", function() {
            $(".header_bottom_nav_list_li_news").slideToggle(500);
            $("#nav_list_li_news").toggleClass("header_bottom_nav_list_li_hover");
        })
    })
})