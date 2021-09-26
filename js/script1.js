$(document).ready(function() {


// menu 
$('.menu>li').mouseover(function(){//메인메뉴에 마우스가 올라가면 실행되는 함수
$(this).children('.sub').stop().slideDown('slow');
});
$('.menu>li').mouseleave(function(){//마우스가 사라지면 실행되는 함수
$(this).children('.sub').stop().slideUp('slow');
});




//artist video
var slide=$('ul.slide');
	var slideWidth=slide.width();
	var slideList=$('ul.slide>li');
	var slideListWidth=$('ul.slide>li').width()+slideWidth*0.02;
	var current=0;
	var setInterval01;
	
	var btnList=$('ul.btn>li');
	

	
	function next(){
		slide.animate({left:-slideListWidth},100, function(){
			$('ul.slide>li:first').insertAfter('ul.slide>li:last');
			slide.css('left',0);
		});
		
		$('.fade>.fd:first').insertAfter('.fade>.fd:last');
		$('.none>.nn:first').insertAfter('.none>.nn:last');
		
		btnList.removeClass('bg_black');
		current++;
		if(current == btnList.size()){current=0};
		btnList.eq(current).addClass('bg_black');
	}
	
	function prev(){		
		$('ul.slide>li:last').insertBefore('ul.slide>li:first');
		slide.css('left',-slideListWidth);	
		slide.animate({left:0},100);
		
		$('.fade>.fd:last').insertBefore('.fade>.fd:first');
		$('.none>.nn:last').insertBefore('.none>.nn:first');
		
		btnList.removeClass('bg_black');
		current--;
		if(current == -btnList.size()){current=0};
		btnList.eq(current).addClass('bg_black');
	}
	
	$('.prev').click(function(){
		prev();
	})
	
	$('.next').click(function(){
		next();
	})
	
	
	
	var fd=$('.fade>.fd');
	var nn=$('.none>.nn');
	var none=$('.none');
	
	slideList.mouseover(function(){
		var th=$(this);
		var i=th.index();
		var fdi=$('.fade>.fd').eq(i);
		
		fd.removeClass('bl');
		fdi.addClass('bl');
	})
	
	fd.click(function(){
		var th=$(this);
		var i=th.index();
		var nni=$('.none>.nn').eq(i); //이게 또 밖에서 저장되는 전역변수랑 안에서 저장되는 지역변수와의 차이인가보네.....offset이랑 position도 그러더니...ㅡㅡ 어휴 짜증 ㅋㅋㅋ
		
		$('html').css('overflow-y','hidden');
		
		nn.removeClass('bl');
		nni.css('opacity','0').stop().animate({opacity:1},500);
		nni.addClass('bl');
		$('.bg_black').css('opacity','0').stop().animate({opacity:0.5},500);
		$('.bg_black').addClass('bl');
	})
	
	$('.bg_black').click(function(){
		nn.removeClass('bl');
		nn.css('opacity','0').stop()
		$('.bg_black').removeClass('bl');
		$('.bg_black').css('opacity','0').stop()
		$('html').css('overflow-y','scroll');
	})
	
	//arist album
$('.section01').toggle(function(){				
			$('.section01').stop().animate({width:1160},500); 
			$(this).find('.first_visual').fadeOut().removeClass('bl');
			$(this).find('.click_visual').fadeIn().addClass('bl');
			$('.pr').css('display','block');
			$('.nx').css('display','block');
			$('.bt1').css('display','block');
		
		},function(){
			$('.section01').stop().animate({width:200},500);
			$(this).find('.first_visual').fadeIn().addClass('bl');
			$(this).find('.click_visual').fadeOut().removeClass('bl');
			$('.pr').css('display','none');
			$('.nx').css('display','none');
			$('.bt1').css('display','none');			
			
		});
		
		$('.section02').toggle(function(){		
			$('.visual').stop().animate({left:-240},500);
			$('.section02').stop().animate({width:1160},500); 
			$(this).find('.first_visual2').fadeOut().removeClass('bl');
			$(this).find('.click_visual2').fadeIn().addClass('bl');
			$('.pr1').css('display','block');
			$('.nx1').css('display','block');
			$('.bt2').css('display','block');
			
		},function(){
			$('.visual').stop().animate({left:0},500);
			$('.section02').stop().animate({width:200},500);
			$(this).find('.first_visual2').fadeIn().addClass('bl');
			$(this).find('.click_visual2').fadeOut().removeClass('bl');
			$('.pr1').css('display','none');
			$('.nx1').css('display','none');
			$('.bt2').css('display','none');			
		
		});
		
		$('.section03').toggle(function(){		
			$('.visual').stop().animate({left:-480},500);
			$('.section03').stop().animate({width:1160},500); 
			$(this).find('.first_visual3').fadeOut().removeClass('bl');
			$(this).find('.click_visual3').fadeIn().addClass('bl');
			$('.pr2').css('display','block');
			$('.nx2').css('display','block');
			$('.bt3').css('display','block');
		
		},function(){
			$('.visual').stop().animate({left:0},500);
			$('.section03').stop().animate({width:200},500);
			$(this).find('.first_visual3').fadeIn().addClass('bl');
			$(this).find('.click_visual3').fadeOut().removeClass('bl');
			$('.pr2').css('display','none');
			$('.nx2').css('display','none');
			$('.bt3').css('display','none');			
		
		});
		
		$('.section04').toggle(function(){		
			$('.visual').stop().animate({left:-720},500);
			$('.section04').stop().animate({width:1160},500);
			$(this).find('.first_visual4').fadeOut().removeClass('bl');
			$(this).find('.click_visual4').fadeIn().addClass('bl');
			$('.pr3').css('display','block');
			$('.nx3').css('display','block');
			$('.bt4').css('display','block');
		
		},function(){
			$('.section04').stop().animate({width:200},500);
			$('.visual').stop().animate({left:0},500);
			$(this).find('.first_visual4').fadeIn().addClass('bl');
			$(this).find('.click_visual4').fadeOut().removeClass('bl');
			$('.pr3').css('display','none');
			$('.nx3').css('display','none');
			$('.bt4').css('display','none');			
	
			
		});
		
		$('.section05').toggle(function(){		
			$('.visual').stop().animate({left:-960},500);
			$('.section05').stop().animate({width:1160},500); 
			$(this).find('.first_visual5').fadeOut().removeClass('bl');
			$(this).find('.click_visual5').fadeIn().addClass('bl');
			$('.pr4').css('display','block');
			$('.nx4').css('display','block');
			$('.bt5').css('display','block');
	
		},function(){
			$('.section05').stop().animate({width:200},500);
			$('.visual').stop().animate({left:0},500);
			$(this).find('.first_visual5').fadeIn().addClass('bl');
			$(this).find('.click_visual5').fadeOut().removeClass('bl');
			$('.pr4').css('display','none');
			$('.nx4').css('display','none');
			$('.bt5').css('display','none');			
	
		});
		
		
		
		var visual=$('ul.slide>li'); // 슬라이드 이미지
		var visual2=$('ul.slide2>li'); // 슬라이드 이미지
		var visual3=$('ul.slide3>li'); // 슬라이드 이미지
		var visual4=$('ul.slide4>li'); // 슬라이드 이미지
		var visual5=$('ul.slide5>li'); // 슬라이드 이미지
		var button1=$('ul.bt1>li'); 	 // 버튼
		var button2=$('ul.bt2>li'); 	 // 버튼
		var button3=$('ul.bt3>li'); 	 // 버튼
		var button4=$('ul.bt4>li'); 	 // 버튼
		var button5=$('ul.bt5>li'); 	 // 버튼
		var leftBtn=$('li.pr');
		var leftBtn2=$('li.pr1');
		var leftBtn3=$('li.pr2');
		var leftBtn4=$('li.pr3');
		var leftBtn5=$('li.pr4');
		var rightBtn=$('li.nx');
		var rightBtn2=$('li.nx1');
		var rightBtn3=$('li.nx2');
		var rightBtn4=$('li.nx3');
		var rightBtn5=$('li.nx4');
		var current1=0; // 현재 보이는 이미지
		var current2=0; //현재 보이는 이미지
		var current3=0; // 현재 보이는 이미지
		var current4=0; // 현재 보이는 이미지
		var current5=0; // 현재 보이는 이미지
		var setIntervalId1; // clearInterval을 쓰기 위해 변수명이 필요함
		var setIntervalId2; // clearInterval을 쓰기 위해 변수명이 필요함
		var setIntervalId3; // clearInterval을 쓰기 위해 변수명이 필요함
		var setIntervalId4; // clearInterval을 쓰기 위해 변수명이 필요함
		var setIntervalId5; // clearInterval을 쓰기 위해 변수명이 필요함
	
	
		timer1();
		function timer1(){
			setIntervalId1=setInterval(function(){
				var prev=visual.eq(current1);
				var pn=button1.eq(current1);  
				move(prev, 0, '-100%');
				pn.removeClass('on'); 
			
				current1++;
				
				if(current1 == visual.size()) current1=0;
				
				var next=visual.eq(current1);
				var pnn=button1.eq(current1); 
				move(next, '100%',0);
				pnn.addClass('on');
	
			}, 3000);
		};
		
		timer2();
		function timer2(){
			setIntervalId2=setInterval(function(){
				var prev=visual2.eq(current2);
				var pn=button2.eq(current2);  
				move(prev, 0, '-100%');
				pn.removeClass('on'); 
			
				current2++;
				
				if(current2 == visual2.size()) current2=0;
				
				var next=visual2.eq(current2);
				var pnn=button2.eq(current2); 
				move(next, '100%',0);
				pnn.addClass('on');
	
			}, 3000);
		};
		
		timer3();
		function timer3(){
			setIntervalId3=setInterval(function(){
				var prev=visual3.eq(current3);
				var pn=button3.eq(current3);  
				move(prev, 0, '-100%');
				pn.removeClass('on'); 
			
				current3++;
				
				if(current3 == visual3.size()) current3=0;
				
				var next=visual3.eq(current3);
				var pnn=button3.eq(current3); 
				move(next, '100%',0);
				pnn.addClass('on');
	
			}, 3000);
		};
		
		timer4();
		function timer4(){
			setIntervalId4=setInterval(function(){
				var prev=visual4.eq(current4);
				var pn=button4.eq(current4);  
				move(prev, 0, '-100%');
				pn.removeClass('on'); 
			
				current4++;
				
				if(current4 == visual4.size()) current4=0;
				
				var next=visual4.eq(current4);
				var pnn=button4.eq(current4); 
				move(next, '100%',0);
				pnn.addClass('on');
	
			}, 3000);
		};
		
		timer5();
		function timer5(){
			setIntervalId5=setInterval(function(){
				var prev=visual5.eq(current5);
				var pn=button5.eq(current5);  
				move(prev, 0, '-100%');
				pn.removeClass('on'); 
			
				current5++;
				
				if(current5 == visual5.size()) current5=0;
				
				var next=visual5.eq(current5);
				var pnn=button5.eq(current5); 
				move(next, '100%',0);
				pnn.addClass('on');
	
			}, 3000);
		};
		
		function move(tg, start, end){
			tg.css('left', start).stop().animate({left:end},{duration:500, ease:'easeOutCubic'});
		}   
		
		
	//버튼을 클릭 했을 때
	button1.click(function(){
		var tg=$(this);
		var i=tg.index(); 
		var cvi=$('ul.bt1>li.on').index();
		
		button1.removeClass('on'); 
		tg.addClass('on');
		
		if(i > cvi){
			move1(i); 
		}else{
			move11(i);
		};
		 
		});
	
	
	
	button2.on({click:function(){
		var tg=$(this);
		var i=tg.index(); // 선택한 버튼의 인덱스 번호
		var cvi=$('ul.bt2>li.on').index();
		
		button2.removeClass('on'); // 현재 활성화된 'on'이 두 번 생기는 일을 방지
		tg.addClass('on'); // 선택한 버튼에 'on' 활성화
		
		if(i > cvi){
			move2(i); 
		}else{
			move22(i);
		};
		 
		}
	});
	
	button3.on({click:function(){
		var tg=$(this);
		var i=tg.index(); // 선택한 버튼의 인덱스 번호
		var cvi=$('ul.bt3>li.on').index();
		
		button3.removeClass('on'); // 현재 활성화된 'on'이 두 번 생기는 일을 방지
		tg.addClass('on'); // 선택한 버튼에 'on' 활성화
		
		if(i > cvi){
			move3(i); 
		}else{
			move33(i);
		};
		
		
		}
	});
	
	button4.on({click:function(){
		var tg=$(this);
		var i=tg.index(); // 선택한 버튼의 인덱스 번호
		var cvi=$('ul.bt4>li.on').index();
		
		button4.removeClass('on'); // 현재 활성화된 'on'이 두 번 생기는 일을 방지
		tg.addClass('on'); // 선택한 버튼에 'on' 활성화
		
		if(i > cvi){
			move4(i); 
		}else{
			move44(i);
		};
		
		}
	});
	
	button5.on({click:function(){
		var tg=$(this);
		var i=tg.index(); // 선택한 버튼의 인덱스 번호
		var cvi=$('ul.bt5>li.on').index();
		
		button5.removeClass('on'); // 현재 활성화된 'on'이 두 번 생기는 일을 방지
		tg.addClass('on'); // 선택한 버튼에 'on' 활성화
		
		if(i > cvi){
			move5(i); 
		}else{
			move55(i);
		};
		 
		}
	});
	
	function move1(i){
		if(current1 == i) return // 현재 보이는 이미지가 i랑 같으면 종료
		
		var currentEl=visual.eq(current1);
		var nextEl=visual.eq(i)
		
		currentEl.css({left: 0}).stop().animate({left: '-100%'}, 500); // 현재 보이는 이미지 이동, %가 붙어서 ''안에 작성
		nextEl.css({left: '100%'}).stop().animate({left: 0}, 500); // 이미지 이동
		
		current1=i;
	}
	
	function move11(i){
		if(current1 == i) return // 현재 보이는 이미지가 i랑 같으면 종료
		
		var currentEl=visual.eq(current1);
		var nextEl=visual.eq(i)
		
		currentEl.css({left: 0}).stop().animate({left: '100%'}, 500); // 현재 보이는 이미지 이동, %가 붙어서 ''안에 작성
		nextEl.css({left: '-100%'}).stop().animate({left: 0}, 500); // 이미지 이동
		
		current1=i;
	}
	
	function move2(i){
		if(current2 == i) return // 현재 보이는 이미지가 i랑 같으면 종료
		
		var currentEl=visual2.eq(current2);
		var nextEl=visual2.eq(i)
		
		currentEl.css({left: 0}).stop().animate({left: '-100%'}, 500); // 현재 보이는 이미지 이동, %가 붙어서 ''안에 작성
		nextEl.css({left: '100%'}).stop().animate({left: 0}, 500); // 이미지 이동
		
		current2=i;
	}
	
	function move22(i){
		if(current2 == i) return // 현재 보이는 이미지가 i랑 같으면 종료
		
		var currentEl=visual2.eq(current2);
		var nextEl=visual2.eq(i)
		
		currentEl.css({left: 0}).stop().animate({left: '100%'}, 500); // 현재 보이는 이미지 이동, %가 붙어서 ''안에 작성
		nextEl.css({left: '-100%'}).stop().animate({left: 0}, 500); // 이미지 이동
		
		current2=i;
	}
	
	function move3(i){
		if(current3 == i) return // 현재 보이는 이미지가 i랑 같으면 종료
		
		var currentEl=visual3.eq(current3);
		var nextEl=visual3.eq(i)
		
		currentEl.css({left: 0}).stop().animate({left: '-100%'}, 500); // 현재 보이는 이미지 이동, %가 붙어서 ''안에 작성
		nextEl.css({left: '100%'}).stop().animate({left: 0}, 500); // 이미지 이동
		
		current3=i;
	}
	
	function move33(i){
		if(current3 == i) return // 현재 보이는 이미지가 i랑 같으면 종료
		
		var currentEl=visual3.eq(current3);
		var nextEl=visual3.eq(i)
		
		currentEl.css({left: 0}).stop().animate({left: '100%'}, 500); // 현재 보이는 이미지 이동, %가 붙어서 ''안에 작성
		nextEl.css({left: '-100%'}).stop().animate({left: 0}, 500); // 이미지 이동
		
		current3=i;
	}
	
	function move4(i){
		if(current4 == i) return // 현재 보이는 이미지가 i랑 같으면 종료
		
		var currentEl=visual4.eq(current4);
		var nextEl=visual4.eq(i)
		
		currentEl.css({left: 0}).stop().animate({left: '-100%'}, 500); // 현재 보이는 이미지 이동, %가 붙어서 ''안에 작성
		nextEl.css({left: '100%'}).stop().animate({left: 0}, 500); // 이미지 이동
		
		current4=i;
	}
	
	function move44(i){
		if(current4 == i) return // 현재 보이는 이미지가 i랑 같으면 종료
		
		var currentEl=visual4.eq(current4);
		var nextEl=visual4.eq(i)
		
		currentEl.css({left: 0}).stop().animate({left: '100%'}, 500); // 현재 보이는 이미지 이동, %가 붙어서 ''안에 작성
		nextEl.css({left: '-100%'}).stop().animate({left: 0}, 500); // 이미지 이동
		
		current4=i;
	}
	
	function move5(i){
		if(current5 == i) return // 현재 보이는 이미지가 i랑 같으면 종료
		
		var currentEl=visual5.eq(current5);
		var nextEl=visual5.eq(i)
		
		currentEl.css({left: 0}).stop().animate({left: '-100%'}, 500); // 현재 보이는 이미지 이동, %가 붙어서 ''안에 작성
		nextEl.css({left: '100%'}).stop().animate({left: 0}, 500); // 이미지 이동
		
		current5=i;
	}	 
	
	function move55(i){
		if(current5 == i) return // 현재 보이는 이미지가 i랑 같으면 종료
		
		var currentEl=visual5.eq(current5);
		var nextEl=visual5.eq(i)
		
		currentEl.css({left: 0}).stop().animate({left: '100%'}, 500); // 현재 보이는 이미지 이동, %가 붙어서 ''안에 작성
		nextEl.css({left: '-100%'}).stop().animate({left: 0}, 500); // 이미지 이동
		
		current5=i;
	}	
		
	//호버시 멈추게 하는 기능
	 $('.click_visual, li.pr, li.nx, ul.bt1').on({
		mouseover:function(){
			clearInterval(setIntervalId1);
		}, mouseout:function(){
			timer1();
		}
	});
	
	$('.click_visual2, li.pr1, li.nx1, ul.bt2').on({
		mouseover:function(){
			clearInterval(setIntervalId2);
		}, mouseout:function(){
			timer2();
		}
	});
	
	$('.click_visual3, li.pr2, li.nx2, ul.bt3').on({
		mouseover:function(){
			clearInterval(setIntervalId3);
		}, mouseout:function(){
			timer3();
		}
	});
	
	$('.click_visual4, li.pr3, li.nx3, ul.bt4').on({
		mouseover:function(){
			clearInterval(setIntervalId4);
		}, mouseout:function(){
			timer4();
		}
	});
	
	$('.click_visual5, li.pr4, li.nx4, ul.bt5').on({
		mouseover:function(){
			clearInterval(setIntervalId5);
		}, mouseout:function(){
			timer5();
		}
	});
 
	/* 화살표클릭 */
	 rightBtn.click(function(){
			var prev=visual.eq(current1);
			var pn=button1.eq(current1);
        	move(prev, 0, '-100%');
			pn.removeClass('on');
			
			
        	current1++;

        	if(current1 == visual.size()) current1=0;

        	var next=visual.eq(current1);
			var pnn=button1.eq(current1);
        	move(next,'100%', 0);
			pnn.addClass('on');
			return false;
		});	
		
	rightBtn2.click(function(){
			var prev=visual2.eq(current2);
			var pn=button2.eq(current2);
        	move(prev, 0, '-100%');
			pn.removeClass('on');
			
			
        	current2++;

        	if(current2 == visual2.size()) current2=0;

        	var next=visual2.eq(current2);
			var pnn=button2.eq(current2);
        	move(next,'100%', 0);
			pnn.addClass('on');
			return false;
		});	
	
	rightBtn3.click(function(){
			var prev=visual3.eq(current3);
			var pn=button3.eq(current3);
        	move(prev, 0, '-100%');
			pn.removeClass('on');
			
			
        	current3++;

        	if(current3 == visual3.size()) current3=0;

        	var next=visual3.eq(current3);
			var pnn=button3.eq(current3);
        	move(next,'100%', 0);
			pnn.addClass('on');
			return false;
		});	
	
	rightBtn4.click(function(){
			var prev=visual4.eq(current4);
			var pn=button4.eq(current4);
        	move(prev, 0, '-100%');
			pn.removeClass('on');
			
			
        	current4++;

        	if(current4 == visual4.size()) current4=0;

        	var next=visual4.eq(current4);
			var pnn=button4.eq(current4);
        	move(next,'100%', 0);
			pnn.addClass('on');
			return false;
		});	
	rightBtn5.click(function(){
			var prev=visual5.eq(current5);
			var pn=button5.eq(current5);
        	move(prev, 0, '-100%');
			pn.removeClass('on');
			
			
        	current5++;

        	if(current5 == visual5.size()) current5=0;

        	var next=visual5.eq(current5);
			var pnn=button5.eq(current5);
        	move(next,'100%', 0);
			pnn.addClass('on');
			return false;
		});	
	
	leftBtn.click(function(){
			var prev=visual.eq(current1);
			var pn=button1.eq(current1);
        	move(prev, 0, '100%');
			pn.removeClass('on');
			
        	current1--;
			

        	if(current1 == -visual.size()) current1=0;

        	var next=visual.eq(current1);
			var pnn=button1.eq(current1);
        	move(next,'-100%', 0);
			pnn.addClass('on');
			return false;
		});	
		
	leftBtn2.click(function(){
			var prev=visual2.eq(current2);
			var pn=button2.eq(current2);
        	move(prev, 0, '100%');
			pn.removeClass('on');
			
        	current2--;
			

        	if(current2 == -visual2.size()) current2=0;

        	var next=visual2.eq(current2);
			var pnn=button2.eq(current2);
        	move(next,'-100%', 0);
			pnn.addClass('on');
			return false;
		});
	
	leftBtn3.click(function(){
			var prev=visual3.eq(current3);
			var pn=button3.eq(current3);
        	move(prev, 0, '100%');
			pn.removeClass('on');
			
        	current3--;
			

        	if(current3 == -visual3.size()) current3=0;

        	var next=visual3.eq(current3);
			var pnn=button3.eq(current3);
        	move(next,'-100%', 0);
			pnn.addClass('on');
			return false;
		});
	
	leftBtn4.click(function(){
			var prev=visual4.eq(current4);
			var pn=button4.eq(current4);
        	move(prev, 0, '100%');
			pn.removeClass('on');
			
        	current4--;
			

        	if(current4 == -visual4.size()) current4=0;

        	var next=visual4.eq(current4);
			var pnn=button4.eq(current4);
        	move(next,'-100%', 0);
			pnn.addClass('on');
			return false;
		});
	
	leftBtn5.click(function(){
			var prev=visual5.eq(current5);
			var pn=button5.eq(current5);
        	move(prev, 0, '100%');
			pn.removeClass('on');
			
        	current5--;
			

        	if(current5 == -visual5.size()) current5=0;

        	var next=visual5.eq(current5);
			var pnn=button5.eq(current5);
        	move(next,'-100%', 0);
			pnn.addClass('on');
			return false;
		});	 
});