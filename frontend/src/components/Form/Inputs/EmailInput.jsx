const EmailInput = (props) => {
  const { label, id } = props;

  return label ? (
    <>
      <label htmlFor={id}>{label}</label>
      <input type='email' id={id} {...props} />
    </>
  ) : (
    <input type='email' id={id} {...props} />
  );
};

export default EmailInput;
