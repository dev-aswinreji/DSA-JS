
const array = [1, 2, 4,3, 2, 1]


// function isPalindrome (arr) {
//     let j = arr.length - 1
//     for(let i = 0 ; i< arr.length/2;i++){
//         if(arr[i] != arr[j]){
//             return false
//         }
//         j--
//     }
//     return true
// }

// let result = isPalindrome(array)
// console.log(result,'result is showing');


let count = 0
function isPalindromeRecursive(arr, count) {
    if (arr.length === count) {
        return true
    }
    if (arr[count] !== arr[arr.length - (count + 1)]) {
        return false
    } else {
        count++
        console.log(count, 'count is showing');
        return isPalindromeRecursive(arr, count)
    }
}

let result = isPalindromeRecursive(array, count)
console.log(result, 'result is showing');


// Big-O O(n) Linear Time complexity

