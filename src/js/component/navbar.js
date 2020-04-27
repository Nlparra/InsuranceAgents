import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark fixed-top">
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
			<form className="form-inline">
				<button className="btn text-light btn-sm btn-outline-secondary" type="button">
					Register
				</button>
			</form>
		</nav>
	);
};
