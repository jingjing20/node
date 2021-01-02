const path = require('path');

// 1.获取路径的信息
// const filepath = '/User/jing/abc.txt';

// console.log(path.dirname(filepath)); // /User/jing
// console.log(path.basename(filepath)); // abc.txt
// console.log(path.extname(filepath)); // .txt

// 2.join路径拼接
const basepath = '../User/jing';
const filename = './abc.txt';
const filepath1 = path.join(basepath, filename);
console.log(filepath1);

// 3.resolve路径拼接
// resolve会判断拼接的路径字符串中,是否有以/或./或../开头的路径
const basepath2 = '/User/jingjing';
// const filename2 = '/jing/abc.txt'; // /jing/abc.txt
// const filename2 = './jing/abc.txt'; // /User/jingjing/jing/abc.txt
// const filename2 = 'jing/abc.txt'; // /User/jingjing/jing/abc.txt
const filename2 = '../jing/abc.txt'; // /User/jing/abc.txt

const result = path.resolve(basepath2, filename2);
console.log(result);
