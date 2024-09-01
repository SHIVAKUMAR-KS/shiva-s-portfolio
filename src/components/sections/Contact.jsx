import React from "react";
import styled from "styled-components";
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  max-width: 1350px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 30%;
  color: #676767;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 960px) {
    flex-basis: 100%;
    align-items: center;
  }
`;

const RightColumn = styled.div`
  flex-basis: 45%;
  @media (max-width: 960px) {
    flex-basis: 100%;
  }
`;

const ContactHeading = styled.h3`
  color: #FABC3F;
  font-weight: 900;
  font-size: 30px;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 35px;
  margin-left: 10px;
`;

const ContactDesc = styled.p`
color: #D1E9F6;
  max-width: 450px;
  list-style: none;
`;

const ContactList = styled.ul`
color: #FFF8E8;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContactListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const ListItemIcon = styled.img`
  width: 25px;
  margin-right: 10px;
`;

const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  text-align: center;
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;


const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  resize: vertical;
  text-align: left; 
  direction: ltr;
  ::placeholder {
    color: ${({ theme }) => theme.text_secondary};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;


const ContactButton = styled.button`
  width: 100%;
  text-align: center;
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: #FFF8E8;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const Contact = () => {
  const [result, setResult] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
  
    formData.append("access_key", "4eaa7b0e-cc5c-4695-9274-79b54a4075cb");
  
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
  
      if (!res.ok) {
        throw new Error("Failed to submit form");
      }
  
      const data = await res.json();
  
      if (data.success) {
        console.log("Success", data);
        setResult(data.message);
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Failed to submit form");
    }
  };

  return (
    <Container>
      <Title>Contact</Title>
      <Desc>
        Feel free to reach out to me for any questions or opportunities!
      </Desc>
      <Content>
        <LeftColumn>
          <ContactHeading>
            Send us a Message <Icon src={msg_icon} alt="" />
          </ContactHeading>
          <ContactDesc>
            Feel free to reach out through the form or find out contact information
            below. Your feedback, questions, and suggestions are important
            to us as we strive to provide exceptional service to our
            community.
          </ContactDesc>
          <ContactList>
            <ContactListItem>
              <ListItemIcon src={mail_icon} alt="" />
              Contact Email: kshiva09283@gmail.com
            </ContactListItem>
            <ContactListItem>
              <ListItemIcon src={phone_icon} alt="" />
              9155563895
            </ContactListItem>
            <ContactListItem>
              <ListItemIcon src={location_icon} alt="" />
              Student at Cmr Technical Campus and 100xDevs
            </ContactListItem>
          </ContactList>
        </LeftColumn>
        <RightColumn>
          <ContactForm onSubmit={handleSubmit}>
            <ContactTitle>Get In Touch</ContactTitle>
            <ContactInput placeholder="Your Email" name="from_email" />
            <ContactInput placeholder="Your Name" name="from_name" />
            <ContactInput placeholder="Subject" name="subject" />
            <ContactInputMessage placeholder="Message" name="message" rows={4} />
            <ContactButton type="submit">Send</ContactButton>
            {result && <p>{result}</p>}
          </ContactForm>
        </RightColumn>
      </Content>
    </Container>
  );
};

export default Contact;
