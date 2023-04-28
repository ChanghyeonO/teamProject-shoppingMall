// <![CDATA[
    window.jQuery || document.write('<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"><\/script>')
// ]]>
$(function(){
    //smooth scroll
    var _touch = ('ontouchstart' in document) ? 'touchstart' : 'click';
    $('a[href^=\\#].btn-scroll-top').on(_touch,function() {
        $(this).blur();
        if(this.hash=='#top'){
            $('html,body').animate({scrollTop:0, easing:'linear'},'normal');
        } else {
            var $target = $(this.hash);
            var targetOffset = $target.get( 0 ).offsetTop;
            $('html,body').animate({scrollTop:targetOffset , easing:'linear'},'normal');
        }
        return false;
    });
});

/*バックグランド設置　type02*/
    function img_bg02(){
        $('.js_pr_kin-bg').each(function(){
            var mv_src = $(this).find('.js_pr_kin-bg-ref').attr('src');
            $(this).find('.js_pr_kin-bg-tgt').css({
                'background-image':'url('+mv_src+')',
                'background-repeat':'no-repeat',
                'background-position':'center center',
                'background-size': 'cover'
            });
            if($(this).hasClass('js_pr_kin-bg-tgt')){
                $(this).css({
                    'background-image':'url('+mv_src+')',
                    'background-repeat':'no-repeat',
                    'background-position':'center center',
                    'background-size': 'cover'
                });
            }
        });
    }

/*fadeアイテム*/
var top_fade_item = [];
var top_delay_flg = 1,
top_delay_time = 180;

function top_fade_set(){
top_fade_item = [];
$('.js_pr_kin-plc-fade').each(function(){
    var offtop_value = $(this).offset().top;
    top_fade_item.push(offtop_value);
});
}

function top_fade_action($top_delay_time_def){
var scroll_value = $(window).scrollTop(),
           win_h = $(window).outerHeight(),
       adj_value = (scroll_value + win_h)-(win_h/6);

for(i=0; i<top_fade_item.length; i++) {
    if(adj_value >= top_fade_item[i]){
        var now_value = top_fade_item[i];
        if(now_value <= top_fade_item[i-1]){
            $('.js_pr_kin-plc-fade').eq(i)
            .css({'transition-delay': top_delay_time*top_delay_flg +'ms',
                  '-o-transition-delay': top_delay_time*top_delay_flg +'ms',
                  '-ms-transition-delay': top_delay_time*top_delay_flg +'ms',
                  '-moz-transition-delay': top_delay_time*top_delay_flg +'ms',
                  '-webkit-transition-delay': top_delay_time*top_delay_flg +'ms'})
            .addClass('js_pr_kin-plc-fadein');
            top_delay_flg++;
        }else{
            if(!$('.js_pr_kin-plc-fade').hasClass('pr_kin-plc-int-ttl')){
                $('.js_pr_kin-plc-fade').eq(i).addClass('js_pr_kin-plc-fadein');
            }else{
                $('.js_pr_kin-plc-fade').eq(i)
                .css({'transition-delay': $top_delay_time_def +'ms',
                  '-o-transition-delay': $top_delay_time_def +'ms',
                  '-ms-transition-delay': $top_delay_time_def +'ms',
                  '-moz-transition-delay': $top_delay_time_def +'ms',
                  '-webkit-transition-delay': $top_delay_time_def +'ms'}).addClass('js_pr_kin-plc-fadein');
            }
            top_delay_flg = 1;
        }
    }
}
}
$(window).on('load',function(){
    top_fade_set();
    top_fade_action(300);
});

$(window).on('scroll',function(){
    top_fade_action(300);
});

$(window).on('resize',function(){
    top_fade_set();
});

/*fadeアイテム*/
    var fade_item = [];
    var delay_flg = 1,
        delay_time = 180;

    function fade_set(){
        fade_item = [];
        $('.js_pr_kin-plc-fade').each(function(){
            var offtop_value = $(this).offset().top;
            fade_item.push(offtop_value);
        });
    }

    function fade_action($delay_time_def){
        var scroll_value = $(window).scrollTop(),
                   win_h = $(window).outerHeight(),
               adj_value = (scroll_value + win_h)-(win_h/6);

        for(i=0; i<fade_item.length; i++) {
            if(adj_value >= fade_item[i]){
                var now_value = fade_item[i];
                if(now_value <= fade_item[i-1]){
                    $('.js_pr_kin-plc-fade').eq(i)
                    .css({'transition-delay': delay_time*delay_flg +'ms',
                          '-o-transition-delay': delay_time*delay_flg +'ms',
                          '-ms-transition-delay': delay_time*delay_flg +'ms',
                          '-moz-transition-delay': delay_time*delay_flg +'ms',
                          '-webkit-transition-delay': delay_time*delay_flg +'ms'})
                    .addClass('js_pr_kin-plc-fadein');
                    delay_flg++;
                }else{
                    if(!$('.js_pr_kin-plc-fade').hasClass('pr_kin-plc-int-ttl')){
                        $('.js_pr_kin-plc-fade').eq(i).addClass('js_pr_kin-plc-fadein');
                    }else{
                        $('.js_pr_kin-plc-fade').eq(i)
                        .css({'transition-delay': $delay_time_def +'ms',
                          '-o-transition-delay': $delay_time_def +'ms',
                          '-ms-transition-delay': $delay_time_def +'ms',
                          '-moz-transition-delay': $delay_time_def +'ms',
                          '-webkit-transition-delay': $delay_time_def +'ms'}).addClass('js_pr_kin-plc-fadein');
                    }
                    delay_flg = 1;
                }
            }
        }
    }

/*イベントセット*/
    // img_bg('.pr_kin-plc-type-a .pr_kin-plc-mv-item','.pr_kin-plc-mv-img');
    // img_bg('.pr_kin-plc-type-a .pr_kin-plc-parts-s-item','img');
    // img_bg('.pr_kin-plc-type-b .pr_kin-plc-mv-item','.pr_kin-plc-mv-img');
    // img_bg('.pr_kin-plc-type-b .pr_kin-plc-parts-s-item','img');
    img_bg02();

    $(window).on('load ',function(){
        fade_set();
        fade_action(700);
        // hero_head('.pr_kin-plc-type-a .pr_kin-plc-mv-item');
        // hero_head('.pr_kin-plc-type-b .pr_kin-plc-mv-item');
        // hero_head('.pr_kin-plc-type-c .pr_kin-plc-mv-item');
    });

    $(window).on('scroll',function(){
        fade_action(300);
    });

    $(window).on('resize',function(){
        fade_set();
        // hero_head('.pr_kin-plc-type-a .pr_kin-plc-mv-item');
        // hero_head('.pr_kin-plc-type-b .pr_kin-plc-mv-item');
        // hero_head('.pr_kin-plc-type-c .pr_kin-plc-mv-item');
    });