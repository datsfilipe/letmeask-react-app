import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

const Aside = styled.aside`
  flex: 7;

  background-color: #835afd;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 120px 80px;
`;

const Image = styled.img`
  max-width: 320px;
`;

const Strong = styled.strong`
  font: 700 36px 'Poppins', sans-serif;
  line-height: 42px;
  margin-top: 16px;
`;

const Paragraph = styled.p`
  font-size: 24px;
  line-height: 32px;
  margin-top: 16px;
  color: #f8f8f8;
`;

const Main = styled.main`
  flex: 8;

  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  > Image {
    align-items: center;
  }
`;

const Form = styled.form`
  Button {
    margin-top: 16px;
  }

  Button, Input {
    width: 100%;
  }

  p {
  font-size: 14px;
  color: #737380;
  margin-top: 16px;

    a {
      color: #e559f9;
    }
  }
`;

const Input = styled.input`
  height: 50px;
  border-radius: 8px;
  padding: 0 16px;
  background-color: #fff;
  border: 1px solid #a8a8b3;
`;

const AuthButton = styled.button`
  margin-top: 64px;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background-color: #ea4335;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

const ImageButton = styled.img`
  margin-right: 8px;
`;

const Separator = styled.div`
  font-size: 14px;
  color: #a8a8b3;

  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background-color: #a8a8b3;
    margin-right: 16px;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: #a8a8b3;
    margin-left: 16px;
  }
`;

export { Container, Aside, Image, Strong, Paragraph, Main, MainContent, Form, Input, AuthButton, ImageButton, Separator };
