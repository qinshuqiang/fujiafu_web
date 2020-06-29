$(function(){
	   
          var index=0;
          var playSpeed=3000;
          var timer=null;
          $(".next").click(function(){
          	  if(index==$(".banner>li").length-1){
          	  	index=0;
          	  }else{
          	  	index++;
          	  }
          	  changeStatus()  
          })
          $(".next-R").click(function(){
          	  if(index==$(".banner>li").length-1){
          	  	index=0;
          	  }else{
          	  	index++;
          	  }
          	  changeStatus()  
          })
          $(".prev").click(function(){
          	  if(index==0){
          	  	index=$(".banner>li").length-1;
          	  }else{
          	  	index--;
          	  }
          	  changeStatus()
          })
          $(".last-L").click(function(){
          	  if(index==0){
          	  	index=$(".banner>li").length-1;
          	  }else{
          	  	index--;
          	  }
          	  changeStatus()
          })
          $(".icon").click(function(){
          	  index=$(this).index(".icon");
          	  changeStatus();
          })
          $(".banner").hover(function(){
          	  stopPlay();
          },function(){
          	  autoPlay();
          })
          function changeStatus(){
          	  $(".icon_wrap li").removeClass("active");
          	  $(".icon_wrap li").eq(index+1).addClass("active")
          	  $(".banner>li").hide();
          	  $(".banner>li").eq(index).fadeIn();
              changeText();
          }
          function changeText(){ 
          	  $(".banner>li").children().removeClass("animated bounceInLeft").hide();
          	  setTimeout(function(){
          	  	$(".banner>li").eq(index).children("p").show().addClass("animated bounceInLeft")
          	  },500)
          	  setTimeout(function(){
          	  	 $(".banner>li").eq(index).children("font").show().addClass("animated bounceInRight")
          	  },800)
          }
          function autoPlay(){
          	 timer=setInterval(function(){
          	 	$(".next").click()
          	 },playSpeed)
          }
          function stopPlay(){
          	 clearInterval(timer);
          }
          autoPlay();
          changeText();
	
	
	$(".btn li").click(function(){
		
　　　$(this).addClass("act").siblings().removeClass("act");
　　　　
　　　var index = $(this).index();
　　　 $(".select").eq(index).addClass("active").siblings().removeClass("active");
	})
	
	
	var x=true
	$(".login").click(function(){
		if(x){
			$(".register").css({"display":"block"});
			x=false
		}else{
			$(".register").css({"display":"none"});
			x=true
		}
	})
	
	
	
	

	$("#btn1").click(function(){
		var regchinese=/^[\u4e00-\u9fa5]{0,}$/;
		var regmath=/^\d{8,}$/;
		var regemail=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
		var userInput0=$("#ch").val();
		var userInput1=$("#pa").val();
		var userinput2=$("#co").val();
		var userInput3=$("#em").val();
		
		var res0=regchinese.test(userInput0);
		var res1=regmath.test(userInput1);
		var res3=regemail.test(userInput3);
		if((res0==false)||($("#ch").val( )=="")){
			$("#p1").html("您输入的有误,请重新输入！");
			$("#p1").css("color","red")
			$("#ch").css("border","1px solid red")
		}else{
			$("#p1").html("输入正确");
			$("#p1").css("color","black");
			$("#ch").css("border","1px solid gray");
		    if((res1==false)||($("#pa").eq(1).val( )=="")){
				$("#p2").html("您输入的有误,请重新输入！");
				$("#p2").css("color","red")
				$("#pa").css("border","1px solid red")
		    }else{
				$("#p2").html("输入正确");
				$("#p2").css("color","black");
				$("#pa").css("border","1px solid gray");
		        if(($("#co").val()!=userInput1)||($("#co").val( )=="")){
					$("#p3").html("您输入的有误,请重新输入！");
					$("#p3").css("color","red")
					$("#co").css("border","1px solid red")
		        }else{
					$("#p3").html("输入正确");
					$("#p3").css("color","black");
					$("#co").css("border","1px solid gray");
					if((res3==false)||($("#em").val( )=="")){
						$("#p4").html("您输入的有误,请重新输入！");
						$("#p4").css("color","red")
						$("#em").css("border","1px solid red")
					}else{
						$("#p4").html("输入正确");
						$("#p4").css("color","black");
						$("#em").css("border","1px solid gray");
						
						}
					}	
				}	
			}
			
	})
	
})