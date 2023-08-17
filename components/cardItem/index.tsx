import React from "react";
import Style from "./style";
import { ICardPropds } from "./interface";

const CardItems: React.FC<ICardPropds> = (props) => {
	const {
		height,
		bgColor,
		title,
		description,
		number,
		lineColor,
		descColor,
		isMobile,
		isLeft,
		noColor,
	} = props;

	return (
		<Style.CardWrapper height={height} bgColor={bgColor}>
			{!isMobile && !isLeft && <div />}
			<Style.BoxDetail isLeft={isLeft}>
				<Style.Title>
					<Style.NumberBox>
						<Style.Number noColor={noColor}>{number}</Style.Number>
						<Style.DivisionLine lineColor={lineColor} />
					</Style.NumberBox>
					<Style.TitleText>{title}</Style.TitleText>
				</Style.Title>
				<Style.Description descColor={descColor}>
					{description}
				</Style.Description>
			</Style.BoxDetail>
			{!isMobile && isLeft && <div />}
		</Style.CardWrapper>
	);
};

export default CardItems;
