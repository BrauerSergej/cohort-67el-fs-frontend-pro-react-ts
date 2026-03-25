// Этот компонент:
// Берёт данные сотрудника из Context
// и показывает их в карточке
// этот компонент НЕ создаёт данные
// он только читает их из Context
// useContext — чтобы читать данные
import { useContext } from "react";
import { EmployeeContext } from "../../EmployeeContext";
import {
  OutputCard,
  CardInfo,
  UserInfo,
  InfoContainer,
  Card,
  ButtonControl,
} from "./styles";
import Button from "components/Button/Button";
import type { IEmployeeData } from "../EmployeesForm/types";

function Employees() {
  // 2. Подключаемся к нашему хранилищу - вызов useContext
  //   React идёт вверх по дереву компонентов
  // ↓
  // ищет <EmployeeContext.Provider>
  // ↓
  // берёт value из него
  // ↓
  // кладёт в employeeContext
  const employeeContext = useContext(EmployeeContext);

  if (!employeeContext) return null;

  const { userData, setUserData } = employeeContext;

  const deleteCard = (id: string) => {
    const updatedData = userData?.filter(
      (employee: IEmployeeData) => employee.id !== id,
    );
    if (setUserData && updatedData) {
      setUserData(updatedData);
    }
  };

  // Достаём данные - берём данные из context
  // если вдруг context = undefined → не упадёт
  // const userData = employeeContext?.userData;
  // const userDataCard = userData;
  return (
    <Card>
      {userData.map((employee: IEmployeeData) => (
        <OutputCard key={employee.id}>
          <InfoContainer>
            <CardInfo>Name</CardInfo>
            <UserInfo>{employee.name}</UserInfo>
          </InfoContainer>
          <InfoContainer>
            <CardInfo>Surname</CardInfo>
            <UserInfo>{employee.surname}</UserInfo>
          </InfoContainer>
          <InfoContainer>
            <CardInfo>Age</CardInfo>
            <UserInfo>{employee.age}</UserInfo>
          </InfoContainer>
          <InfoContainer>
            <CardInfo>Job position</CardInfo>
            <UserInfo>{employee.jobposition}</UserInfo>
          </InfoContainer>
          <ButtonControl>
            <Button
              isRed
              name="Delete card"
              onClick={() => deleteCard(employee.id)}
            />
          </ButtonControl>
        </OutputCard>
      ))}
    </Card>
  );
}
export default Employees;
