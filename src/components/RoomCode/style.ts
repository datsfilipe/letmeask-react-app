import styled from "styled-components";

const Button = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background-color: #fff;
  border: 1px solid #835afd;
  cursor: pointer;

  display: flex;
`;

const Div = styled.div`
  height: 40px;
  background-color: #835afd;
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  display: block;
  align-self: center;
  flex: 1;
  padding: 0 16px 0 12px;
  width: 240px;
  font-size: 14px;
  font-weight: 500;
`;

export { Button, Div, Span };
