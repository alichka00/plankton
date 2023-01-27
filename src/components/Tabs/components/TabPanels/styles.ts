import styled, { css } from "styled-components";

interface I_TabProps {
  isActive: boolean;
}

export const TabWrap = styled.div`
  background-color: #2b2b2b;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  font-size: 18px;
  padding: 10px;
`;

export const TabBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Tab = styled.div<I_TabProps>`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 0 5px #6e3fa9;
  padding: 10px 13px;
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
