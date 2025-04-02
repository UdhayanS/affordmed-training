let display = document.getElementById("display");

function appendValue(value){
    display.value += value;

}

function clearText(){
    display.value = '';
}

function calculateResult(){

    let exp = display.value;
    exp = exp.replace('X', '*');
    exp = exp.replace('%', '/100');
    let val = eval(exp);
    document.getElementById("answer").innerText = val;
}