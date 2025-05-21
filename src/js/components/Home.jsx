 import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { SecondsCounter } from "./SecondsCounter.jsx";

const Home = () => {
	const [timer, setTimer] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(value => value + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<main className="text-center">
			<section className="counter-holder">
				<SecondsCounter number={<FontAwesomeIcon icon={faClock} size="lg" style={{ color: "#FFD43B" }} />} />
				<SecondsCounter number={Math.floor(timer / 100000) % 10} />
				<SecondsCounter number={Math.floor(timer / 10000) % 10} />
				<SecondsCounter number={Math.floor(timer / 1000) % 10} />
				<SecondsCounter number={Math.floor(timer / 100) % 10} />
				<SecondsCounter number={Math.floor(timer / 10) % 10} />
				<SecondsCounter number={timer % 10} />
			</section>
		</main>
	);
};

export default Home;
