//const {program} = require("commander");
const myAction = require("./acrion/action");

const myCommand = (program) => {
    program
        .command('create <project> [other...]')
        .alias('crt')
        .description('创建项目')
        .action(myAction)
}
module.exports = myCommand