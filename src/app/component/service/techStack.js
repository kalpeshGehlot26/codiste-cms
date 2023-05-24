import React from "react";
import techStackItems from "../../data/techStackItems";

const TechStack = () => {
	return (
		<ul className="tech-style">
			{techStackItems?.map((tech, index) => {
				return (
					<li>
						<img
							className="img-fluid"
							src={tech.url}
							alt={tech.alt}
						/>
						<p>
							{tech.name}
						</p>
					</li>
				);
			})}
		</ul>
	);
};

export default TechStack;
