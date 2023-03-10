import {
	HeaderContent,
	StyledHeader,
	ModeContainer,
	Title,
	TotalFollowers
} from './styles';

const Header = () => {
	return (
		<StyledHeader>
			<HeaderContent>
				<div>
					<Title>Social Media Dashboard</Title>
					<TotalFollowers>Total Followers: 23,004</TotalFollowers>
				</div>
				<ModeContainer>
					<p>Dark Mode</p>
					<div>check</div>
				</ModeContainer>
			</HeaderContent>
		</StyledHeader>
	);
};

export default Header;
