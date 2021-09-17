import styled from 'styled-components';

export const StyledForm = styled.form`
  max-width: 800px;
  padding: 20px;

  background-color: #f4f4f4;
  box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.8);
  border-radius: 15px;

  .form-group {
    input {
      display: block;
      border: none;

      padding: 5px 10px;
      box-shadow: 0 0 4px -1px rgba(20, 20, 20, 0.6);
    }

    margin-bottom: 10px;
  }
`;
