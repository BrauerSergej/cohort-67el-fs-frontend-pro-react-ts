import Button from "components/Button/Button";
import Input from "components/Input/Input";
import styled from "@emotion/styled";
import {
  Homework_08_Page_Wrapper,
  FormElementContainer,
  Paragraph,
} from "./styles";

function Homework_08() {
  return (
    <Homework_08_Page_Wrapper>
      <Paragraph>Homework 08</Paragraph>
      <Input
        id="simple_input"
        label="Simple Input"
        placeholder="Enter message"
        name="simple"
        disabled={false}
        error={undefined}
      />
      <Input
        id="error_input"
        name="error"
        label="Error Input"
        placeholder="Enter message"
        disabled={false}
        error="This field is required"
      />
      <Input
        id="disabled_input"
        label="Disabled Input"
        placeholder="Enter message"
        name="disabled"
        disabled={true}
        error={undefined}
      />
      <FormElementContainer>
        <Button name="Simple button" />
      </FormElementContainer>
      <FormElementContainer>
        <Button isRed name="Delete button" type="submit" />
      </FormElementContainer>
      <FormElementContainer>
        <Button disabled name="Disabled button" type="submit" />
      </FormElementContainer>
    </Homework_08_Page_Wrapper>
  );
}
export default Homework_08;
