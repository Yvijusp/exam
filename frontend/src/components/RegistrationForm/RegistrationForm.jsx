import React, { useState } from 'react';
import axios from 'axios';
// Components
import Form from '../Form/Form';
import TextInputs from '../Form/FormGroups/TextInputs';
import TextInput from '../Form/Inputs/TextInput';
import EmailInput from '../Form/Inputs/EmailInput';
import SubmitButton from '../Buttons/SubmitButton';
import PasswordInput from '../Form/Inputs/PasswordInput';

const RegistrationForm = () => {
  // Hooks
  // --state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  // --reference

  // --side effects

  // --functions
  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !email || !age || !password) {
      setMessage('Prašome užpildyti formą');

      setPassword('');
      setConfirmPassword('');
    }

    if (password !== confirmPassword) {
      setMessage('Slaptažodžiai nesutampa');

      setPassword('');
      setConfirmPassword('');
    }

    const user = {
      name: name,
      email: email,
      age: +age,
      password: password,
    };

    await axios.post('http://localhost:5000/users/register', {
      ...user,
    });

    setMessage('Sekmingai užregistruotas');
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <TextInputs>
          <TextInput
            id='name'
            label='Vardas: '
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <EmailInput
            id='email'
            label='El. Paštas: '
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextInput
            id='age'
            label='Amžius: '
            onChange={(e) => {
              if (isNaN(e.target.value)) return;
              setAge(+e.target.value);
            }}
            value={age}
          />
          <PasswordInput
            id='password'
            label='Slaptažodis'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <PasswordInput
            id='confirmPassword'
            label='Pativirtinti slaptažodi'
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </TextInputs>
        <SubmitButton />
        {message && <p>{message}</p>}
      </Form>
    </>
  );
};

export default RegistrationForm;
