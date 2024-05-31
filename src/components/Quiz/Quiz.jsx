import React, { useState } from "react";
import { Game } from "./Game";
import { Result } from "./Result";
import { questions } from "./questions";
import { Welcome } from "./Welcome";
import styles from "./Quiz.module.scss";

export const Quiz = () => {
  const [step, setStep] = useState(undefined);
  const [correct, setCorrect] = useState(0);

  const question = questions[step];
  console.log(question);

  const onClickVariant = (index) => {
    console.log("step", step, index);
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
    console.log("correct", correct);
  };

  const onClickStart = () => {
    setStep(0);
    console.log("onClickStart step", step);
  };

  return (
    <div className={styles.container}>
      {step === undefined ? (
        <Welcome onClickStart={onClickStart} />
      ) : step !== questions.length ? (
        <Game question={question} step={step} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} step={step} />
      )}
    </div>
  );
};
