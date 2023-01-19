let user = {
    nikname:"crazy200",
    firstname: "Oleg",
    lastname: 'Sidorov',
    phone: "+79201234567",
    lavel: "Москва",
    age: 37,
    bonus: 2000,

}
let products = { 
    productname:"",
    price:"",

}
let purchases = {
    product:"hat",
    date:"23.11.2022",
    payment:"card",
}
let game=[user,products,purchases];
let jsonGame=JSON.stringify(game);
console.log(jsonGame)