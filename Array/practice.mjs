

const array = [1,2,3,4,5]
const target = 8 
function  binarySearch(array,target) {
  let leftIndex = 0 
  let rightIndex = array.length - 1
  while (leftIndex < rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex)/2)
    if(target === array[middleIndex]){
      return middleIndex
    }
    if(target < array[middleIndex]){
      rightIndex = middleIndex - 1
    }else{
      leftIndex = middleIndex + 1
    }
  }
  return -1
}

let result = binarySearch(array,target)

console.log(result,'result is showing')
