import styled from "styled-components";

export const Table = styled.table`
  width: 100%;

  thead th {
    max-width: 170px;
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
