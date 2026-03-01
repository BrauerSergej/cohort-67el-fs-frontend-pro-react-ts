import Button from "../Button/Button";
// import "./styles.css";
import type { FeedbackProps } from "components/Feedback/types";
import {
  FeedBackWrapper,
  FeedBackControl,
  ButtonWithCountContainer,
  Count,
  Image,
  ImageControl,
} from "./styles";

function Feedback({
  like,
  disLike,
  onLike,
  onDisLike,
  resetResults,
}: FeedbackProps) {
  return (
    <FeedBackWrapper>
      <FeedBackControl>
        <ButtonWithCountContainer>
          <Button name="Like" onClick={onLike} />
          <Count>{like}</Count>
        </ButtonWithCountContainer>
        <ButtonWithCountContainer>
          <Button name="Dislike" onClick={onDisLike} />
          <Count>{disLike}</Count>
        </ButtonWithCountContainer>
      </FeedBackControl>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedBackWrapper>
  );
}

export default Feedback;
