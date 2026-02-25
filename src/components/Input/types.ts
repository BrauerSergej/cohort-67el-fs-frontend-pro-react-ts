export interface InputProps {
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  label: string;
  // Шаг 1 - создаём disabled props
  disabled: boolean;
  error: undefined | string;
}
