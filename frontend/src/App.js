import Container from './components/Container/Container';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Wrapper from './components/Wrapper/Wrapper';
import { GlobalStyle } from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Admin Panel</h1>
        <Container>
          <RegistrationForm />
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
