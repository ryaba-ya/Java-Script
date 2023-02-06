
const form = document.querySelector("form")
let fname=document.querySelector("#firstname").value;
let lname=document.querySelector("#lastname").value
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    console.log(form)
  
   
    fetch("https://httpbin.org/post",
        {
            method: 'POST',
            body: new FormData(form)
            
        })
        .then(response => response.json())
        .then(user => {
            console.log(form)
            console.log(user);
        })
        .catch(error => console.log(error));
})
 
   
