const input = document.querySelector(".number");
const oneMoreBtn = document.querySelector(".oneMore");
const doneBtn = document.querySelector(".done");
const error = document.querySelector('.error');
const result = document.querySelector('.result');
const summa = document.querySelector('.sum');



let arr = [];

function compareNumber(a, b) {
    return a - b
}
const addNextNumber = () => {
    let number = Number(input.value)
    if (number) {
        arr.push(number);

    } else {
        error.innerHTML = "error"
    }
    result.innerHTML = arr.sort(compareNumber)
    input.value = ''


}
const getSum = () => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    summa.innerHTML = sum
    error.innerHTML = ""
}

oneMoreBtn.addEventListener('click', addNextNumber)

doneBtn.addEventListener('click', getSum)