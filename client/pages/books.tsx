import axios from "axios";
import React, { useEffect, useState } from "react";
import { IBookProps } from "./../types/types";
import Image from "next/image";
import styles from "../styles/Books.module.scss";
import Link from "next/link";

export interface IBooksProps {}

export default function Books(props: IBooksProps) {
  const [books, setBooks] = useState([]);
  const myLoader = ({ src }: { src: string }) => {
    return `https://images-us.bookshop.org/ingram/${src}.jpg`;
  };

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllBooks();
  }, []);

  return (
    <div>
      <h1 className={styles.header}>Toàn&apos;s Book Shop</h1>
      <div className={styles.books}>
        {books.map((book: IBookProps) => (
          <div className={styles.book} key={book.id}>
            {book.cover && (
              <Image
                loader={myLoader}
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
          </div>
        ))}
      </div>

      <Link href="/add">
        <a className={styles.button_add}>Add New Book</a>
      </Link>
    </div>
  );
}
