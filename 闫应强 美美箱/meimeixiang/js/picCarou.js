

//插件轮播图
//ogj参数
//roundSelector 小圆点集合
//boxSelector ，banner外部容器选择器

$.fn.extend({
	playImages: function(obj) {
		
				var index = 0;
				var preindex = 0;
				var timer = null;
				$imgs = $(this);
				$navs = $(obj.roundSelector);
				
				function leftPlay() {
					$imgs.eq(preindex).stop(true).animate({left: -$imgs.width()});
					$imgs.eq(index).stop(true).css({left: $imgs.width()}).animate({left: 0});
					$navs.eq(index).css({background: "#FF5073"}).siblings().css({background:"#fff"});
				}
				function rightPlay() {
					$imgs.eq(preindex).stop(true).animate({left: $imgs.width()});
					$imgs.eq(index).stop(true).css({left: -$imgs.width()}).animate({left: 0});
					$navs.eq(index).css({background: "#FF5073"}).siblings().css({background:"#fff"});
				}
				function moveRight() {
					index++;
					if(index > $imgs.size()-1){
						index = 0;
						preindex = $imgs.size()-1;
					}
					leftPlay();
					preindex = index;
				}
				function moveLeft() {
					index--;
					if(index < 0) {
						index = $imgs.size()-1;
						index = 0;
					}
					rightPlay();
					preindex = index;
				}
				timer = setInterval(moveRight, 3000);
				$(obj.boxSelector).mouseenter(function(){
					clearInterval(timer);
				}).mouseleave(function() {
					timer = setInterval(moveRight, 3000);
				});
				$navs.click(function() {
					index = $(this).index();
					if((index > preindex || (index == 0 && preindex == ($imgs.size()-1)))&& !(index == ($imgs.size()-1) && preindex == 0)){
						leftPlay();
						preindex = index;
					} else if(index < preindex || (index == ($imgs.size()-1) && preindex == 0) ) {
						rightPlay();
						preindex = index;
					}
				});
	}
});
