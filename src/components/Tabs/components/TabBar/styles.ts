import styled from "styled-components";

export const StyleTabBar = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 35px;
  padding-left: 65px;
`;

export const StyleTab = styled.div`
  width: 25%;
  cursor: pointer;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 0 5px #6e3fa9;
  padding: 10px 50px;
  cursor: pointer;
  :hover {
    background: #9f6ab9;
    color: #67144e;
  }
`;
