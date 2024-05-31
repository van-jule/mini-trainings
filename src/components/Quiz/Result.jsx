import { questions } from "./questions";
import styles from "./Quiz.module.scss";

export function Result({ correct, step }) {
  console.log("step in Result", step);

  return (
    <div className={styles.result}>
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Sie haben {correct} von {questions.length} Fragen richtig beantwortet
      </h2>
      <a href="/">
        <button>Versuchen Sie noch einmal</button>
      </a>
    </div>
  );
}
