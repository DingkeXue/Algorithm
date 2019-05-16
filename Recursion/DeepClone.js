/*
* 结构化克隆，可以复制常见类型
* */
function deepClone(obj) {
    var copy;

    // 处理三种基本类型 和 null, undefined
    if (obj === null || obj !== 'object') return copy;

    // 处理日期
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // 处理数组
    if (obj instanceof Array) {
        copy = [];
        for (let i = 0; i < obj.length; i ++) {
            copy[i] = deepClone(obj[i]);
        }
        return copy;
    }

    // 处理函数
    if (obj instanceof Function) {
        copy = function () {
            return obj.apply(this, arguments);
        };
        return copy;
    }

    // 处理对象
    if (obj instanceof Object) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)){
                if (Array.isArray(obj[key])) {  // 如果是 数组
                    copy = [];
                    copy[key] = deepClone(obj[key]);
                } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                    copy = {};
                    copy[key] = deepClone(copy[key]);
                } else {
                    copy[key] = obj[key];
                }
            }
        }
        return copy;
    }
}