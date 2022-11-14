const next = document.querySelector("#next-btn");
const back = document.querySelector("#previous-btn");

const image = document.querySelector("#item");

// создаю массив картинок
const images = [
    "/13week/assets/14823.jpeg",
    "/13week/assets/DIOR_BOOK_PETER_LINDBERGH_2.webp",
    "/13week/assets/LINDBERGH_ALAIA_BOOK-LEDE.webp",
    "/13week/assets/Pete-Lindbergh-voguebus-Peter-Lindbergh-British-Vogue-aug-19-50-50-bundle.webp",
];

// создали переменную текущего изоображения и присвоили ему порядковый номер элемента в массиве
let curentImg = 0;
function show(){
    image.src= images[curentImg];
}
function nextSlide(){
curentImg--;
if (curentImg < 0) {
    curentImg = images.length - 1;}

}