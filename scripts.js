function decToBin(num, value) {
    var bin = num.toString(value);
    return bin;
}

function xor(a, b) {
    if (a === b) {
        return "0";
    } else {
        return "1";
    }
}

function binToGray(bin) {
    var gray = "";
    var zero = "0";
    var one = "1";
    if (bin === zero) {
        return zero;
    }
    if (bin === one) {
        return one;
    }
    var n = bin.length;
    gray += "1";
    for (let i = 1; i < n; i++) {
        var next;
        var a = parseInt(bin[i - 1]);
        var b = parseInt(bin[i]);
        next = xor(a, b);
        gray += next;
    }
    return gray;
}

function DecToXS3(num, excess) {
    var str = "";
    for (let index = 0; num > 10; index++) {
        var temp = num % 10;
        num = Math.floor(num / 10);
        temp = decToBin(temp + excess, 2);
        str = temp.toString() + str;
        if (temp.length < 4) {
            for (let i = 0; i < 4 - temp.length; i++) str = "0" + str;
        }
    }
    str = decToBin(num + excess, 2) + str;
    var temp = decToBin(num + excess, 2).length;
    if (temp < 4) {
        for (let i = 0; i < 4 - temp; i++) str = "0" + str;
    }
    console.log(str + "help");
    return str;
}

function convt() {
    var x = document.getElementById("input").value;
    var num = parseInt(x);
    x = decToBin(num, 2);
    x = binToGray(x);
    x = "Gray code of " + num.toString() + " is : " + x;
    // x += ", binary : " + decToBin(num, 2).toString();
    // x += ", octal : " + decToBin(num, 8).toString();
    // x += ", XS-3 : " + DecToXS3(num);
    document.getElementById("grey").innerHTML = x;
    document.getElementById("grey").style.visibility = "visible";
    x =
        "binary code of " + num.toString() + " is : " + decToBin(num, 2).toString();
    document.getElementById("binary").innerHTML = x;
    document.getElementById("binary").style.visibility = "visible";
    x =
        " octal code of " + num.toString() + " is : " + decToBin(num, 8).toString();
    document.getElementById("octal").innerHTML = x;
    document.getElementById("octal").style.visibility = "visible";
    x = " excess 3 code of " + num.toString() + " is : " + DecToXS3(num, 3);
    document.getElementById("xs3").innerHTML = x;
    document.getElementById("xs3").style.visibility = "visible";
    x = "BCD code of " + num.toString() + " is : " + DecToXS3(num, 0);
    document.getElementById("bcd").innerHTML = x;
    document.getElementById("bcd").style.visibility = "visible";
    x =
        " hexadecimal code of " +
        num.toString() +
        " is : " +
        decToBin(num, 16).toString();
    document.getElementById("hexa").innerHTML = x;
    document.getElementById("hexa").style.visibility = "visible";
}

var btn = document.getElementById("cnvt");
btn.addEventListener("click", convt);