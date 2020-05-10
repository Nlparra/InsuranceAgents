import React, { useState, useEffect, useContext, useParams } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const AgentPage = props => {
	const { store, actions } = useContext(Context);

	console.log(store.users);

	return (
		<div className="contain mt-5">
			<div className="row">
				<div className="col-6">
					<h1>YOOOOOO</h1>
					{/* <img src={store.users[props.match.params.uuid].picture.medium} /> */}
				</div>
				<div className="col-6">steve</div>
			</div>
			<div className="row" />
			defaultValue=
			{store.users[props.match.params.uuid].name}
		</div>
	);
};

AgentPage.propTypes = {
	match: PropTypes.object
};
