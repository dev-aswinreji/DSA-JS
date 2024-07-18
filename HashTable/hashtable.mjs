class HashTable {
  constructor(size) {
    this.table = new Array(size)
    this.size = size
  }

  hash(key) {
    let index = 0

    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i)
    }
    console.log(index,'index is showing');
    return index % this.size
  }

  set(key, value) {
    const index = this.hash(key)
    const subArray = this.table[index]
    if(!subArray){
      this.table[index] = [[key,value]]
    }else{
      const someKeyItem = subArray.find(item=>item[0] === key)
      if(someKeyItem){
        someKeyItem[1] = value
      }else{
        subArray.push([key,value])
      }
    }
  }

  get(key){
    const index = this.hash(key)
    const subArray = this.table[index]
    if(subArray){
      const someKeyItem = subArray.find(item=>item[0] === key)
      if(someKeyItem){
        return someKeyItem[1]
      }
    }
    return undefined
  }

  remove(key){
    const index = this.hash(key)

    const subArray = this.table[index]

    if(subArray){
      const someKeyItem = subArray.find(item => item[0] === key)
      subArray.splice(subArray.indexOf(someKeyItem),1)

    }else{
      return 'key not found'
    }
  }
  display(){
    for(let i = 0; i< this.table.length;i++){
      if(this.table[i])
      console.log(i,this.table[i]);
    }

  }
}


const table = new HashTable(40)

table.set(1234,"bruce")

console.log(table.get("name"));

table.set("name","batman")

console.log(table.get(1234));
table.display()
table.remove("name")

console.log(table.get("name"));
table.set(8,"bruce")

table.display()