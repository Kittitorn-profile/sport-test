import styled, { StyleProps } from "styled-components";
import { media } from "styled-bootstrap-grid";

const FootBallWrapper = styled.div`
	position: relative;
	padding-top: 1rem;
`;

const ImageBox = styled.div<StyleProps>`
	text-align: center;
	display: flex;
	justify-content: center;
	${media.xs`
		position: unset;
	`}
	${media.sm`
		position: absolute;
	`}
`;

const ImageBoxWrapper = styled.figure<StyleProps>`
	overflow: hidden;
	margin: 0;
	position: relative;
	z-index: 9;
	${media.xs`
		width: 315px;
    	height: 440px;
        grid-template-columns: 1fr;
		top: 35px;
	`}
	${media.sm`
	    width: 559px;
    	height: 758px;
    	left: -170px;
    	top: 77px;
	`}
	${media.lg`
		width: 559px;
    	height: 758px;
    	left: -94px;
    	top: 77px;
	`}
	${media.xl`
		width: 620px;
		height: 870px;
		left: 100px;
		top: 35px;
	`}
	

	&::before {
		display: block;
		content: "";
		overflow: hidden;
	}

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
`;

const CardWrapper = styled.div<StyleProps>`
	width: 100%;
	${media.xs`
		height: 250px;
	`}
	${media.sm`
		height: 250px;
	`}
	${media.xl`
		height: 340px;
	`}
	${media.lg`
		height: 500px;		
	`}
`;

const ImageWrapper = styled.figure<StyleProps>`
	width: 100%;
	${media.xs`
		height: 250px;
	`}
	${media.sm`
		height: 250px;
	`}
	${media.xl`
		height: 340px;
	`}
	${media.lg`
		height: 500px;		
	`}
	overflow: hidden;
	margin: 0;
	border-radius: ${({ border }) => border && "16px"};
	&::before {
		display: block;
		content: "";
		overflow: hidden;
	}
	img {
		object-fit: contain;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
`;

export default {
	FootBallWrapper,
	ImageBox,
	ImageBoxWrapper,
	CardWrapper,
	ImageWrapper,
};
