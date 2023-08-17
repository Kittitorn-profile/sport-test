import styled, { StyleProps } from "styled-components";
import { media } from "styled-bootstrap-grid";

const FootBallSectionWrapper = styled.section`
	padding-top: 4rem;
	${media.lg`
		padding-top: 5rem;
	`}
`;

const FootBallWrapper = styled.div`
	position: relative;
	overflow: hidden;
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
		right:0;
	`}
`;

const ImageBoxWrapper = styled.figure<StyleProps>`
	overflow: hidden;
	margin: 0;
	position: relative;
	z-index: 9;
	${media.xs`
		width: 400px;
    	height: 329px;
        grid-template-columns: 1fr;
		top: 35px;
	`}
	${media.sm`
	    width: 596px;
    	height: 484px;
    	right: -222px;
    	top: 77px;
	`}
	${media.lg`
		width: 750px;
    	height: 600px;
    	right: -220px;
    	top: 77px;
	`}
	${media.xl`
		width: 735px;
    	height: 600px;
    	right: 40px;
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
	FootBallSectionWrapper,
	FootBallWrapper,
	ImageBox,
	ImageBoxWrapper,
	CardWrapper,
	ImageWrapper,
};
