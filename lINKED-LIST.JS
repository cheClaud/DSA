class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let previous = this.head;
      while (previous.next) {
        previous = previous.next;
      }
      previous.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let previous = this.head;
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }
      node.next = previous.next;
      previous.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }

    this.size--;
    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        let removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }

    let i = 0;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return i;
      }
      current = current.next;
      i++;
    }

    return -1;
  }

  sort() {
    if (this.isEmpty()) {
      return "empty list";
    }
    if (this.size === 1) {
      return this.head;
    }

    let current = this.head;
    let listValues = [];
    while (current) {
      listValues.push(current.value);
      current = current.next;
    }
    
   function quickSort(arr) {
     let n = arr.length;
     if (n <= 1) {
       return arr;
     }

     const pivot = arr[n - 1];
     const left = [],
       right = [];

     for (let i = 0; i < n - 1; i++) {
       if (arr[i] < pivot) {
         left.push(arr[i]);
       } else {
         right.push(arr[i]);
       }
     }

     const sortedLeft = quickSort(left);
     const sortedRight = quickSort(right);
     return [...sortedLeft, pivot, ...sortedRight];
   }

   const sortedList = quickSort(listValues);
   this.head = new Node(sortedList[0]);
   current = this.head;

   for(let i = 1; i < sortedList.length; i++) {
    current.next = new Node(sortedList[i]);
    current = current.next
   }

   return this;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let current = this.head;
      let listValues = "";
      while (current) {
        listValues += `${current.value} `;
        current = current.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();
// console.log(list.isEmpty());
// console.log(list.getSize());
// list.print();
// list.append(10);
// list.print();

// list.append(2);
// list.append(1);
// list.prepend(30);
// list.print();
// list.insert(5, 1);
// list.print();
// console.log(list.removeValue(30));
// list.print();
// console.log(list.search(2))
// list.reverse();
// list.print();
// console.log(list.sort().print())

list.append(8);
list.append(4);
list.append(6);
list.print()
list.sort()
list.print()




















