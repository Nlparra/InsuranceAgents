import React, { useState, useEffect, useContext, useParams } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const AgentPage = props => {
	const { uuid } = props.match.params;
	const { store, actions } = useContext(Context);

	// console.log("test", store.users.filter(user => user.login.uuid === uuid));
	let agent = store.users.filter(agent => agent.login.uuid === uuid);
	console.log("uuid =>", agent);

	return (
		<div className="agentspage contain">
			<div className="row">
				<div className="col-6">
					<h1>{`${agent[0].name.first}  ${agent[0].name.last}`}</h1>
					<img src={agent[0].picture.medium} />
				</div>
				<div className="col-6">
					Phone Number:
					{agent[0].phone} <br />
					Email Address: {agent[0].email} <br />
					Location: {agent[0].location.country},{agent[0].location.state},{agent[0].location.city} <br />
				</div>
			</div>
			<div className="row" />
			{/* {store.users[props.match.params.uuid].name} */}
		</div>
	);
};

AgentPage.propTypes = {
	match: PropTypes.object
};
