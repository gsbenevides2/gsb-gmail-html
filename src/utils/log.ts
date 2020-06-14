import chalk from 'chalk'

type LogType = 'warning' | 'info' | 'success' | 'error'

export default function log(logType:LogType,...message:any[]){
 let typeMessage 
 switch(logType){
	case 'info':
	 typeMessage = chalk.white.bold('Info')
	 break
	case 'warning':
	 typeMessage = chalk.yellow.bold('Warning')
	 break
	case 'success':
	 typeMessage = chalk.green.bold('Success')
	 break
	case 'error':
	 typeMessage = chalk.red.bold('Error')
	 break
 }
 console.log(typeMessage,...message)
 if(logType === 'error') process.exit(1)
}
