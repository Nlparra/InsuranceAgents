import React from "react";
import { Card, Button } from "react-bootstrap";
import rigo from "./../../img/rigo-baby.jpg";

export const Register = () => {
	return (
		<div className="container mt-5">
			<div className="row ">
				<div className="col-6">
					<img className="mt-5" src="https://placehold.it/300x300" />
					<div className="form-group mt-3">
						<label htmlFor="myfile">Select a file:</label>
						<input type="file" id="myfile" name="myfile" />
						<input type="submit" value="Submit" />
					</div>
				</div>
				<div className="col-6">
					<h1 className="text-center mt-5">Add a new agent</h1>
					<form>
						<div className="form-group">
							<label>First Name</label>
							<input
								type="text"
								className="form-control"
								placeholder="please enter your first name"
								// onChange={e => setName(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Last Name</label>
							<input
								type="text"
								className="form-control"
								placeholder="Please Enter your last name"
								// onChange={e => setName(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Username</label>
							<input
								type="text"
								className="form-control"
								placeholder="Please pick a username"
								// onChange={e => setName(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input
								type="text"
								className="form-control"
								placeholder="Please enter your email"
								// onChange={e => setName(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Password</label>
							<input
								type="text"
								className="form-control"
								placeholder="Please choose a password"
								// onChange={e => setName(e.target.value)}
							/>
						</div>
						<button type="button" className="btn btn-primary form-control mb-5">
							save
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
