import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  margin: 0 auto;

  padding: ${({ register }) => (register ? '8px 25px' : '5px 10px')};

  border: none;
  border-radius: 5px;

  background-color: ${({ register, update, remove }) =>
    register ? '#fce600' : update ? '#3DB2FF' : remove ? '#FF2442' : '#fff'};
  color: ${({ register }) => (register ? '#000' : '#fff')};

  cursor: pointer;
`;
