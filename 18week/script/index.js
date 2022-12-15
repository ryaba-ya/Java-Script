let arr =[];
function generate(arr){
    let newArr= arr.filter(Boolean).map(item => item*2);
    console.log(newArr)
}

generate([1,9,3, null, 0,"" ,6]);





