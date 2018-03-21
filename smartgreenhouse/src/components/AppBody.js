import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom";

import AppNav from "./AppNav";
import About from "./About";
import Login from "./Login";
import Signup from "./Signup";
import Main from "./Main";
import GetStarted from "./GetStarted";

export default class AppBody extends React.Component {
	render() {
		return (
			<Router>
				<div className="bodyContainer">
					<AppNav />
					<Switch>
						<Redirect exact from="/" to="/about" />
						<Route path="/about" component={About} />
						<Route path="/signup" component={Signup} />
						<Route path="/login" component={Login} />
						<Route path="/getStarted" component={GetStarted} />
						<Route path="/main" component={Main} />
					</Switch>
				</div>
			</Router>
		);
	}
}

AppBody.propTypes = {};
