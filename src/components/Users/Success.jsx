import React from "react";
import styles from "./Users.module.scss";

export const Success = ({ count }) => {
  return (
    <div class={styles.successBlock}>
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успішно!</h3>
      <p>Всім {count} користувачам було відправлено запрошення.</p>
      <button
        onClick={() => window.location.reload()}
        className={styles.sendInviteBtn}
      >
        Назад
      </button>
    </div>
  );
};
