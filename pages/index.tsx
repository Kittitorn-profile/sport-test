import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import type { NextPage } from "next";

const FootballComponent = dynamic(() => import("@components/footballSection"), {
	ssr: false,
});
const BasketballComponent = dynamic(() => import("@components/basketball"), {
	ssr: false,
});

interface IHomeProps {}

const Home: NextPage<IHomeProps> = ({}) => {
	return (
		<Fragment>
			<FootballComponent />
			<BasketballComponent />
		</Fragment>
	);
};
export default Home;
