import React from "react";
import Style from "./style";

interface ITitlePropds {
	title?: string;
	isMobile?: boolean;
	isLeft?: boolean;
}

const Title: React.FC<ITitlePropds> = ({ title, isMobile, isLeft }) => {
	return (
		<Style.TitleWrapper>
			{!isMobile && !isLeft && <div />}
			<Style.TitleBox isLeft={isLeft}>
				<Style.TitleText>{title}</Style.TitleText>
			</Style.TitleBox>
			{!isMobile && isLeft && <div />}
		</Style.TitleWrapper>
	);
};

export default Title;
