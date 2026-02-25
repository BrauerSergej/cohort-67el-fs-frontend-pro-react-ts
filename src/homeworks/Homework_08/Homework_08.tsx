import Button from "components/Button/Button";
import Input from "components/Input/Input";
import styled from "@emotion/styled";
import { Homework_08_Page_Wrapper } from "./styles";

function Homework_08() {
  return (
    <Homework_08_Page_Wrapper>
      <Input
        id="standard"
        label="Standard Input"
        placeholder="I am working"
        name="standard"
        disabled={false}
        error={undefined}
      />
      <Input
        id="disabled-input"
        label="Disabled Input"
        placeholder="You cannot type here"
        name="disabled"
        disabled={true}
        error={undefined}
      />
      <Input
        id="error-input"
        name="error"
        label="Input with Error"
        placeholder="Check my border"
        disabled={false}
        error="Some error"
      />
      <Button name="Default Button" />
      <Button disabled name="Login" type="submit" />
      <Button isRed name="Login" type="submit" />
    </Homework_08_Page_Wrapper>
  );
}
export default Homework_08;
