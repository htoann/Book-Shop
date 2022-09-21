import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Update.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export interface IUpdateProps {}

export default function Update(props: IUpdateProps) {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    cover: "",
    price: null,
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBook((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    try {
      await axios.put("http://localhost:8800", book);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <title>Update Book</title>
      <h1 className={styles.header}>Update Book</h1>
      <div className={styles.form_wrap}>
        <div className={styles.form}>
          <h2 className={styles.form_title}>Title</h2>
          <input
            className={styles.form_input}
            onChange={handleChange}
            type="text"
            name="title"
          />
        </div>

        <div className={styles.form}>
          <h2 className={styles.form_title}>Description</h2>
          <input
            className={styles.form_input}
            onChange={handleChange}
            type="text"
            name="desc"
          />
        </div>

        <div className={styles.form}>
          <h2 className={styles.form_title}>Cover Picture</h2>
          <input
            className={styles.form_input}
            onChange={handleChange}
            type="text"
            name="cover"
          />
        </div>

        <div className={styles.form}>
          <h2 className={styles.form_title}>Price</h2>
          <input
            className={styles.form_input}
            onChange={handleChange}
            type="number"
            name="price"
          />
        </div>

        <button
          onClick={handleSubmit}
          className={styles.button_add}
          type="submit"
        >
          Add New Book
        </button>

        <Link href="/">
          <a className={styles.button_back_home}>Home</a>
        </Link>
      </div>
    </div>
  );
}
