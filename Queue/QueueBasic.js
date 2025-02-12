// enqueue - Insert from rear - push()
// dequeue - Remove the first element - dhift()
// peek/front - Front element /First element

queue = [1,2,3,4,5]

queue.push(6);  
console.log(queue); // [1,2,3,4,5,6]
queue.shift();  // 1 remove
queue.shift();  // 2 remove
queue.push(7); 
queue.shift(); // remove 3
console.log(queue); //[3,4,5,6]
console.log("Front Element is :",queue[0]);  // to find the Front element of Queue


