function decToBin(num){
    var bin=num.toString(2);
    return bin;
}

function xor(a,b){
    if(a===b){
        return '0';
    }
    else{
        return '1';
    }
}

function binToGray(bin){
    var gray="";
    var zero="0";
    var one="1";
    if(bin===zero){
        return zero;
    }
    if(bin===one){
        return one;
    }
    var n=bin.length;
    gray+='1';
    for(let i=1;i<n;i++){
        var next;
        var a=parseInt(bin[i-1]);
        var b=parseInt(bin[i]);
        next=xor(a,b);
        gray+=next;
    }
    return gray;
}

function convt(){
    var x=document.getElementById("input").value;
    var num=parseInt(x);
    x=decToBin(num);
    x=binToGray(x);
    x='Gray code of '+num.toString()+' is : '+x;
    document.getElementById("output").innerHTML=x;
    document.getElementById("output").style.visibility='visible';
}

var btn=document.getElementById("cnvt");
btn.addEventListener('click', convt);