
class HashTable {
  constructor (size) {
    this.table = new Array(size)
    this.size = size    
  }

  hash(key){
    let total = 0 
    for(let i = 0 ; i<key.length; i++){
      console.log(key.charCodeAt(i),'charAt')
      total += key.charCodeAt(i)
    }
    console.log(total,'total is showing')
    let data = total % this.size
    console.log(data,'data is showing')
    return data
  }

  set(key,value){
    const index = this.hash(key)
    this.table[index] = value
  }

  get(key){
    const index = this.hash(key)
    return this.table[index]
  }
}

const table = new HashTable(40)

table.set("name","bruce")
console.log(table.get("name"))
