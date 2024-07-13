


// console.log(word[0]);

// for(let i = word.length - 1 ; i >= 0; i--){
//     newWord += word[i]
// }

// console.log(newWord);

// const array = [1,3,4,5,6,7]

// let start = 0
// let end = array.length - 1
// function reverseArray(array,start,end){
//     let temp = array[start]
//     array[start] = array[end]
//     array[end] = temp
//     console.log(start,'start is showing');
//     console.log(end,'end');
//     if(start < end){
//         start++
//         end--
//        return reverseArray(array,start,end)
//     }

//     return array

// }

// const result = reverseArray(array,start,end)

// console.log(result,'resutl is showin');



let start = 0
let word = 'hello'
let end = word.length - 1
let newWord = ''
function reversiveReverseString(word, newWord,start,end) {
    let temp = word[start]
    newWord += word[end]
    newWord += temp
    if(start < end){
        start++
        end--
        return reversiveReverseString(word,newWord,start,end)
    }
   return newWord
}

const result = reversiveReverseString(word, newWord,start,end)
console.log(result,'result is showing');

let name = 'sreya'

console.log('hello')
console.log(name,'ma,e');
