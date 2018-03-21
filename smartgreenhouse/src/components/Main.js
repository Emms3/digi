import React from "react";

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this._login = this._login.bind(this);
		this._logout = this._logout.bind(this);
		this._post = this._post.bind(this);
		this.state = {
			data: []
		};
	}

	componentWillMount() {
		const url = "http://smartgreenhouse.ca/sgh.php";
		// bla
		fetch(url).then(response => {
			response.json().then(text => {
				let records = 1;
				let temp = "";
				let fineObject = [];

				for (let i = 0; i < text.items.length; i++) {
					let data = text.items[i].data;
					if (data.slice(-1) === "=") {
						temp += data;
						fineObject[records] = temp;
						temp = "";
						records++;
					} else {
						temp += data;
					}
				}
				this.setState({
					data: fineObject
				});
				console.log("Records total: ", records - 1);
			});
		});
	}

	_post() {
		let url = "x";
		fetch(url, {
			method: "POST",
			body: "xy"
		});
	}
	_login() {
		// bla
	}

	_logout() {
		// bla
		this.props.history.push("/");
	}

	render() {
		return (
			<div className="mainContainer">
				{this.state.data.map((item, key) => <p key={key}>{item}</p>)}
				<button onClick={this._logout}>logout</button>
			</div>
		);
	}
}

Main.propTypes = {};
