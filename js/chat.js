//新老客户讨论组切换	
	$(".main-top ul li").click(function(){
	var index=$(this).index();
	$(this).addClass("lists").siblings().removeClass('lists');
	$(".member-room").eq(index).show().addClass('active').siblings().removeClass('active').hide();
	
	
})
//删除用户
$(".right-member-delete").click(function(){
	$(this).parent("li").remove();
	
	
})
//点击放大事件
    $(".chatbig").click(function () {
//	alert(1)
      $(".chatboxmain").addClass("chatboxmains");     
      $(".chatBox-content-demo").css("height","414px");
      $(".div-textarea").css("height","144px");
      $(".memberlist,.member-room").css("height","598px");
      $(".chatbig").css("margin-left","420px");
      $(".right-member-name").css("width","165px");
      $(".biaoqing-photo").css("top","465px");
      $(".chatime").css("width","300px");
      $(".main-top ul li").css("width","23.33%");
      
    })
    //关闭聊天框
    $(".chatclose").click(function () {
        $(".chatboxmain").toggle(10);
    })
	

	    //      发送信息
    $("#chatsend").click(function () {
        var textContent = $(".div-textarea").html().replace(/[\n\r]/g, '<br>')
        if (textContent != "") {
            $(".chatBox-content-demo").append(
            	"<div class=\"clearfloat\">" +
            	"<div class=\"right\">"+
                "<div class=\"author-name\"><span>我</span><small class=\"chat-date\"> 14:26:58</small> </div> " +
                " <div class=\"chat-message\"> " + textContent + " </div> " +
                "</div> </div>");
            //发送后清空输入框
            $(".div-textarea").html("");
            //聊天框默认最底部
            $(document).ready(function () {
                $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight);
            });
        }else{
        	alert("不能发送空白消息");
        }
    });
    $('#chatsend').keydown(function(e){
		if(e.keyCode==13){
		}
	});
	
	    //      发送图片
    function selectImg(pic) {
        if (!pic.files || !pic.files[0]) {
            return;
        }
        var reader = new FileReader();
        reader.onload = function (evt) {
            var images = evt.target.result;
            $(".chatBox-content-demo").append("<div class=\"clearfloat\">" +
            "<div class=\"right\">"+
                "<div class=\"author-name\"><span>我</span><small class=\"chat-date\"> 14:26:58</small> </div> " +
                " <div class=\"chat-message\"><img src=" + images + "></div> " +
                " </div> </div>");
            //聊天框默认最底部
            $(document).ready(function () {
                $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight);
            });
        };
        reader.readAsDataURL(pic.files[0]);

    }
	
	
	 //      发送表情
    $("#chat-biaoqing").click(function () {
        $(".biaoqing-photo").toggle();
    });
    $(document).click(function () {
        $(".biaoqing-photo").css("display", "none");
    });
    $("#chat-biaoqing").click(function (event) {
        event.stopPropagation();//阻止事件
    });

    $(".emoji-picker-image").each(function () {
        $(this).click(function () {
            var bq = $(this).parent().html();
            console.log(bq)
            $(".chatBox-content-demo").append("<div class=\"clearfloat\">" +
            "<div class=\"right\"> "+
                "<div class=\"author-name\"><span>我</span><small class=\"chat-date\"> 14:26:58</small> </div> " +
                "<div class=\"chat-message\"> " + bq + " </div> " +
                "</div> </div>");
            //发送后关闭表情框
            $(".biaoqing-photo").toggle();
            //聊天框默认最底部
            $(document).ready(function () {
                $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight);
            });
        })
    });
    

	
	//抖动窗口
	jQuery.fn.shake = function (intShakes /*Amount of shakes*/, intDistance /*Shake distance*/, intDuration /*Time duration*/) {
    this.each(function () {
        var jqNode = $(this);
        jqNode.css({ position: 'relative' });
        for (var x = 1; x <= intShakes; x++) {
            jqNode.animate({ left: (intDistance * -1) }, (((intDuration / intShakes) / 4)))
            .animate({ left: intDistance }, ((intDuration / intShakes) / 2))
            .animate({ left: 0 }, (((intDuration / intShakes) / 4)));
        }
    });
    return this;
}
	
    $(function () {
        $('.chatShake').click(function () {
            $(".chatbox").shake(2, 10, 400);
        });
    });

//星星評價的框
$(".chatCollection").click(function(){
	$(".gradecon").css("display","block");
//	$("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight);
})


var degree = ['','恶劣','较差','一般','较好','满意','未评分'];  
          
        $(function(){  
            //点星星  
            $(document).on('mouseover','i[cjmark]',function(){  
                var num = $(this).index();  
                var pmark = $(this).parents('.revinp');  
                var mark = pmark.prevAll('input');  
                //var val = mark.val();  
                //if(mark.prop('checked')) return false;  
                  
                var list = $(this).parent().find('i');  
                for(var i=0;i<=num;i++){  
                    list.eq(i).attr('class','level_solid');  
                }  
                for(var i=num+1,len=list.length-1;i<=len;i++){  
                    list.eq(i).attr('class','level_hollow');  
                }  
                $(this).parent().next().html(degree[num+1]);  
                  
            });  
              
            $(document).on('mouseout','i[cjmark]',function(){  
                var num = $(this).index();  
                var pmark = $(this).parents('.revinp');  
                var mark = pmark.prevAll('input');  
                var val = parseInt(mark.val());  
                //if(mark.prop('checked')) return false;  
                  
                var list = $(this).parent().find('i');  
                //alert(list.length);  
                if(val != 0){  
                    for(var i=0;i<=val;i++){  
                        list.eq(i).attr('class','level_solid');  
                    }  
                    //alert(val);  
                    for(var i=val,len=list.length-1;i<=len;i++){  
                        list.eq(i).attr('class','level_hollow');  
                    }  
                    $(this).parent().next().html(degree[val]);  
                }else{  
                    for(var i=0;i<=list.length-1;i++){  
                        list.eq(i).attr('class','level_hollow');  
                    }  
                    $(this).parent().next().html("未评分");  
                } 

            })  
              
            //点击星星  
            $(document).on('click','i[cjmark]',function(){  
                var num = $(this).index();  
                var pmark = $(this).parents('.revinp');  
                var mark = pmark.prevAll('input');  
                mark.val(num+1);  
                
            })  
       	
        })  
