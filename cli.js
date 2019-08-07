#!/usr/bin/env node

let dreamGenerator = require('./index');

let log = console.log;

let indent = (s, i) => {
    return i + s.split('\n').join('\n' + i);
}

log('================================================');
log(); log(); log();
log(indent(dreamGenerator(), '    '));
log(); log(); log();
log('================================================');