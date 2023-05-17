import { NextResponse } from "next/server";
import { Readable } from 'stream';

const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');

export async function GET(req) {
	try {
		return NextResponse.json({ message: "Successful Response" });
	} catch (err) {
		console.log(err)
		return NextResponse.json({ message: "Internal server error" });
	}
}

export async function POST(req, res) {
	try {
		const data = await req.json();
		const transport = nodemailer.createTransport(
			nodemailerSendgrid({
				apiKey: "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"
			})
		);
		const html = `<html lang="en">
			<head>
		  		<meta charset="utf-8">
		  		<meta name="viewport" content="width=device-width, initial-scale=1">
		  		<title>Contact Us</title>
			</head>
			<body>
				<h4>Hello Team,</h4>
				<p>I have submitted my details through your website's contact us page. I would appreciate it if you could review my information and reach out to discuss my concerns. I believe that your team of experts can provide the assistance I need.</p>
				<h5>Name: ${data.name}<h5>
				<h5>Email: ${data.email}</h5>
				<h5>Contact: ${data.number}</h5>
				<h5>Service: ${data.services}</h5>				
				<h5>Message: ${data.message}</h5>
			</body></html>`;

		transport.sendMail({
			from: 'www.codiste.com <sonali.p@codiste.com>',
			to: 'sonali.p@codiste.com',
		  	subject: `Inquiry for service ${data.services}`,
		   	html: html
		});
	
		return NextResponse.json({ 
			status: true,
			message: "Thank you for contacting us! We'll reach out to you soon"
		});
	} catch (err) {
		return NextResponse.json({ 
			status: false,
			message: "Please try again!" 
		});
	}
}
