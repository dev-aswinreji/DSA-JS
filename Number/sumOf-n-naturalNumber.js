

function sumOfNnaturalNumber(n) {
    let sum = 0;
    for (let i = 0; i < n; i++)
        sum += i
    return sum
}

const sum = sumOfNnaturalNumber(7)
console.log(sum);

//Reduce time complexity of this code by using Arithametic Progession Formula by Fredric Gauss

function summationWithTimeComplexityConstant(n){
    return (n*(n+1))/2
}

let summation = summationWithTimeComplexityConstant(40)
console.log(summation,'summation');