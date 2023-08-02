import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import ServiceInnerItems from "../component/service/serviceInnerItems";
import MLModel from "../data/services/service-items/MLModel";
import jsonData from "../data/schema";
import MLindustries from "../component/service/MLindustries";


export const metadata = {
	title: "Machine Learning Model development",
	description: "Codiste delivers challenging Machine learning  Model development services with scalable, maintainable, and efficient coding standards. Contact us now!!",
	images: "https://www.codiste.com/assets/images/Service-machine/ML_Model/ML Model Development.webp",
	openGraph: {
		title: "Machine Learning Model development",
		description: "Codiste delivers challenging Machine learning  Model development services with scalable, maintainable, and efficient coding standards. Contact us now!!",
		images: "https://www.codiste.com/assets/images/Service-machine/ML_Model/ML Model Development.webp",
		url: 'https://www.codiste.com/machine-learning-model-development/'
	},
};
const limit = 3;
const category = 56;
const MLModelDevelopment = () => {
	return (
		<div>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonData.MLModelDevelop),
				}}
			/>
			<div className="bg-color">
				<div className="container container-fluid">
					<section>
						<div className="row firstsec ">
							<div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
								<div className="col-12 col-lg-5 order-2 order-lg-1 p-4">
									<h1 className="all-head">
										ML Model Development
									</h1>
									<p className="all-p ">
										Machine Learning Model Development is
										all about developing ML models with the
										right dataset to make predictions or
										decisions. Most of the B2C or B2B
										sectors are looking for Large language
										model with custom data set and thats
										where our expertise can help you to
										build ML Model that can be deployed
										within your premise with your own data.
										Our expert team at Codiste follows a
										meticulous process to provide you with
										the best machine learning model
										development services. From data
										collection to customizations, we ensure
										seamless model training and fine-tuning
										for maximum accuracy.
									</p>
									<Link href="/contact" className="book-btn">
										Consult An Expert
									</Link>
								</div>
								<div className="col-12 col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0">
									<img
										className="img-fluid"
										alt="Machine Learning"
										src="assets/images/Service-machine/ML_Model/ML Model Development.webp"
									/>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
			<ClientSlider />

			<div className="container container-fluid">
				<section>
					<div className=" d-flex align-items-center flex-column justify-content-center firstsec mb-5">
						<h2 className="all-head text-center">
							Our Machine Learning Development Services
						</h2>
						<p className="secondsec-p text-center p-4">
							Our machine learning development services are one of
							the most powerful ones and are appreciated by
							different industry leaders. We get onboard and bring
							you custom solutions involved in the machine
							learning model development life cycle. Our ML model
							engineering services are well-equipped and
							contribute to the success of businesses across
							various industries.
						</p>
					</div>
					<ServiceInnerItems serviceItems={MLModel} />
				</section>
			</div>

			<div className="py-5 bg-color mt-5">
				<div className="container container-fluid">
					<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
						<h2 className="all-head text-center">
							Why Choose Us For Your ML Model Development?
						</h2>
						<p className="secondsec-p text-center">
							Choose Codiste as an expert ML model Development Company to develop a more accurate ML model.

						</p>
					</div>
					<div className="row g-4">
						<div className="col-xl-4 col-md-6 col-sm-12">
							<div className="newservice-box h-100">
								<div className="text-center">
									<img
										className="img-fluid mb-2"
										loading="lazy"
										alt="Comprehensive Development"
										src="assets/images/Service-machine/ML_Model/Experience In ML Algorithm.png"
									/>
								</div>
								<h3 className="">Experience In ML Algorithm</h3>
								<p className="secondsec-p">
									As an expert, Codiste ensures that one can
									get the most promising knowledge about ML
									algorithms and then implement the same. It
									includes supervised, unsupervised as well as
									reinforcement learning with impactful
									results and expertise in algorithms! Based
									on your use case we can come up with the
									right solution and choose the Right
									Algorithm.
								</p>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-sm-12">
							<div className="newservice-box h-100">
								<div className="text-center">
									<img
										className="img-fluid mb-2"
										loading="lazy"
										alt="Comprehensive Development"
										src="assets/images/Service-machine/ML_Model/Quality of Data and Pre-processing.png"
									/>
								</div>
								<h3>Quality of Data and Pre-processing</h3>
								<p className="secondsec-p">
									We ensure that we bring forth a team that is
									the most experienced in quality data and can
									thus offer data cleaning. Not only that, but
									we also help you with ultimate model
									accuracy and the most promising
									pre-processing pipeline. The more cleaned
									data, the more accuracy, and ultimately more
									accurate output.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12">
							<div className="newservice-box h-100">
								<div className="text-center">
									<img
										className="img-fluid mb-2"
										loading="lazy"
										alt="Comprehensive Development"
										src="assets/images/Service-machine/ML_Model/End-to-End Development of Model.png"
									/>
								</div>

								<h3>End-to-End Development of Model</h3>
								<p className="secondsec-p">
									From system assessment to data handling, integration, and infrastructure to model development and maintenance, we have the expertise to optimise Machine Learning development cycles that address your business problem and focus on key business areas to maximize ROI.

								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12">
							<div className="newservice-box h-100">
								<div className="text-center">
									<img
										className="img-fluid mb-2"
										loading="lazy"
										alt="Comprehensive Development"
										src="assets/images/Service-machine/ML_Model/Optimization of Performance.png"
									/>
								</div>
								<h3>Optimization of Performance</h3>
								<p className="secondsec-p">
									Codiste Team ensures you can get the
									ultimate ML model optimization services with
									us. The requirement for every business is
									different. Hence it is important to have a
									predicament that can handle such large loads
									of data without compromising the results.
								</p>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-sm-12">
							<div className="newservice-box h-100">
								<div className="text-center">
									<img
										className="img-fluid mb-2"
										loading="lazy"
										alt="Comprehensive Development"
										src="assets/images/Service-machine/ML_Model/Evaluation Assessment.png"
									/>
								</div>

								<h3>Evaluation Assessment</h3>
								<p className="secondsec-p">
									We ensure that only the best kind of
									evaluation is deployed so that it does not
									compromise the quality of the assessment. It
									helps us maintain accuracy, one of the most
									basic tenets of a domain like ML model
									development.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12">
							<div className="newservice-box h-100">
								<div className="text-center">
									<img
										className="img-fluid mb-2"
										loading="lazy"
										alt="Comprehensive Development"
										src="assets/images/Service-machine/ML_Model/Customizations.png"
									/>
								</div>
								<h3>Customizations</h3>
								<p className="secondsec-p">
									Our ML development team always aims to help
									you have the ultimate unique and custom
									model developed using your own data. We aim
									to cater to the customizations by
									implementing our expertise in advanced
									machine learning technologies, ML
									algorithms, and neural networks and tuning
									them to meet your challenges.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="py-5 mt-5">
				<div className="container container-fluid">
					<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
						<h2 className="all-head text-center">
							Our Machine Learning Consulting Approach
						</h2>
						<p className="secondsec-p text-center">
							We assist organizations in a seamless journey of
							utilizing AI-driven insights, from defining clear
							business goals to implementing and monitoring ML
							models.
						</p>
					</div>

					<div className="row g-5 mx-0">
						<div className="col-xl-4 col-md-6 col-sm-12">
							<div className="Approachcard h-100">
								<div className="background"></div>
								<div className="Approachcard-icon">
									<div className="wrap1">1</div>
								</div>
								<h3 className="">Business Goal</h3>
								<p className="secondsec-p">
									Understanding the desired result,
									establishing key performance indicators
									(KPIs), and coordinating the ML strategy.
									With the larger corporate objectives are
									necessary for this.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12">
							<div className="Approachcard h-100">
								<div className="background"></div>
								<div className="Approachcard-icon">
									<div className="wrap1">2</div>
								</div>
								<h3 className="">ML Problem Framing</h3>
								<p className="secondsec-p">
									Convert the business objective into a
									clear-cut machine learning challenge. In
									this phase, the type of ML task (such as
									classification, regression, clustering) is
									determined, the relevant evaluation metrics
									are chosen.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12">
							<div className="Approachcard h-100">
								<div className="background"></div>
								<div className="Approachcard-icon">
									<div className="wrap1">3</div>
								</div>
								<h3 className="">Data Processing</h3>
								<p className="secondsec-p">
									{" "}
									Preparing and preprocessing the data will
									assure its accuracy, completeness, and
									suitability for ML algorithms. This covers
									operations like feature engineering,
									addressing missing values, data cleansing,
									and converting data into a format for model
									training.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12">
							<div className="Approachcard h-100">
								<div className="background"></div>
								<div className="Approachcard-icon">
									<div className="wrap1">4</div>
								</div>
								<h3 className="">Model development</h3>
								<p className="secondsec-p">
									Using the cleaned-up data, create, train,
									and fine-tune the machine learning model.
									Choosing the right algorithms, optimizing
									hyperparameters, and assessing model
									performance using methods like
									cross-validation comes in this stage.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12">
							<div className="Approachcard h-100">
								<div className="background"></div>
								<div className="Approachcard-icon">
									<div className="wrap1">5</div>
								</div>
								<h3 className="">Deployment</h3>
								<p className="secondsec-p">
									To make the trained ML model available for
									real-time predictions, integrate it into a
									production environment or application. This
									entails creating a deployment architecture,
									managing model versioning, and setting up
									data pipelines for seamless integration.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12">
							<div className="Approachcard h-100">
								<div className="background"></div>
								<div className="Approachcard-icon">
									<div className="wrap1">6</div>
								</div>
								<h3 className="">Monitoring</h3>
								<p className="secondsec-p mb-0">
									Monitoring important metrics, identifying
									and dealing with model or concept drift, and
									putting in place safeguards to guarantee the
									model's dependability and efficiency over
									time.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="blackdiv px-3">
				<div className=" container container-fluid d-flex align-items-center justify-content-between py-3 flex-wrap">
					<p>
						Want to hire expert ML resources to tackle Your Complex
						business problems?
					</p>
					<Link href="/book-a-call" className="book-btn">
						Schedule Technical Consultation
					</Link>
				</div>
			</div>

			<div className="bg-color py-5">
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center">
							<h2 className="all-blog text-center">
								Technology Stack
							</h2>
							<p className="all-p  text-center mb-4">
								Our experienced team of engineers pack your
								Machine Learning Consulting with the best
								technologies ensuring that enable fault-free
								operations and be ready for transforming and
								scaling business.
							</p>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<ul className="tech-style">
									<li>
										<img
											className="img-fluid"
											loading="lazy"
											alt="pytorch"
											src="assets/images/tech/pytorch.png"
										/>
										<p className="text-uppercase">
											pytorch
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											loading="lazy"
											alt="Scikit_learn"
											src="assets/images/tech/Scikit_learn.png"
										/>
										<p className="text-uppercase">
											Scikit Learn
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											loading="lazy"
											alt="Apache_Spark_"
											src="assets/images/tech/Apache_Spark_.png"
										/>
										<p className="text-uppercase">
											Apache Spark
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											loading="lazy"
											alt="Pandas"
											src="assets/images/tech/Pandas.svg"
										/>
										<p className="text-uppercase">Pandas</p>
									</li>
									<li>
										<img
											className="img-fluid"
											loading="lazy"
											alt="github"
											src="assets/images/tech/github.png"
										/>
										<p className="text-uppercase">github</p>
									</li>
									<li>
										<img
											className="img-fluid"
											loading="lazy"
											alt="bitbucket"
											src="assets/images/tech/bitbucket.png"
										/>
										<p className="text-uppercase">
											bitbucket
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											loading="lazy"
											alt="git"
											src="assets/images/tech/git.png"
										/>
										<p className="text-uppercase">git</p>
									</li>
									<li>
										<img
											className="img-fluid"
											loading="lazy"
											alt="kubernetes"
											src="assets/images/tech/kubernetes.png"
										/>
										<p className="text-uppercase">
											kubernetes
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											loading="lazy"
											alt="docker"
											src="assets/images/tech/docker.png"
										/>
										<p className="text-uppercase">docker</p>
									</li>
									<li>
										<img
											className="img-fluid"
											loading="lazy"
											alt="Power-BI"
											src="assets/images/tech/Power-BI.svg"
										/>
										<p className="text-uppercase">
											Power-BI
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											loading="lazy"
											alt="Tableau"
											src="assets/images/tech/Tableau.svg"
										/>
										<p className="text-uppercase">
											Tableau
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											loading="lazy"
											alt="Matplotlib"
											src="assets/images/tech/Matplotlib.svg"
										/>
										<p className="text-uppercase">
											Matplotlib
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											loading="lazy"
											alt="Airflow"
											src="assets/images/tech/Airflow.png"
										/>
										<p className="text-uppercase">
											Apache airflow
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											loading="lazy"
											alt="sagemaker"
											src="assets/images/tech/sagemaker.svg"
										/>
										<p className="text-uppercase">
											sagemaker
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											loading="lazy"
											alt="Autokeras"
											src="assets/images/tech/Autokeras.png"
										/>
										<p className="text-uppercase">
											Autokeras
										</p>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>
			</div>

			<div className="">
				<div className="container container-fluid py-5">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h2 className="all-head">Industries We Serve</h2>
							<p className="all-p text-center">
								Being a trusted Machine Learning Consultant, we
								have worked with a wide range of sectors on a
								global scale and have been a part of their
								growth stories.
							</p>
						</div>
						<MLindustries />
					</section>
				</div>
			</div>

			<div className="py-5 bg-color mt-5">
				<div className="container container-fluid">
					<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
						<h2 className="all-head text-center">
							Our Engagement Models
						</h2>
					</div>
				</div>
				<div className="container cardcontainer">
					<div className="card">
						<div className="box">
							<div className="content">
								<h2>01</h2>
								<h3>Fixed Engagement Model</h3>
								<p>
									Get a predefined budget and timetable that
									is tailored for machine learning solutions
									projects with well defined scope and needs.
									This strategy, which is best for small to
									medium projects, guarantees cost
									predictability and provides the stated
									deliverables within the scheduled time
									range.
								</p>
							</div>
						</div>
					</div>

					<div className="card">
						<div className="box">
							<div className="content">
								<h2>02</h2>
								<h3>Time and Material Engagement Model</h3>
								<p>
									Our Time and Material Engagement Model is
									flexible and adaptable, making it ideal for
									machine learning professional services
									projects with changing requirements and
									undefined scope. As a result, there is more
									flexibility in adapting changes,
									scalability, and continued cooperation
									throughout the development lifecycle because
									you only pay machine learning consultant
									hourly rate actually used on the project.
								</p>
							</div>
						</div>
					</div>

					<div className="card">
						<div className="box">
							<div className="content">
								<h2>03</h2>
								<h3>Hire Dedicated Team Model</h3>
								<p>
									Strengthen your internal resources by
									putting together a group of talented ML
									Consultants and engineers that are only
									committed to the success of your project.
									This model offers the benefit of an extended
									development team that works extremely
									collaboratively to meet the needs and goals
									of your organization while guaranteeing
									smooth communication, control, and
									transparency.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="py-5">
				<div className="container container-fluid">
					<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
						<h2 className="all-head">FAQs</h2>
					</div>
					<div
						className="accordion accordion-flush"
						id="accordionFlushExample"
					>
						<div className="accordion-item">
							<h2
								className="accordion-header"
								id="flush-headingOne"
							>
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapseOne"
									aria-expanded="false"
									aria-controls="flush-collapseOne"
								>
									What is an ML Model?
								</button>
							</h2>
							<div
								id="flush-collapseOne"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingOne"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									ML Model or Machine Learning model is a
									computational algorithm which by learning
									the pattern and deciphering the connection
									between data, aids in making decisions
									without any explicit programming rules.
									Using the acquired knowledge, it generalizes
									and performs tasks on either new data or old
									ones.
									<br />
									It is the root of many kinds of applications
									namely image recognition, natural language
									processing, and recommendation engine, among
									others.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2
								className="accordion-header"
								id="flush-headingTwo"
							>
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapseTwo"
									aria-expanded="false"
									aria-controls="flush-collapseTwo"
								>
									How to train an ML model?
								</button>
							</h2>
							<div
								id="flush-collapseTwo"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingTwo"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Training the ML model infers that one will
									teach the model to recognize patterns or
									algorithms and then generate predictions
									based on that. Training an ML model is
									difficult and is usually a professional's
									work. It includes many steps, like
									collecting and preprocessing and splitting
									the data with their weight. <br />
									Then comes training the model and adding a
									hyperparameter. Finally, you can focus on
									model evaluation as well as optimization.
									Once you have completely trained the ML
									model, it is time to deploy the model into
									your system.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2
								className="accordion-header"
								id="flush-headingThree"
							>
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapseThree"
									aria-expanded="false"
									aria-controls="flush-collapseThree"
								>
									How to deploy an ML Model?
								</button>
							</h2>
							<div
								id="flush-collapseThree"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingThree"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Deploying an ML model ensures that it is
									ready for the practical world for use. The
									deployment of the ML model completely
									depends on the type of software and your
									system's infrastructure. Different steps
									involve choosing the environment for
									deployment, setting up the dependency,
									creating the interface, and deploying the
									model. <br />
									However, deploying the model is a complex
									process and can require added assistance.
									There are security considerations that need
									to be taken care for any unauthorized
									access. It can prevent your system from any
									susceptible attack.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2
								className="accordion-header"
								id="flush-headingfour"
							>
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapsefour"
									aria-expanded="false"
									aria-controls="flush-collapsefour"
								>
									How to evaluate ML model performance?
								</button>
							</h2>
							<div
								id="flush-collapsefour"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingfour"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									ML model performance can be evaluated
									through techniques like Train-Test Split,
									K-Fold Cross Validation, Confusion Matrix,
									Receiver Operating Characteristic (ROC)
									Curve, Precision-Recall (PR) Curve, R2
									Score, and more. This will depend on the use
									case and what we are trying to achieve.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2
								className="accordion-header"
								id="flush-headingfive"
							>
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapsefive"
									aria-expanded="false"
									aria-controls="flush-collapsefive"
								>
									What is a classification model in machine
									learning?
								</button>
							</h2>
							<div
								id="flush-collapsefive"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingfive"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									The classification model in machine learning
									is a type of supervised learning model. It
									can help you to infer the categorical class
									or even label the features of the inputs. A
									classification model ensures that you can
									learn from the data that has been labeled.
									The major focus of a model like the
									classification model in machine learning is
									to make any predictions concerning new and
									unseen data.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2
								className="accordion-header"
								id="flush-headingsix"
							>
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapsesix"
									aria-expanded="false"
									aria-controls="flush-collapsesix"
								>
									What are the types of ML Models?
								</button>
							</h2>
							<div
								id="flush-collapsesix"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingsix"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Most of the ML model techniques can be
									classified into three main types, i.e.
									<ul>
										<li>
											The supervised learning model is trained on
											labelled data. It requires input-output
											pairs that include input data with
											corresponding labelled output data. Linear
											Regression, Neural Networks, SVM, Decision
											Trees, etc., are common supervised learning
											algorithms.
										</li>
										<li>
											An unsupervised learning model is trained on
											unlabeled data, where the algorithm tries to
											search out structures or patterns in the
											input data without explicit output labels.
											Principal Component Analysis, K-Means
											Clustering, Hierarchical Clustering, etc.,
											are common unsupervised learning algorithms.
										</li>
										<li>
											The reinforcement Learning Model maximises a
											cumulative reward by including an agent
											learning to make decisions and act in an
											environment based on the feedback. Deep Q
											Networks (DQNs), Q-Learning, etc., are
											well-known reinforcement learning
											algorithms.
										</li>
									</ul>
									<br />
									Other than the above mentioned, Transfer
									Learning Models, Generative Models, Ensemble
									Learning Models, and Instance-based Learning
									Models are some less popular machine
									learning models.
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>

			<div className="py-5 bg-color">
				<div className="container container-fluid">
					<div className="d-flex align-items-center flex-column justify-content-center mb-5">
						<h2 className="all-head">Case Study</h2>
					</div>
					<div className="row d-flex align-items-center justify-content-between case-sec">
						<div className="col-lg-5 col-md-6 col-sm-12  order-2 order-md-1 case-sec p-4">
							<div className=" ">
								<h2 className="">ML Estimation</h2>
								<p className="all-p">
									Streamline HVAC project bidding with ML
									estimation, automating drawing annotation
									and generating accurate bill of materials.
									Save time, differentiate yourself in the
									industry, and leverage innovative technology
									for detailed quantity take-offs.
								</p>
							</div>
							<div className="mt-4">
								<Link
									href="/portfolio/ml-estimation"
									className="book-btn"
								>
									Read More
								</Link>
							</div>
						</div>
						<div className="col-lg-5 col-md-6 col-sm-8 mx-auto mx-lg-0  order-1 order-md-2 mb-5 mb-lg-0">
							<img
								className="img-fluid"
								style={{
									padding: "20px",
								}}
								src="assets/images/case-ml/MLEstimation.png"
								alt="MLEstimation - AI Tool to Analyse your Building material"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="container container-fluid py-5">
				<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
					<h2 className="all-blog">Blogs</h2>
					<p className="all-p text-center">
						Discover expert insights and helpful tips on emerging
						machine learning algorithms and technologies with our
						blogs.
					</p>
				</div>
				<AllServiceBlogSlider limit={limit} category={category} />
				<div className="d-flex align-items-center justify-content-center mt-5">
					<Link href="/blog" className="book-btn mt-3">
						Read more
					</Link>
				</div>
			</div> */}

			<div className="bg-color py-5">
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h2 className="all-head text-center">
								Satisfied clients is our proof of our
								excellence!
							</h2>
						</div>
						<div
							id="carouselExampleDark"
							className="carousel carousel-dark slide carousel-box"
							data-bs-ride="carousel"
						>
							<div className="carousel-indicators">
								<button
									type="button"
									data-bs-target="#carouselExampleDark"
									data-bs-slide-to="0"
									className="active"
									aria-current="true"
									aria-label="Slide 1"
								></button>
								<button
									type="button"
									data-bs-target="#carouselExampleDark"
									data-bs-slide-to="1"
									aria-label="Slide 2"
								></button>
								<button
									type="button"
									data-bs-target="#carouselExampleDark"
									data-bs-slide-to="2"
									aria-label="Slide 3"
								></button>
							</div>
							<div className="carousel-inner">
								<div className="carousel-item active">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<h3>
											It was an absolute pleasure working
											with Nishant and his team for our
											Blockchain Product. Not only is
											Nishant an engineer in making the
											product, he also care and give his
											opinion on the outcome of the
											design. When it comes to delivery,
											the break down of the milestone is
											fair and accurate. Lastly, we had
											alot of changes near the end of
											sprint and the team was flexible
											about it. honest work, you get what
											you pay for.
										</h3>
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												src="assets/images/iCrowsel.png"
												className="img-fluid"
												alt="iCrowsel"
											/>
											<div>
												<img
													className="img-fluid my-4 client-logo"
													alt="MLEstimation"
													src="assets/images/client-logos/Ml Estimation.png"
													loading="lazy"
												/>
											</div>
											<h5>MLEstimation</h5>
											<p>Founder</p>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<h3>
											Their ability to adapt to changes in
											our requirements while focusing on
											the deliverables was
											impressive.Codiste pvt ltd delivered
											a well-written code, making the
											platform highly performant. They
											excellently managed the
											collaboration and constantly
											communicated through Slack,
											WhatsApp, and email. Overall, they
											fostered a positive engagement by
											being responsive and accessible even
											during weekends.
										</h3>
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												src="assets/images/iCrowsel.png"
												className="img-fluid"
												alt="iCrowsel"
											/>
											<div>
												<img
													className="img-fluid my-4 client-logo"
													alt="Holygrails"
													src="assets/images/client-logos/Holygrails.png"
													loading="lazy"
												/>
											</div>
											<h5>Holygrails</h5>
											<p>
												Founder
												<br />
												Abu Dhabi, United Arab Emirates
											</p>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<h3>
											Codiste Team rocked Throughout the
											Development Process. Nishant handled
											everything very professionally and
											as timely as possible even when
											everything in life was going
											sideways.
										</h3>
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												src="assets/images/iCrowsel.png"
												className="img-fluid"
												alt="iCrowsel"
											/>
											<div>
												<img
													className="img-fluid my-4 client-logo"
													alt="MoonTrust"
													src="assets/images/client-logos/MoonTrust.png"
													loading="lazy"
												/>
											</div>
											<h5> MoonTrust</h5>
											<p>
												Founder
												<br />
											</p>
										</div>
									</div>
								</div>
							</div>
							<button
								className="carousel-control-prev"
								type="button"
								data-bs-target="#carouselExampleDark"
								data-bs-slide="prev"
							>
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">
									Previous
								</span>
							</button>
							<button
								className="carousel-control-next"
								type="button"
								data-bs-target="#carouselExampleDark"
								data-bs-slide="next"
							>
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">Next</span>
							</button>
						</div>
					</section>
				</div>
			</div>

			<div className="container container-fluid py-5">
				<h2 className="all-head text-center mb-lg-5 mb-0">Reach out to ML Engineers Now!</h2>
				<section>
					<div className="row  d-flex align-items-center">
						<div className="col-lg-6 col-md-12  needsec p-4">
							<h2>
								Looking to Augment Your Businesses with Our Domain Expertise?
							</h2>
						</div>
						<div className="col-lg-6 col-md-12 ">
							<div className="need-block h-100">
								<h2 className="">
									How Can We <b>Help?</b>{" "}
								</h2>
								<CaseStudyForm text="Start a Conversation" />
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};
export default MLModelDevelopment;
