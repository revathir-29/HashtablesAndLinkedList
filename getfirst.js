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
 
unshift(data) {
    let newNode = new Node(data);
    if(!this.head) {
        this.head = newNode;
        this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode

    this.length++;
    }   
getFirst() {
    if(!this.head) {
        return null;
    }
    return this.head;
}    
}

const myLinkedList = new LinkedList(1) ;
myLinkedList.push(10);
myLinkedList.unshift(20);
console.log(myLinkedList);
console.log(myLinkedList.getFirst());