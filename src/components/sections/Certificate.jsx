// import React, { useRef } from "react";
// import styled from "styled-components";
// import emailjs from "@emailjs/browser";

import styled from "styled-components";

const Container = styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content-center;
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
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Certificate = () => {
  
  

  return (
    <Container id="Experience">
    <Wrapper>
      <Title>Certificate</Title>
      <Desc
        style={{
          marginBottom: "40px",
        }}
      >
        Its mine all certificate as a software developer as a college student and
        working and Learning on Differevt varrous sources.
      </Desc>

      
    </Wrapper>
  </Container>
  );
};

export default Certificate;
