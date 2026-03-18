// Шаг 4: Импортируем хук useContext из библиотеки react
import { useContext } from "react";
import { ContentInfo, ContentTitle, ContentWrapper } from "./styles";
import Button from "components/Button/Button";

// Шаг 5: Импортируем созданный нами в компоненте Main котекст MainContext
import { MainContext } from "../Main/Main";

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
