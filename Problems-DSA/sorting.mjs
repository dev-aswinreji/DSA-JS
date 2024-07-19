// bubble sort

const array = [7, 8, 5, 2, 9]

const n = array.length

// function bubbleSort(arr,n){

//     let swapped = true

//     while(swapped){
//         swapped = false
//         for(let i = 0 ; i<n;i++){
//             if(arr[i] > arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i + 1] = temp
//                 swapped = true
//             }
//         }
//     }
// }

// bubbleSort(array,n )

console.log(array, 'Sorted Array');

function insertionSort(arr, n) {
    let i, key, j
    for (let i = 1; i < n; i++) {
        key = arr[i]
        j = i - 1

        while (j >= 0 && arr[j] < key) {
            arr[j + 1] = arr[j]
            j = j - 1
        }

        arr[j + 1] = key
    }
}


function selectionSort(arr, n) {
    let i, j, min_ind

    for (i = 0; i < n - 1; i++) {
        min_ind = i
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_ind]) {
                min_ind = j
            }
        }
        swap(arr, min_ind, i)
    }
}


function swap(arr, min_ind, i) {
    let temp = arr[min_ind]
    arr[min_ind] = arr[i]

    arr[i] = temp
}

// selectionSort(array,n)

console.log(array, 'sorted');


function quickSort(arr, low, high) {
    if (low < high) {
        let pt = partition(arr, low, high)

        quickSort(arr, low, pt - 1)
        quickSort(arr, pt + 1, high)
    }
}

function partition(arr, low, high) {
    let pivot = arr[high]
    console.log(pivot,'pviot');
    let start = low - 1

    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            start++
            [arr[start], arr[j]] = [arr[j], arr[start]]
        }
    }
    [arr[start + 1], arr[high]] = [arr[high], arr[start+1]]
    return start + 1
}


quickSort(array, 0, n - 1)

console.log(array, 'sort');