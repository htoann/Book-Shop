import React, { useEffect } from "react";
import axios from "axios";
import styles from "../styles/Add.module.scss";
import Link from "next/link";

export interface IAddProps {}

export default function Add(props: IAddProps) {
  // const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   const fetchAllBooks = async () => {
  //     try {
  //       await axios.post("http://localhost:8800/add");
  //       // setBooks(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchAllBooks();
  // }, []);

  return (
    <div>
      <h1 className={styles.header}>Add New Book</h1>
      <div className={styles.form_wrap}>
        <div className={styles.form}>
          <h2 className={styles.form_title}>Title</h2>
          <input className={styles.form_input} type="text" />
        </div>

        <div className={styles.form}>
          <h2 className={styles.form_title}>Description</h2>
          <input className={styles.form_input} type="text" />
        </div>

        <div className={styles.form}>
          <h2 className={styles.form_title}>Cover Picture</h2>
          <input className={styles.form_input} type="file" />
        </div>

        <div className={styles.form}>
          <h2 className={styles.form_title}>Price</h2>
          <input className={styles.form_input} type="text" />
        </div>

        <button className={styles.button_add} type="submit">
          Add Book
        </button>

        <Link href="/books">
          <a className={styles.button_back_home}>Home</a>
        </Link>
      </div>
    </div>
  );
}
