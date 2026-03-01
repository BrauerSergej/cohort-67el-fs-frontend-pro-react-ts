import Button from "components/Button/Button";
import { PageWrapper, Paragraph, ButtonControl } from "./styles";

function Lesson_08() {
  return (
    <PageWrapper>
      <Paragraph>Lesson_08</Paragraph>
      <ButtonControl>
        <Button name="Simple Button" />
      </ButtonControl>
      <ButtonControl>
        {/* Становится красным по умолчанию так как даём true */}
        {/* <Button isRed={true} name="Delete Button" /> */}
        {/* isRed - уже стоит по умолчанию true */}
        <Button isRed name="Delete Button" />
      </ButtonControl>
      <ButtonControl>
        <Button disabled name="Disabled Button" />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Lesson_08;
