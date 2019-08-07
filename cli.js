#!/usr/bin/env node

let dreamGenerator = require('./index');

let log = console.log;


let helpAndQuit = () => {
    log('usage: dream [N]');
    log('    N    number of dreams to print');
    process.exit(1)
}

// process command line args
let n = 1;
let args = process.argv.slice(2);
if (args.length > 1) { helpAndQuit(); }
if (args.length == 1) {
    if (args[0] === '-h') { helpAndQuit(); }
    if (args[0] === '--help') { helpAndQuit(); }
    if (+args[0]) {
        n = Math.abs(+args[0]);
    } else {
        helpAndQuit();
    }
}

let indent = (s, i) =>
    i + s.split('\n').join('\n' + i);

log('================================================');
log(); log(); log();
for (let ii = 0; ii < n; ii++) {
    log(indent(dreamGenerator(), '    '));
    log(); log(); log();
}
log('================================================');