import Button from '../Buttons/Button';

const TableRows = ({ user, removeHandler, updateHandler }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.age}</td>
      <td>{user.password}</td>
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
