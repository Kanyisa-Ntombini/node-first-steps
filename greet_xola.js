const chalk = require('chalk');
const greet = require('./greet');
const figlet = require('figlet');

const styledMessage = chalk.bgGreen.black(greet('Xola'));

console.log(styledMessage);

figlet(greet('Xola'), function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});