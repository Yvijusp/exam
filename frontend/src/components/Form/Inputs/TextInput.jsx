const TextInput = (props) => {
  const { label, id } = props;
  return label ? (
    <>
      <label htmlFor={id}>{label}</label>
      <input type='text' id={id} {...props} />
    </>
  ) : (
    <input type='text' />
  );
};

export default TextInput;
