import path from 'path';

const file = '/path/index.html'

console.info(path.sep)
console.info(path.basename(file)) // index.html
console.info(path.basename(file)) // index.html
console.info(path.extname(file)) // .html
console.info(path.parse(file)) 
// {
//   root: '/',
//   dir: '/path',
//   base: 'index.html',
//   ext: '.html',
//   name: 'index'
// }

