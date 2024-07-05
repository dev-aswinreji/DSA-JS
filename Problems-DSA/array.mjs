
// Find number with maximum occurance from an array

const array = [5, 5, 5, 1, 3, 5, 3, 3, 4, 5]

function maxOccurance(array) {
    let maxCount = 0
    let maxOccurance
    for (let i = 0; i < array.length; i++) {
        let count = 0
        for (let j = 0; array.length; j++) {
            if (array[i] === array[j])
                count++
            break
        }
        if (count > maxCount) {
            maxCount = count
            maxOccurance = array[i]
        }
    }
    return maxOccurance
}


const result = maxOccurance(array)

console.log(result, 'result is showing');