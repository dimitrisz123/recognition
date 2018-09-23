import React, { Component } from "react";
import Form from "./components/Form/Form";
import Images from "./components/Image/Image";
import Results from "./components/Results/Results";
import Browser from "./components/Browser/Browser";
import Clarifai from "clarifai";
import "./App.css";

const app = new Clarifai.App({
	apiKey: "bfded7855d294034af402fc43b764606"
});

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: "",
			image: "",
			disable: true,
			values: [],
			browser: 0
		};
	}

	onBrowserClick = number => {
		this.setState({ browser: number });
	};

	onInputchange = event => {
		this.setState({ input: event.target.value });
	};

	onButtonSubmit = () => {
		this.setState({ image: this.state.input });
		app.models
			.predict("bd367be194cf45149e75f01d59f77ba7", this.state.input)
			.then(response => {
				if (response) {
					this.setState({ browser: 2, disable: false });
				}
				this.array(this.results(response));
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
				.predict("bd367be194cf45149e75f01d59f77ba7", {
					base64: base64img[1]
				})
				.then(response => {
					if (response) {
						this.setState({ browser: 2, disable: false });
						this.setState({ image: dataURI });
					}
					this.array(this.results(response));
				});
		};
		img.src = URL.createObjectURL(event.target.files[0]);
	};

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

	render() {
		const { disable, values, browser, image } = this.state;
		return (
			<div className="app">
				<Browser
					onBrowserClick={this.onBrowserClick}
					changePage={browser}
					disable={disable}
				/>
				{browser === 0 ? (
					<div>
						<Form
							onButtonSubmit={this.onButtonSubmit}
							onInputchange={this.onInputchange}
							onUploadImage={this.onUploadImage}
						/>
					</div>
				) : browser === 1 ? (
					<Images photo={image} />
				) : (
					<Results values={values} />
				)}
			</div>
		);
	}
}

export default App;
