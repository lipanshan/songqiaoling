// =====================================
// 自定义滚动条 编写：李盼山
// =====================================

$(function (){
	function srcollBar (elem,contElem){
		var nowPosition = 0;
		var scrollBarMinHeight = 40;
		var proportion = 1;
		function computeScrollHeight(){
			
		}
		computeScrollHeight();
		elem.bind('mousedown',function (ev){
			computeScrollHeight();
			var clickPointT =  ev.pageY - elem.offset().top;
			$(document).bind('mousemove',function (ev){
				var moveT = ev.pageY - clickPointT- elem.parent().offset().top;
				if(moveT<=5){
					moveT = 0;
				}
				if(moveT > elem.parent().height()-elem.height() -5){
					moveT = elem.parent().height() - elem.height();
				}
				var contentMoveT = Math.ceil(moveT/(elem.height() - elem.parent().height())*(contElem.height() - contElem.parent().height()));
				elem.css('top',moveT +'px');
				contElem.css('top', -contentMoveT + 'px');
				nowPosition = moveT;
				ev.preventDefault();
			});
			$(document).bind('mouseup',function (ev){
				$(document).unbind('mousemove');
				$(document).unbind('mouseup');
				ev.preventDefault();
			});
			ev.preventDefault();
		});
		contElem.parent().bind('mousewheel DOMMouseScroll',function (ev){
			var downUp;
			elem.focus();
			computeScrollHeight();
			if (ev.originalEvent.wheelDelta){
				downUp = ev.originalEvent.wheelDelta > 0 ? true : false;
			} else {
				downUp = ev.originalEvent.detail > 0 ? false : true;
			}
			if (downUp){
				nowPosition-=20;
				if(nowPosition<=5){
					nowPosition =  0;
				}
			} else {
				nowPosition +=20;
				console.log(nowPosition,elem.parent().height()-elem.height() -5);
				if(nowPosition>= elem.parent().height()-elem.height() -5){
					nowPosition = elem.parent().height() - elem.height();
				}
			}
			var contentMoveT = Math.ceil(nowPosition/(elem.height() - elem.parent().height())*(contElem.height() - contElem.parent().height()));
			elem.css('top',nowPosition +'px');
			contElem.css('top', -contentMoveT + 'px');
			ev.preventDefault();
		});
	}
	srcollBar($('#srcollBar'),$('#scrollContent'));
});
