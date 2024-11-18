var ori='', used=[0, 0, 0, 0, 0];
function pic(a){
	if(ori=='')ori=document.querySelector('#original').innerHTML;
	var s, t;
	if(a==0){
		s='既然你覺得你是紅毛猩猩，那我準備香蕉當生日禮物就好了', t='banana.jpg';
	}
	if(a==1){
		s='既然你覺得你是青蛙，那我準備蒼蠅當生日禮物就好了', t='fly.jpg';
	}
	if(a==2){
		s='既然你覺得你是老鼠，不！這我！那我準備起司當生日禮物就好了', t='cheese.png';
	}
	if(a==3){
		s='既然你覺得你是長毛象，那我準備灌木叢當生日禮物就好了', t='grass.jpg';
	}
	if(a==4){
		if(used[a]==1){
			s='';
			var cnt=0;
			for(var i=0; i<art.length; ++i){
				if(i%100==0)s+='<div class="same-line">';
				if(art[i]=='#')s+='<div class="image-small"><img src="cookie.JPG"></div>', ++cnt;
				if(art[i]=='.')s+='<div class="image-small"><img></div>';
				if(i%100==99)s+='</div>';
			}
			document.querySelector('#original').innerHTML='<h1 align="center">生日快樂！！！</h1><p align="center">恭喜過關！既然你是華方綾，我準備了'+String(cnt)+'包營養口糧當生日禮物</p>'+s;
			return;
		}
		document.querySelector('#t1').innerHTML='但是...看清楚題目啦...你也太好騙了吧...';
		document.querySelector('#t0').innerHTML='請選出<font color="red">紅毛猩猩</font>';
		setInterval(monkey, 1000);
		return;
	}
	used[a]=1;
	document.querySelector('#original').innerHTML='<p align="center">'+s+'</p><div class="same-line"><div class="image-center"><img src="'+t+'"></div></div><div class="same-line"><button onclick="back()">返回</button></div>';
}

function back(){
	var tt=0;
	for(var i=0; i<4; ++i)tt+=used[i];
	if(tt<4)document.querySelector('#original').innerHTML=ori;
	else document.querySelector('#original').innerHTML=ori+'<h1 align="center">好啦！我知道這才是你啦！</h1><div class="same-line"><div class="image-center"><img src="janette.jpg" onclick="pic(4)"></div></div><h2 align="center" id="t1"></h2>';
}

var mkcnt=0, realj=0;
function monkey(){
	if(mkcnt>6){
		return;
	}
	if(mkcnt==6)used[4]=1, pic(0);
	else if(mkcnt&1)document.querySelector('#t0').innerHTML='請選出<font color="red">紅毛猩猩</font>';
	else document.querySelector('#t0').innerHTML='請選出<font color="black">紅毛猩猩</font>';
	++mkcnt;
}
