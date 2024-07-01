
function recursiveFibonacci(n) {
    if(n < 2){
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n - 2)
     
}

console.log(recursiveFibonacci(0));  // output 0
console.log(recursiveFibonacci(1));  // output 1
console.log(recursiveFibonacci(4));  // output 8