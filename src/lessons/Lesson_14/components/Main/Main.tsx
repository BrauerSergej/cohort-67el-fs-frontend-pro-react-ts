// Шаг 1: Импортируем функцию createContext из библиотеки react
import { useState, createContext } from "react";
import Button from "components/Button/Button";

import Section from "lessons/Lesson_14/components/Section/Section";

import { MainTitle, MainWrapper } from "./styles";
// Ипортируем UserDataContext из types.ts типизируем его в MainContext - через generic
import { type UserData, type UserDataContext } from "./types";

// Шаг 2: Создаём контекст - глобальное хранилище данных, которое мы хотим передать вниз по дереву, т.е все что находится в return компонента main
// Функция crateContext - возвращает нам компонент в MainContext
export const MainContext = createContext<UserDataContext>({
  // Передаём объект значения по умолчанию - один из вариантов - userData - по умолчанию равен undefined - поэтому такой способ хранения данных не самый удобный
  // fullName: "",
  // age: "",
  // jobPosition: "",
  // userData - по умолчанию равен undefined
  userData: undefined,
  // Функция по умолчанию
  setUserData: () => {},
});

function Main() {
  const [userData, setUserData] = useState<undefined | UserData>(undefined);

  const getUserData = () => {
    // Предположим, что вы получили данные пользователя в константе userResponse, используя GET запрос по сети
    const userResponse: UserData = {
      fullName: "John Johnson",
      age: 30,
      jobPosition: "QA",
    };

    setUserData(userResponse);
  };

  console.log(userData);
  return (
    // Шаг 3: Обернуть все что у нас в return, с помощью MainContext.Provider и передать в пропсу value, то что мы хотим передать компоненту Content
    // Используем MainContext как компонент
    <MainContext.Provider
    // Что такое value - value это то что мы храним у нас в Context - в Context мы храним по умолчанию объект в котором есть ключик userData
    // userData - слева это ключ - а userData справа это object или undefined
    // Всё что у нас находится в value затем мы можем все передавать в низ по дереву в любое место но только в низ - всё что у нас снаруже MainContext нам не доступно
                            // setUserData ключ : setUserData из state
      value={{ userData: userData, setUserData: setUserData }}
    >
      <MainWrapper>
        <MainTitle>Main Component</MainTitle>
        <Button name="Get User Data" onClick={getUserData} />
        {/* Props Drilling */}
        {/* Компонент Main из своего state передаёт в Section userData */}
        {/* В компонент Section передаём userData */}
        {/* <Section userData={userData}/> */}
        <Section/>
      </MainWrapper>
    </MainContext.Provider>
  );
}

export default Main;
