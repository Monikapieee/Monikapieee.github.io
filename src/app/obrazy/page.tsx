import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Obrazy — Magda Raczko",
  description:
    "Obrazy Magdy Raczko — malarstwo abstrakcyjne, olej na płótnie. Galeria wybranych prac.",
  openGraph: {
    title: "Obrazy — Magda Raczko",
    description:
      "Obrazy Magdy Raczko — malarstwo abstrakcyjne, olej na płótnie. Galeria wybranych prac.",
    images: [{ url: "/images/obrazy/przebudzenie.jpg", width: 1200, height: 872 }],
  },
};

const paintings = [
  {
    slug: "przebudzenie",
    title: "Przebudzenie",
    year: "2020",
    medium: "olej na płótnie",
    dimensions: "73 \u00d7 100 cm",
    width: 1200,
    height: 872,
  },
  {
    slug: "pelnia",
    title: "Pełnia",
    year: "2020",
    medium: "olej na płótnie",
    dimensions: "73 \u00d7 100 cm",
    width: 874,
    height: 1200,
  },
  {
    slug: "puls",
    title: "Puls",
    year: "2020",
    medium: "olej na płótnie",
    dimensions: "73 \u00d7 100 cm",
    width: 875,
    height: 1200,
  },
  {
    slug: "ogien",
    title: "Ogień",
    year: "2021",
    medium: "olej na płótnie",
    dimensions: "65 \u00d7 50 cm",
    width: 924,
    height: 1200,
  },
  {
    slug: "jestem",
    title: "Jestem",
    year: "2019",
    medium: "olej na płótnie",
    dimensions: "54 \u00d7 73 cm",
    width: 1200,
    height: 888,
  },
  {
    slug: "krzyk",
    title: "Krzyk",
    year: "2010",
    medium: "olej na płótnie",
    dimensions: "100 \u00d7 100 cm",
    width: 1195,
    height: 1200,
  },
  {
    slug: "poszukiwania",
    title: "Poszukiwania",
    year: "2014",
    medium: "olej na płótnie",
    dimensions: "50 \u00d7 65 cm",
    width: 944,
    height: 1200,
  },
  {
    slug: "dar",
    title: "Dar",
    year: "2015",
    medium: "olej na płótnie",
    dimensions: "54 \u00d7 73 cm",
    width: 885,
    height: 1200,
  },
  {
    slug: "cien",
    title: "Cień",
    year: "2015",
    medium: "olej na płótnie",
    dimensions: "33 \u00d7 40 cm",
    width: 985,
    height: 1200,
  },
];

export default function ObrazyPage() {
  return (
    <article className={styles.article}>
      <h2 className={styles.sectionHeading}>Obrazy</h2>
      <div className={styles.gallery}>
        {paintings.map((painting) => (
          <figure key={painting.slug} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={`/images/obrazy/${painting.slug}.jpg`}
                alt={`${painting.title}, ${painting.year}, ${painting.medium}, ${painting.dimensions}`}
                width={painting.width}
                height={painting.height}
                sizes="(max-width: 767px) 400px, (max-width: 1023px) 50vw, 33vw"
                quality={85}
              />
            </div>
            <figcaption className={styles.caption}>
              <span className={styles.title}>{painting.title}</span>
              <span className={styles.details}>
                {painting.year}, {painting.medium}, {painting.dimensions}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </article>
  );
}
