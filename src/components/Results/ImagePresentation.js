import React from "react";
import "./image.css";

const Image = ({ image }) => {
	return (
		<div className="image-container">
			<img src={image} alt="pic" width="100%" />
		</div>
	);
};
export default Image;
