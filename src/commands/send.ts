import { Command } from 'commander'
import fs from 'fs'
import { google } from 'googleapis'
import http from 'http'
import mimemessage from 'mimemessage'
import open from 'open'
import path from 'path'
import readline from 'readline-sync'
import log from '../utils/log'
import queryString from 'query-string'
import chalk from 'chalk'

interface IEmailData {
 to:string
 body:string
 subject:string
}


const oauth2 = new google.auth.OAuth2(
 '275309435614-e53isigtsb7h31ff7pusa46hf9qkb27q.apps.googleusercontent.com',
 'V5Gjt4_r8eDY0yZ82dUZQcBm',
 'http://localhost:4535'
)

export default async function(data:Command){
 let email 
 try{
	const htmlPath = path.resolve(process.cwd(),data.Html)
	log('info','Authenticating with Google.')
	await authenticate()
	log('success','Successfully authenticated')
	const emailData = getEmailData(htmlPath)
	log('info','Generating email')
	email = generateEmail(emailData)
	log('success','Email generated successfully')
	log('info','Sending email')
 }
 catch(err){
	log('error',err)

 }
 sendEmail(email as string)
	.then(()=>{
	 log('success','Email successfully sent')
	 process.exit(0)
	})
	.catch(err=>{
	 log('error','Error sending email:',err)
	})
}

function authenticate(){
 return new Promise(resolve=>{
	http.createServer(async(req,res)=>{
	 res.write('<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=Edge"> <meta name="viewport" content="width=device-width, initial-scale=1"> <title>gsb-gmail-html</title></head><style>body{margin:0; padding:0; font-family:Roboto sans-serif;}div{position:absolute; top:40%; left:50%; transform:translate(-50%, -50%); width:70%; box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); padding:12px;}@media (prefers-color-scheme: dark){body{background-color:#121212; color:white;}div{background-color:#757575; box-shadow: 0 14px 28px rgba(18,18,18,0.25), 0 10px 10px rgba(18,18,18,0.22);}}</style><body> <div> <h3>Okay, return to the terminal.</h3> <p>See what happened.</p></div></body></html>')
	 res.end()
	 if(!req.url){
		return log('error','The return link is broken, try again.')
	 }
	 const parsedUrl = queryString.parseUrl(req.url)
	 if(parsedUrl.url === '/'){
		const code = parsedUrl.query.code as string
		const {tokens} = await oauth2.getToken(code)
		oauth2.setCredentials(tokens)
		resolve()
	 }
	}).listen(4535)
	const url = oauth2.generateAuthUrl({
	 access_type:'offline',
	 scope:'https://www.googleapis.com/auth/gmail.send'
	})
	log('info','Successfully generated url. Access:\n',chalk.underline(url))
	open(url)
 })
}

function getEmailData(htmlPath:string):IEmailData{	
 const to = readline.questionEMail('What is the email of who wants to send?')
 const subject = readline.question('What is the subject of the email?')
 const body = fs.readFileSync(htmlPath).toString()

 return {to,body,subject}
}

function generateEmail(emailData:IEmailData){
 const msg = mimemessage.factory({
	contentType:'multipart/mixed',
	body:[]
 })
 msg.header("MIME-Version","1.0")
 msg.contentTransferEncoding('7bit')
 msg.header("to",emailData.to)
 msg.header("subject",emailData.subject)

 const htmlEntity = mimemessage.factory({
	contentType: 'text/html;charset=utf-8',
	body: emailData.body
 });
 msg.body.push(htmlEntity)

 const str = msg.toString()
 const encodedMail = Buffer.from(str).toString("base64").replace(/\+/g, '-').replace(/\//g, '_');
 return encodedMail
}

function sendEmail(email:string){
 const gmail = google.gmail({
	version:'v1',
	auth:oauth2
 })
 return gmail.users.messages.send({
	userId:'me',
	requestBody:{
	 raw:email
	}
 })
}
