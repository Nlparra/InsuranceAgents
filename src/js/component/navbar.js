import React from "react";
import { Link } from "react-router-dom";
import { SignIn } from "./SignIn";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-dark bg-dark fixed-top">
				<Link to="/">
					<a className="navbar-brand" href="#">
						{/* <img
					src="/docs/4.4/assets/brand/bootstrap-solid.svg"
					width="30"
					height="30"
					className="d-inline-block align-top"
					alt=""
				/> */}
						InsurAgent
					</a>
				</Link>
				<form className="form-inline">
					<SignIn />
					<Link to="/Register">
						<button className="btn text-light btn-outline-secondary ml-3" type="button">
							Register
						</button>
					</Link>
				</form>
			</nav>
		</>
	);
};
