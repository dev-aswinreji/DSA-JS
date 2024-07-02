
let a = "hai"
const obj = {
    name : 'Aswin',
    hello:'hello'
}

obj.hobby = 'football'

// console.log(obj[[a]]);

console.log(obj,'obj');

delete obj.hello

console.log(obj,'after deletion');

const newObj = {...obj}

console.log(newObj,'new object is ref of older obj');

newObj.f = function hello(params) {
    console.log("hello world");
}

// console.log(newObj.f());

newObj.f()