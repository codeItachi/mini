$(function(){
	var imgs=$(".bannerimg img");
	var index=0;
	var btn1=$(".yuan");
	function dem(type){
		if(type=="r"){
			index++;
			if(index>=imgs.length){
				index=0;
			}else if(index<=-1){
				index=imgs.length-1
			}
		}
		if(type=="l"){
			index--;
			 if(index<=-1){
				index=imgs.length-1
			}
		}
		
		imgs.hide();
		imgs.eq(index).fadeIn();
		btn1.css("background","#301334")
		btn1.eq(index).css("background","#fff");
	}
	var t=setInterval(function(){
		dem("r")
	},2000);
    $(".bannerimg").hover(function(){
    	clearInterval(t);
    },function(){
    	t=setInterval(function(){
		dem("r")
	},2000);
    });
    $(".btnleft").hover(function(){
    	$(this).css("background","rgba(0,0,0,0.6)")
    },function(){
    	$(this).css("background","none")
    }).click(function(){
        dem("l");
        clearInterval(t);
        
    });
    $(".btnright").hover(function(){
    	$(this).css("background","rgba(0,0,0,0.6)")
    },function(){
    	$(this).css("background","none")
    }).click(function(){
        dem("r");
        clearInterval(t);
        
    });
    
     
    $(".yuan").hover(function(){
    	var now=$(this).index();
		btn1.eq(now).css("background","#fff");
		index=now;
    	clearInterval(t);
    },function(){
    	btn1.css("background","#301334")
    }).click(function(){
        var now=$(this).index();
        
        imgs.hide();
        imgs.eq(now).fadeIn();
        btn1.css("background","#301334")
        btn1.eq(now).css("background","#fff");
        index=now;
    })

    //xiala
    $(".head-con>li").hover(function(){
        $(this).find(".erji").stop();
      $(this).find(".erji").slideDown();
    },function(){
        $(this).find(".erji").stop();
       $(this).find(".erji").slideUp();
    })
    //left xiala
    $(".top-left-list").hover(function(){
      $(this).find(".bannererji").slideToggle();
    },function(){
       $(this).find(".bannererji").hide();
    })
    //明星品牌
   
    var a=0;
    function move(){
        a++;
        if(a>=2){
          
            a=0;
        }
        $(".bottom-con-").animate({marginLeft:-1226*a})
    }
     
    $(".jiantouleft").hover(function(){
        clearInterval(t2)
     $(this).css("color","#ff6700")
},function(){
    t2=setInterval(move,2000)
    $(this).css("color","#e0e0e0")
}).click(function(){
         $(this).css("color","#e0e0e0");
         $(".jiantouright").css("color","#424242")
        $(".bottom-con-").animate({marginLeft:0})
        
    })

    $(".jiantouright").hover(function(){
        clearInterval(t2)
$(this).css("color","#ff6700")
},function(){
    t2=setInterval(move,2000)
    $(this).css("color","#e0e0e0")
}).click(function(){
        $(this).css("color","#e0e0e0")
        $(".jiantouleft").css("color","#424242")
        $(".bottom-con-").animate({marginLeft:-1226})

    })
var t2=setInterval(move,2000);
//阴影
 /*$(".main-one-con>li").hover(function(){
    $(this).css({position:relative,top:-10,boxShadow: 5 5 20 0 rgba(0, 0, 0, 0.5)})
 })*/
//选项卡


    $(".chose").each(function(i,obj1){
        $(this).eq(i).find(".title-word2").each(function(j,obj2){
                var index2=$(obj2).index();
                $(obj2).hover(function(){
           
                    $(".too").hide();
                    $(".too").eq(index2).css("display","block");
                    $(obj1).eq(j).find(".title-word2").css({color:"#424242",borderBottom:"none"})
                    $(obj1).eq(index2).find(".title-word2").css({borderBottom:"2px solid #ff6700",color:"#ff6700"})
          },function(){})
        })
    })
   


})