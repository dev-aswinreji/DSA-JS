
const array = [6, 0, 3, 5]

function bubbleSort(arr) {

    let swapped = true
    while (swapped) {
        swapped = false

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    }
    console.log(arr,'arr')

}

bubbleSort(array)



// Big-O is O(n^2)
