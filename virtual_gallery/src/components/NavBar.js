import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

import { Button, Form, FormControl, Nav } from 'react-bootstrap';

export default class NavBar extends Component {
	render() {
		return (
			<div>
				<Navbar bg="light" expand="lg">
					<Navbar.Brand href="#home">Virtual Gallery</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#link">Login</Nav.Link>
							<Nav.Link href="#home">Logout</Nav.Link>
							<Nav.Link href="#home">Categories</Nav.Link>
						</Nav>
						<Form inline>
							<FormControl type="text" placeholder="Search..." className="mr-sm-2" />
							<Button variant="light">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}
