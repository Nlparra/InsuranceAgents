import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Intro } from "./../component/Carousel";

export const Home = () => {
	return (
		<div className="jumbotron">
			<Intro />
		</div>
	);
};
