	function addShop(){
		Cookiearr = getAllCookie();
		var tempFnx = Handlebars.compile($("#xtp").html());
		var htmlstr = tempFnx(Cookiearr);
		$("#insul").html(htmlstr);
	}
	addShop();
				var $flnavs = $("#floornav li");
				var $goods = $(".nobanout .goods");
				var $noban = $(".nobanout .noban");
				var ifNeed = true;
				//关于我们 点击事件
		  		$(".guanyu").find(".meme").mouseenter(function() {
					
					var index = $(this).index(".meme");
					
					$(".guanyu .memeout").eq(index).css({display: "block"});
				}).mouseleave(function() {
					var index = $(this).index(".meme");
					$(".guanyu .memeout").eq(index).css({display: "none"});
				});
				//宋仲基点击下载
				$(".szjload").click(function(){
					$(".szjp2").css({display: "block"});
					$(".szjclose").css({display: "block"});
					
				});
				$(".szjclose").click(function(){
					$(".szjp2").css({display: "none"});
					$(".szjclose").css({display: "none"});
				});
				//每日签到
				$("#daywr").click(function() {
					$(".zhezhao").css({display: "block"});
					$(".qiandao").css({display: "block"});
					$(".shop").css({display: "none"});
				});
				$("#close").click(function() {
					$(".zhezhao").css({display: "none"});
					$(".qiandao").css({display: "none"});
				});
				//滚动出现回到顶部图标
				$(window).scroll(function() {
					var st = $(window).scrollTop();
					if(st > 200) {
						$("#totop").css({display: "block"});
					} else{
						$("#totop").css({display: "none"});
					}
					if(st > 500) {
						$("#floornav").css({display: "block"});
					}else {
						$("#floornav").css({display: "none"});
					}
					
					if(ifNeed == true) {
						for(var i = 0; i<4; i++) {
							var boundValue = $goods.eq(i).offset().top - 200;
							if(st < boundValue) {
								
									$flnavs.eq(i).addClass("select").siblings().removeClass("select");
			
								
								break;
							}
						}
					}
				});
				//回到顶部
				$("#totop").click(function(){
					$("body, html").animate({scrollTop: 0});
				});
				
				//右部条形栏动画
				$(".meifix li").mouseenter(function() {
					$(this).find(".cangout").stop(true).css({right: 80,display:"block"}).animate({right:40});
				}).mouseleave(function(){
					$(this).find(".cangout").stop(true).css({display: "none"});
				});
				$("#cartsh").click(function() {
					if($(".shop").css("display") == "block"){
						
					} else {
						$(".shop").stop(true).css({left: 0,display:"block"}).animate({left: -285});
					}
						
					
				});
				$("#shopclose").click(function() {
						$(".shop").stop(true).animate({left: 0},function() {
							$(this).css({display: "none"});
						});
				})