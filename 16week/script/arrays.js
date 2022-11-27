let arrOne = ['js', 'css', 'html',];
alert (arrOne[0]);


let arrTwo = [0, 1, false, 2, undefined, '', 3, null,];
var filtered = arrTwo.filter(Boolean);
console.log(filtered);

let arrThree = [
    [1,2],
    [1,2,3],
    [1,2,3,4],
]
let result = arrThree.findIndex(item => item.length>3);
console.log(result);



