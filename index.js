$(document).ready(function () {
$("#calculator span").click(function(){
    let str = "";
    let operators = ["x", "+", "-", "/"];
    let solved = false;
    console.log($(this).html())
    let value = $(this).html();
    if(operators.includes(value)){  
        if(value == "x"){
            value = "*";
        }
        if(operators.includes($(".screen").html()[($(".screen").html().length-1)])){
            alert("Must not be operator")
        }else{
            $(".screen").html($(".screen").html()+value);
        }
        
        str = "";
    }
    else if(value == "="){
        $(".screen").html(eval($(".screen").html()));
    }else if(value == "AC"){
        str= "";
        $(".screen").html("");
    }
    else{
        str = str+value;
        $(".screen").html($(".screen").html()+value);
    }
})
})