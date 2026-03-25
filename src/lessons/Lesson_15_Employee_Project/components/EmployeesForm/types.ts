// ! types.ts — описывает, какие данные лежат в Context

import { type Dispatch, type SetStateAction } from "react";

export enum CONTACT_EMPLOYEES_FORM {
  NAME = "name",
  SURNAME = "surname",
  AGE = "age",
  JOB_POSITION = "jobposition",
}

// Интерфейс сотрудника
export interface IEmployeeData {
  id: string;
  name: string;
  surname: string;
  age: string;
  jobposition: string;
}

// Интерфейс контекста
export interface UserDataContext {
  // userData будет либо объект который сверху - либо undefined
  userData: IEmployeeData[]; 
  setUserData: Dispatch<SetStateAction<IEmployeeData[]>>;
}
