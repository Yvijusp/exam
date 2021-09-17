import React, { useContext, useState } from 'react';
import UpdateForm from '../UpdateForm/UpdateForm';
import axios from 'axios';
import { Table } from './UserTable.styled';
import TableRows from './TableRows';
import { UsersContext } from '../../App';
import CircleLoader from 'react-spinners/CircleLoader';

// Context
export const UpdateContext = React.createContext();

const UserTable = () => {
  // Hooks
  // --state
  // ----local

  const [update, setUpdate] = useState({
    value: false,
    id: '',
  });

  // ---global
  const { users, setUsers } = useContext(UsersContext);

  // functions
  const updateHandler = (e, id) => {
    setUpdate({
      value: !update.value,
      id: id,
    });
  };

  const removeHandler = async (e, id) => {
    const response = await axios.delete(
      `http://localhost:5000/users/delete/${id}`
    );

    setUsers(response.data.userData);
  };

  return !users?.length ? (
    <CircleLoader />
  ) : (
    <>
      <Table>
        <thead>
          <tr>
            <th>Vardas</th>
            <th>El. Paštas</th>
            <th>Amžius</th>
            <th>Slaptažodis</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <TableRows
              user={user}
              key={user._id}
              updateHandler={updateHandler}
              removeHandler={removeHandler}
            />
          ))}
        </tbody>
      </Table>
      <UsersContext.Provider value={{ setUsers }}>
        <UpdateContext.Provider value={{ setUpdate }}>
          {update.value && <UpdateForm userId={update.id} />}
        </UpdateContext.Provider>
      </UsersContext.Provider>
    </>
  );
};

export default UserTable;
