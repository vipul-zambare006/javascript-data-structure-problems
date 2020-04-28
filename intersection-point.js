/*** 
 * The task is to complete the function intersetPoint() which finds the point of intersection of two linked list.
 The function should return data value of a node where two linked lists merge. If linked list do not merge at any point, then it should return -1.
    ARRAY LENGTHS: 2 3 2
    10 20
    30 40 50
    5 10
*/

/***
 * LOGIC:
 * As the values are always positive, so traverse through the
 * first linked list, and multiply all values by -1.
 * Now start traversing from the second head. If any negative value is encountered,
 * means that is the merge point. So return negative of that value.
 */

const LinkedList = require("./LinkedList");
const list1 = new LinkedList(null);
const list2 = new LinkedList(null);

function findIntersectionPoint(list1, list2) {
  let current = list1.head;
  let output = -1;
  //10->20->30
  while (current) {
    current.data = current.data * -1;
    current = current.next;
  }
  //-10 -> -20 -> -30

  current = list2.head;
  while (current) {
    if (current.data < 0) {
      output = current.data * -1;
      break;
    }
    current = current.next;
  }
  return output;
}

function main() {
  [46, 21, 48, 49, 18, 34, 31].forEach(i => {
    list1.add(i);
  });

  [34, 3, 49, 18, 38].forEach(i => {
    list2.add(i);
  });
  console.log(findIntersectionPoint(list1, list2));
}

main();
