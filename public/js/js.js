function regnUt(){

    var nr1 = document.getElementById('tall1').value;
    var nr2 = document.getElementById('tall2').value;

    if(document.getElementById('matte_pluss').checked) {

        document.getElementById('output').innerHTML = nr1+" + "+nr2+" = "+(parseInt(nr1)+parseInt(nr2));

    }else if(document.getElementById('matte_minus').checked) {

        document.getElementById('output').innerHTML = nr1+" - "+nr2+" = "+(parseInt(nr1)-parseInt(nr2));

    }else if(document.getElementById('matte_dele').checked) {

        document.getElementById('output').innerHTML = nr1+" / "+nr2+" = "+(parseInt(nr1)/parseInt(nr2));

    }else if(document.getElementById('matte_gange').checked) {

        document.getElementById('output').innerHTML = nr1+" * "+nr2+" = "+(parseInt(nr1)*parseInt(nr2));

    }
}


function andreGrad(){

    var x1;
    var x2;

    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;

    x1 = ((-parseInt(b)+Math.sqrt(parseInt(b)^2 -(4*parseInt(a)*parseInt(c))))/2*parseInt(a));
    x2 = ((-parseInt(b)-Math.sqrt(parseInt(b)^2 -(4*parseInt(a)*parseInt(c))))/2*parseInt(a));

    
    if (x1 == x2){
        document.getElementById('null1').innerHTML = "Bare ett nullpunkt: x = "+x1.toFixed(3);
        document.getElementById('null2').innerHTML = "";
    }else if (Math.sqrt(parseInt(b)^2 -(4*parseInt(a)*parseInt(c)))>0){
        document.getElementById('null1').innerHTML = "1: x = "+x1.toFixed(3);
        document.getElementById('null2').innerHTML = "2: x = "+x2.toFixed(3);
    }else{
        document.getElementById('null1').innerHTML = "No real roots.";
        document.getElementById('null2').innerHTML = "";
    }
}