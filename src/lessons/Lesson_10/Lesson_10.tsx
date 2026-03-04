import { useEffect, useState, type ChangeEvent } from "react";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { v4 } from "uuid";
import { PageWrapper, ContainerFacts, Card, Text } from "./styles";
// Импортируем объект axios
import axios from "axios";

function Lesson_10() {
  const [search, setSearch] = useState<string>("");
  // Будем хранить массив стрингов и не undefined а пустой массив
  const [catFact, setCatFact] = useState<string[]>([]);

  // const [catFact, setCatFact] = useState<undefined | string>(undefined);
  // Для обработки ошибки
  const [error, setError] = useState<undefined | string>(undefined);
  // Дезейбл кнопки - изначально будет false
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  // Константа на которую мы будем отправлять запрос
  const CAT_FACT_URL: string = "https://catfact.ninja/fact";

  // У нас есть функция которая должна вызваться
  // Promise - показывается если не стоит async, нам нужен promise result и для этого ставим async
  // Говорим о том что наша функция асинхронная пишем async
  const getCatFact = async () => {
    // Отпраляем запрос - в response будет содержаться ответ
    // Что делает await - дожидается выполнения promise - то есть покамись он не станет либо fullfield либо rejected и затем возвращает нам promise и если мы перезагрузим страницу мы получаем не Promise а promise result - это объект в котором есть куча разной информации - нас интересует data в data лежит наш объект
    // * Для коментария - const response = await axios.get(CAT_FACT_URL);
    // Выводим в консоль response - не видем ответ потомучто функцию ни что не вызывает
    // console.log(response);
    // Для чего нужна нам эта конструкция try catch finally
    try {
      // В try - обрабатываем успешное окончание ответа - выполняем код по успешно пришедшим данным на наш запрос, т.е когда Promise Result === fullfield
      // В метод try - отправляем наш код

      setIsLoading(true); // Показываем что у нас запрос начался - кнопка дизейблится
      const response = await axios.get(CAT_FACT_URL);
      console.log(response.data.fact);
      // setCatFact(response.data.fact);
      // В setCatFact нужно класть функцию callback
      setCatFact((prevValue: string[]) => {
        return [...prevValue, response.data.fact];
      });
    } catch (error: any) {
      // Выполняем код, по пришедшей ошибки, т.е когда Promise Result === rejected
      // Если пришла ошибка то мы её кладём
      setError("Some Network error");
    } finally {
      // Выполняется всегда, не важно status === fullfield или rejected
      setIsLoading(false); // В случае в конце чтобы нам не пришло ошибка либо нормальные данные - мы обнуляем
    }
  };

  const catFacts = catFact.map((fact: string) => {
    return <Text key={v4()}>{fact}</Text>;
  });

  // Используем useEffect для вызова функции getCatFact
  useEffect(() => {
    getCatFact();
  }, []);

  // ! Mounting
  // 1 Аргумент - функция, которая должна выполняться в определлённый жизненый этап компонента
  // 2 Аргумент - массив зависимостей, с помощью него мы можем определять жизненый этап компонента
  // Если мы прокидываем пустой массив во 2 аргументе, то мы определляем 1 этап жизненого цикла компонента - MOUNTING
  // useEffect(() => {
  // Например в MOUNTING можно отправить запрос на сервер при загрузке страницы(т.е первичный рендеринг)
  //console.log("MOUNTING");
  //}, []);*/

  // ! UPDATING
  // В массив зависемостей мы добовляем search - какждый раз когда функция будет меняться эта функция будет вызываться - это и есть UPDATING
  // useEffect(() => { if
  // (search !== "") {
  //     console.log("UPDATING!!!");
  //   }
  // }, [search]);

  // ! UNMOUNTING
  // useEffect(() => {
  // Что важно, то что мы должны из функции callback вернуть другую функцию
  //   return () => {
  //     Внутри второй возвращаемой функции мы пишем код
  //     Эта функция выполнится в момент размонтирования
  //     console.log("UNMOUNTING");
  //   };
  //   Массив пустой или не пустой нам абсолутно не важно
  // }, []);

  return (
    <PageWrapper>
      <Card>
        {/* <Input
          id="search_input"
          name="search"
          placeholder="Enter your request"
          label="Search"
          value={search}
          onChange={onSearch}
        /> */}
        <ContainerFacts>
          {/* Условный рендеринг - если левая часть у нас false - тогда правая часть не показывается - если левая часть true то правая показывается */}
          {/* {!!catFact && <Text>{catFact}</Text>} */}
          {!!catFact && catFacts}
          {!!error && <Text>{error}</Text>}
        </ContainerFacts>
        {/* Отправить сделать новый запрос - через функцию(название функции), через кнопку - Button даём onClick и даём название функции getCatFact через props */}
        {/* isLoading передаём в Button */}
        <Button disabled={isLoading} name="Get cat fact" onClick={getCatFact} />
      </Card>
    </PageWrapper>
  );
}
export default Lesson_10;
