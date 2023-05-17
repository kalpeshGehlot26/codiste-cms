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
			console.log("error", error);
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
					<option value="Blockchain Development">Blockchain Development</option>
					<option value="Machine Learning">Machine Learning</option>
					<option value="Web Development">Web Development</option>
					<option value="Mobile App Development">Mobile App Development</option>
					<option value="Metaverse Enterprise Solution">Metaverse Enterprise Solution</option>
					<option value="Nft and Crypto Development">Nft and Crypto Development</option>
					<option value="Startup Development">Startup Development</option>
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
					Book a Call
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
