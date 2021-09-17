const PasswordInput = (props) => {
  const { label, id } = props;
  return label ? (
    <>
      <label htmlFor={id}>{label}</label>
      <input type='password' id={id} {...props} />
    </>
  ) : (
    <input type='password' />
  );
};

export default PasswordInput;
