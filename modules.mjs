import os from 'os';

console.table(os.platform()); //  win32
console.info(os.arch()); // returning cpu
console.info(os.uptime());  // total memory time
console.info(os.totalmem()); // total memory
console.info(os.freemem()); // free space in system
console.info(os.cpus()); // like speed, and other