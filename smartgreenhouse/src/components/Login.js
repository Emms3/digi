import React from "react";

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this._inputValidation = this._inputValidation.bind(this);
		this._navigate = this._navigate.bind(this);
	}

	_inputValidation() {
		//bla
		this._navigate();
	}

	_navigate() {
		// bla
		this.props.history.push("/main");
	}

	render() {
		return (
			<div className="login">
				<table>
					<tbody>
						<tr>
							<td>
								<input
									autoCapitalize="true"
									type="text"
									placeholder="Email"
								/>
							</td>
						</tr>

						<tr>
							<td>
								<input
									autoCapitalize="true"
									type="password"
									placeholder="Password"
								/>
							</td>
						</tr>
						<tr>
							<td>
								<button type="submit" onClick={this._navigate}>
									Login
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

Login.propTypes = {};
