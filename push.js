class Node {
    constructor(data) {
        this.head = data;
        this.next = null;
    }
}
class LinkedList {
    constructor(data) {
        this.head = new Node(data)

        this.tail = this.head
        this.length = 1
    }

push(data) {
    let newNode = new Node(data) ;
    if(!this.head) {
        this.head = newNode;
        this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
}
}

const myLinkedList = new LinkedList(1) ;
myLinkedList.push(10);
console.log(myLinkedList);