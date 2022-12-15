"use strict"
//const mainForm = document.forms.main;
//console.log(mainForm.elements);
//const userNameInput = mainForm.name;
//console.log(userNameInput.value);
//const formSelect = mainForm.age;
//const numberChosen = formSelect.selectedIndex;
//console.log(numberChosen)
//const selectValueText = formSelect.options[numberChosen].text;
//console.log(selectValueText)
//formSelect.options[2].selected=true;
//let newOption= new Option("5", 5,false,false);
//formSelect.append(newOption)
//const userNameInputPlaceholder =userNameInput.placeholder;
//console.log(userNameInputPlaceholder)

//userNameInput.addEventListener("focus", function(e){
   //userNameInputPlaceholder="";
//});
//const emailInput = mainForm.email;
//mainForm.addEventListener("submit", function(event){
   // if(emailTest(emailInput)){
       // emailInput.parentElement.insertAdjacentHTML(
           // "beforeend",
           // `<divclass="main-form__error">
           // write ypur email
           // </div>`
       // );
       // event.preventDefault();
   // }
//})
//function emailTest(input){
   // return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//}

//let error = formValidate(mainForm);

//function formValidate(mainForm){

//}



//mainForm.addEventListener("submit", function(event){
   //console.log("sending");

    //if(! userNameInput.value){
       // console.log('put something');
       // event.preventDefault();
   // }
//})
//mainForm.addEventListener(submit)



const form = document.forms.main;
const formInputs = document.querySelectorAll(".warning");
const inputEmail = form.email;
const inputName = form.name;
const inputCheckbox = form.agreement;
let fields = document.querySelector(".main-form__error")

form.addEventListener('submit', function(event){
    event.preventDefault()

    console.log("sending!");
    

let emailValue = inputEmail.value;
let nameValue = inputName.value;


formInputs.forEach(function (input) {


    if(input.value ===""){
        input.parentElement.insertAdjacentHTML(
             "beforeend",
            `<div class="main-form__error">
             Это поле обязательно для заполнения!
             </div>`
         );
         
        event.preventDefault();
        console.log("input not filled");
   
    } 
   
})

    return false;
})

//const emailInput = mainForm.email;
//mainForm.addEventListener("submit", function(event){
   // if(emailTest(emailInput)){
       // emailInput.parentElement.insertAdjacentHTML(
           // "beforeend",
           // `<divclass="main-form__error">
           // write ypur email
           // </div>`
       // );
       // event.preventDefault();
   // }
//})