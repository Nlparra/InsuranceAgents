import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Intro } from "./../component/Carousel";
import { Search } from "./../component/Search";
import { AgentList } from "./../component/AgentList";

export const Home = () => {
	return (
		<div className="jumbotron">
			<Intro />
			<Search />
			<AgentList />
		</div>
	);
};
