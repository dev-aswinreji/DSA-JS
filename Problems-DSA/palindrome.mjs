

const array = [1, 2, 3,2, 1]


// function palindrome(array) {
//     let count = array.length - 1
//     for (let i = 0; i < array.length; i++) {
//         console.log(count,'cout');
//         if(array[i] !== array[count]){
//             return false
//         }
//         count -= 1
//     }
//     return true
// }

// const result = palindrome(array)

// console.log(result, 'result is showing');

let count = 0
let reverseCount = array.length -1
function palindromeRecursion(array,count,reverseCount){

    if(count === array.length -1){
        return true
    }
    if(array[count] !== array[reverseCount]){
        return false
    }else{
        count++
        reverseCount--
        return palindromeRecursion(array,count,reverseCount)
    }

    

}

const ouput = palindromeRecursion(array,count,reverseCount)

console.log(ouput,'ouput is showing');