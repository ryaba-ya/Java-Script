let button = document.getElementById("postButton");


button.addEventListener("click",sendForm);

function sendForm(e) {
    e.preventDefault();
    let form = document.querySelector(".form");
    fetch("https://httpbin.org/post", {
        method: "POST",
        body: new FormData(form)
    })
        .then(response => response.json())
        .then(user => console.log(user))
        .catch(error => console.log(error))
}