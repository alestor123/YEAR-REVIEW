
var figlet = require('figlet'),
axios = require('axios'),
Box = require("cli-box"),
name = process.argv[2] || 'alestor123'
api = `https://user-review.glitch.me/user/${name}`
time = new Date(),
chalk = require('chalk');
figlet(time.getFullYear() + ' Year Review',(err, data) => {
if(err) throw err
console.log(chalk.bold.green(data))
console.log(chalk.red(time.getFullYear()+' Has been a challenging year'))
axios.get(api).then((response)=>{
console.log(Box("40x10", chalk.green('\n Name:'+response.data.name)+ chalk.red('\n username:'+response.data.login)+chalk.green('\n PRS+:'+response.data.pullRequests)
+ chalk.green('\n Commit:'+response.data.commits)+ chalk.green('\n Issues:'+response.data.issues)))
})
});