function renderArrayToConsoleElementByElement(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}
function returnLongestWordInString(string, separator){
    if(string.length === 0){
        console.log("Invalid input data")
    }else {
        let wordsArray = string.split(separator), mostSymbs = 0, longestWordsToReturn = []
        for (let i = 0; i < wordsArray.length; i++) {
            if (wordsArray[i].length > mostSymbs) {
                mostSymbs = wordsArray[i].length
            }
        }
        for(let i = 0; i < wordsArray.length; i++){
            if (wordsArray[i].length === mostSymbs){
                longestWordsToReturn.push(wordsArray[i])
            }
        }
        return longestWordsToReturn
    }
}

let string = "What is the average airspeed velocity of an unladen swallow"
renderArrayToConsoleElementByElement(returnLongestWordInString(string, ' '))