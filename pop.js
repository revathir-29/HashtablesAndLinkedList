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
pop() {
//If our linkedlist doesn't have any element
    if(!this.head) {
        return undefined
    }
    let temp = this.head;
    let prev = this.head;

    while(temp.next) {
        prev = temp;
        temp = prev.next;
    }

    this.tail = prev
    this.tail.next = null;
    this.length--;

    //If our linked list have only one item
    if(this.length===0) {
        this.head = null;
        this.tail = null;
    }
    return temp;
    }
}

const myLinkedList = new LinkedList(1) ;
myLinkedList.push(10);
myLinkedList.pop();
console.log(myLinkedList);