import styled from "styled-components";

const Button = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  padding: 0;

  background-color: #835afd;
  /* background-color: ${props => props.theme.background}; */
  color: ${props => props.theme.color};
  border: 1px solid #835afd;
  cursor: pointer;

  display: flex;
`;

const Div = styled.div`
  height: 37px;

  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  height: 100%;
  background-color: ${props => props.theme.background};
  border-radius: 0 5px 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 240px;
  font-size: 14px;
  font-weight: 500;
`;

export { Button, Div, Span };
