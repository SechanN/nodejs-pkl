import fs from 'fs';

const buffering = fs.readFileSync('file-system.mjs');

console.info(buffering.toString());

fs.writeFileSync('temp.txt', 'Hello World')