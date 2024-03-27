import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from 'styled-components';
import { Bio } from '../../data/constants';

const FooterContainer = styled.div`
	width: 100%;
	padding: 1.5rem 0;
	display: flex;
	justify-content: center;
	position: relative;
	z-index: 1;
	background-color: ${({ theme }) => theme.nav};
`;

const FooterWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 14px;
	align-items: center;
	padding: 0.5rem;
	color: ${({ theme }) => theme.text_primary};
`;

const SocialMediaIcons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const SocialMediaIcon = styled.a`
	display: inline-block;
	margin: 0 1rem;
	font-size: 1.5rem;
	color: ${({ theme }) => theme.text_primary};
	transition: color 0.2s ease-in-out;
	&:hover {
		color: ${({ theme }) => theme.primary};
	}
`;

const NavItems = styled.nav`
	width: 100%;
	max-width: 800px;
	margin-top: 0.5rem;
	display: flex;
	flex-direction: row;
	gap: 2rem;
	justify-content: center;
	@media (max-width: 768px) {
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
		text-align: center;
		font-size: 12px;
	}
`;

const NavLink = styled.a`
	color: ${({ theme }) => theme.text_primary};
	text-decoration: none;
	font-size: 1.2rem;
	transition: color 0.2s ease-in-out;
	&:hover {
		color: ${({ theme }) => theme.primary};
	}
	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

const Contact = styled.div`
	font-size: 1rem;
	margin: 0.5rem 0;
`;

const Email = styled.a`
	cursor: pointer;
	text-decoration: none;
	color: ${({ theme }) => theme.text_primary};
	margin-top: 1.5rem;
	padding: 0 1rem;
	font-size: 1rem;
	text-align: center;
	&:hover {
		color: ${({ theme }) => theme.primary};
	}
`;

const Footer = () => {
	return (
		<FooterContainer id='contact'>
			<FooterWrapper>
				<NavItems>
					<NavLink href='#about'>About</NavLink>
					<NavLink href='#skills'>Skills</NavLink>
					<NavLink href='#experience'>Experience</NavLink>
					<NavLink href='#projects'>Projects</NavLink>
					<NavLink href='#education'>Education</NavLink>
					<NavLink href='#contact'>Contact</NavLink>
				</NavItems>
				<Contact>
					Contact me:{' '}
					<Email href='mailto: nataliia.dovha.ca@gmail'>{Bio.email}</Email>
				</Contact>
				<SocialMediaIcons>
					<SocialMediaIcon href={Bio.linkedin} target='display'>
						<LinkedInIcon sx={{ width: 35, height: 35 }} />
					</SocialMediaIcon>
					<SocialMediaIcon href={Bio.github} target='display'>
						<GitHubIcon sx={{ width: 35, height: 35 }} />
					</SocialMediaIcon>
				</SocialMediaIcons>
			</FooterWrapper>
		</FooterContainer>
	);
};

export default Footer;
