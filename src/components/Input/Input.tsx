import "./styles.css";
import { type InputProps } from "./types";
function Input({ id, name, type = "text", placeholder, label }: InputProps) {
  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input-component"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
export default Input;