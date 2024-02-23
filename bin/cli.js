#! /usr/bin/env node

const { program } = require("commander")
const myHelp = require('../lib/core/help.js')
const myCommand = require('../lib/core/mycommand.js')
//program.option('-f --framwork <framwork>','setting framwork')
myHelp(program)
myCommand(program)

program.parse(process.argv)
//console.log(program.opts())
