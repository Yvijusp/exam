import { StyledButton } from './Button.styled';

const Button = (props) => {
  const { text, remove, update, register } = props;
  return (
    <StyledButton
      delete={remove}
      update={update}
      register={register}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
