import Button from "../Button/Button";
import "./styles.css";
import type { CounterProps } from "./types";

function Counter({count, onMinus, onPlus }: CounterProps) {

  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}

export default Counter;

