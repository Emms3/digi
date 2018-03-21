import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import Signup from "./Signup";
import Login from "./Login";

export default class GetStarted extends React.Component {
	render() {
		return (
			<div className="routes">
				<Link to="/login">
					<span className="noaccount">Login</span>
				</Link>
				{"\n"}
				<Link to="/signup">
					<span className="noaccount">I don't have an account</span>
				</Link>

				<Switch>
					<Route path="/signup" component={Signup} />
					<Route path="/login" component={Login} />
				</Switch>
			</div>
		);
	}
}

GetStarted.propTypes = {};
