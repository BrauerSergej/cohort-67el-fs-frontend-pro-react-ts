import Content from "lessons/Lesson_14/components/Content/Content";

import { SectionTitle, SectionWrapper } from "./styles";

// ! Props Drilling
//   Section в props ловит её
// * function Section ({userData}: any)

function Section() {
  return (
    <SectionWrapper>
      <SectionTitle>Section Component</SectionTitle>
      {/* Props Drilling */}
      {/* ! Далее когда он её ловит мы можем передать её в <Content/> */}
      {/* <Content userData={userData}/> */}
      <Content />
    </SectionWrapper>
  );
}

export default Section;
