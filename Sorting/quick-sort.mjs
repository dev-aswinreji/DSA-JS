
const array = [8,3,2,7,6,1,4]

const N = array.length
let low = 0 
let high = N - 1
function quickSort(arr,low,high) {
  
  if(low < high){
    let pi = partition(arr,low,high)
    return
    quickSort(arr,pi + 1, high)
    quickSort(arr,low,pi - 1)
  }
}


function partition(arr,low,high) {
 
  let pivot = arr[high]
  let start = low - 1 

  for(let j = low ; j<= high; j++){
    if(arr[j]< pivot){
      start++
      [arr[start],arr[j]] = [arr[j],arr[start]]
    }
  }
  [arr[start+1],arr[high]] = [arr[high], arr[start+1]]
  return start + 1
}

quickSort(array, low,high)

console.log(array,'Sorted array is showing')

