import path from 'path';

const basepath = '../User/jing';
const filename = '/abc.txt';

const filepath1 = path.join(basepath, filename);
console.log(filepath1);

// 在 node 中使用 ES module 规范报错
// (node:22553) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
