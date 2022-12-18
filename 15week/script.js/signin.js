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
const faild = document.querySelector(".main-form__error")

function validEmail(email){
    let re =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
form.onsubmit = function(){
    let emailValue = inputEmail.value;
    let nameValue = inputName.value;
    let emptyInputs = 


    formInputs.forEach( function(input){
       
        if(input.value === ""){
           input.classList.add("error")
           console.log("input not field");
        
        }else{
           input.classList.remove("error")
        }
    });

  if (!inputCheckbox.checked)  {
    inputCheckbox.classList.add("error")
    inputCheckbox.parentElement.insertAdjacentHTML(
        "beforeend",
        `<divclass="main-form__error">
        Вв не согласились с политикой конфидициальности!
        </div>`
   );
    return false;

  }else{
    faild.remove()
    input.classList.remove("error")
  }
if(!validEmail(emailValue)){
    console.log("no valid")
    inputEmail.parentElement.insertAdjacentHTML(
         "beforeend",
         `<divclass="main-form__error">
         write ypur email
         </div>`
    );
    return false
}else{
faild.remove()
input.classList.remove("error")

}




    return false ;
}