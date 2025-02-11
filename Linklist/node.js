class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);

let head = a;
a.next = b;
b.next = c;
c.next = d;

// starting - head
// ending - null
// iterating the linklist
let curr = head
while(curr != null){
    console.log(curr.data);
    curr = curr.next;
}


// sum of Linked List
let sum = 0;
curr = head;
while(curr != null){
    sum += curr.data;
    curr = curr.next;
}
console.log(`the sum of all Node is = ${sum}`);


// Given the head of Linked List, Find the length of the Linked List.
let count = 0;
curr = head;
while(curr != null){
    count += 1;
    curr = curr.next;
}
console.log(`the length of Lonked List is = ${count}`);
