import React, { Component } from 'react';
import Form from './components/Form/Form';
import Image from './components/Image/Image';
import Results from './components/Results/Results'
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
			photoappear: false,
			values: [],			
		}
	}

onInputchange = (event) => {
	this.setState({input:event.target.value})
}

onButtonSubmit = () => {	
	this.setState({ image: this.state.input })
	app.models
		.predict(
		"bd367be194cf45149e75f01d59f77ba7", 
		this.state.input)
		.then(response => {
			if (response) {
	  		this.setState({ photoappear: true })
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
  	const { photoappear, values } = this.state 
    return (
      <div>
        <Form 
        onButtonSubmit = {this.onButtonSubmit}
        onInputchange = {this.onInputchange}
        />
        {(photoappear)
        ?<Image 
        photo = {this.state.image}        
        />
        :null
    	}
        <Results values = {values} />
      </div>
    );
  }
}

export default App;
