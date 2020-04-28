const LinkedList = require("./LinkedList");
const list = new LinkedList(null);

function swapPairs() {
  let current = list.head;
  while (current && current.next) {
    let temp = current.data;
    current.data = current.next.data;
    current.next.data = temp;
    current = current.next.next;
  }
}

function main() {
  [1, 2, 3, 4, 5, 6].forEach(i => {
    list.add(i);
  });
  list.print();
  swapPairs();
  list.print();
}

main();
