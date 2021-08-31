import styled from "styled-components";

const Container = styled.div`
  background-color: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px (0, 0, 0, 0.04);
  padding: 24px;

  & + .question {
    margin-top: 8px;
  }

  &.highlighted {
    background-color: #f4f0ff;
    border: 1px solid #835afd;

    footer .user-info span {
      color: #29292e, 100%;
    }
  }

  &.answered {
    background-color: #dbdcdd;
  }

  > div {
    display: flex;
    gap: 8px;
  }
`;

const Paragraph = styled.p`
  color: #29292e;
  word-break: break-word;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const Span = styled.span`
  margin-left: 8px;
  color: #737380;
  font-size: 14px;
`;

const FooterButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  transition: filter 0.2s;

  &.like-button {
    display: flex;
    align-items: flex-end;
    color: #737380;
    gap: 8px;

    &.liked {
      color: #835afd;

      svg path {
        stroke: #835afd;
      }
    }
  }

  &:hover {
    filter: brightness(0.7);
  }
`;

export { Container, Paragraph, Footer, Div, Image, FooterButton, Span };
