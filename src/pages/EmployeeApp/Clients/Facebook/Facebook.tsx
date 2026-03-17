import { PageWrapper, Title, Description, ButtonControl } from "./styles";
import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";

function FaceBook() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <Title>Facebook</Title>
      <Description>Facebook is a social media company.</Description>
      <Description>
        It helps people communicate and share content online.
      </Description>
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
    </PageWrapper>
  );
}

export default FaceBook;
