
function mergeSort(arr,low,high) {
  if(low<high){

    let mid = Math.floor((low+high)/2)

    mergeSort(arr,low,mid)
    mergeSort(arr,mid+1,high)
    merge(arr,low,mid,high)
  } 
}

function merge(arr,low,mid,high){
  let i = low
  let j = mid + 1
  let k = low
  let b = []
  while (i<= mid && j <= high) {
   if(arr[i]<= arr[j]){
     b[k] = arr[i]
     i++
   }else{
     b[k] = arr[j]
     j++
   } 
     k++
  }

  if(i>mid){
    while (j<= high) {
     b[k] = arr[j] 
      j++
      k++
    }
  }else{
    while (i<=mid) {
     b[k] = arr[i] 
      i++
      k++
    }
  }
  for (let k = low; k <= high; k++) {
    arr[k]= b[k];
    
  }
}


const array = [5,4]
const N = array.length 

mergeSort(array,0,N-1)

console.log('Sorted array:',array)
