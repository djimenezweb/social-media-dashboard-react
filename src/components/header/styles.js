import styled from 'styled-components';

const StyledHeader = styled.header`
	height: 235px;
	background-color: #f7f9ff;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	padding: 2.25rem 0 0;
`;

const HeaderContent = styled.div`
	width: 90%;
	max-width: 326px;
	margin: 0 auto;
	font-size: 14px;
	font-weight: bold;
	color: #63687d;
	@media screen and (min-width: 768px) {
		max-width: 1110px;
		display: flex;
		justify-content: space-between;
	}
`;

const Title = styled.h1`
	margin: 0 0 0.25rem;
	font-size: 1.5rem;
	color: black;
`;

const TotalFollowers = styled.p`
	margin: 0;
`;

const ModeContainer = styled.div`
	display: flex;
	justify-content: space-between;
	border-top: 1px solid #63687d;
	@media screen and (min-width: 768px) {
		border: 0;
	}
`;

export { StyledHeader, HeaderContent, Title, TotalFollowers, ModeContainer };
