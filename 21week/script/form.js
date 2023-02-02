'use strict'

let button = document.getElementById("postButton")
button.addEventListener("click",sendForm)
function sendForm(e){
    e.preventDefault();

    let user ={
        fname: document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        birth:document.getElementById("birth").value,
        email:document.getElementById("email").value,
        gender:document.getElementById("gender").value,
        number:document.getElementById("number").value
    }
    fetch("https://httpbin.org/post ",
    {
        method: 'POST',
        body: JSON.stringify(user),
        headers:{
            'Content-Type':'application/json;charset=utf-8'
        },
    })
    .then(response=>response.json())
    .then(user=>{
        console.log(user);
    })
    .catch(error=>console.log(error))
}