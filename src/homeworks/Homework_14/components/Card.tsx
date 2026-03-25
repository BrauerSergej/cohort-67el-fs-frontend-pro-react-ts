import Message from "./Message";
import { SectionWrapper, SectionTitle } from "lessons/Lesson_14/components/Section/styles";

function Card() {
  return (
    <SectionWrapper>
      <SectionTitle>Автор: Сергей Брауэр</SectionTitle>
      <Message />
    </SectionWrapper>
  );
}

export default Card;
