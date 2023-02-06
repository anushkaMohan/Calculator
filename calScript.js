var text="";
document.getElementById("clear").addEventListener("click",clear_space);
document.getElementById("sign").addEventListener("click",clear_digit);
document.getElementById("remainder").addEventListener("click",function(){append("%");});
document.getElementById("divide").addEventListener("click",function(){append("/");});
document.getElementById("seven").addEventListener("click",function(){append("7");});
document.getElementById("eight").addEventListener("click",function(){append("8");});
document.getElementById("nine").addEventListener("click",function(){append("9");});
document.getElementById("multiply").addEventListener("click",function(){append("*");});
document.getElementById("four").addEventListener("click",function(){append("4");});
document.getElementById("five").addEventListener("click",function(){append("5");});
document.getElementById("six").addEventListener("click",function(){append("6");});
document.getElementById("subtract").addEventListener("click",function(){append("-");});
document.getElementById("one").addEventListener("click",function(){append("1");});
document.getElementById("two").addEventListener("click",function(){append("2");});
document.getElementById("three").addEventListener("click",function(){append("3");});
document.getElementById("add").addEventListener("click",function(){append("+");});
document.getElementById("zero").addEventListener("click",function(){append("0");});
document.getElementById("decimal").addEventListener("click",function(){append(".");});
document.getElementById("equal").addEventListener("click",print_ans);

function append(s)
{
    text+=s;
    document.getElementById("show").textContent=text;
}
function clear_digit()
{
    var temp=text.slice(0,text.length-1);
    text=temp;
    document.getElementById("show").textContent=text;
}
function clear_space()
{
     text="";
    document.getElementById("show").textContent=text;
}
function print_ans()
{
    document.getElementById("show").textContent=eval(text);
}




