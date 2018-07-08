import React from 'react';
import './Image.css';
import sample from './sample.jpg';


const Image = () => {
	return (
	<div>
		<div className = 'center'>
			<img alt = 'sample' src = {sample} width = 'auto' height = '300px'/>
		</div>
	</div>
		) 
}

export default Image;