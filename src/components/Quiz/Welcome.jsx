import "./Quiz.scss";
import { questions } from "./questions";

export function Welcome ({step, setStep, onClickStart}) {
    console.log('step in Welcome', step)

    return (
      <div className="result">
        {/* <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" /> */}
        <h2>Quiz besteht auf {questions.length} Fragen</h2>
        <button onClick={onClickStart}>Start Quiz</button>
      </div>
    );
  }