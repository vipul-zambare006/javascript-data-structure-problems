class TreeNode {
  constructor(val, left, right) {
    this.value = val;
    this.left = left;
    this.right = right;
  }

  addNode(node) {
    if (node.value < this.value) {
      if (this.left === null) {
        this.left = node;
      } else {
        this.left.addNode(node);
      }
    } else if (node.value > this.value) {
      if (this.right === null) {
        this.right = node;
      } else {
        this.right.addNode(node);
      }
    }
  }
}

const min = -Infinity;
const max = +Infinity;

class Tree {
  constructor() {
    this.root = null;
  }

  addValue(value) {
    const newNode = new TreeNode(value, null, null);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.root.addNode(newNode);
    }
  }

  //preorder <root><left><right>
  //inorder <left><root><right>
  //postorder <left><right><root>

  preorderTraverse(node) {
    if (node !== null) {
      console.log(node.value);
      this.preorderTraverse(node.left);
      this.preorderTraverse(node.right);
    }
  }

  inorderTraverse(node) {
    if (node !== null) {
      this.inorderTraverse(node.left);
      console.log(node.value);
      this.inorderTraverse(node.right);
    }
  }

  postorderTraverse(node) {
    if (node !== null) {
      this.postorderTraverse(node.left);
      this.postorderTraverse(node.right);
      console.log(node.value);
    }
  }

  isBST(node, min, max) {
    if (node === null) {
      return true;
    }
    if (node.value <= min || node.value > max) {
      return false;
    }
    return (
      this.isBST(node.left, min, node.value) &&
      this.isBST(node.right, node.value, max)
    );
  }
}

const myTree = new Tree();
const treeArr = [100, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90];

for (let i = 0; i < treeArr.length; i++) {
  myTree.addValue(treeArr[i]);
}

console.log(myTree);

console.log("====== PRE ORDER ======");
console.log("");
myTree.preorderTraverse(myTree.root);

console.log("====== IN ORDER ======");
console.log("");
myTree.inorderTraverse(myTree.root);

console.log("====== post ORDER ======");
console.log("");
myTree.postorderTraverse(myTree.root);

console.log("====== IS VALID BST ======");
console.log("");
console.log("Is valid BST:", myTree.isBST(myTree.root));
