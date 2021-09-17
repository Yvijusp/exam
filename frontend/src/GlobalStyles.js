import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif, monospace;
  padding: 0;
  margin: 0;
}

.mb-1 {
  margin-bottom: 0.8rem;
}

.text-center {
  text-align: center;
}
`;
