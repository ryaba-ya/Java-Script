

let fullName = document.querySelector(".fullname");
let secondName = document.querySelector(".secondname");
let firstName = document.querySelector(".firstname");
let patronymic = document.querySelector(".patronymic");


function getName() {
    let value = fullName.value
 let newWalue= value.replace(/ +/g, ' ').trim();
  
    let arr =value.split(" ");
    
    secondName.value = arr.shift();
    secondName.value = secondName.value.slice(0, 1).toUpperCase() + secondName.value.slice(1).toLowerCase();
    
    firstName.value = arr.shift();
    firstName.value = firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1).toLowerCase();
    
    patronymic.value = arr.shift();
    patronymic.value = patronymic.value.slice(0, 1).toUpperCase() + patronymic.value.slice(1).toLowerCase();
}

fullName.addEventListener("change", getName);