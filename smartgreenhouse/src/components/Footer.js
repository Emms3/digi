import React from "react";

export default class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className="footerContainer">
					<div className="footerLeft" />
					<div className="footerRight">
						<p>Email : m88.alomari@gmail.com</p>
						<p>Phone: +1 ( 289 ) - 588 - 4988</p>
						<i className="fab fa-snapchat-ghost" /> &nbsp;
						<i className="fab fa-twitter" /> &nbsp;
						<i className="fab fa-instagram" /> &nbsp;
						<i className="fab fa-github" /> &nbsp;
						<i className="fab fa-whatsapp" />
					</div>
				</div>
				<p className="footingText">© Greenhôuse. 2018</p>
			</footer>
		);
	}
}

Footer.propTypes = {};
