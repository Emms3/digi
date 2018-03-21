import React, { Component } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";
import Footer from "./components/Footer";

class App extends Component {
	render() {
		return (
			<div className="App">
				<AppHeader />
				<AppBody />
				<Footer />
			</div>
		);
	}
}

export default App;
