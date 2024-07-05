

const array = [1,2,3,4,5]
let sum = 0
// for(let i = 0 ; i< array.length ; i++){
//     sum += array[i]
// }

// console.log(sum);

let count = 0
let n = array.length
function sumOfArrayValues (array,count,sum,n){
    if(count  === n){
        return sum
    }
    sum += array[count]
    count++
    return sumOfArrayValues(array,count,sum,n)
}


const result = sumOfArrayValues(array,count,sum,n)

console.log(result,'result is showing');