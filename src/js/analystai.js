function show()
{
        var Idiv=document.getElementById("Idiv");
        Idiv.style.display="block";
        //弹出层显示部分
        // Idiv.style.left=(document.documentElement.clientWidth-Idiv.clientWidth)/2+"px";
        // var aa_scrollTop=document.documentElement.scroolTop||window.pageYOffset||document.body.scrollTop;
        // Idiv.style.top=(document.documentElement.clientHeight-Idiv.clientHeight)/2+aa_scrollTop+"px";
        Idiv.style.right=129 +"px";
        Idiv.style.top=50+"px";
}
function showTwo()
{
        var Idivtwo=document.getElementById("Idivtwo");
        Idivtwo.style.display="block";
        Idivtwo.style.right=12+"px";
        Idivtwo.style.top=52+"px";
}
//关闭弹出层:分两层逻辑 1.先对自身按钮点击事件进行冒泡；2.每次show()之前进行判断，其它弹出层状态是否为block;
$(function(){
        $("#show").click(function(event){
            event.stopPropagation();//标准冒泡
            if(Idiv.style.display=="block")
            {
                $("#Idiv").hide();
            }else{
                if(Idivtwo.style.display=="block")
                {
                        $("#Idivtwo").hide();
                        show();
                }
                else{
                        show();
                }
            }
            // show();
            // return false;
        });
        $("#Idiv").click(function(){
            event.stopPropagation();
            // return false;
        });
        $(document).click(function(){
            $("#Idiv").hide();
        });
})

$(function(){
    $("#showtwo").click(function(event){
        var div = document.getElementsByClassName('loginUserTag')[0];
        div.style.className = 'loginUserTagActive';
        event.stopPropagation();//标准冒泡
        if(Idivtwo.style.display=="block")
        {
            $("#Idivtwo").hide();
            div.style.className = 'loginUserTag';
        }else{
                if(Idiv.style.display=="block")
                {
                        $("#Idiv").hide();
                        div.style.className = 'loginUserTag';
                        showTwo();
                        div.style.className = 'loginUserTagActive';
                }
                else{
                        showTwo();
                        div.style.className = 'loginUserTagActive';
                        // div.className = 'loginUserTagActive';
                }
        }
        // show();
        // return false;
    });
    $("#Idivtwo").click(function(){
        event.stopPropagation();
        // return false;
    });
    $(document).click(function(){
        $("#Idivtwo").hide();
        document.getElementsByClassName('loginUserTag')[0].style.className = 'loginUserTag';
    });
})