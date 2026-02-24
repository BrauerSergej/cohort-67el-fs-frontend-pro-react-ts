export interface ButtonProps {
  name?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  isRed?: boolean;
    // Шаг 1 - создаём disabled props
  disabled?: boolean;

}
