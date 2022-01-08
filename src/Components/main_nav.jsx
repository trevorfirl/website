import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function MainNav(props) {
	return (
		<Navbar bg="light" variant="light">
			<Container>
				<Navbar.Brand href="#home">
					<img
						alt=""
						src="favicon.ico"
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>{" "}
					Trevor Firl
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#about">About</Nav.Link>
					<Nav.Link href="#portfolio">Portfolio</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default MainNav;