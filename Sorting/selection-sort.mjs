
const array = [4,5,3,9,1]
const n = array.length

function selectionSort(arr,n) {
  let i , min_ind,j 
  for(i = 0 ; i<n-1; i++){
    min_ind = i 
    for(j = i+1; j<n;j++){
    if(arr[j] < arr[min_ind]){
        min_ind = j
      }
    }
    swap(arr,min_ind,i)
  }
}

function swap(arr,min_ind,i) {
 let temp = arr[min_ind] 
  arr[min_ind] = arr[i] 
  arr[i] = temp
}


selectionSort(array,n)

console.log(array,'sorted array is showing')
