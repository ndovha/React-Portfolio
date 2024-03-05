import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../Cards/ProjectCard';
import { projects } from '../../data/constants';

const Container = styled.div`
	background: ${({ theme }) => theme.card_light};
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	z-index: 1;
	padding: 0 16px;
    margin-top: 25px;
	align-items: center;
    clip-path: polygon(0 0, 70% 5%, 100% 0%, 100% 100%, 0% 100%);
`;

const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	width: 100%;
	max-width: 1100px;
    padding-top: 30px;
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

const CardContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 28px;
	flex-wrap: wrap;
`;

const Projects = () => {
	return (
		<Container id='projects'>
			<Wrapper>
				<Title>Projects</Title>
				<CardContainer>
					{projects.map((project) => (
						<ProjectCard project={project} />
					))}
				</CardContainer>
			</Wrapper>
		</Container>
	);
};

export default Projects;
