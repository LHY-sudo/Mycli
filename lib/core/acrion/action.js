const inquirer = require('inquirer')
const config = require('../../../config')
const download = require('download-git-repo')
const {program} = require("commander");
const ora = require("ora")
const chalk = require('chalk')

const myAction= async (project,args) => {
    //console.log(project)
    //console.log(args)
    const  answer = await inquirer.prompt([{
        type: 'list',
        name:'framwork',
        choices:config.framwork,
        message:'请问您想选用什么框架',
        default:'express'
    }])

    console.log(answer)

    let spinner = ora().start()
    spinner.text = "正在下载"
    download(config.framworkUrl[answer.framwork],`../test/${project}`,{clone:true},(err) => {
        if (err) {

            spinner.fail(chalk.red("下载失败"))
        } else {
            spinner.succeed(chalk.blue("下载成功"))
            console.log("you can run:cd " + project)
            console.log(`you can run:npm install`)
        }
    })
    //console.log(program.opts())
}
module.exports = myAction

//myAction()
