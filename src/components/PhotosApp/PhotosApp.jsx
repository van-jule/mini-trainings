import React, { useState, useEffect } from "react";
import styles from "./PhotosApp.module.scss";
import { Collection } from "./Collection";

const categories = [
  { name: "Всі" },
  { name: "Море" },
  { name: "Гори" },
  { name: "Архітектура" },
  { name: "Міста" },
];

function PhotosApp() {
  const [categoryId, setCategoryId] = useState(0);
  const [collections, setCollections] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);

    const category = categoryId ? `category=${categoryId}` : "";
    let limit = 3;

    fetch(
      `https://666fe3a60900b5f872489284.mockapi.io/collections?page=${page}&limit=${limit}&${category}`
    )
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
        console.log("json", json);
      })
      .catch((err) => {
        console.warn(err);
        alert("Помилка при отриманні данних");
      })
      .finally(() => setLoading(false));
  }, [categoryId, page]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Моя коллекциія фотографій</h1>
      <div className={styles.top}>
        <ul className={styles.tagsList}>
          {categories.map((obj, i) => (
            <li
              onClick={() => {
                setCategoryId(i);
                setPage(1);
              }}
              className={`${styles.tag} ${categoryId === i && styles.active}`}
              key={obj.name}
            >
              {obj.name}
            </li>
          ))}
        </ul>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={styles.searchInput}
          placeholder="Пошук по назві"
        />
      </div>
      <div className={styles.content}>
        {loading ? (
          <h2>Завантаження...</h2>
        ) : (
          collections
            .filter((obj) =>
              obj.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((obj, index) => (
              <Collection key={index} name={obj.name} images={obj.photos} />
            ))
        )}
      </div>
      <ul className={styles.pagination}>
        {[...Array(3)].map((_, i) => (
          <li
            key={i}
            onClick={() => setPage(i + 1)}
            className={`${styles.page} ${page === i + 1 && styles.active}`}
          >
            {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhotosApp;
