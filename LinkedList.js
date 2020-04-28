const Node = require("./Node");

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  add(data) {
    const newNode = new Node(data.toString());

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  print() {
    let output = "List: ";
    if (this.head === null) {
      console.log("List is empty");
    } else {
      let current = this.head;
      while (current.next) {
        output += `${current.data} -> `;
        current = current.next;
      }
      output += current.data;
      console.log(output);
    }
  }
}

module.exports = LinkedList;
