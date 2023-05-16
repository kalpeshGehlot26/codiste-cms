import React from "react";

const CaseStudyForm = () => {
	return (
		<form method="post" action="" className="">
			<input className="need-form" type="text" id="name" name="name" placeholder="Name*" />
			<br />
			<input className="need-form" type="email" id="email" name="email" placeholder="Email*" />
			<br />
			<input className="need-form" type="number" id="number" name="number" placeholder="Number*" />
			<br />
			<select name="services" id="_services" className="need-form" >
				<option>Service*</option>
				<option value="Blockchain Development">Blockchain Development</option>
				<option value="Machine Learning">Machine Learning</option>
				<option value="Web Development">Web Development</option>
				<option value="Mobile App Development">Mobile App Development</option>
				<option value="Metaverse Enterprise Solution">Metaverse Enterprise Solution</option>
				<option value="Nft and Crypto Development">Nft and Crypto Development</option>
				<option value="Startup Development">Startup Development</option>
			</select>
			<textarea className="need-form" id="exampleFormControlTextarea1" rows="3" placeholder="Message*"></textarea>
			<button className="book-btn" type="submit">
				Book a Call
			</button>
		</form>
	);
};

export default CaseStudyForm;
