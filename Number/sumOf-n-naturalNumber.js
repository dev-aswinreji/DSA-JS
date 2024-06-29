

function sumOfNnaturalNumber(n) {
    let sum = 0;
    for (let i = 0; i < n; i++)
        sum += i
    return sum
}

const sum = sumOfNnaturalNumber(7)
console.log(sum);