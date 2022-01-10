const fs = require('fs') ;
const yargs = require('yargs') ;
//fs.writeFileSync('notes',"New Notes") ;

fs.appendFileSync('notes', '. More Text') ;



// Creage add command

yargs.command(
    {
        command: 'add',
        describe: 'Add a new Note',
        builder:{
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body:{
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function (argv) {
            console.log("Title: " + argv.title) ;
            console.log("Body: " + argv.body) ;
        }
    }
)




// Creage remove command

yargs.command(
    {
        command: 'remove',
        describe: 'Remove new Note',
        handler: function () {
            console.log("Removing a new note") ;
        }
    }
)



// Creage list command

yargs.command(
    {
        command: 'list',
        describe: 'List new Notes',
        handler: function () {
            console.log("Listing new note") ;
        }
    }
)




// Creage read command

yargs.command(
    {
        command: 'read',
        describe: 'read a new Note',
        handler: function () {
            console.log("read a new note") ;
        }
    }
)




// Creage both command

yargs.command(
    {
        command: 'both',
        describe: 'BothNote',
        handler: function () {
            console.log("Both a new note") ;
        }
    }
)

yargs.parse() ;