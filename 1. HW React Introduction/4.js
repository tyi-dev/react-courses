function comparingArray (arr1, arr2){
    return JSON.stringify(arr1)===JSON.stringify(arr2)
}

arr1 = [1,2,3]
arr2 = [1,2,3]
arr3 = [1,2,4]

console.log (comparingArray(arr1, arr2))
console.log (comparingArray(arr1,arr3))

