import { home } from "./../views/home";

const url = "https://randomuser.me/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Users: []
		},
		actions: {
			getUser() {
				fetch(url)
					.then(res => res.json())
					.then(data => {
						console.log("Get Users", data), setStore({ Users: data });
					});
			}
		}
	};
};

export default getState;
