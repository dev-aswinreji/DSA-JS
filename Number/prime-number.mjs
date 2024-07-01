
// function isPrime(n) {

//     if (n < 2) {
//         console.log('false');
//         return false
//     }
//     for (let i = 2; i < n; i++) {   // we use i < n because when i == n it is divisible by n so we omit that code
//         if (n % i === 0) {
//             return false
//         }
//     }
//     return true
// }

// console.log(isPrime(1)); //false

// console.log(isPrime(5)); //true

// console.log(isPrime(4)); //false

//Big-O = O(n) -- Linear time complexity


// Optimized Primary Test 


function isPrime(n) {
    if (n < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {   // we use i < n because when i == n it is divisible by n so we omit that code
        if (n % i === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(1)); //false

console.log(isPrime(2)); //true

console.log(isPrime(5)); //true

console.log(isPrime(4)); //false

console.log(isPrime(16)); //false