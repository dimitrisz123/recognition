import React from 'react';
import './Image.css';

const Image = ({ photo }) => {	
	return (
		<div className = 'center'>
			<img alt = 'sample' src = {photo} width = 'auto' height = '300px'/>
		</div>
		)	
	}		
	
export default Image;