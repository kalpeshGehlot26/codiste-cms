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
		const data = await req.json();
		const html = `<html lang="en">
			<head>
		  		<meta charset="utf-8">
		  		<meta name="viewport" content="width=device-width, initial-scale=1">
		  		<title>Contact Us</title>
			</head>
			<body>
				<h3>Hello Team,</h3>
				<p>I have submitted my details through your website's contact us page. I would appreciate it if you could review my information and reach out to discuss my concerns. I believe that your team of experts can provide the assistance I need.</p>
				<h4>Name: ${data.name}<h4>
				<h4>Email: ${data.email}</h4>
				<h4>Contact: ${data.number}</h4>
				<h4>Service: ${data.services}</h4>				
				<h4>Message: ${data.message}</h4>
			</body></html>`;

		const path = data.path.split("/");
		var subject = `Inquiry for service ${data.services}`;

		if (path[1] === "contact") {
			subject = "Discover Project Potential Inquiry";
		}

		if (path[1] === "career") {
			subject = "Career Query Submission or Appling for Job";
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
			to: "manager@codiste.com",
			// to: "sonali.p@codiste.com",
			subject: subject,
			html: html,
		};

		const isSend = await transporter.sendMail(mailOptions)

		if (!isSend.rejected.length) {
			return NextResponse.json({
				status: true,
				message: "Thank you for contacting us! We'll reach out to you soon",
			});
		}
		return NextResponse.json({
			status: false,
			message: "Something went wrong! Please try again",
		});

	} catch (err) {
		return NextResponse.json({
			status: false,
			message: "Please try again!",
		});
	}
}
