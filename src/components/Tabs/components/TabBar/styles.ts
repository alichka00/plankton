import styled, { css } from "styled-components";

interface I_TabProps {
  isActive: boolean;
}

export const TabBar = styled.div`
  display: flex;
`;

export const Tab = styled.div<I_TabProps>`
  width: 25%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 0 5px #6e3fa9;
  padding: 10px 50px;
  cursor: pointer;

  ${({ isActive }) =>
    isActive
      ? css`
          transition: 0.5s;
          background-color: #9f6ab9;
          color: #67144e;
        `
      : css`
          transition: 0.5s;
          background-color: transparent;
          color: #fffc;
        `}
`;
