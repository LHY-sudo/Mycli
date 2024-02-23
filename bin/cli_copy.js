#! /usr/bin/env node

const { program } = require("commander")

program.option('-s,--setdate <date>','Using for setting date')
    .option('-f --framwork <framwork>','setting framwork')
    .option('-d --debuge')
//program.parseOptions(process.argv)
//console.log(process.argv)
//console.log(program.opts())

let opt = program.opts()

program.command('exec <name>')
    .alias('exe')
    .action((name) => {
        console.log(name)
    })
program.addOption(new Option())

program.parse(process.argv)

if (program.getOptionValue('setdate')) {
    console.log("Running:",'setdate')
    console.log(opt.setdate)
    program.setOptionValue('setdate',1111)
    console.log(opt.setdate)
    console.log(program.getOptionValue('setdate'))

}
if (opt.framwork) {
    console.log("Running:",'framwork')
}

//console.log(program.getOptionValue('debuge'))
//console.log(program.opts().debuge)

console.log(program.args)