let btn = document.getElementById("searching");
btn.addEventListener("click", search);

function search() {
    let container = ""
    try {
        if (!navigator.onLine) {
            throw new Error("Отсутствует подключение")
        }
    } catch (e) {
        alert(e.name + ": Проверте сетевое соединение")
    }
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=L0Ylk4tp10mOgpMmslAiefIjiZcC9qjn&q=${document.getElementById("objectSerch").value}&limit=5&offset=0&rating=g&lang=en`)
        .then(response => response.json())
        .then(gifs => {

            for (let gif of gifs.data) {
                container += `<img  src="${gif.images.fixed_height.url}" class="gifImg"></img>`
                document.getElementById("result").innerHTML = container

            }

        })
        .catch(err => console.error(err));



};