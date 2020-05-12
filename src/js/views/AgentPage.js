import React, { useState, useEffect, useContext, useParams } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const AgentPage = props => {
	const { uuid } = props.match.params;
	const { store, actions } = useContext(Context);

	// console.log("test", store.users.filter(user => user.login.uuid === uuid));
	let izzy = store.users.filter(user => user.login.uuid === uuid);
	//console.log("uuid =>", uuid);

	return (
		<div className="contain mt-5">
			<div className="row">
				<div className="col-6">
					<h1>YOOOOOO</h1>
					<img src={izzy[0].picture.medium} />
				</div>
				<div className="col-6">steve</div>
			</div>
			<div className="row" />
			{/* {store.users[props.match.params.uuid].name} */}
		</div>
	);
};

AgentPage.propTypes = {
	match: PropTypes.object
};
