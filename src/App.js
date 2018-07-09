import React, { Component } from 'react';
import Form from './components/Form/Form';
import Image from './components/Image/Image';
import Results from './components/Results/Results'
import Browser from './components/Browser/Browser'
import Clarifai from 'clarifai';

const app = new Clarifai.App({
 apiKey: 'bfded7855d294034af402fc43b764606'
});


class App extends Component {
	constructor() {
		super()
		this.state = {
			input: '',
			image: '',
			disable: true,
			values: [],		
			browser: 0,	
		}
	}

onBrowserClick = (number) => {
	this.setState({ browser: number })
}

onInputchange = (event) => {
	this.setState({input: event.target.value})
}

onButtonSubmit = () => {	
	this.setState({ image: this.state.input })
	app.models
		.predict(
		"bd367be194cf45149e75f01d59f77ba7", 
		this.state.input)
		.then(response => {
			if (response) {
	  		this.setState({ browser: 2, disable: false })
	  	}
	  	this.array(this.results(response))
	  });
}

results = (data) => {		
	return data.outputs["0"].data.concepts.map(values => {				
		return {
			ingredient: values.name,
			probability: values.value 
		}	
	})		
}

array = (values) => {
	this.setState({ values: values })	
}

  render() {
  	const { disable, values, browser, image } = this.state  	
    return (
    	<div>
    		<Browser 
	      	onBrowserClick = {this.onBrowserClick}
	      	changePage = {browser}
	      	disable = {disable}
	      	/>
	      	{ browser === 0
    		?<Form
		    onButtonSubmit = {this.onButtonSubmit}
		    onInputchange = {this.onInputchange}
		    />
    		: ( browser === 1 
    		? <Image photo = {image} />
    		: <Results values = {values} />
    		)
    		}    		
       	</div>
    )
  }
}

export default App;
