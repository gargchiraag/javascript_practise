let name="chiraag"
console.log(name);
document.write("Hey this is javascript practise! How are you?");

let num1=45;
let num2=45;
console.log(num1+num2);


for(let i=0;i<10;i++)
{
    let a="";
    for(let j=0;j<=i;j++)
    {
        a+=" * ";
    }
    console.log(a);
}


window.onload = function(){ 
    let button=document.getElementById("increment");
button.onclick=function(){
    let num=parseInt(document.getElementById("numb").innerHTML);
    num=num+1;
    document.getElementById("numb").innerHTML=num;
}

let buttonDec=document.getElementById("decrement");
buttonDec.onclick=function(){
    let num=parseInt(document.getElementById("numb").innerHTML);
    num=num-1;
    document.getElementById("numb").innerHTML=num;
}
let buttonDel=document.getElementById("reset");
buttonDel.onclick=function(){
    let num=parseInt(document.getElementById("numb").innerHTML);
    num=0;
    document.getElementById("numb").innerHTML=num;
}
};