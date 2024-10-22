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
    
shift() {
    if(!this.head) {
        return undefined;
    }
    //1. Point the first node/element
    let temp = this.head;

    //2.Move the head to next node/element
    this.head = this.head.next;

    //3.Remove first element
    temp.next = null;

    this.length--;

    if(this.length===0) {
        this.tail = null;
    }
    return temp;  
}    
}

const myLinkedList = new LinkedList(1) ;
myLinkedList.push(10);
myLinkedList.unshift(20);
myLinkedList.shift();
console.log(myLinkedList);