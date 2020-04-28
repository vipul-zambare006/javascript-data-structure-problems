const LinkedList = require("./LinkedList");
const list = new LinkedList(null);

function reverse() {
  console.log("=== REVERSE ===");
  let prev = null;
  let next = null;
  let current = list.head;
  while (current) {
    next = current.next; //store next of current in temp
    current.next = prev; //reverse current and current-next
    prev = current; // prev. pointer will come on current node
    current = next; // current pointer will move to next node
  }
  list.head = prev; //set head to to last pointer so that it will print in reverse order
}

function main() {
  list.add(1);
  list.add(2);
  list.add(3);
  list.add(4);
  list.add(5);
  list.add(6);
  // list.add(1);
  // list.add(2);
  // list.add(3);
  // list.add(4);
  // list.add(5);
  list.print();
  reverse();
  list.print();
}

main();
