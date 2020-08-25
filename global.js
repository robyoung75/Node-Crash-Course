// Global Object in node. We don't have to type global in node.

// logs the global variable.
// console.log(global);

// setTimeOut is a function available in the global object. Will log in time out after 3 seconds.
global.setTimeout(() => {
    console.log('in time out')
    clearInterval(interval);
}, 3000);

// setInterval is another global object, will log every 1 second.
let interval = setInterval(() => {
    console.log('in the interval')
}, 1000);

console.log(__dirname);
console.log(__filename);

