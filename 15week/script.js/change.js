let selectElem = document.querySelector(".select"); // берем элемент селект

selectElem.addEventListener("change", function () {
    document.body.style.backgroundColor = selectElem.value;
})