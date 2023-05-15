import React from "react";

const ContactForm = () => {
	return (
		<form className="" method="post">
			<input className="need-form" type="text" id="name" name="name" placeholder="Name*" />
			<br />
			<input className="need-form" type="email" id="email" name="email" placeholder="Email*" />
			<br />
			<input className="need-form" type="number" id="number" name="number" placeholder="Number*" />
			<br />
			<select name="services" id="_services" className="need-form">
				<option>Select Service*</option>
				<option>Blockchain Development</option>
				<option>Machine Learning</option>
				<option>Web Development</option>
				<option>Mobile App Development</option>
				<option>Metaverse Enterprise Solution</option>
				<option>Nft and Crypto Development</option>
				<option>Startup Development</option>
			</select>
			<textarea className="need-form" id="exampleFormControlTextarea1" rows="3" placeholder="Your Message*"></textarea>
			<button className="book-btn" type="submit">Book a Call</button>
		</form>
	);
};

export default ContactForm;
