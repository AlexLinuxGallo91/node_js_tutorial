const notes = require('./notes.js');
const chalk = require('chalk');
const validator = require('validator');
const yargs = require('yargs');

yargs.version('1.0.2');

yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler:(argv)=>{
        notes.addNotes(argv.title, argv.body);
    }
});

yargs.command({
    command:'remove',
    describe: 'remove a new note',
    handler:()=>{
        console.log('removing a note');
    }
});

yargs.command({
    command:'read',
    describe: 'read a note',
    handler:()=>{
        console.log('reading a note');
    }
});

yargs.command({
    command:'list',
    describe: 'list all notes',
    handler:()=>{
        console.log('linsting out all note');
    }
});


console.log(yargs.argv);