import Head from "next/head";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IBookProps, IBooksProps } from "./../types/types";
import Image from "next/image";
import styles from "../styles/Books.module.scss";
import Link from "next/link";
import { coverLoader } from "../utils/coverLoader";

export default function Books(props: IBooksProps) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios("http://localhost:8800");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllBooks();
  }, []);

  return (
    <div>
      <Head>
        <title>Toan&apos;s Book Shop</title>
        <meta property="og:title" content="Toan's Book Shop" key="title" />
      </Head>
      <h1 className={styles.header}>Toan&apos;s Book Shop</h1>
      <div className={styles.books}>
        {books.map((book: IBookProps) => (
          <Link key={book.id} href={{
                  pathname: "/book/[id]",
                  query: {
                    id: book.id,
                  },
                }}>
          <div className={styles.book} key={book.id}>
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

              <Link href="/update">
                <a className={styles.button_update}>Update Book</a>
              </Link>
            </div>
          </div></Link>
        ))}
      </div>

      <Link href="/add">
        <a className={styles.button_add}>Add New Book</a>
      </Link>
    </div>
  );
}
