"use strict"

let operator;
const buttonplus=document.getElementById("plus")


class Calc{
    constructor(num1,num2,result){
        this.num1=document.querySelector('#number1').value;
        this.num2=document.querySelector('#number2').value;
        this.result= result
        console.log(num1);
       
    }
    static plus(num1,num2){
        console.log(num1);
        num1 = parseInt(num1);
        num2 = parseInt(num2);
       let  result = num1 + num2;
        document.querySelector('#out').innerHTML = result;
        console.log(num1);
      
    }

}
    let numbers =[
    new Calc ("num1","num2")
]


        
        function minus() {
            let num1, num2, result;
            num1 = document.querySelector('#number1').value;
            num1 = parseInt(num1);
            num2 = document.querySelector('#number2').value;
            num2 = parseInt(num2);
            result = num1 - num2;
            document.querySelector('#out').innerHTML = result;
        }
        function times() {
            let num1, num2, result;
            num1 = document.querySelector('#number1').value;
            num1 = parseInt(num1);
            num2 = document.querySelector('#number2').value;
            num2 = parseInt(num2);
            result = num1 * num2;
            document.querySelector('#out').innerHTML = result;
        }
        function divide() {
            let num1, num2, result;
            num1 = document.querySelector('#number1').value;
            num1 = parseInt(num1);
            num2 = document.querySelector('#number2').value;
            num2 = parseInt(num2);
            result = num1 / num2;
            if (result===Infinity){
                document.querySelector('#out').innerHTML = "Делить на ноль нельзя"
               } else{
                document.querySelector('#out').innerHTML = result;
               };
            
        }
//    Если значение результата === бесконечности, тогде вывести Делить на ноль нельзя
   buttonplus.addEventListener("click",Calc.plus)