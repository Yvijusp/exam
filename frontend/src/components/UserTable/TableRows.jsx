import Button from '../Buttons/Button';
import React, { useState, useEffect } from 'react';

const TableRows = ({ user, removeHandler, updateHandler }) => {
  const [hash, setHash] = useState('');

  useEffect(() => {
    setHash(user.password);
  }, [user.password]);

  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.age}</td>
      <td
        onMouseEnter={() =>
          setHash(
            Buffer.from(
              Buffer.from(user.password, 'base64').toString('ascii'),
              'base64'
            ).toString('ascii')
          )
        }
        onMouseLeave={() => {
          setHash(user.password);
        }}
      >
        {hash}
      </td>
      <td>
        <Button
          remove
          text='Ištrinti'
          onClick={(e) => removeHandler(e, user._id)}
        />
      </td>
      <td>
        <Button
          update
          text='Atnaujinti'
          onClick={(e) => updateHandler(e, user._id)}
        />
      </td>
    </tr>
  );
};

export default TableRows;
