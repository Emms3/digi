import React from "react";

export default class AppHeader extends React.Component {
	render() {
		return (
			<div className="headerContainer">
				<h1 className="title">GREENhôuse</h1>
				Welcome to Greenhôuse
				<br />
				by: @gasim, @ameer
			</div>
		);
	}
}

AppHeader.propTypes = {};
