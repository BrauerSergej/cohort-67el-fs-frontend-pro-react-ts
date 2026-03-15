import { PageWrapper, Title, Description, ButtonControl } from "./styles";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

function Instagram() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <Title>Instagram</Title>
      <Description>
        Instagram is a platform for sharing photos and videos.
      </Description>
      <Description>
        It is popular among bloggers, brands, and creators.
      </Description>
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Instagram;
