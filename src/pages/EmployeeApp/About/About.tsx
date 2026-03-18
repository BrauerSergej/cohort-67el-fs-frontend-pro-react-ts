import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { PageWrapper, ButtonControl } from "./styles";
import { ROUTES } from "components/constants/routes";

function About() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(ROUTES.HOME);
  };

  const goBack = () => {
    // Можно передавать числа
    navigate(-1);
  };

  useEffect(() => {
    // Unmounting
    // Каждый раз когда у нас компонент изчезает из DOM дерева - у нас происходит жизненная стадия UNMOUNTING 
    return () => {
      console.log("Page About UNMOUNTING");
    };
  }, []);
  return (
    <PageWrapper>
      Information about company
      <ButtonControl>
        {/* В Go Back мы передаёма функцию goBack  */}
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
      <ButtonControl>
        {/* А в Go to home page мы передаёма функцию goToHomePage */}
        <Button onClick={goToHomePage} name="Go to Home page" />
      </ButtonControl>
    </PageWrapper>
  );
}

export default About;
