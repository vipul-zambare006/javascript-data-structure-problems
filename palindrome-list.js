const LinkedList = require("./LinkedList");
const list = new LinkedList(null);

//APPROACH 1
//USES EXTRA SPACE
//SPACE= o(n/2)
//TIME: O(n)
function isListPalindrome() {
  let slow = list.head;
  let fast = list.head;

  let stack = [];

  let current = list.head;
  let listSize = 0;

  //calculate list size
  while (current) {
    listSize++;
    current = current.next;
  }

  //get mid of list and push first half to stack
  while (fast && fast.next) {
    stack.push(slow);
    slow = slow.next;
    fast = fast.next.next;
  }

  //set mid based on list size
  let isEven = !(listSize % 2);
  let mid = isEven ? slow : slow.next;

  //check from mid and pop elements from stack
  while (mid) {
    if (stack.pop().data !== mid.data) {
      return false;
    } else {
      mid = mid.next;
    }
  }
  return true;
}

//APPROACH 2
//TIME COMPLEXITY: O(n/2) as it is only travesing half of list and reversing half of list
//SPACE COMPLEXITY: O(1) : NO EXTRA SPACE
function isListPalindromeUsingReverse(head) {
  this.reverse = head => {
    let prev = null;
    let next = null;

    while (head) {
      next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }
    return prev;
  };

  if (head == null) {
    return true;
  }
  //1 2 2 1
  //FIND MID OF LIST
  let fast = head.next; // made the slow to be one node before the second half.
  let slow = head;
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  //2 -> 1
  //half = next of slow
  let half = slow.next;

  //make next of slow = null so that
  //you have 1 -> 2 -> null
  slow.next = null;

  //revser second half
  let h = reverse(half);

  // h : 1 <- 2

  //compare
  // 1 --> 2
  //with
  // 2 --> 1

  while (head != null && h != null) {
    if (head.data != h.data) {
      return false;
    }
    head = head.next;
    h = h.next;
  }
  return true;
}

function main() {
  //negative tests
  //   [46, 21, 20, 10, 8, 12, 20, 21, 46].forEach(i => {
  //     list.add(i);
  //   });

  //   [12, 11, 12, 12].forEach(i => {
  //     list.add(i);
  //   });

  //   [].forEach(i => {
  //     list.add(i);
  //   });

  //   [0, 0].forEach(i => {
  //     list.add(i);
  //   });

  //positive tests
  //   [46, 21, 20, 12, 20, 21, 46].forEach(i => {
  //     list.add(i);
  //   });

  [46, 21, 20, 20, 21, 46].forEach(i => {
    list.add(i);
  });

  console.log(isListPalindromeUsingReverse(list.head));

  //   console.log(isListPalindrome());
}

main();
