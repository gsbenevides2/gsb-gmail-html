import mimemessage from 'mimemessage' 

export default function(to:string,subject:string,message:string){
	const msg = mimemessage.factory({
	 contentType:'multipart/mixed',
	 body:[]
	})
	msg.header("MIME-Version","1.0")
	msg.contentTransferEncoding('7bit')
	msg.header("to",to)
	msg.header("subject",subject)

	const htmlEntity = mimemessage.factory({
	 contentType: 'text/html;charset=utf-8',
	 body: message
	});
	msg.body.push(htmlEntity)


	const str = msg.toString()
	console.log(str)
	const encodedMail = new Buffer(str).toString("base64").replace(/\+/g, '-').replace(/\//g, '_');
	return encodedMail;

}

