let num1 = document.querySelector(".a")
let num2 = document.querySelector(".b")
let result = document.querySelector(".result")
let buttonPlus = document.querySelector(".plus")
let buttonMinus = document.querySelector(".minus")
let buttonTimes = document.querySelector(".times")
let buttonDivide = document.querySelector(".divide")
let cleanButton = document.querySelector(".clean")

class Calc {
    static sum() {
        let a = num1.value
        a = parseInt(a)
        let b = Number(num2.value)
        let result1 = a + b
        console.log(result1)
        result.innerHTML = result1

    }
    static minus() {
        let a = Number(num1.value);

        let b = Number(num2.value);
        let result1 = a - b;
        console.log(result1);
        document.querySelector(".result").innerHTML = result1;

    }
    static times() {
        let a = num1.value
        a = parseInt(a)
        let b = Number(num2.value)
        let result1 = a * b
        console.log(result1)
        result.innerHTML = result1

    }
    static divide() {
        let a = num1.value
        a = parseInt(a)
        let b = Number(num2.value)
        let result1 = a / b
        console.log(result1)
        if (result1 === Infinity) {
            result.innerHTML = "Делить на ноль нельзя"
        } else {
            result.innerHTML = result1
        }



    }
    static clean() {
        num1.value = "";
        num2.value = "";
        result.innerHTML = "";
    }
}

buttonPlus.addEventListener("click", Calc.sum)
buttonMinus.addEventListener("click", Calc.minus)
buttonTimes.addEventListener("click", Calc.times)
buttonDivide.addEventListener("click", Calc.divide)
cleanButton.addEventListener("click", Calc.clean)