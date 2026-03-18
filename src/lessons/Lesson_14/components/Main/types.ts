// import для кнопки
import { type Dispatch, type SetStateAction } from "react";

export interface UserData {
  fullName: string;
  age: number;
  jobPosition: string;
}

export interface UserDataContext {
  userData: UserData | undefined; // userData будет либо объект который сверху - либо undefined
  // Для кнопки - передаём функцию в Main
  setUserData: Dispatch<SetStateAction<UserData | undefined>>;
}