// ! Шаг 1: импортируем useState из библиотеки react
import { type FormEvent, type ChangeEvent, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { LogInFormContainer, Title, InputsContainer } from "./styles";

function LoginForm() {
  // ! Шаг 2: Создаём useState для нашего инпута, чтобы его контролировать и иметь доступ к введенным пользователем данным
  // * В качестве значения по умолчанию принимаем пустую строку,
  // * в качестве типа ставим string в generic
  // * inputValue - это то что пользователь будет вводить а setInputValue - это то что пользователь будте выводить

  // ? Для чего нужны значения "inputValue" - для того чтобы создовать карточки отправлять на сервер и т.д - теперь мы реально можем получить доступ к нашим элементам - и это называется контроль элементов формы
  // const [inputValue, setInputValue] = useState<string>("");

  // ! Шаг 3: Создаём функцию которая будет выполняться на событие onChange
  // * onChange - происходит событие когда пользователь что-то водит, удаляет, нажимает пробел в input
  // const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
  // * В event.target.value - будет лежать каждый введённый символ пользователем
  // console.log(event.target.value);
  //   setInputValue(event.target.value);
  // };
  // console.log(inputValue);

  // * Создаём два useState
  // * Для email
  const [email, setEmail] = useState<string>("");
  const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // * Для password
  const [password, setPassword] = useState<string>("");
  const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  console.log(email, password);

  // * В этой функции мы можем отправить вот эти данные на сервер через функцию
  const login = (event: any) => {
    event.preventDefault();
    console.log("Email", email);
    console.log("Password", password);
  };

  return (
    <LogInFormContainer onSubmit={login}>
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="email-id"
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
          value={email}
          onChange={changeEmail}
        />
        <Input
          id="password-id"
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
          value={password}
          onChange={changePassword}
        />
        {/* // ! Шаг 4: inputValue нужно отдать в input через - value */}
        {/* {/* // * Первый атрибут которым мы управляем данными введёные пользователем это "onChange" } */}
        {/* <input
          placeholder="Enter something"
          onChange={onChangeInputValue}
          value={inputValue}
        /> */}
      </InputsContainer>
      <Button name="Login" type="submit" />
      {/* Без передачи аргументов функции login */}
      {/* <button onClick={login} type="button">
        Login
      </button> */}
      {/* C передачей аргументов функции login */}
      {/* <button onClick={() => login("Hello from argument of fuction login")} type="button">
        Login
      </button> */}
    </LogInFormContainer>
  );
}

export default LoginForm;
