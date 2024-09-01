// CertificatePage.js
import React from 'react';
import styled from 'styled-components';
import { Certificates} from '../../data/constants';
import { Tilt } from 'react-tilt';



// Styled components
const Container = styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content-center;
position: relative;
z-index: 1;
padding: 0 16px;
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
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CertificateGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;

const CertificateContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  max-width: 300px;
  background-color: #222a35;
  text-align: left;
  box-shadow: 0 0 10px rgba(1, 1, 1, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CertificateImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
`;

const CertificateDetails = styled.div`
  text-align: center;
  margin-top: 10px;
  color: #ECFFE6;
`;
const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  gap:60px;
`;

const Button = styled.a`
  padding: 8px 16px;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    background-color: #0056b3;
  }
`;

// Certificate component to display individual certificate
const Certificate = ({ name, date, institution, image, button1, button2 }) => (
  <CertificateContainer>
    <CertificateImage src={image} alt={`${name}'s certificate`} />
    <CertificateDetails>
      <h3>{name}</h3>
      <p>Date: {new Date(date).toLocaleDateString()}</p>
      <p>Institution: {institution}</p>
      <ButtonContainer>
        <Button href={button1.url} target="_blank" rel="noopener noreferrer">
          {button1.label}
        </Button>
        <Button href={button2.url} target="_blank" rel="noopener noreferrer">
          {button2.label}
        </Button>
      </ButtonContainer>
    </CertificateDetails>
  </CertificateContainer>
);

// Main CertificatePage component
const CertificatePage = () => {
  return (
    <Container id="Certificates">
    
      <Wrapper>
      <Tilt>
        <Title>Certificates</Title>
        <Desc>Here are some of my certificates showcasing my achievements and qualifications.</Desc>
      </Tilt>
        <CertificateGrid>
          {Certificates.map((cert, index) => (
            <Certificate
              key={index}
              name={cert.name}
              date={cert.date}
              institution={cert.institution}
              image={cert.image}
              button1={cert.button1}
              button2={cert.button2}
            />
          ))}
        </CertificateGrid>
      
      </Wrapper>
      
    </Container>
  );
};
export default CertificatePage;
