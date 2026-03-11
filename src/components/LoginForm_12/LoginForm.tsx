import { type ChangeEvent, useState } from "react";
// Шаг 1: Импортируем useFormik из библиотеки formik
import { useFormik } from "formik";
import * as Yup from "yup";
import { LOGIN_FORM_VALUES } from "./types";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { LogInFormContainer, Title, InputsContainer } from "./styles";

// Валидация с помощью yup
// Yup - то что импортировали
// метод object создает валидационный объект
// в shape - прописываем все наши правила - принимает в качестве аргумента объект
const validationSchema = Yup.object().shape({
  // string - это метод | тетод - required("") принимает в качестве аргумента строку которая должна показываться когда у нас происходит валидационная ошибка
  [LOGIN_FORM_VALUES.EMAIL]: Yup.string()
    // Прокидываем сообщение если у нас поле пустое
    .required("Email field is required")
    // Прокидываем сообщение если показывается не правильный емаил формат
    .email("This field should be in email format"),
  [LOGIN_FORM_VALUES.PASSWORD]: Yup.string()
    .required("Password field is required")
    .min(5, "Password field should contain min 5 characters")
    .max(20, "Password field should contain max 20 characters"),
});

function LoginForm() {
  // const [email, setEmail] = useState<string>("");
  // const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // };

  // // * Для password
  // const [password, setPassword] = useState<string>("");
  // const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // };
  // console.log(email, password);

  // // * В этой функции мы можем отправить вот эти данные на сервер через функцию
  // const login = (event: any) => {
  //   event.preventDefault();
  //   console.log("Email", email);
  //   console.log("Password", password);
  // };

  //////////////////////////////////////////////////////////////////////////////////////////
  // Шаг 2: Создаём объект formik
  // useFormik - функция хук, которая возвращает объект, в котором прописаны необходимые данные о форме и вспомогательные функции для работы с формой
  // useFormik принимает в качестве аргумента объект, этот аргумент является обязательным
  // объект, который мы передаем useFormik нужен для настройки объекта, который возвращает хук useFormik
  // объект, который мы передаём useFormik имеет 2 обязательных ключа:
  // 1. initialsValues - значение элементов формы по умолчанию, принимает в качестве значения объект:
  // - в качестве ключа у нас выступает значение атрубута name в элементах формы
  // - в качестве значения ключа, мы прописываем значения по умолчанию, которые должны быть у элементов формы
  // 2. onSubmit - эта функция, которая вызвается на событие submit(при клике на кнопку с типом submit)
  const formik = useFormik({
    // 1 ключ - это ключ требует в качестве значения объект
    // initialValues: {
    // Берёт значения по name из Input
    //   email: "",
    //   password: "",
    // },
    // 1 ключ - это ключ требует в качестве значения объект
    initialValues: {
      // Берёт значения по name из Input
      [LOGIN_FORM_VALUES.EMAIL]: "",
      [LOGIN_FORM_VALUES.PASSWORD]: "",
    },
    // Передаём в formik validationSchema
    validationSchema: validationSchema,
    // Отключаем показывать всегда это сообщение из .email("This field should be in email format"),
    validateOnChange: false,
    // 2 ключ - который требует функцию обратного вызова
    // Эта функция будет вызваться когда мы будем нажимать на кнопку Login
    onSubmit: (values, helpers) => {
      console.log("Formik submit event works!!!");
      console.log(values);
      console.log(helpers);
      // Вспомогательные функции, которые мы можем использовать во время события submit
      // Наример helpers.resetForm() - очищает значения в форме(т.у делает значение формы по умолчанию)
      helpers.resetForm();
    },
  });

  console.log(formik);

  return (
    // formik.handleSubmit - мы прописываем для того, чтобы когда мы нажали на кнопку с type="submit"
    // у нас вызвалась функция, которую мы прописали в onSubmit
    <LogInFormContainer onSubmit={formik.handleSubmit}>
      
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="email-id"
          name={LOGIN_FORM_VALUES.EMAIL}
          // type="email" - лучше убрать стандартное браузерскоя валидация
          placeholder="Enter your email"
          label="Email"
          // formik.values.email - мы прописываем, чтобы элемент формы получил значение который пользователь вводит с клавиатуры
          value={formik.values[LOGIN_FORM_VALUES.EMAIL]}
          // value={formik.values.email}
          // formik.handleChange - помогает котролировать ввод данных пользователем с клавиатуры
          // и когда пользователь что-то вводит, то formik.handleChange записывает данные в formik.values.email
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_VALUES.EMAIL]}
        />
        <Input
          id="password-id"
          name={LOGIN_FORM_VALUES.PASSWORD}
          type="password"
          placeholder="Enter your password"
          label="Password"
          value={formik.values[LOGIN_FORM_VALUES.PASSWORD]}
          // value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_VALUES.PASSWORD]}
        />
      </InputsContainer>
      <Button name="Login" type="submit" />
    </LogInFormContainer>
  );
}

export default LoginForm;
