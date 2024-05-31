import { questions } from "./questions";
import styles from "./Quiz.module.scss";
export function Game({ question, step, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className={styles.progress}>
        <div
          style={{
            width: `${percentage}%`,
          }}
          className={styles.progress__inner}
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((variant, index) => (
          <li
            key={index}
            onClick={() => {
              onClickVariant(index);
            }}
          >
            {variant}
          </li>
        ))}
      </ul>
    </>
  );
}
