import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import Style from "./styles";
import { FootBallProps } from "./interface";
import imgFootballer from "@assets/images/footballer.png";
import CardItem from "../cardItem";
import TitleSection from "../titleSection";
// import Carousel from "../carousel";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const FootBallComponet: React.FC<FootBallProps> = () => {
	const [screen, setScreen] = useState(0);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const screen = window.innerWidth;
			setScreen(screen);
		}
	}, [window]);

	return (
		<section>
			{screen > 767 ? (
				<Style.FootBallWrapper>
					<Style.ImageBox>
						<Style.ImageBoxWrapper>
							<Image
								src={imgFootballer}
								blurDataURL={`${imgFootballer}`}
								alt=""
							/>
						</Style.ImageBoxWrapper>
					</Style.ImageBox>
					<Fragment>
						<TitleSection title={"ATHLETS"} />
						<CardItem
							height={200}
							bgColor="#ffffff"
							number="01"
							title="CONNECTION"
							description="Connect with coaches directly, you can ping coaches to view profile."
						/>
						<CardItem
							height={256}
							bgColor="#F5F4F9"
							number="02"
							title="COLLABORATION"
							description="Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1."
						/>
						<CardItem
							height={297}
							bgColor="#5E3DB3"
							title="GROWTH"
							lineColor="#ffffff"
							descColor="#ffffff"
							number="03"
							description="Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc"
						/>
					</Fragment>
				</Style.FootBallWrapper>
			) : (
				<Fragment>
					<TitleSection title={"ATHLETS"} isMobile />
					<Style.ImageBox isMobile>
						<Style.ImageBoxWrapper isMobile>
							<Image
								src={imgFootballer}
								blurDataURL={`${imgFootballer}`}
								alt=""
							/>
						</Style.ImageBoxWrapper>
					</Style.ImageBox>
					<Style.CardWrapper>
						<Carousel
							infiniteLoop
							autoPlay
							showArrows={false}
							showStatus={false}
						>
							<CardItem
								isMobile
								height={300}
								bgColor="#ffffff"
								number="01"
								title="CONNECTION"
								description="Connect with coaches directly, you can ping coaches to view profile."
							/>
							<CardItem
								isMobile
								height={300}
								bgColor="#F5F4F9"
								number="02"
								title="COLLABORATION"
								description="Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1."
							/>
							<CardItem
								isMobile
								height={300}
								bgColor="#5E3DB3"
								title="GROWTH"
								lineColor="#ffffff"
								descColor="#ffffff"
								number="03"
								description="Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc"
							/>
						</Carousel>
					</Style.CardWrapper>
				</Fragment>
			)}
		</section>
	);
};

export default FootBallComponet;
