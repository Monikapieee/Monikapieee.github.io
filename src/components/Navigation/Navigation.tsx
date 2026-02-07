"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useMenu } from "@/components/MenuProvider";
import styles from "./Navigation.module.css";

const NAV_ITEMS = [
  { label: "O mnie", href: "/o-mnie" },
  { label: "Wystawy", href: "/wystawy" },
  { label: "Obrazy", href: "/obrazy" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Rysunki", href: "/rysunki" },
  { label: "Performance", href: "/performance" },
  { label: "Poezja", href: "/poezja" },
] as const;

export function Navigation() {
  const { isOpen, close } = useMenu();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Focus the close button when panel opens
    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, close]);

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
        onClick={close}
        aria-hidden="true"
      />

      <nav
        ref={panelRef}
        className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
        aria-label="Menu główne"
        aria-hidden={!isOpen}
      >
        <button
          ref={closeButtonRef}
          className={styles.closeButton}
          onClick={close}
          aria-label="Zamknij menu"
          tabIndex={isOpen ? 0 : -1}
        >
          <span className={styles.closeLine} />
          <span className={styles.closeLine} />
        </button>

        <ul className={styles.menuList}>
          {NAV_ITEMS.map((item, index) => (
            <li
              key={item.href}
              className={`${styles.menuItem} ${isOpen ? styles.menuItemVisible : ""}`}
              style={{ transitionDelay: isOpen ? `${index * 40 + 200}ms` : "0ms" }}
            >
              <Link
                href={item.href}
                className={styles.menuLink}
                onClick={close}
                tabIndex={isOpen ? 0 : -1}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
