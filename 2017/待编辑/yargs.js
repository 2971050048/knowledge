#!/usr/bin/env node

// process.argv.forEach((val, index) => {
//   console.log(index, val);
// })

var yargs = require('yargs')
var argv = yargs.argv
var fs = require('fs')
console.log(fs.readFileSync('./yargs.js'))
console.log(argv._)

yargs
  .usage('node $0 <cmd> [args]')
  .command(
    'hello [name] [age]',
    'welcome ter yargs!',
    (yargs) => {
      yargs.positional('name', {
        type: 'string',
        default: 'Cambi',
        describe: 'the name to say hello to'
      })
      yargs.positional('age', {
        type: 'number',
        default: '21',
        describe: 'your age'
      })
    }, 
    (argv) => {
      console.log(argv.name)
      console.log(argv.age)
    }
  )
  .help()
  .argv
