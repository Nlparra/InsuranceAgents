import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export const SignIn = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Sign In
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Register</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<div>
							<label htmlFor="exampleInputEmail1">Username</label>
							<input
								type="username"
								className="form-control"
								id="exampleInputUsername"
								aria-describedby="usernameHelp"
							/>
							<label htmlFor="exampleInputEmail1">Password</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword"
								aria-describedby="PasswordHelp"
							/>
						</div>
						<Button variant="primary" type="submit">
							Sign In
						</Button>
					</Form>
				</Modal.Body>
			</Modal>{" "}
		</>
	);
};
