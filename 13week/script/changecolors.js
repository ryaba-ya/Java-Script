function clickMe() {
    var e = document.getElementById("purple");
    var c = window.getComputedStyle(e).backgroundColor;
    if (c === "rgb(0, 0, 0)") {
    document.getElementById("purple").style.background = "#ff77ee";
} else  if(c === "rgb(0, 0, 5)"){
    document.getElementById("purple").style.background = "#005";
}
}

function clickMe1() {
    let changeMe = document.getElementById('green');
    changeMe.style.background = "#b39ddb";
}

function clickMe2() {
    let changeMe = document.getElementById('orange');
    changeMe.style.background = "#cdfa9b";
}