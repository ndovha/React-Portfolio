import React, { useEffect } from 'react';
import styled from 'styled-components';
import { skills } from '../../data/constants';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	z-index: 1;
	align-items: center;
`;

const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	width: 100%;
	max-width: 1100px;
	gap: 12px;
	@media (max-width: 960px) {
		flex-direction: column;
	}
`;
const Title = styled.div`
	font-size: 42px;
	text-align: center;
	font-weight: 600;
	margin-top: 20px;
	color: ${({ theme }) => theme.text_primary};
	@media (max-width: 768px) {
		margin-top: 12px;
		font-size: 32px;
	}
`;

const SkillsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	margin-top: 30px;
	gap: 30px;
	justify-content: center;
`;

const Skill = styled.div`
	width: 100%;
	max-width: 500px;
	background: ${({ theme }) => theme.card_light};
	border: 0.1px solid #854ce6;
	box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
	border-radius: 16px;
	padding: 18px 36px;
	opacity: 0;
	transform: translateY(30px) rotate(10deg);
	transition: opacity 0.5s ease-out, transform 0.5s ease-out;
	&.active {
		opacity: 1;
		transform: translateY(0) rotate(0);
	}
	@media (max-width: 768px) {
		max-width: 400px;
		padding: 10px 36px;
	}
	@media (max-width: 500px) {
		max-width: 330px;
		padding: 10px 36px;
	}
`;

const SkillTitle = styled.h2`
	font-size: 28px;
	font-weight: 600;
	color: ${({ theme }) => theme.text_primary};
	margin-bottom: 20px;
	text-align: center;
`;

const SkillList = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 12px;
	margin-bottom: 20px;
`;

const SkillItem = styled.div`
	font-size: 16px;
	font-weight: 400;
	color: ${({ theme }) => theme.text_primary + 80};
	border: 1px solid ${({ theme }) => theme.text_primary + 80};
	border-radius: 12px;
	padding: 12px 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	transition: transform 0.3s;
	&:hover {
		transform: scale(1.1);
		transition: all 0.4s ease-in-out;
		outline: none;
	}
	@media (max-width: 768px) {
		font-size: 14px;
		padding: 8px 12px;
	}
	@media (max-width: 500px) {
		font-size: 14px;
		padding: 6px 12px;
	}
`;

const SkillImage = styled.img`
	width: 24px;
	height: 24px;
`;

const Skills = () => {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('active'); // Add active class when skill section is in view
					} else {
						entry.target.classList.remove('active'); // Remove active class when skill section is out of view
					}
				});
			},
			{ threshold: 0.5 }
		);

		document.querySelectorAll('.skill').forEach((skill) => {
			observer.observe(skill); // Start observing skill sections
		});

		return () => {
			document.querySelectorAll('.skill').forEach((skill) => {
				observer.unobserve(skill); // Stop observing skill sections on component unmount
			});
		};
	}, []);

	return (
		<Container id='skills'>
			<Wrapper>
				<Title>Technical Skills</Title>
				<SkillsContainer>
					{skills.map((skill, index) => (
						<Skill key={index} className='skill'>
							<SkillTitle>{skill.title}</SkillTitle>
							<SkillList>
								{skill.skills.map((item, index) => (
									<SkillItem key={index}>
										<SkillImage src={item.image} />
										{item.name}
									</SkillItem>
								))}
							</SkillList>
						</Skill>
					))}
				</SkillsContainer>
			</Wrapper>
		</Container>
	);
};

export default Skills;
