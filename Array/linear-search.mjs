
const array = [2, 3, 5, 6, 7, 8]
const target = 6

function findElementExistInArray(array, target) {
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target)
            return i
    }
    return -1
}

console.log(findElementExistInArray(array, target));

// Ouput : 3

// Big-O = O(n) Linear Time Complexity

