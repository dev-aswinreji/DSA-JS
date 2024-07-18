
class HashTable {
  constructor(size) {
    this.table = new Array(size)
    this.size = size
  }

  hash(key) {
    let total = 0
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i)
    }
    return total % this.size
  }

  set(key, value) {
    console.log(key,'vlu/',value);
    const index = this.hash(key)
    //     this.table[index] = value
    console.log(index,'ind');
    let bucket = this.table[index]
    if (!bucket) {
      this.table[index] = [[key, value]]
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key)
      if (sameKeyItem) {
        sameKeyItem[1] = value
      } else {
        bucket.push([key, value]);
      }
    }
    console.log(bucket,'bucket is showing');
  }

  get(key) {
    const index = this.hash(key)
    console.log(index,'ind');
    console.log(this.table,'table is showing');

    //     return this.table[index]
    const bucket = this.table[index]
    if (bucket) {
      const sameKeyItem = bucket.find(item => item[0] === key)
      if (sameKeyItem) {
        return sameKeyItem[1]
      }
    }
    return undefined
  }

  remove(key) {
    const index = this.hash(key)
    const bucket = this.table[index]
    if (bucket) {
      const sameKeyItem = bucket.find(item => item[0] === key)
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1)

      }
    }
  }

}

const table = new HashTable(40)

table.set("name", "bruce")
console.log(table.get("name"))
