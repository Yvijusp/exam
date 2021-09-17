import React, { useState, useContext } from 'react';
import axios from 'axios';
import crypto from 'crypto';
// Components
import Form from '../Form/Form';
import TextInputs from '../Form/FormGroups/TextInputs';
import TextInput from '../Form/Inputs/TextInput';
import EmailInput from '../Form/Inputs/EmailInput';
import SubmitButton from '../Buttons/SubmitButton';
import PasswordInput from '../Form/Inputs/PasswordInput';
// Context
import { UsersContext } from '../../App';
import { UpdateContext } from '../UserTable/UserTable';

const md5 = crypto.createHash('md5');

const UpdateForm = ({ userId }) => {
  // Hooks
  // --state
  // --- local
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  // --- global
  const { setUsers } = useContext(UsersContext);
  const { setUpdate } = useContext(UpdateContext);

  // --reference

  // --side effects

  // --functions
  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !email || !age || !password) {
      setMessage('Prašome užpildyti formą');

      setPassword('');
      setConfirmPassword('');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Slaptažodžiai nesutampa');

      setPassword('');
      setConfirmPassword('');
      return;
    }

    try {
      const user = {
        name: name,
        email: email,
        age: +age,
        password: md5.update(password).digest('hex'),
      };

      const response = await axios.put(
        `http://localhost:5000/users/update/${userId}`,
        {
          ...user,
        }
      );

      setMessage(response.data.message);
      setUsers(response.data.userData);
      setUpdate({ value: false, id: '' });
    } catch (error) {
      setMessage(error.response?.data?.message);

      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <h2 className='mb-1'>Atnaujinimo forma</h2>
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

export default UpdateForm;
