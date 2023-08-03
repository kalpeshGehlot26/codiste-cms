"use client";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const CaseStudyForm = ({ text }) => {
	const [values, setValues] = useState({
		name: "",
		email: "",
		number: "",
		services: "",
		message: "",
	});
	const [success, setSuccess] = useState(false);
	const [path, setPath] = useState("");
	const [file, setFile] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const formRef = useRef();

	useEffect(() => {
		if (typeof window !== "undefined") {
			setPath(window.location.pathname);
		}
	}, []);

	const handleSubmit = async (event) => {
		event.preventDefault();

		const formData = new FormData();
		formData.append("name", values.name);
		formData.append("email", values.email);
		formData.append("number", values.number);
		formData.append("services", values.services);
		formData.append("message", values.message);
		formData.append("file", file);
		formData.append("path", values.path);

		setIsLoading(true)
		await axios
			.post("/api/contact", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then(function (response) {
				setIsLoading(false)
				setSuccess(response?.data?.message);
				setTimeout(() => {
					setSuccess(null);
				}, 5000);
				formRef.current.reset();
				setValues({
					name: "",
					email: "",
					number: "",
					services: "",
					message: "",
				})
				setPath("")
				setFile(null);
			})
			.catch(function (error) {
				setIsLoading(false)
				console.log("error", error);
			});
	};

	const onFormChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setValues({
			...values,
			[name]: value,
			path: path,
		});
	};

	const onFileUpload = (event) => {
		setFile(event.target.files[0]);
	};

	return (
		<div>
			<form
				method="post"
				onSubmit={handleSubmit}
				ref={formRef}
				encType="multipart/form-data"
			>
				<input type="hidden" name="path" value={path} />
				<input
					className="need-form"
					type="text"
					id="name"
					name="name"
					placeholder="Name*"
					required
					onChange={onFormChange}
					value={values?.name}
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
					value={values?.email}
				/>
				<br />
				<input
					className="need-form"
					type="text"
					id="number"
					name="number"
					placeholder="Mobile number*"
					required
					value={values?.number}
					onChange={onFormChange}
					onKeyPress={(event) => {
						if (!/[0-9]/.test(event.key)) {
							event.preventDefault();
						}
					}}
				/>
				<br />
				<select
					name="services"
					id="_services"
					className="need-form"
					onChange={onFormChange}
					required
					value={values?.services}
				>
					<option>Service*</option>
					<option value="Blockchain Development Services">
						Blockchain Development Services
					</option>
					<option value="Metaverse Development Services">
						Metaverse Development Services{" "}
					</option>
					<option value="AR /VR Development Services">
						AR /VR Development Services
					</option>
					<option value="NFT Development Services">
						NFT Development Services
					</option>
					<option value="Startup Development Services">
						Startup Development Services
					</option>
					<option value="AI Development Services">
						AI Development Services
					</option>
					<option value="Machine Learning Development Services">
						Machine Learning Development Services
					</option>
					<option value="Cryptocurrency Development Services">
						Cryptocurrency Development Services
					</option>
					<option value="Web Development Services">
						Web Development Services
					</option>
					<option value="Mobile App Development Services">
						Mobile App Development Services
					</option>
				</select>
				<textarea
					className="need-form"
					id="exampleFormControlTextarea1"
					rows="3"
					name="message"
					type="text"
					placeholder="Message*"
					onChange={onFormChange}
					required
					value={values?.message}
				></textarea>

				<input
					type="file"
					name="uploadFile"
					id="uploadFile"
					className="need-form"
					placeholder="Choose file"
					onChange={onFileUpload}
					accept=".doc,.docx,.ppt,.txt,.pdf"
					style={{ color: "#000" }}
				/>
				<button className="book-btn d-flex align-items-center" type="submit" disabled={isLoading}>
					{isLoading ? <div class="spinner-border text-white  me-3" role="status">
						<span class="sr-only"></span>
					</div> : null}
					{text}
				</button>
				{success ? (
					<div
						className="alert alert-success d-flex align-items-center mt-4"
						role="alert"
					>
						{success}
					</div>
				) : (
					""
				)}
			</form>
		</div>
	);
};

export default CaseStudyForm;
