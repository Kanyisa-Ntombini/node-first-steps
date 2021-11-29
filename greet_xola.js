const chalk = require('chalk');
const greet = require('./greet');
const figlet = require('figlet');
const prompt = require('prompt');
const pronouns = require('./pronouns');

prompt.start();

prompt.get(['name', 'pronouns'], function (err, result) {

    figlet('Hello there!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
    });

    console.log(chalk.bgGreen.black(greet(result.name)));

    console.log(chalk.bgMagenta.black(pronouns(result.pronouns)));
});