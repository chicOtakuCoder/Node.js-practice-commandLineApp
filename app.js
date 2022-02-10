console.log('starting app.js')

const fs = require('fs'); //internal modules
const yargs = require('yargs'); //third party modules
const notes = require('./notes.js'); //external modules

const title = yargs.argv.title;
const body = yargs.argv.body;
const command = yargs.argv._[0];

if (command === 'add') {
    console.log('adding note');
    notes.addingNote(title, body);
} else if (command === 'remove') {
    console.log('removing note');
    notes.removeNote(title);
} else if (command === 'read') {
    console.log('reading note');
    notes.readNote(title);
} else if (command === 'list') {
    console.log('listing all note');
    notes.getAll();
} else {
    console.log('Unknown command was used')
}

// console.log(title, body, command);
// console.log('Process', process.argv);
// console.log('Yargs', yargs.argv);



// fs.appendFileSync('greetings.txt', 'Hello World');

// console.log(notes.add(2, 5));
// console.log(notes.sub(5, 2));