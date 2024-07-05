

// Binary Search Implementation

const arr = [1,2,3,4,5,6]

const target = 9

function binarySearch(arr,target){
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex){

        let middleIndex = Math.floor((leftIndex + rightIndex)/2)

        if(target === arr[middleIndex]){
            return middleIndex
        }
        if(target < arr[middleIndex]){
            rightIndex = middleIndex - 1
        }else{
            leftIndex = middleIndex + 1
        }
    }
    return -1 
}

const result = binarySearch(arr,target)

console.log(result,'result is showing');