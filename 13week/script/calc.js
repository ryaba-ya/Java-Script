function calcPlus(){
    let operand1 = prompt('First number');
    let operand2 = prompt('second number');
    alert (   +operand1 + +operand2)
}
function calcMinus(){
    let operand1 = prompt('First number');
    let operand2 = prompt('second number');
    alert (   operand1 - operand2);
}function calcTimes(){
    let operand1 = prompt('First number');
    let operand2 = prompt('second number');
    alert (   +operand1 * +operand2);
}function calcDivide(){
    let operand1 = prompt('First number');
    let operand2 = prompt('second number');
   let result=  operand1 / operand2;
   if (result===Infinity){
    alert("Делить на 0 нельзя");
   } else{
    alert(result)
   };
}