import { NextResponse } from "next/server";
const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');

export async function GET(req) {
	try {
		const transport = nodemailer.createTransport(
			nodemailerSendgrid({
				apiKey: "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"
			})
		);

		transport.sendMail({
			from: 'sonali.p@codiste.com',
			to: 'Receiver Name <sonali.p@codiste.com>',
		  	subject: 'hello world',
		   	html: '<h1>Hello world!</h1>'
		 });
	
		return NextResponse.json({ message: "Internal server" });
	} catch (err) {
		console.log(err)
		return NextResponse.json({ message: "Internal server errorsssss" });
	}
}

export async function POST(req) {
	try {
		return NextResponse.json({ message: "reCAPTCHA  failed" });
	} catch (err) {
		return NextResponse.json({ message: "Internal server error" });
	}
}
