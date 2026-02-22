import "./styles.css";
import  {type ButtonProps } from "./types";

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
function Button({name = "Send", type = "button", onClick = () => {} }: ButtonProps) {
  return (
    <button className="button_component" type={type} onClick={onClick}>
      {name}
    </button>
  );
}
export default Button;
