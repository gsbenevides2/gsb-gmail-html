import { Command } from 'commander'
import fs from 'fs'
import http from 'http'
import open from 'open'
import path from 'path'
import socket from 'socket.io'
import log from '../utils/log'

export default function(data:Command){
 const htmlPath = path.resolve(process.cwd(),data.Html)

 const fileExists = fs.existsSync(htmlPath)
 if(!fileExists){
	log('info','Generating file: email.html')
	fs.writeFileSync(htmlPath,'<h1>Hello World<b>')
	log('success','File: email.html. Successfully generated.')
 }

 const server = http.createServer((req,res)=>{
	const fileData = fs.readFileSync(htmlPath).toString()
	const html = `
	<!DOCTYPE html>
	<html lang="en">
	<head>
	 <meta charset="UTF-8">
	 <title></title>
	</head>
	<body>
	 ${fileData}
	</body>
  <script src="/socket.io/socket.io.js"></script>
	<script>
	const socket = io('http://localhost:4535')
	socket.on('reload',()=>{
    window.location.reload(true)
  })
	</script>
	</html>
	`
	res.write(html,(err:any)=>{
	 res.end()
	})
 })

 const wsServer = socket(server)

 fs.watchFile(htmlPath,()=>{
	log('info','Reload page.')
	wsServer.emit('reload')
 })

 log('info','Starting http server.')
 server.listen(4535,()=>{
	log('success','Server started at: http://localhost:4535.')
	open('http://localhost:4535')
 })
}
