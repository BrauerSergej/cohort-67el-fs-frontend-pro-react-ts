// ! EmployeeContext.tsx делает 3 вещи:
// * создаёт Context
// * хранит данные через useState
// * раздаёт эти данные через Provider

import { createContext, useState, type ReactNode } from "react";
import {
  type IEmployeeData,
  type UserDataContext,
} from "./components/EmployeesForm/types";

// Создаётся Context с именем EmployeeContext
// Внутри него будут данные типа UserDataContext - импортирован с interface UserDataContext
// По умолчанию там undefined, если Provider не подключён
export const EmployeeContext = createContext<UserDataContext | undefined>(
  undefined,
);
export const BlogManager = ({ children }: { children: ReactNode }) => {
  // Это уже обычный React state, где реально хранятся данные сотрудника.
  const [userData, setUserData] = useState<IEmployeeData[]>([]);
  


  return (
// Вот это и есть передача данных вниз по дереву компонентов.
// Provider отдаёт всем вложенным компонентам:
// userData
// setUserData
    <EmployeeContext.Provider value={{ userData, setUserData }}>
      {children}
    </EmployeeContext.Provider>
  );
};
