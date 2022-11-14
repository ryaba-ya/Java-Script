function clickMe() {
    let changeMe = document.getElementById("purple" );
    if (changeMe.style.background === " rgb(88, 45, 45)") {
        changeMe.style.background = "rgb(174, 121, 121)";

    } else if (changeMe.style.background === "rgb(174, 121, 121)") {
        changeMe.style.background = " rgb(88, 45, 45)";

    } else {
        changeMe.style.background = "rgb(174, 121, 121)";

    }

}
