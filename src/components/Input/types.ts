// Импортируем тип ChangeEvent
import { type ChangeEvent } from "react";

export interface InputProps {
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  label: string;
  // Шаг 1 - создаём disabled props
  disabled?: boolean;
  error?: undefined | string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
