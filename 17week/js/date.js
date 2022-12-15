
function ValidateInput(emailField) {
    var inputFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (emailField.value.match(inputFormat)) {
        return true;
    }
    else {
        alert("Только числа!");
        return false;
    }
}