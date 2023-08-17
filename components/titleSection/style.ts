import styled, { StyleProps } from "styled-components";
import { media } from "styled-bootstrap-grid";

const TitleWrapper = styled.div`
	height: 80px;
	background: #ffffff;
	display: grid;
	grid-template-columns: 1fr;
	padding-left: 16px;
	${media.sm`
        padding-left: 0px;
    	grid-template-columns: 1fr 1fr;
    `}
`;

const TitleBox = styled.div<StyleProps>`
	color: #c2c2c2;
	${media.sm`
    	 ${(props: any) =>
					props.isLeft ? `padding-left: 24px` : `padding-right: 24px`};
    `}
	${media.lg`
    	 ${(props: any) =>
					props.isLeft ? `padding-left: 20%` : `padding-right: 24px`};
    `}
	display: flex;
	flex-direction: column;
	justifyc-cntent: center;
`;

const TitleText = styled.div`
	font-size: 90px;
	line-height: 105.47px;
	color: #e7e7e7;
`;

export default { TitleWrapper, TitleBox, TitleText };
