let operator;


        function plus() {
            let num1, num2, result;
            num1 = document.querySelector('#number1').value;
            num1 = parseInt(num1); //преобразование в число
            num2 = document.querySelector('#number2').value;
            num2 = parseInt(num2);
            result = num1 + num2;
            document.querySelector('#out').innerHTML = result; // в содержимое элемента <p></p> мы помещаем результат
        }
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
   

