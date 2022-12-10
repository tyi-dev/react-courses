function returnSumOfSquaresOfAllNumbersInArray(array){
    let sumOfSquares = 0;
    for(let i = 0; i < array.length; i++){
        if(typeof(array[i]) === "number"){
            sumOfSquares += array[i] * array[i]
        }
    }
    return sumOfSquares
}

let data = ["get wrecked", 1,2,3,4,5, "it still works?"]
console.log(returnSumOfSquaresOfAllNumbersInArray(data))