import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
export default class NavBar extends Component {
	render() {
		return (
			<div>
				<Navbar bg="light" expand="lg">
					<Navbar.Brand href="#home">Virtual Gallery</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link as={NavLink} to="/sign-in" exact>
								Log In
							</Nav.Link>
							<Nav.Link as={NavLink} to="/sign-out" exact>
								Sign Out
							</Nav.Link>
							<Nav.Link as={NavLink} to="/discover" exact>
								Discover
							</Nav.Link>
							<Nav.Link as={NavLink} to="/profile" exact>
								Profile
							</Nav.Link>
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
