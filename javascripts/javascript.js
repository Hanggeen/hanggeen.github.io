$(document).ready(function(){
	var winWidth;
	var soft = true;
	var scrollTimer;//这个必须是全局变量，因为每次点击的时候都可能出现上一次的timer还没有结束，
	function scrolling(screenHeight){
		clearInterval(scrollTimer);
		scrollTimer = setInterval(function(){
		var osTop= document.documentElement.scrollTop || document.body.scrollTop;
		var ispeed=Math.floor(-(osTop-screenHeight)/8);
		if (osTop-screenHeight<8 && osTop-screenHeight>0)
			ispeed=-1;
		if (osTop-screenHeight>-8 && osTop-screenHeight<0)
			ispeed=1;
		document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
		if(osTop == screenHeight){
			clearInterval(scrollTimer);
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

		//当滚动到圆形进度条的时候自动填满
		if (((document.getElementById("soft").offsetTop-document.body.scrollTop)<500)&&(soft)){
			loadProgress(90,"ps","#7ecef4");
    			loadProgress(70,"ai","#f5ae4a");
    			loadProgress(70,"ppt","#d04524");
    			loadProgress(60,"word","#2b5597");
    			soft = false;
		}
		//alert(document.getElementById("soft").offsetTop);
	}


	function loadProgress(progress,idName,color){
			var c=document.getElementById(idName)
			var ctx=c.getContext("2d");
			var deg = -50;
			var lastDeg = ((progress)*2-50);
			var timer;//就在这个timer = setInterval的作用域定义。在外面会乱套的。
			timer = setInterval(function(){
				ctx.fillStyle=color;//谨记这个是要写在前面先确定颜色了再fill
				ctx.clearRect(0,0,150,150);//每次都要清楚画布，不然会有锯齿
				ctx.beginPath();
    				ctx.arc(75,75,65,-Math.PI*0.5,Math.PI*deg*0.01,false); // 绘制
    				ctx.arc(75,75,50,Math.PI*deg*0.01,-Math.PI*0.5,true);   
    				//ctx.stroke();这个会描边。而我们不需要描边
    				ctx.fill();
    				deg = deg+1;
				//alert(deg+"aaa"+lastDeg);
				if(deg > lastDeg){    //这里使用大于，是因为当等于时候也要执行一次。
					clearInterval(timer);
				}
			},10);
    		}

    		





});

