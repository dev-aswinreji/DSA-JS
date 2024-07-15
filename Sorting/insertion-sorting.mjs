
const array = [23, 1, 10, 5, 2]

function insertionSort(arr, n) {
  let i, key, j
  for (i = 1; i < n; i++) {
    key = arr[i]
    j = i - 1

    while(j >= 0 && arr[j] > key){
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = key
  }
}

const result = insertionSort(array, array.length)

console.log(array, 'result is showing')


