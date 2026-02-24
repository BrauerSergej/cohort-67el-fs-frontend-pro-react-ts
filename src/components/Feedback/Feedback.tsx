import Button from "../Button/Button";
import "./styles.css";
import type { FeedbackProps } from "components/Feedback/types";

function Feedback({like, disLike, onLike, onDisLike, resetResults}: FeedbackProps) {

  return (
    <div className="feedback-wrapper">
      <div className="feedback-control">
        <div className="buttonwithcount-container">
          <Button name="Like" onClick={onLike} />
          <p className="count">{like}</p>
        </div>
        <div className="buttonwithcount-container">
          <Button name="Dislike" onClick={onDisLike} />
          <p className="count">{disLike}</p>
        </div>
      </div>
      <Button name="Reset Results" onClick={resetResults} />
    </div>
  );
}

export default Feedback;
