import Image from "next/image";
import styles from "./HeroImage.module.css";

export function HeroImage() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/homepage.jpg"
        alt="Abstrakcyjny obraz w głębokich odcieniach błękitu — Magda Raczko"
        fill
        priority
        sizes="100vw"
        quality={85}
        className={styles.image}
      />
    </section>
  );
}
