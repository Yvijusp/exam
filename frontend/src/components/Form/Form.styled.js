import styled from 'styled-components';

export const StyledForm = styled.form`
  max-width: 800px;
  width: 450px;
  height: 450px;
  padding: 20px;

  background-color: #f4f4f4;
  box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.8);
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .form-group {
    input {
      display: block;
      border: none;

      padding: 5px 10px;
      box-shadow: 0 0 4px -1px rgba(20, 20, 20, 0.6);

      width: 400px;
    }

    margin-bottom: 10px;

    input[type='submit'] {
      margin-right: auto;
    }
  }

  p {
    margin-top: 10px;

    background-color: #f4f4f4;
    box-shadow: 2px 0 5px -1px rgba(0, 0, 0, 0.4);

    border-radius: 5px;
    padding: 0 5px;
    border-left: 5px solid #fce600;
  }
`;
