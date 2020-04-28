`Problem: Given 1 -> 2 -> 3 -> 4 -> 5 -> 6
return mid of linked list 
if list has even number of nodes then return highest mid`;

const LinkedList = require("./LinkedList");
const list = new LinkedList(null);

function findMiddle() {
  //TORTOISE AND HARE ALGORITHM
  //TAKE TWO POINTERS ONE MOVES SLOW AND SECOND MOVED DOUBLE THE SPEED OF SLOW
  //WHEN SECOND POINTER REACHED END OF LIST FIRST POINTER IS EXACTLY AT MIDDLE

  if (list.head === null) {
    return;
  }

  let slow = list.head;
  let fast = list.head;

  while (fast && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  console.log(`Middle node: ${slow.data}`);
}

function main() {
  [1, 2, 3, 4, 5, 6].forEach(i => {
    list.add(i);
  });

  // list.add(1);
  // list.add(2);
  // list.add(3);
  // list.add(4);
  // list.add(5);
  list.print();
  findMiddle();
}

main();
