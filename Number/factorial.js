
function factorial(n) {
    let product = 1
    for (i = 1; i <= n; i++) {
        product *= i
    }
    return product
}

console.log(factorial(0)); //0! = 1

console.log(factorial(1));  //1! = 1

console.log(factorial(5)); //5! = 120


// In this case we can avoid i starting from 1 because it always give
//  i * i = 1 (when i =1 ) so it has no effect in that loop

/*
function factorial(n) {
    let product = 1
    for (i = 2; i <= n; i++) {  
        product *= i
    }
    return product
}

*/