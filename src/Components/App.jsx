import "./Styles/App.scss";
import React from "react";
import SocialRow from "./social_row";

function App(props) {
	return (
		<>
			<div className="main-page flex-column d-flex justify-content-center mx-auto my-5">
				<div className="titles d-flex flex-column justify-content-center">
					<h1 className="main-name">Trevor Firl</h1>
					<h4 className="sub-name mb-5 pb-5">Software Engineer</h4>
					<i className="wip text-muted mt-2 mb-5 py-5"> Website Coming Soon </i>
				</div>
				<SocialRow className="d-flex justify-content-center mt-5" />
			</div>
		</>
	);
};

export default App;
