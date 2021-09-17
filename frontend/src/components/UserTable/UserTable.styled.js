import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;

  th,
  td {
    padding: 5px 15px;
    text-align: center;
  }

  tbody td {
    border: 1px solid black;
  }

  thead tr {
    background-color: #fce600;
    border: 1px solid black;
  }

  th {
    border-left: 1px solid black;
  }

  th:last-child {
    border: none;
  }
`;
