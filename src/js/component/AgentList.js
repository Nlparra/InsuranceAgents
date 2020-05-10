import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AgentList = () => {
	const [state, setState] = useState({});

	const { store, actions } = useContext(Context);
	console.log("sttooooreee", store.users.results);

	return (
		<>
			<ul>
				{store.users &&
					store.users.map((e, index) => {
						console.log("here pay attention", e);
						return (
							<li key={index} className="agents-list">
								<img src={e.picture.medium} />
								<div>
									<h3>
										<Link to={"/agent/" + e.login.uuid}>
											{e.name.first} {e.name.last}
										</Link>
									</h3>
									<p>
										i wish lorem would work in gitpod instead of me making things up to create text
										that i will replace later.
										<br /> Phone Number: {e.phone}
										<br /> Email : {e.email}
										<br /> Location : {e.location.city} , {e.location.state}
									</p>
								</div>
							</li>
						);
					})}
			</ul>
		</>
	);
};
