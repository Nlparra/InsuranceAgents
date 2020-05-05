import { home } from "./../views/home";

const url = "https://randomuser.me/api/?results=10";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: []
		},
		actions: {
			getUser() {
				fetch(url)
					.then(res => res.json())
					.then(data => {
						console.log("Get Users", data), setStore({ users: data.results });
					});
			}
		}
	};
};

export default getState;
