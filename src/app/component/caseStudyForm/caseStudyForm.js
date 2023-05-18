"use client";
import axios from "axios";
import React, { useRef, useState } from "react";

const CaseStudyForm = () => {
	const [values, setValues] = useState(null);
	const [success, setSuccess] = useState(false);
	const formRef = useRef();

	const handleSubmit = async (event) => {
		event.preventDefault();
	
		await axios.post('/api/contact', values, {
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(function (response) {
			setSuccess(response?.data?.message)
			setTimeout(() => {
				setSuccess(null);
			}, 5000);
			formRef.current.reset();
		}).catch(function (error) {
			console.log("error 5", error);
		});
	};

	const onFormChange = (event) => { 
		const name = event.target.name;
        const value = event.target.value;
		setValues({ 
			...values, 
			[name]: value 
		});
	}

	return (

		<div>
			<form method="post" onSubmit={handleSubmit} ref={formRef}>
				<input
					className="need-form"
					type="text"
					id="name"
					name="name"
					placeholder="Name*"
					required
					onChange={onFormChange}
				/>
				<br />
				<input
					className="need-form"
					type="email"
					id="email"
					name="email"
					placeholder="Email*"
					required
					onChange={onFormChange}
				/>
				<br />
				<input
					className="need-form"
					type="number"
					id="number"
					name="number"
					placeholder="Number*"
					required
					onChange={onFormChange}
				/>
				<br />
				<select name="services" id="_services" className="need-form" onChange={onFormChange} required>
					<option>Service*</option>
					<option value="Blockchain Development Services">Blockchain Development Services</option>
					<option value="Metaverse Development Services">Metaverse Development Services </option>
					<option value="AR /VR Development Services">AR /VR Development Services</option>
					<option value="NFT Development Services">NFT Development Services</option>
					<option value="Startup Development Services">Startup Development Services</option>
					<option value="AI Development Services">AI Development Services</option>
					<option value="Machine Learning Development Services">Machine Learning Development Services</option>
					<option value="Cryptocurrency Development Services">Cryptocurrency Development Services</option>
					<option value="Web Development Services">Web Development Services</option>
					<option value="Mobile App Development Services">Mobile App Development Services</option>
				</select>
				<textarea
					className="need-form"
					id="exampleFormControlTextarea1"
					rows="3"
					name="message"
					placeholder="Message*"
					onChange={onFormChange}
					required
				></textarea>
				<button className="book-btn" type="submit">
					{window.location.pathname === '/career' ? "Apply Now" : "Book a Call"}
				</button>
				{
					success? <div className="alert alert-success d-flex align-items-center mt-4" role="alert">
							{success}
						</div> 
					: ''
				}
			</form>
		</div>
	);
};

export default CaseStudyForm;
