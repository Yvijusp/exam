import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from './components/Buttons/Button';
import Container from './components/Container/Container';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import UserTable from './components/UserTable/UserTable';
import Wrapper from './components/Wrapper/Wrapper';
import { GlobalStyle } from './GlobalStyles';

// Global context

export const UsersContext = React.createContext();

function App() {
  const [register, setRegister] = useState(false);
  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (isLoading) {
      axios.get('http://localhost:5000/users').then((response) => {
        console.log(response.data);
        setUsers(response.data);
        setIsLoading(false);
      });
    }
  }, []);

  const handleClick = () => {
    setRegister(!register);
  };

  return (
    <>
      <GlobalStyle />
      <UsersContext.Provider
        value={{ users, isLoading, setIsLoading, setUsers }}
      >
        <Wrapper>
          <h1>Administracijos skydas</h1>
          <Button register text='Registruoti' onClick={handleClick} />
          <Container>{register && <RegistrationForm />}</Container>
          <Container>
            <UserTable />
          </Container>
        </Wrapper>
      </UsersContext.Provider>
    </>
  );
}

export default App;
