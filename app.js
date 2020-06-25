function insert(num){
    var result = document.getElementById("result");
    result.value += num;}

function equal(){
    // document.form.textview.value = eval(document.form.textview.value);
    var result = document.getElementById("result");
    result.value = eval(result.value);
}

function clearResult(){
    var result = document.getElementById("result");
    result.value = "";
}

function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1)
}