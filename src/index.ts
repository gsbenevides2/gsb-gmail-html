#!/usr/bin/env node

import commander from 'commander'
import init from './commands/init'
import send from './commands/send'

commander
 .command('init')
 .option('-html <fileName>','Specifies the name of the html file.','email.html')
 .action(init)

commander
 .command('send')
 .option('-html <fileName>','Specifies the name of the html file.','email.html')
 .action(send)

commander.parse(process.argv)
