
const array = [8, 2, 1, 5, 4, 3, 6]

function insertionSort(arr) {
    let first = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (first > arr[i + 1]) {
            let temp = arr[0]
            arr[0] = arr[i + 1]
            arr[i + 1] = temp
        }

    }
}

insertionSort(array)

console.log(array, 'array');