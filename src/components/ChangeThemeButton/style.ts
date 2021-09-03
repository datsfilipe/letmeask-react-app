import styled from "styled-components";

const ButtonToggleTheme = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: transparent;
  color: ${props => props.theme.color};
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }
`;

export { ButtonToggleTheme };
