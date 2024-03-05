import React from 'react';
import styled from 'styled-components';
import img from '../../images/figma-project.png';

const Card = styled.div`
	width: 325px;
	height: 500px;
	position: relative;
	background-color: ${({ theme }) => theme.card};
	border-radius: 10px;
	box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
	overflow: hidden;
	padding: 7px 7px;
	display: flex;
	flex-direction: column;
	gap: 14px;
	transition: all 0.5s ease-in-out;
	&:hover {
		transform: translateY(-10px);
		box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
		filter: brightness(1.1);
	}
`;
const Image = styled.img`
	width: 100%;
	height: 175px;
	background-color: ${({ theme }) => theme.white};
	box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
`;
const Tags = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 5px;
	margin-top: 4px;
	padding: 0px 15px;
`;
const Tag = styled.div`
	font-size: 13px;
	font-weight: 400;
	color: ${({ theme }) => theme.primary};
	background-color: ${({ theme }) => theme.bgLight + 25};
	padding: 2px 8px;
	border-radius: 10px;
`;
const Details = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 0px;
	padding: 5px 15px;
`;
const Title = styled.div`
	font-size: 20px;
	font-weight: 600;
	color: ${({ theme }) => theme.text_primary};
	overflow: hidden;
	display: -webkit-box;
	max-width: 100%;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
`;
const Description = styled.div`
	font-weight: 400;
	color: ${({ theme }) => theme.text_secondary + 99};
	margin-top: 7px;
	display: -webkit-box;
	max-width: 100%;
`;

const Button = styled.a`
	-webkit-appearance: button;
	-moz-appearance: button;
	appearance: button;
	text-decoration: none;
    text-align: center;
	position: absolute;
	bottom: 10px;
	left: 80px;
	cursor: pointer;
	width: 150px;
    padding: 5px 0;
	border-radius: 10px;
	color: ${({ theme }) => theme.white};
	font-size: 15px;
	font-weight: 600;
	border: none;
	transition: all 0.2s ease-in-out !important;
	background: hsla(271, 100%, 50%, 1);
	background: linear-gradient(
		225deg,
		hsla(271, 100%, 50%, 1) 0%,
		hsla(294, 100%, 50%, 1) 100%
	);
	background: -moz-linear-gradient(
		225deg,
		hsla(271, 100%, 50%, 1) 0%,
		hsla(294, 100%, 50%, 1) 100%
	);
	background: -webkit-linear-gradient(
		225deg,
		hsla(262, 75.5%, 50%, 1) 0%,
		hsla(294, 100%, 50%, 1) 100%
	);
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634;
    filter: brightness(1);
    }
`;

const ProjectCard = ({ project }) => {
	const imageSrc = project.image
		? require(`../../images/${project.image}`)
		: null;
	return (
		<Card>
			<Image src={imageSrc} />
			<Tags>
				{project.tags?.map((tag, index) => (
					<Tag>{tag}</Tag>
				))}
			</Tags>
			<Details>
				<Title>{project.title}</Title>
				<Description>{project.description}</Description>
			</Details>
			{project.link && <Button href={project.link} target='display'>Check it out</Button>}
		</Card>
	);
};

export default ProjectCard;
