$(document).ready(function(){
    $('section.store div ul li i').hover(function(){
        $(this).toggleClass('black');
        $(this).toggleClass('red');
    });


    $('section.store div ul li:nth-of-type(1)').hover(function(){
        $('section.store div ol li:nth-of-type(1) img').toggleClass('Active20');
    })
    $('section.store div ul li:nth-of-type(2)').hover(function(){
        $('section.store div ol li:nth-of-type(2) img').toggleClass('Active20');
    })
    $('section.store div ul li:nth-of-type(3)').hover(function(){
        $('section.store div ol li:nth-of-type(3) img').toggleClass('Active20');
    })
    $('section.store div ul li:nth-of-type(4)').hover(function(){
        $('section.store div ol li:nth-of-type(4) img').toggleClass('Active20');
    })
    //근처갔을때 opcity 20%

    $('section.store div ul li:nth-of-type(1) i').hover(function(){
        $('section.store div ol li:nth-of-type(1) img').removeClass('Active20');
        $('section.store div ol li:nth-of-type(1) img').addClass('Active50');
    },function(){
        $('section.store div ol li:nth-of-type(1) img').removeClass('Active50');
        $('section.store div ol li:nth-of-type(1) img').addClass('Active20');
    })
    $('section.store div ul li:nth-of-type(2) i').hover(function(){
        $('section.store div ol li:nth-of-type(2) img').removeClass('Active20');
        $('section.store div ol li:nth-of-type(2) img').addClass('Active50');
    },function(){
        $('section.store div ol li:nth-of-type(2) img').removeClass('Active50');
        $('section.store div ol li:nth-of-type(2) img').addClass('Active20');
    })
    $('section.store div ul li:nth-of-type(3) i').hover(function(){
        $('section.store div ol li:nth-of-type(3) img').removeClass('Active20');
        $('section.store div ol li:nth-of-type(3) img').addClass('Active50');
    },function(){
        $('section.store div ol li:nth-of-type(3) img').removeClass('Active50');
        $('section.store div ol li:nth-of-type(3) img').addClass('Active20');
    })
    $('section.store div ul li:nth-of-type(4) i').hover(function(){
        $('section.store div ol li:nth-of-type(4) img').removeClass('Active20');
        $('section.store div ol li:nth-of-type(4) img').addClass('Active50');
    },function(){
        $('section.store div ol li:nth-of-type(4) img').removeClass('Active50');
        $('section.store div ol li:nth-of-type(4) img').addClass('Active20');
    })
    //map아이콘 마우스 hover 20%삭제, 50%add

    $('section.store div ul li:nth-of-type(1) i').click(function(){
        $('section.store div > i').addClass('Active100'); //x 나타내기
        $('section.store div ul li').addClass('Active0'); //map아이콘 숨기기
        $('section.store div ol li:nth-of-type(1) img').removeClass('Active50');
        $('section.store div ol li:nth-of-type(1) img').addClass('Active100');
        $('section.store div ol li:nth-of-type(1) div').addClass('addressActive');
    })
    $('section.store div ul li:nth-of-type(2) i').click(function(){
        $('section.store div > i').addClass('Active100');
        $('section.store div ul li').addClass('Active0');
        $('section.store div ol li:nth-of-type(2) img').removeClass('Active50');
        $('section.store div ol li:nth-of-type(2) img').addClass('Active100');
        $('section.store div ol li:nth-of-type(2) div').addClass('addressActive');
    })
    $('section.store div ul li:nth-of-type(3) i').click(function(){        
        $('section.store div > i').addClass('Active100');
        $('section.store div ul li').addClass('Active0');
        $('section.store div ol li:nth-of-type(3) img').removeClass('Active50');
        $('section.store div ol li:nth-of-type(3) img').addClass('Active100');
        $('section.store div ol li:nth-of-type(3) div').addClass('addressActive');
    })
    $('section.store div ul li:nth-of-type(4) i').click(function(){
        $('section.store div > i').addClass('Active100'); 
        $('section.store div ul li').addClass('Active0');
        $('section.store div ol li:nth-of-type(4) img').removeClass('Active50');
        $('section.store div ol li:nth-of-type(4) img').addClass('Active100');
        $('section.store div ol li:nth-of-type(4) div').addClass('addressActive');
    })
    //opcity100% 매장 사진 나타내기 

    $('section.store div > i').click(function(){
        $('section.store div ol li img').removeClass('Active100');
        $('section.store div ol li div').removeClass('addressActive');
        $('section.store div > i').removeClass('Active100'); //x 숨기기
        $('section.store div ul li').removeClass('Active0'); //map아이콘 나타내기
    });
    //매장 사진 숨기기

    $('section.product > ul li').click(function(){
        $('section.product > ul li').removeClass('productMenuActive');
        $(this).addClass('productMenuActive');

        $('section.product ol > li').removeClass('productActive');
        $('section.product ol > li').eq($('section.product > ul li').index(this)).addClass('productActive');
    });

    $('header div.head_top div nav ul li').mouseenter(function(){
        $('header ol > li').removeClass('topMenuActive');
        $('header ol > li').eq($('header div.head_top div nav ul li').index(this)).addClass('topMenuActive');
    });
    $('header div.head_top div nav ul li').mouseleave(function(){
        $('header ol > li').removeClass('topMenuActive');
    });
})
