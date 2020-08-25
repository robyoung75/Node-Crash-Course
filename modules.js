// const xyz = require('./people'); // logs people array from people due to import.
const { people, ages } = require('./people'); // imports keys from the export object.
// console.log(xyz); // returns an empty object.

// console.log(people); // returns an undefined, can't access items in the file. If you want access we have to export data or properties.

// console.log(xyz); // with an export xyz now logs people array from people.js.

// console.log(people, ages); // logs people and ages.

// os is a module included in node.
const os = require('os');
console.log(os.platform(), os.homedir()); // returns an object about the operating system.
