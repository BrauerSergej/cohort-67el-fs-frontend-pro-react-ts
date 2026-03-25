// Шаг 4: Импортируем хук useContext из библиотеки react
import { useContext } from "react";
import { ContentInfo, ContentTitle, ContentWrapper } from "./styles";
import Button from "components/Button/Button";

// Шаг 5: Импортируем созданный нами в компоненте Main котекст MainContext
import { MainContext } from "../Main/Main";

// ! Props Drilling
// function Content({ userData }: any) {
//   return (
//     <ContentWrapper>
//       <Content>Content Component</Content>
{
  /* Если userData === undefined, то выражение userData.fullname выдаст ошибку, т.к в таком случае у нас получается следущая операция а именно undefined.fullName. Поэтому нам нужно сделать проверку, если userData === undefined, то мы не показываем(скрываем) ContentInfo, иначе если userData равен ожидаемому объекту, то мы ContentInfo показываем */
}
{
  /* Используем условный рендеринг - обварачиваем в фигурные скобки - даём
      ContentInfo родителя - родителя дадим в виде фрагмента <></>
      Если левая часть равна false - правую часть мы скрываем 
      Если левая часть равна true - то правая часть показывается */
}
{
  /* {!!userData && (
        <>
          <ContentInfo>Fullname: {userData.fullname}</ContentInfo>
          <ContentInfo>Age: {userData.age}</ContentInfo>
          <ContentInfo>Job: {userData.jobPosition}</ContentInfo>
        </>
      )}
    </ContentWrapper>
  );
} */
}

function Content() {
  // Шаг 6: Получить доступ к данным, хранящимся в контексте
  // В userData - передаём MainContext
  // Если это наш объект - то мы можем его деструктуризровать дабавив фигурные скобки
  const { userData, setUserData } = useContext(MainContext);
  console.log(userData);

  // Используем setUserData
  const deleteUser = () => {
    setUserData(undefined);
  };

  return (
    <ContentWrapper>
      <ContentTitle>Content Component</ContentTitle>
      {!!userData && (
        <>
          <ContentInfo>Fullname: {userData.fullName}</ContentInfo>
          <ContentInfo>Age: {userData.age}</ContentInfo>
          <ContentInfo>Job: {userData.jobPosition}</ContentInfo>
          <Button isRed name="Delete user" onClick={deleteUser} />
        </>
      )}
    </ContentWrapper>
  );
}

export default Content;
