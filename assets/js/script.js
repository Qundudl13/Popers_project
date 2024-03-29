var news = document.getElementsByClassName("content_main_news_products");
$(document).ready(function() {
    $(function() {
        //categories navbar
        $(".header_bottom_nav_list_li").on("mouseenter mouseleave", function() {
            $(this).children().toggle();
            $(this).toggleClass("header_bottom_nav_list_li_hover");
        })
        for(let x of $(".header_bottom_nav_list_li_news_unit span")) {
            var textNav = $(x).text().split('');
            if(textNav.length > 19) {
                $(x).text(textNav.join('').slice(0, 19) + "...");
            }
        }
        //max-width page < 1050px
        $('.header_top_burger').click(function() {
            $('.header_bottom_nav_list').slideToggle(500);
            $('.header_bottom_nav_list').css('display', 'flex');
        })
    })
    $(function() {
        //buy buttons
        $(".content_main_news_products_unit_text_cost").on("mouseenter mouseleave", function() {
            $(this).toggleClass("content_main_news_products_unit_text_cost_1");
        })
        //arrows for scroll
        $("#news_arrow_right").click(function() {
            $('.content_main_news_products').animate({scrollLeft: `+=${$(".content_main_news_products_unit").outerWidth()+15}`});
        })
        $("#news_arrow_left").click(function() {
            $('.content_main_news_products').animate({scrollLeft: `-=${$(".content_main_news_products_unit").outerWidth()+15}`});
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
    $(function() {
        //footer section
            $(".footer_top_heading").on("click", function() {
                if($(document).width() <= 1050) {
                    $(this).siblings().slideToggle(500);
                }
            })
    })
})