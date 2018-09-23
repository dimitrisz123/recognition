import React from "react";
import "./Image.css";

const Images = ({ photo }) => {
	return (
		<div className="center">
			<img alt="sample" src={photo} width="auto" height="300px" />
		</div>
	);
};

export default Images;
