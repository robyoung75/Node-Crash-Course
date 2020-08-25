const fs = require('fs');

// second argument is an option object that will render text rather than buffer.
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: "utf8" });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

/*

// .on is an eventListener
readStream.on('data', (chunk) => {
    console.log('======NEW CHUNK======');
    console.log(chunk);
    writeStream.write('\nNEW CHUNK\n');  // \n \n creates a new line.
    writeStream.write(chunk);
});

*/

// piping must be from a readable to writeable stream. Piping will accomplish the above in simplified code.

readStream.pipe(writeStream);

// explore duplex streams on my own.