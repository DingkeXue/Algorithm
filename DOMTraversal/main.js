/*
* 深度优先历遍
* 广度优先历遍
* */

// 深度优先
var nodes = [];
function deepTraversal(node) {
    if (node != null) {
        nodes.push(node);
        let children = node.children;
        for (let i = 0; i < children.length; i++)
            deepTraversal(children[i]);
    }
    return nodes;
}

console.log(deepTraversal(document.body));

// 广度优先搜索
function BFS(node) {
    if (node == null) {
        return [];
    }
    let result = [];  // 用于存放历遍过的数组
    let nodeQueue = [];  // 存放元素的队列
    nodeQueue.push(node);
    while (nodeQueue.length > 0) {
        let n = nodeQueue.shift();
        result.push(n);
        let childrens = n.children;
        for (let i = 0; i < childrens.length; i ++) {
            nodeQueue.push(childrens[i]);
        }
    }
    return result;
}
console.log(BFS(document.body));