import React, { Component } from "react";
import Form from "./components/Form/Form";
import DataPresentation from "./components/Results/DataPresentation";
import ImagePresentation from "./components/Results/ImagePresentation";
import Clarifai from "clarifai";
import "./App.css";

const app = new Clarifai.App({
	apiKey: "bfded7855d294034af402fc43b764606"
});

class App extends Component {
	constructor() {
		super();
		this.state = {
			input:
				"https://clarifai.com/cms-assets/20180320225536/general-005.jpg",
			image: "",
			values: [],
			showResults: false
		};
	}

	results = data => {
		return data.outputs["0"].data.concepts.map(values => {
			return {
				ingredient: values.name,
				probability: values.value
			};
		});
	};

	array = values => {
		this.setState({ values: values });
	};

	onInputchange = event => {
		this.setState({ input: event.target.value });
	};

	toHomePage = data => {
		this.setState({ showResults: data });
	};

	onButtonSubmit = () => {
		this.setState({ image: this.state.input });
		app.models
			.initModel({
				id: Clarifai.GENERAL_MODEL,
				version: "aa7f35c01e0642fda5cf400f543e7c40"
			})
			.then(generalModel => {
				return generalModel.predict(this.state.image);
			})
			.then(response => {
				const concepts = response["outputs"][0]["data"]["concepts"];
				console.log(concepts);
				this.array(this.results(response));
				if (response) {
					this.setState({ showResults: true });
				}
			});
	};

	onUploadImage = event => {
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");
		const img = new Image();
		img.onload = () => {
			canvas.width = img.width;
			canvas.height = img.height;
			ctx.drawImage(img, 0, 0);
			const dataURI = canvas.toDataURL("image/jpeg", 0.1);
			const base64img = dataURI.split("data:image/jpeg;base64,");
			app.models
				.predict(Clarifai.GENERAL_MODEL, {
					base64: base64img[1]
				})
				.then(response => {
					if (response) {
						this.setState({ showResults: true });
						this.setState({ image: dataURI });
					}
					this.array(this.results(response));
				});
		};
		img.src = URL.createObjectURL(event.target.files[0]);
	};

	render() {
		console.log(this.state);
		const { values, image, showResults } = this.state;
		return (
			<div className="app">
				{showResults === false ? (
					<Form
						value={this.state.input}
						onButtonSubmit={this.onButtonSubmit}
						onInputchange={this.onInputchange}
						onUploadImage={this.onUploadImage}
					/>
				) : (
					<div className="results">
						<ImagePresentation image={image} />
						<DataPresentation
							toHomePage={this.toHomePage}
							values={values}
						/>
					</div>
				)}
			</div>
		);
	}
}

export default App;
