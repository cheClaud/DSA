//the set implimentation of a hashtable
class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    //key is a string
    const str = key.toString();

    let total = 0;
    for (let i = 0; i < str.length; i++) {
      total += str.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key) {
    const index = this.hash(key);
    //this.table[index] = value;
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [key];
    } else {
      const sameKeyItem = bucket.find((item) => item === key);
      if (sameKeyItem) {
        return;
      } else {
        bucket.push(key);
      }
    }
  }

  has(key) {
    const index = this.hash(key);
    //return this.table[index];
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item === key);
      if (sameKeyItem) {
        return true;
      }
    }
    return false;
  }

  remove(key) {
    const index = this.hash(key);
    //this.table[index] = undefined;
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  sizeOfTable() {
    let j = 0;
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        j += 1;
      }
    }
    return j
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set('claud');
table.set(25);
table.display();
console.log(table.has(30));
table.display();
console.log(table.sizeOfTable());
