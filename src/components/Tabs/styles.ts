import styled from "styled-components";

export const Table = styled.table`
  width: 90%;
  position: absolute;
  top: 80px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0px auto;
  background-color: #2b2b2b;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  font-size: 20px;

  thead th {
    min-width: 170px;
  }

  tbody td {
    min-width: 150px;
    text-align: center;
  }

  th,
  td {
    padding: 10px;
  }

  th {
    color: #6e3fa9;
  }
`;
