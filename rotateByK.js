/*
IP: 1 2 3 4 5 6 7 8
K: 4

5 6 7 8
        ---> 
            1 2 3 4
===================
OP: 5 6 7 8 1 2 3 4
*/

const LinkedList = require("./LinkedList");
const list = new LinkedList(null);

function rotateByK(k) {
  console.log(`--- Rotate list by ${k} ---`);

  if (k === 0) {
    return;
  }

  let head = list.head;
  let current = list.head;
  let i = 0;
  let kthNode = null;

  //REACH TO Kth NODE
  while (current && i < k - 1) {
    current = current.next;
    i++;
  }

  if (current === null) {
    return;
  }

  //ASSIGN Kth NODE
  kthNode = current;

  //REACH TO END OF LIST
  while (current.next) {
    current = current.next;
  }

  //SET END OF LIST NEXT NODE TO HEAD
  current.next = head;

  //SET LIST HEAD NODE TO KTH NODES NEXT
  list.head = kthNode.next;

  //Kth node next to NULL
  kthNode.next = null;
}

function main() {
  list.add(1);
  list.add(2);
  list.add(3);
  list.add(4);
  list.add(5);
  list.add(6);
  list.add(7);
  list.add(8);
  // list.add(1);
  // list.add(2);
  // list.add(3);
  // list.add(4);
  // list.add(5);
  list.print();
  rotateByK(4);
  list.print();
}
main();
