import { useNavigate } from "react-router-dom";
import { PageWrapper, Title, Description, ButtonControl } from "./styles";
import Button from "components/Button/Button";

function LinkedIn() {
  const navigate = useNavigate();
  const goBack =() => {
    navigate(-1);
  }

  return (
    <PageWrapper>
      <Title>LinkedIn</Title>
      <Description>LinkedIn is a professional networking platform.</Description>
      <Description>
        People use it to find jobs and build business connections.
      </Description>
      <ButtonControl>
        <Button onClick={goBack} name="Go back"/>
      </ButtonControl>
    </PageWrapper>
  );
}

export default LinkedIn;
