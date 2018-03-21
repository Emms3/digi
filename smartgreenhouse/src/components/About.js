import React from "react";

export default class About extends React.Component {
	render() {
		return (
			<div className="about">
				<span className="underlined">About the project:</span>
				<p>
					{"\t"}Lorem ipsum dolor sit amet, consectetur adipisicing
					elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna{"\n"}
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.{
						"\n"
					}
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint{
						"\n"
					}
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.{"\n"}
				</p>
			</div>
		);
	}
}

About.propTypes = {};
