import React, { useEffect, useState } from "react";
import styles from "../../styles/Book.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { coverLoader } from "../../utils/coverLoader";
import axios from "axios";
import Link from "next/link";

export default function Book() {
  const { query } = useRouter();
  const { id } = query;
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
          const res = await axios("http://localhost:8800/book/" + id);
          setBook(res.data[0]);
        } catch (err) {
          console.log(err);
        }
      };

      fetchBook();
    }
  }, [id]);

  return (
    <div className={styles.book}>
      <title>{book.title}</title>
      {book.cover && (
        <Image
          className={styles.cover}
          loader={coverLoader}
          src={book.cover}
          alt="Picture of the book"
          width={300}
          height={500}
        />
      )}
      <div className={styles.info}>
        <h2 className={styles.title}>{book.title}</h2>
        <p className={styles.desc}>{book.desc}</p>
        <span className={styles.price}>{book.price}$</span>
      </div>

      <Link href="/">
        <a className={styles.button_back_home}>Home</a>
      </Link>
    </div>
  );
}
