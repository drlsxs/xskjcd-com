// JavaScript Document

$(function(){
	function imgs (){
		var pmW = $(window).width();
		if ( pmW <= 991 ){
			$('body').removeClass('hover');
			$('header .menu').hide();
			$('.subnav ul').hide();
		}else{
			$('body').addClass('hover');
			$('header .menu').show();
			$('.subnav ul').show();
		}
		var b_animate_1_left_h = $('.b1_animation .box .left').height();
		$('.b1_animation .box .left').css({"margin-top":-(b_animate_1_left_h/2)+"px"});
		var b_animate_1_right_h = $('.b1_animation .box .right').height();
		$('.b1_animation .box .right').css({"margin-top":-(b_animate_1_right_h/2)+"px"});
	}
	imgs();
	$(window).resize(function(){
		imgs();
	})
	for ( var x = 0; x<$("ul").length; x++){
		for( var y=0; y<$("ul").eq(x).find("li").length;y++){
			$("ul").eq(x).find("li").eq(y).addClass("li"+y);
		}
	}

	$('body.hover header .menu ul li').hover(function(){
		$(this).find('.ul').slideDown();
	},function(){
		$(this).find('.ul').stop().slideUp();
	})

	$('header .menu ul li').click(function(){

		if( $('body').hasClass('hover') ){

		}else{
			if( $('header .menu ul li .ul').is(':hidden') ){
				$('header .menu ul li .ul').show();
			}else{
				$('header .menu ul li .ul').hide();
			}
		}

	})
	$(".ydd_btn").click(function(){
		if ( $('header .menu').is(':hidden') ){
			$(this).addClass("click");
			$("header .menu").slideDown();
		}else{
			$(this).removeClass("click");
			$("header .menu").stop().slideUp();
			$('header .menu ul li .ul').hide();
		}
	})
	$('.subnav .biaoti span').click(function(){
		if ( $('.subnav ul').is(':hidden') ){
			$('.subnav ul').slideDown();
			$('.subnav .biaoti').addClass('active');
		}else{
			$('.subnav ul').stop().slideUp();
			$('.subnav .biaoti').removeClass('active');
		}
	})
	$(".hot .col-xs-3").eq(2).click(function(){
        if ( $(".dbbox .dbs.ewm-box").is(':hidden') ){
            $(".dbbox .dbs.ewm-box").slideDown();
            $(".dbbox .dbs.fenxiang-box").slideUp();
        }else{
            $(".dbbox .dbs.ewm-box").slideUp();
        }
    })
	$(".hot .col-xs-3").eq(3).find("a").click(function(){
        if ( $(".dbbox .dbs.fenxiang-box").is(':hidden') ){
            $(".dbbox .dbs.fenxiang-box").slideDown();
            $(".dbbox .dbs.ewm-box").slideUp();
        }else{
            $(".dbbox .dbs.fenxiang-box").slideUp();
        }
   })
	$("img.lazy").lazyload({
	  	effect: "fadeIn",
	  	threshold : 200,
		failurelimit : 10
	});
	$(".items").lazyload({
	  	effect: "fadeIn",
	  	threshold : 200,
		failurelimit : 10
	});
	$(".rolling-lazy img").lazyload({
    	//placeholder:"images/banner.gif",
    	event:"sporty",
    	effect:"fadeIn",
    	threshold:100,
    	failurelimit:9
    });
    $(".rolling-lazy .items").lazyload({
    	//placeholder:"images/banner.gif",
    	event:"sporty",
    	effect:"fadeIn",
    	threshold:100,
    	failurelimit:9
    });
    $(window).on("load",function(){
		var timeout = setTimeout(function(){$(".rolling-lazy img").trigger("sporty")},1000);
	});
	$(window).on("load",function(){
		var timeout = setTimeout(function(){$(".rolling-lazy .items").trigger("sporty")},1000);
	});
	$('.content .section').each(function(i){
		var z = i+1;
		$('.content .section').eq(i).attr('id','section' + z);
	})
	$('.content .sections').each(function(i){
		var z = i+1;
		$('.content .sections').eq(i).attr('id','sections' + z);
	})
	$('#section4 .title-2 ul li').each(function(i){
		$('#section4 .title-2 ul li').eq(i).click(function(){
			$('#section4 .title-2 ul li').removeClass('active');
			$('#section4 .title-2 ul li').eq(i).addClass('active');
			$('#section4 .pictrue-3-box').hide();
			$('#section4 .pictrue-3-box').eq(i).show();
		})
	})
  $('#section4 .pictrue-3-box').each(function (i) {
    $('#section4 .pictrue-3-box').hide();
    $('#section4 .pictrue-3-box').eq(0).show();
  });
	$('.pictrue-6 img').css({"max-width":"100%"});


});












/* 合肥秀 站网络科技有限公司 */
/* 精品与原创织梦模板提供商，一站式建站 */
/* 主营业务：快速建站、快排、高权重域名、海外服务器 */
/* 麦 站网：Www.Xiuz hanwang.Com */
/* 主机/服务器：Www.xiu zhanyun.Com */
/* 域名抢注：Www.xiu zhanmi.Com */
/* QQ：236192 8288  835 971066 */
