"use client";

import Link from "next/link";
import { useMenu } from "@/components/MenuProvider";
import styles from "./Header.module.css";

export function Header() {
  const { isOpen, toggle } = useMenu();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Magda Raczko
      </Link>

      <button
        className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ""}`}
        onClick={toggle}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
      >
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
      </button>
    </header>
  );
}
