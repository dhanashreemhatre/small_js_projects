let display=document.getElementById("answer");


function add(){
    const num1=parseFloat(document.getElementById("num1").value);
    const num2=parseFloat(document.getElementById("num2").value);

    let result=num1+num2;
    display.textContent="Answer: "+result;

}
function sub(){
    const num1=parseFloat(document.getElementById("num1").value);
    const num2=parseFloat(document.getElementById("num2").value);

    let result=num1-num2;
    display.textContent="Answer: "+result;

}
function mul(){
    const num1=parseFloat(document.getElementById("num1").value);
    const num2=parseFloat(document.getElementById("num2").value);

    let result=num1*num2;
    display.textContent="Answer: "+result;
}
function divide(){
    const num1=parseFloat(document.getElementById("num1").value);
    const num2=parseFloat(document.getElementById("num2").value);

    let result=num1/num2;
    display.textContent="Answer: "+result;
}