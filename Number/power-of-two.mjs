

// Using for loop

// function isPowerOf2 (n) {
//     if(n < 1){
//         return false
//     }
//     let num = n
//     for(let i = 0; i<n ;i++){  
//         if(num%2==0){
//             num = num/2              
//         }
//     }
//     if(num === 1 )
//         return true
//     return false
// }


// Using while loop

// function isPowerOf2(n) {
//     if (n < 1) {
//         return false
//     }

//     while (n > 1) {
//         if (n % 2 !== 0) {
//             return false
//         }
//         n = n / 2
//     }
//     return true
// }

// Big O = O(logn) In each iteration we are reducing the value of n by half 
// Input size is reduced by half - O(logn)

// console.log(isPowerOf2(2)); //true

// console.log(isPowerOf2(4)); //true

// console.log(isPowerOf2(7)); //false

// console.log(isPowerOf2(8)); //true


// There does exist a solution with constant time complexity
// Which is a one-liner
// Solution involves use of bit-wise operator 

function isPowerOf2BitWise (n) {
    if(n < 1){
        return false
    }
    return (n & (n-1)) === 0
}

console.log(isPowerOf2BitWise(2)); //true

console.log(isPowerOf2BitWise(4)); //true

console.log(isPowerOf2BitWise(7)); //false

console.log(isPowerOf2BitWise(8)); //true