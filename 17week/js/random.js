const button = document.querySelector(".button");
let generatedNumbers = document.querySelector(".numbers");
let minNumber = document.querySelector(".min");
let maxNumber = document.querySelector(".max");
let sumNumber = document.querySelector(".summa");
let average = document.querySelector(".average");
let devideNumbers = document.querySelector(".devide");

let arr = [];
let generate = () => {
    for (let i = 0; i < 10; i++) {
        arr.push(rand(-10, 10))
    }
    console.log(arr)

    //преобразуем массив в строку с разделяющей запятой
    let numbersString = arr.join(", ");

    //изменяем содержимое тега 
    generatedNumbers.innerHTML = generatedNumbers.innerHTML + `${numbersString}`


    let min = Math.min.apply(null, arr);
    console.log(min)
    minNumber.innerHTML = minNumber.innerHTML + min;
    let max = Math.max.apply(null, arr);
    console.log(max)
    maxNumber.innerHTML = maxNumber.innerHTML + max;

    let resultSum = arr.reduce(function (sum, current) {
        return sum + current
    });
    console.log(resultSum)
    sumNumber.innerHTML = sumNumber.innerHTML + resultSum;

    let getAverage = resultSum / arr.length;
    console.log(getAverage)
    average.innerHTML = average.innerHTML + getAverage;

    var devide = arr.reduce(function (a, b) {
        return a * b;
    }, 0);

    console.log(devide)
    devideNumbers.innerHTML = devideNumbers.innerHTML + devide;
};

function rand(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

button.addEventListener('click', generate);