const yargs = require('yargs');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log(`Title : ${argv.title}`);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing the note');
    }
});

yargs.command({
    command: 'list',
    describe: 'Show list notes',
    handler: function(){
        console.log('Showing all the notes');
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a specific note',
    handler: function(){
        console.log('Reading the note');
    }
});

yargs.parse();
