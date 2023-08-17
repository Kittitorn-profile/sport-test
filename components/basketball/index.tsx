import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import Style from "./styles";
import imgBasketball from "@assets/images/basketball.png";
import CardItem from "../cardItem";
import TitleSection from "../titleSection";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BasketBallComponet: React.FC = () => {
	const [screen, setScreen] = useState(0);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const screen = window.innerWidth;
			setScreen(screen);
		}
	}, [window]);

	return (
		<Style.BasketBallSectionWrapper>
			{screen > 767 ? (
				<Style.BasketBallWrapper>
					<Style.ImageBox>
						<Style.ImageBoxWrapper>
							<Image
								src={imgBasketball}
								blurDataURL={`${imgBasketball}`}
								alt=""
							/>
						</Style.ImageBoxWrapper>
					</Style.ImageBox>
					<Fragment>
						<TitleSection title={"PLAYERS"} isLeft />
						<CardItem
							height={200}
							bgColor="#ffffff"
							number="01"
							title="CONNECTION"
							description="Connect with coaches directly, you can ping coaches to view profile."
							isLeft
						/>
						<CardItem
							height={256}
							bgColor="#F5F4F9"
							number="02"
							title="COLLABORATION"
							description="Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1."
							isLeft
						/>
						<CardItem
							height={297}
							bgColor="#090C35"
							title="GROWTH"
							lineColor="#ffffff"
							descColor="#ffffff"
							noColor="#8765DD"
							number="03"
							description="Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc"
							isLeft
						/>
					</Fragment>
				</Style.BasketBallWrapper>
			) : (
				<Fragment>
					<TitleSection title={"PLAYERS"} isMobile />
					<Style.ImageBox isMobile>
						<Style.ImageBoxWrapper isMobile>
							<Image
								src={imgBasketball}
								blurDataURL={`${imgBasketball}`}
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
								description="Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1."
							/>
							<CardItem
								isMobile
								height={300}
								bgColor="#F5F4F9"
								number="02"
								title="COLLABORATION"
								description="Work with recruiter to increase your chances of findingtalented athlete."
							/>
							<CardItem
								isMobile
								height={300}
								bgColor="#090C35"
								title="GROWTH"
								lineColor="#ffffff"
								descColor="#ffffff"
								noColor="#8765DD"
								number="03"
								description="Save your time, recruit proper athlets for your team."
							/>
						</Carousel>
					</Style.CardWrapper>
				</Fragment>
			)}
		</Style.BasketBallSectionWrapper>
	);
};

export default BasketBallComponet;
