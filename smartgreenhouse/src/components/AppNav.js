import React from "react";
import { NavLink } from "react-router-dom";

export default class AppNav extends React.Component {
	render() {
		return (
			<div className="navContainer">
				<ul>
					<li>
						<NavLink to="/about" activeClassName="routerSelected">
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/getStarted"
							activeClassName="routerSelected">
							Record
						</NavLink>
					</li>
				</ul>
			</div>
		);
	}
}

AppNav.propTypes = {};
