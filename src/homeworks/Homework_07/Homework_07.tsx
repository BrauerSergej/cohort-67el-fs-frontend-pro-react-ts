import { useState } from "react";
import Feedback from "components/Feedback/Feedback";
import { type FeedbackProps } from "components/Feedback/types";
import "./styles.css";

function Homework_07() {
  const [like, setLike] = useState<number>(0); // Если мы ничего не передаем в качестве аргумента функции useState(), то 1 элемент массива, который эта функция возвращает === undefined
  const [disLike, setDislike] = useState<number>(0);

  const onLike = (): void => {
    setLike((prevValue: number) => {
      return prevValue + 1;
    });
  };

  //   console.log("Component Feedback rendering!!!");

  const onDislike = (): void => {
    setDislike((prevValue: number) => prevValue + 1);
  };

  const resetResults = (): void => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div className="homework_07_page_wrapper">
      <Feedback
        like={like}
        disLike={disLike}
        onLike={onLike}
        onDisLike={onDislike}
        resetResults={resetResults}
      />
    </div>
  );
}

export default Homework_07;
