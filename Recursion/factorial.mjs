

// let num = 1;
// function recursiveFactorial(n) {

//     if(n == 0){
//         return 0
//     }
//     num *= n

//     if (n === 1) {
//         return num
//     }
//     return recursiveFactorial(n - 1)
// }

// console.log(recursiveFactorial(2));


function recursiveFactorial(n){
    if(n == 0){
        return 1
    }
    return n * recursiveFactorial(n-1)

}

console.log(recursiveFactorial(0));  // Output : 1

console.log(recursiveFactorial(1));  // Output : 1

console.log(recursiveFactorial(4));  // Output : 24


//Big-O = O(n) Linear 