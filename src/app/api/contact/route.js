import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");
import smtpTransport from "nodemailer-smtp-transport";

export async function GET(req) {
	try {
		return NextResponse.json({ message: "Successful Response" });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: "Internal server error" });
	}
}

export async function POST(req, res) {
	try {
		const data = await req.formData();
		const file = data.get("file")

		const html = `<html lang="en">
			<head>
		  		<meta charset="utf-8">
		  		<meta name="viewport" content="width=device-width, initial-scale=1">
		  		<title>Contact Us</title>
			</head>
			<body>
				<h4>Hello Team,</h4>
				<p>I have submitted my details through your website's contact us page. I would appreciate it if you could review my information and reach out to discuss my concerns. I believe that your team of experts can provide the assistance I need.</p>
				<h4>Name: ${data.get("name")}<h4>
				<h4>Email: ${data.get("email")}</h4>
				<h4>Contact: ${data.get("number")}</h4>
				<h4>Service: ${data.get("services")}</h4>				
				<h4>Message: ${data.get("message")}</h4>
			</body></html>`;

		const path = data.get("path").split("/");
		var subject = `Inquiry for service ${data.get("services")}`;
		let toAddress = "manager@codiste.com";

		if (path[1] === "contact") {
			subject = "Discover Project Potential Inquiry";
		}

		if (path[1] === "career") {
			subject = "Career Query Submission or Appling for Job";
			toAddress = "mittal.k@codiste.com";
		}

		var transporter = nodemailer.createTransport(
			smtpTransport({
				pool: true,
				port: 587,
				secure: true,
				service: "gmail",
				host: "smtp.gmail.com",
				auth: {
					user: process.env.NEXT_PUBLIC_EMAIL,
					pass: process.env.NEXT_PUBLIC_PASSWORD,
				},
			})
		);

		var mailOptions = {
			from: process.env.NEXT_PUBLIC_EMAIL,
			to: toAddress,
			subject: subject,
			html: html
		};

		if (file !== 'null') {
			const _file = data.get("file");
			const bytes = await _file.arrayBuffer();
			const buffer = Buffer.from(bytes);
			console.log(buffer);

			mailOptions.attachments = [
				{
					filename: _file.name,
					content: buffer,
				},
			]
		}

		const isSend = await transporter.sendMail(mailOptions);
		if (!isSend.rejected.length) {
			return NextResponse.json({
				status: true,
				message:
					"Thank you for contacting us! We'll reach out to you soon",
			});
		}

	} catch (err) {
		console.log("CATCH ERROR", err);
		return NextResponse.json({
			status: false,
			message: "Please try again!",
		});
	}
}
