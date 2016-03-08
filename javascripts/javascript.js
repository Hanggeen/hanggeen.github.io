$(document).ready(function(){
	var winWidth;
	var timer;
	function scrolling(screenHeight){
		clearInterval(timer);
		timer = setInterval(function(){
		var osTop= document.documentElement.scrollTop || document.body.scrollTop;
		var ispeed=Math.floor(-(osTop-screenHeight)/8);
		if (osTop-screenHeight<8 && osTop-screenHeight>0)
			ispeed=-1;
		if (osTop-screenHeight>-8 && osTop-screenHeight<0)
			ispeed=1;
		document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
		if(osTop == screenHeight){
			clearInterval(timer);
		}
		},10);

	}
	$(function(){
		$('.nav ul li a').click(function(){
			var screenHeight=document.getElementById(String(this.id)+"Content").offsetTop;
			scrolling(screenHeight-80);
			return false;
		})
	})



	// window.onresize=function(){
	// 	if (window.innerWidth){
	// 		winWidth = window.innerWidth;
	// 		winHeight = window.innerHeight ;
	// 		document.getElementById("message").innerHTML=winWidth+","+winHeight;
	// 	}
	// 	else if ((document.body) && (document.body.clientWidth)){
	// 		winWidth = document.body.clientWidth;
	// 		winHeight = document.body.clientHeight;
	// 		document.getElementById("message").innerHTML=winWidth+","+winHeight;
	// 	}
	// }
	window.onscroll=function(){
		var scrollTop=0;
		if(document.documentElement&&document.documentElement.scrollTop){
			scrollTop=document.documentElement.scrollTop;
		}
		else if(document.body){
			scrollTop=document.body.scrollTop;
		}
		document.body.style.backgroundPosition="0px "+-scrollTop*0.1+"px";
	}

});

