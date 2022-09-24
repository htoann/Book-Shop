import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/Update.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { IUpdateProps } from "../../types/types";

export default function Update(props: IUpdateProps) {
  const router = useRouter();
  const id = router.query.id;
  const [book, setBook] = useState({
    title: "",
    desc: "",
    cover: "",
    price: null,
  });

  useEffect(() => {
    if (id) {
      const fetchBook = async () => {
        try {
          const res = await axios("http://localhost:8800/update/" + id);
          setBook(res.data[0]);
        } catch (err) {
          console.log(err);
        }
      };

      fetchBook();
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBook((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    try {
      console.log(book);
      await axios.put("http://localhost:8800/update/" + id, book);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <title>{book.title}</title>
      <h1 className={styles.header}>Update Book</h1>
      {book.price && (
        <div className={styles.form_wrap}>
          <div className={styles.form}>
            <h2 className={styles.form_title}>Title</h2>
            <input
              className={styles.form_input}
              onChange={handleChange}
              type="text"
              name="title"
              defaultValue={book.title}
            />
          </div>

          <div className={styles.form}>
            <h2 className={styles.form_title}>Description</h2>
            <input
              className={styles.form_input}
              onChange={handleChange}
              type="text"
              name="desc"
              defaultValue={book.desc}
            />
          </div>

          <div className={styles.form}>
            <h2 className={styles.form_title}>Cover Picture</h2>
            <input
              className={styles.form_input}
              onChange={handleChange}
              type="text"
              name="cover"
              defaultValue={book.cover}
            />
          </div>

          <div className={styles.form}>
            <h2 className={styles.form_title}>Price</h2>
            <input
              className={styles.form_input}
              onChange={handleChange}
              type="number"
              name="price"
              defaultValue={book.price}
            />
          </div>

          <button
            onClick={handleSubmit}
            className={styles.button_update}
            type="submit"
          >
            Update Book
          </button>

          <Link href="/">
            <a className={styles.button_back_home}>Home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
