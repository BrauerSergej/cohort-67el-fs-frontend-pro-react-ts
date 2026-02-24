import { ButtonComponent } from "./styles";
import "./styles.css";
import { type ButtonProps } from "./types";

// interface ButtonProps {
//   name?: string;
//   // По аналогии
//   // type: "button" | "submit" | "reset" | undefined;
//   type?: string;
//   onClick: () => void;
// }
// Если нету значение по умолчанию у какой то props то это является обязательным
// значит мы ставим вопрос в interface пример "type?: string;" потомучто это не обязательно
// типизируем здесь
function Button({
  name = "Send",
  type = "button",
  onClick = () => {},
  isRed = false,
  // Шаг 2 - в Button - принимаем props disabled и тоже даём false по умолчанию 
  disabled = false,
}: ButtonProps) {
  return (
    <ButtonComponent 
    // Шаг 3 - в ButtonComponent мы этот disabled передаём
   disabled={disabled} $isRed={isRed} type={type} onClick={onClick}>
      {name}
    </ButtonComponent>
  );
}
export default Button;
