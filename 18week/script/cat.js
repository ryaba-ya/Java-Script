class Cat{
    constructor(name,breed,sex,food){
        this.name =  name;
        this.breed = breed
        this.sex = sex
        this.food = food
    }
}

let name = document.querySelector(".name");
let food = document.querySelector(".food")
let sex = document.querySelector(".sex")
let breed = document.querySelector(".breedsel")
let button = document.querySelector(".button")


console.log(name.value)
function obj(){
    let myCat = new Cat( name.value, breed.value,sex.value,food.value)
    console.log(myCat)
   
}
button.addEventListener('click', obj);