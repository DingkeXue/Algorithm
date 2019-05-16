/*=============创建节点=============*/
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show =function () {
        return this.data;
    }
}

/*=============插入数值=============*/
function insert(data) {
    let node = new Node(data, null, null);
    if (this.root === null) {
        this.root = node;
    }else {
        let current = this.root;
        let parent;
        while (true) {
            parent = current;
            if (data < current.data) {  // 如果比根节点小，放到左子树上
                current = current.left;
                if (current === null) {
                    parent.left = node;
                    break;
                }
            } else {
                current = current.right;  // 放到右子树上
                if (current === null) {
                    parent.right = node;
                    break;
                }
            }
        }
    }
}

/*=============构建二叉树=============*/
function BST() {
    this.root = null;
    this.insert = insert;
}

let bst = new BST();
bst.insert(10);
bst.insert(7);
bst.insert(15);
bst.insert(11);
bst.insert(8);
console.log(bst);

/*=============树的历遍: 前序，中序，后续。如果要拿到有序数列，选择中序=============*/
function Order(node) {
    if (node !== null) {
        Order(node.left);
        console.log(node.show());
        Order(node.right);
    }
}
Order(bst.root);

/*=============二叉树查找=============*/
function Min(bst) {
    let current = bst.root;
    while (current.left !== null) {
        current = current.left;
    }
    return current.data;
}

function Max(bst) {
    let current = bst.root;
    while (current.right !== null) {
        current = current.right;
    }
    return current.data;
}

function Find(bst, target) {
    let current = bst.root;
    while (current !== null) {
        if (target === current.data) {
            return true;
        }
        else if (target > current.data) {
            current = current.right;
        }
        else {
            current = current.left;
        }
    }
    return -1;
}

console.log(Min(bst), Max(bst), Find(bst, 15));