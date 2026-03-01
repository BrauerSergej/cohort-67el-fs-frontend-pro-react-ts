import {
  InputComponent,
  InputLabel,
  InputWrapper,
  ErrorMessage,
} from "./styles";
import { type InputProps } from "./types";
function Input({
  id,
  name,
  type = "text",
  placeholder,
  label,
  // Шаг 2 - добавляем props
  disabled = false,
  error = undefined,
  value,
  onChange
}: InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputComponent
        $error={error}
        // Шаг 3 - используем props
        // слева атрибут - disabled - справа disabled - props(значение либо true либо false)
        disabled={disabled}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {/* Вставляем error в качестве props */}
      {/* Скрываем в тех инпутах контейнер в которых он не нужен */}
      {/* что делают два воклицательных знакак перед переменной - два воклицательных
      знака преобразуют в буленовский тип - если мы ставим два вокслицательных
      знака перед переменной то по сути мы переводим переменную в буленовский
      тип - если переменная при переводе равна false то покажется false, если
      переменная при переводе равна true то покажется true */}
      {/* Условный рендеринг 
      - если слева от && стоит false, то элемент справа от && на странице не показывается(т.е скрывается) 
      - если слева от && стоит true, то элемент справа от && на странице показывается */}
      {!!error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
}
export default Input;
