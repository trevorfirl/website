import "./App.scss";
import React, { useEffect } from "react";
import { Card, Modal, Navbar } from "react-bootstrap";

const App = () => {

	return (
        <div className = 'main-page d-flex justify-content-center mx-auto my-5'>
            <div className = 'titles d-flex flex-column justify-content-center align'>
                <h1 className='main-name'>Trevor Firl</h1>
                <h4 className='sub-name mb-5 pb-5'>Software Engineer</h4>

                <i className='wip text-muted mt-5 pt-5'> Website Coming Soon </i>
            </div>
        </div>
	);
};

export default App;
