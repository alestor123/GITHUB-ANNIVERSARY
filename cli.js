#!/usr/bin/env node

const chalk = require('chalk')
const ghn = require('./App');

(async () => {
  const { isAnniversary, pdate, diffDate } = await ghn(process.argv[2], process.argv[3])
  console.log((isAnniversary ? chalk.greenBright.bold('Yep') : chalk.redBright.bold('Nope') + ' your github anniversary is on ' + chalk.greenBright.greenBright(pdate) + ' You still got ' + chalk.greenBright.greenBright(diffDate) + ' Days'))
})()
