

const map = new Map([['a',1],['b',2]])

//add new value in map 

map.set('c',3)

console.log(map.has('a'));

//delete a value from map

map.delete('c')

//size of map 
console.log(map.size);

// To clear the map data

map.clear()

for (const [key,value] of map) {
    console.log(key,':',value);
}
