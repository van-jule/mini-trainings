import React from "react";
import styles from "./PhotosApp.module.scss";

export const Collection = ({ images, name }) => {
  return (
    <div className={styles.collection}>
      <img className={styles.collection__big} src={images[0]} alt="Item" />
      <div className={styles.collection__bottom}>
        <img className={styles.collection__mini} src={images[1]} alt="Item" />
        <img className={styles.collection__mini} src={images[2]} alt="Item" />
        <img className={styles.collection__mini} src={images[3]} alt="Item" />
      </div>
      <h4>{name}</h4>
    </div>
  );
};
