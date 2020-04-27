import { Form, Row, Col, Button, FormControl, DropdownButton, Dropdown } from "react-bootstrap";
import React from "react";

export const Search = () => {
	return (
		<Form className="searching-insurance">
			<Row>
				<Col>
					<DropdownButton variant="dark" id="dropdown-basic-button" title="Dropdown button">
						<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
					</DropdownButton>
				</Col>
				<Col>
					<Button variant="success">Search</Button>
				</Col>
			</Row>
		</Form>
	);
};
