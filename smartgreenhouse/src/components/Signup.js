import React from "react";

export default class Signup extends React.Component {
	constructor(props) {
		super(props);
		this._inputValidation = this._inputValidation.bind(this);
	}

	_inputValidation() {
		// bla bla
		this.props.history.push("/login");
	}

	render() {
		return (
			<div>
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
									type="text"
									placeholder="Username"
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
								<input
									autoCapitalize="true"
									type="password"
									placeholder="Password Confirmation"
								/>
							</td>
						</tr>
						<tr>
							<td>
								<button
									type="submit"
									onClick={this._inputValidation}>
									Signup
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

Signup.propTypes = {};
