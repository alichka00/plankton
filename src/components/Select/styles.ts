import styled from "styled-components";
import { Error } from "components/TextInput/styles";

export const Select = styled.select`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fffc;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  cursor: pointer;
  overflow: hidden;
`;

export const Option = styled.option`
  background-color: #0f0d0df7;
  color: #fffc;
  cursor: pointer;
`;

export const ErrorSelect = styled(Error)``;
