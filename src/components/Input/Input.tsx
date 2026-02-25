import { InputComponent, InputLabel, InputWrapper } from "./styles";
import { type InputProps } from "./types";
function Input({
  id,
  name,
  type = "text",
  placeholder,
  label,
  disabled = false,
  error,
}: InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputComponent
        $error={error}
        disabled={disabled}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
}
export default Input;
