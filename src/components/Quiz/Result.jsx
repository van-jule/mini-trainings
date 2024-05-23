import "./Quiz.scss";
import { questions } from "./questions";

export function Result({correct, step}) {
console.log('step in Result', step)

    return (
      <div className="result">
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
        <h2>Sie haben {correct} von {questions.length} Fragen richtig beantwortet</h2>
        <a href="/">
        <button>Versuchen Sie noch einmal</button>
        </a>
      </div>
    );
  }
  