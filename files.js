const fs = require('fs');  // access nodes files system module typically named fs for file system.
/*

// reading files async function
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

*/
/*

// writing files async function
fs.writeFile('./docs/blog1.txt', 'Hello my Ninja Rob!!! You are a bad ass!!!', () => {
    console.log('file was written');
})

*/
/*

// directories existsSync is a sync function will stop code. mkdir and rmdir are a async functions
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
          console.log(err);  
        }
        console.log('folder created');
    });    
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}

*/
/*

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}

*/

