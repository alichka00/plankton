import styled from "styled-components";

interface IButtonProps {
  width?: number;
  height?: number;
}

export const Button = styled.button<IButtonProps>`
  width: ${({ width = 60 }) => width}px;
  height: ${({ height = 35 }) => height}px;
  background: transparent;
  color: #9f6ab9;
  border-radius: 5px;
  border: 1px solid #6e3fa9;
  cursor: pointer;
  :hover {
    background: #9f6ab9;
    color: #67144e;
  }
`;
