import React from "react";
import styled from "styled-components";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;
const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;

  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600px;
  color: ${({ theme }) => theme.text_primary};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Degree = styled.div`
  font-size: 14px;
  font-weight: 500px;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Date = styled.div`
  font-size: 12px;
  font-weight: 400px;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Card = styled.div`
	width: 670px;
	background: ${({ theme }) => theme.card_light};
	border-radius: 10px;
	box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
	padding: 12px 16px;
	justify-content: space-between;
	position: relative;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	gap: 12px;
	border: 0.1px solid transparent;
	transition: all 0.3s ease-in-out;
	&:hover {
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
		transform: translateY(-5px);
	}
	@media only screen and (max-width: 768px) {
		padding: 10px;
		gap: 8px;
		width: 300px;
	}
  border: 1.8px solid ${({ theme }) => theme.primary};
	box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`;

const EducationCard = ({ education }) => {
  return (
    <Card>
      <Top>
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Description>
        {education.desc}
      </Description>
    </Card>
  );
};

export default EducationCard;