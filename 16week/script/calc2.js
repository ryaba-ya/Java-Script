document.forms.publish.onsubmit = function () {
    let message = this.message.value;


    let arr = message.split(',')
    //console.log(message)
    //console.log(typeof arr);

    function compareNumber(a, b) {
        return a - b
    }
    console.log(arr.sort(compareNumber));


    let sumArray = arr.reduce(function (previousValue, item, index, array) {
        return item + previousValue;
    }, 0);
    console.log(sumArray);

    return false;
};