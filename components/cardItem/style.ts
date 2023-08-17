import styled, { StyleProps } from "styled-components";
import { media } from "styled-bootstrap-grid";

const CardWrapper = styled.div<StyleProps>`
	height: ${({ height }) => height || 100}px;
	background-color: ${({ bgColor }) => bgColor || "#ffffff"};
	text-align: start;
	display: grid;
	${media.xs`
		padding: 32px 16px 16px 16px;
        grid-template-columns: 1fr;
	`}
	${media.sm`
		grid-template-columns: 1fr 1fr;
	`}
	${media.xl`
		grid-template-columns: 1fr 1fr;
	`}
	${media.lg`
		grid-template-columns: 1fr 1fr;
	`}
`;

const Title = styled.div`
	display: flex;
	paddingt-top: 16px;
	align-items: center;
`;

const TitleText = styled.div<StyleProps>`
	font-size: 36px;
	padding-left: 8px;
	line-height: 42.19px;
	color: ${({ titleColor }) => titleColor || "#c2c2c2"};
`;

const Description = styled.div<StyleProps>`
	color: ${({ descColor }) => descColor || "#000000"};
	padding-top: 1rem;
	font-weight: normal;
`;

const NumberBox = styled.div`
	width: fit-content;
`;

const Number = styled.div<StyleProps>`
	font-size: 18px;
	color: ${({ noColor }) => noColor || "#000000"};
	line-height: 21.09px;
`;

const DivisionLine = styled.div<StyleProps>`
	width: 100%;
	height: 5px;
	background-color: ${({ lineColor }) => lineColor || "#603ebe"};
	border-radius: 16px;
`;

const BoxDetail = styled.div<StyleProps>`
	padding-right: 0px;

	${media.sm`
         ${(props: any) =>
						props.isLeft ? `padding-left: 24px` : `padding-right: 24px`};
    `}
	${media.lg`
      ${(props: any) =>
				props.isLeft ? `padding-left: 20%` : `padding-right: 20%`};
    `}
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export default {
	CardWrapper,
	Number,
	Title,
	TitleText,
	Description,
	DivisionLine,
	BoxDetail,
	NumberBox,
};
