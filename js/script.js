$(document).ready(function(){
	
	
	// menu
	$(".nav > li").hover(
		function(){
			$(this).find(".sub").stop().slideDown(300);
		},
		function(){
			$(this).find(".sub").stop().slideUp(300);
		}
	);
	$(".nav > li").focusin(function(){
		$(this).find(".sub").stop().slideDown(300);
	});
	$(".nav ul li:last-child").focusout(function(){
		$(this).parent("ul").stop().slideUp(300);
	});



	//section01 mainVisual
	var visual = $('div.mainVisual > ul > li');
	var button = $('ul.btnList > li');
	var rightBtn = $('.btnImg .next');
	var leftBtn = $('.btnImg .prev');

	var current = 0;
	var setIntervalId;


	function move1(i){
	
		if(current === i) {
			return;
		}

		var currentEl = visual.eq(current);
		var nextEl = visual.eq(i);
	
		currentEl.css({left:0}).stop().animate({left:'-100%'});
		nextEl.css({left:'100%'}).stop().animate({left:0});

		current = i;
	
	}

	function move(tg, start, end){

		tg.css('left',start).stop().animate({left:end},{duration:500,ease:'easeOutCubic'});

	}

	function timer(){
	
		setIntervalId = setInterval(function(){

			var prev = visual.eq(current);	
			var pn = button.eq(current);

			move(prev, 0, '-100%');
				
			pn.removeClass('on');

			current++;

			if(current === visual.size()){
			
				current = 0;
			}

			var next = visual.eq(current);	
			var pnn = button.eq(current);

			move(next, '100%', 0);

			pnn.addClass('on');

		},5000);
	}


	timer();

	/* $('.section1').on({mouseover:function(){
	
		clearInterval(setIntervalId);
	
	},mouseout:function(){
	
		timer();
	
	}}); */

	button.on('click',function(){
	
		var tg = $(this);
		var i = tg.index();

		button.removeClass('on');
		tg.addClass('on');

		move1(i);
		return false;
	});


	rightBtn.click(function(){
		
		var prev = visual.eq(current);
		var pn = button.eq(current);
	
		move(prev, 0, '-100%');
		pn.removeClass('on');

		current++;

		if(current === visual.size()){
		
			current = 0;
		}

		var next = visual.eq(current);
		var pnn = button.eq(current);

		move(next, '100%', 0);

		pnn.addClass('on');

		return false;
	});


	leftBtn.click(function(){
		
		var prev = visual.eq(current);
		var pn = button.eq(current);
	
		move(prev, 0, '100%');
		pn.removeClass('on');

		current--;

		if(current === -visual.size()){
		
			current = 0;
		}

		var next = visual.eq(current);
		var pnn = button.eq(current);

		move(next, '-100%', 0);

		pnn.addClass('on');

		return false;
	});
	
});
jQuery(document).ready(function(){

	var btn1 = $('.left_btn');
	var btn2 = $('.right_btn');
	var fnt1 = $('.video_contents>div');  //각 카테고리 모음 (각 카테고리 안의 이미지를 불러오기 위해 지정해준 것)
	var fnt0 = $('.video>div'); //메뉴 li
	var current01=0;
	var j=0; //fnt1의 index 번호 0~4까지 
	
	fnt0.on({click(){		
		var menu1=$(this);
		var k = menu1.index();
		fnt0.removeClass('on2');
		menu1.addClass('on2');
		current01=0;
		j=k;
		fnt1.removeClass('on1');
		fnt1.eq(j).addClass('on1');
		move(current01);
		}
	});
	
	
	
	
	function move(i){  //move(i)는   move(n)을 받음 
	  var ft=fnt1.eq(j); //카테고리 엄마
	  var fttn=ft.find('div'); //카테고리 하위  이미지를  각각 불러오기 위한 행위 
	  if(j==0){
		if(current01==6){
			j=1;
			ft.removeClass('on1');
			fnt1.eq(j).addClass('on1');}
	  }
	  else if(j==1){
		if(current01==3){
			j=2;
			ft.removeClass('on1');
			fnt1.eq(j).addClass('on1');}
	  }
	  else if(j==2){
		if(current01==1){
			j=3;
			ft.removeClass('on1');
			fnt1.eq(j).addClass('on1');}
	  }
	  else if(j==3){
		if(current01==2){
			j=4;
			ft.removeClass('on1');
			fnt1.eq(j).addClass('on1');
		}
	  }
	  else if(j==4){
		if(current01==9){
			j=0;
			ft.removeClass('on1');
			fnt1.eq(j).addClass('on1');
		}
	  }    //-----------------다음 카테고리 넘어가기 위한 행위 
      var currentEl=fttn.eq(current01);
	  var nextEl=fttn.eq(i);
	  currentEl.css('left','0').stop().animate({left:'-100%'},1000);
	  nextEl.css('left','100%').stop().animate({left:0},1000);
	  current01=i;
	  var menu=fnt0.eq(j);
	  fnt0.removeClass('on2');
	  menu.addClass('on2');
	}
	 
//마우스 오버시 슬라이드 멈춤
	 $('.video_contents').on({
      mouseover:function(){
         clearInterval(setIntervalId01);
      },mouseout:function(){
         timer01();
      }
   });
   
	timer01();
	   function timer01(){
		  setIntervalId01=setInterval(function(){
			 var n=current01+1;
			 if(j==0){
				 if(n==7)n=0;
			 }
			 else if(j==1){
				if(n==4) n=0;
			 }
			 else if(j==2){
				if(n==2) n=0;
			 }
			 else if(j==3){
				if(n==3) n=0;
			 }
			 else if(j==4){
				if(n==10) n=0;
			 }
			move(n);
		  },3000);
	   }
	btn1.on({click(){
		i= current01-1;
		if(i<0 && j==0){
				j=4; i=8;
				fnt1.removeClass('on1');
				fnt1.eq(j).addClass('on1');
				move(i);
			}
		else if(i<0 && j==4){
				j=3; i=5;
				fnt1.removeClass('on1');
				fnt1.eq(j).addClass('on1');
				move(i);
			}
		else if(i<0 && j==3){
				j=2; i=1;
				fnt1.removeClass('on1');
				fnt1.eq(j).addClass('on1');
				move(i);
			}
		else if(i<0 && j==2){
				j=1; i=4;
				fnt1.removeClass('on1');
				fnt1.eq(j).addClass('on1');
				move(i);
			}
		else if(i<0 && j==1){
				j=0; i=5;
				fnt1.removeClass('on1');
				fnt1.eq(j).addClass('on1');
				move(i);
			}
		else move(i);
		}
	});
	btn2.on({click(){
		i= current01+1;
		if(j==0 && i==7){    //&&는  a/b 둘다 만족할 때     //||는 a나 b 둘 중에 하나를 만족시킬 때 
			i=0; j==1;
			fnt1.removeClass('on1');
			fnt1.eq(j).addClass('on1');
			move(i);
		}
		else if(j==1 && i==4){
			i=0; j==2;
			fnt1.removeClass('on1');
			fnt1.eq(j).addClass('on1');
			move(i);
		}
		else if(j==2 && i==1){
			i=0; j==3;
			fnt1.removeClass('on1');
			fnt1.eq(j).addClass('on1');
			move(i);
		}
		else if(j==3 && i==3){
			i=0; j==4;
			fnt1.removeClass('on1');
			fnt1.eq(j).addClass('on1');
			move(i);
		}
		else if(j==4 && i==10){
			i=0; j==0;
			fnt1.removeClass('on1');
			fnt1.eq(j).addClass('on1');
			move(i);
		}
		else move(i);
		}
	}); 
});
/* $(document).ready(function(){
	var current = 0;
	var banner = $('.section3 li');


	setInterval(function(){
		
		var prev = banner.eq(current);
		move(prev, 0, '-100%');
		current++;

		if(current===banner.size()){
			current = 0;
		}

		var next = banner.eq(current);

		move(next,'100%', 0);
	}, 900);

	function move(tg, start, end){
			
			tg.css('left', start).stop().animate({left:end},{duration:500, ease:'easeOutCubic'});
	

	}
}); */

//section3

jQuery(document).ready(function(){
		$('.v_section01').click(function(){				
			$('.v_section01').stop().animate({width:1160},500); 
			$('.first_visual').stop().fadeOut().removeClass('bl');
			$('.click_visual').stop().fadeIn().addClass('bl');
			$('.pr').css('display','block');
			$('.nx').css('display','block');
			$('.bt1').css('display','block');
		
		});
		
		$('.bg').click(function(){
			$('.v_section01').stop().animate({width:290},500);
			$('.first_visual').stop().fadeIn().addClass('bl');
			$('.click_visual').stop().fadeOut().removeClass('bl');
			$('.pr').css('display','none');
			$('.nx').css('display','none');
			$('.bt1').css('display','none');						
		});
		
		$('.v_section02').click(function(){		
			$('.visual').stop().animate({left:-290},500);
			$('.v_section02').stop().animate({width:1160},500); 
			$('.first_visual2').stop().fadeOut().removeClass('bl');
			$('.click_visual2').stop().fadeIn().addClass('bl');
			$('.pr1').css('display','block');
			$('.nx1').css('display','block');
			$('.bt2').css('display','block');
			
		});
		
		$('.bg').click(function(){
			$('.visual').stop().animate({left:0},500);
			$('.v_section02').stop().animate({width:290},500);
			$('.first_visual2').stop().fadeIn().addClass('bl');
			$('.click_visual2').stop().fadeOut().removeClass('bl');
			$('.pr1').css('display','none');
			$('.nx1').css('display','none');
			$('.bt2').css('display','none');					
		});
		
		$('.v_section03').click(function(){		
			$('.visual').stop().animate({left:-580},500);
			$('.v_section03').stop().animate({width:1160},500); 
			$('.first_visual3').stop().fadeOut().removeClass('bl');
			$('.click_visual3').stop().fadeIn().addClass('bl');
			$('.pr2').css('display','block');
			$('.nx2').css('display','block');
			$('.bt3').css('display','block');		
		})
		
		$('.bg').click(function(){
			$('.visual').stop().animate({left:0},500);
			$('.v_section03').stop().animate({width:290},500);
			$('.first_visual3').stop().fadeIn().addClass('bl');
			$('.click_visual3').stop().fadeOut().removeClass('bl');
			$('.pr2').css('display','none');
			$('.nx2').css('display','none');
			$('.bt3').css('display','none');			
		
		});
		
		$('.v_section04').click(function(){		
			$('.visual').stop().animate({left:-870},500);
			$('.v_section04').stop().animate({width:1160},500);
			$('.first_visual4').stop().fadeOut().removeClass('bl');
			$('.click_visual4').stop().fadeIn().addClass('bl');
			$('.pr3').css('display','block');
			$('.nx3').css('display','block');
			$('.bt4').css('display','block');
		
		});
		
		$('.bg').click(function(){
			$('.v_section04').stop().animate({width:290},500);
			$('.visual').stop().animate({left:0},500);
			$('.first_visual4').stop().fadeIn().addClass('bl');
			$('.click_visual4').stop().fadeOut().removeClass('bl');
			$('.pr3').css('display','none');
			$('.nx3').css('display','none');
			$('.bt4').css('display','none');			
	
			
		});
		
		$('.v_section05').click(function(){		
			$('.visual').stop().animate({left:-1160},500);
			$('.v_section05').stop().animate({width:1160},500); 
			$('.first_visual5').stop().fadeOut().removeClass('bl');
			$('.click_visual5').stop().fadeIn().addClass('bl');
			$('.pr4').css('display','block');
			$('.nx4').css('display','block');
			$('.bt5').css('display','block');
	
		})
		
		$('.bg').click(function(){
			$('.v_section05').stop().animate({width:290},500);
			$('.visual').stop().animate({left:0},500);
			$('.first_visual5').stop().fadeIn().addClass('bl');
			$('.click_visual5').stop().fadeOut().removeClass('bl');
			$('.pr4').css('display','none');
			$('.nx4').css('display','none');
			$('.bt5').css('display','none');			
	
		});
		
		
		
		var visual=$('ul.slide1>li'); // 슬라이드 이미지
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
	
			}, 5000);
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
	
			}, 5000);
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
	
			}, 5000);
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
	
			}, 5000);
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
	
			}, 5000);
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