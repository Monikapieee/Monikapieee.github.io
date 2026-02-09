import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "O mnie — Magda Raczko",
  description:
    "Magda Raczko — artystka interdyscyplinarna. Malarstwo abstrakcyjne, rysunek, instalacje, happeningi i poezja.",
  openGraph: {
    title: "O mnie — Magda Raczko",
    description:
      "Magda Raczko — artystka interdyscyplinarna. Malarstwo abstrakcyjne, rysunek, instalacje, happeningi i poezja.",
    images: [{ url: "/images/o-mnie.jpg", width: 1600, height: 1552 }],
  },
};

export default function OmniePage() {
  return (
    <article className={styles.article}>
      <section className={styles.heroSection}>
        <div className={styles.photoWrapper}>
          <Image
            src="/images/o-mnie.jpg"
            alt="Magda Raczko"
            width={1600}
            height={1552}
            priority
            sizes="(max-width: 767px) 100vw, 350px"
            quality={85}
            className={styles.photo}
          />
        </div>

        <div className={styles.bioText}>
          Magda Raczko urodzona 17&nbsp;kwietnia 1967&nbsp;r. w&nbsp;Warszawie,
          ukończyła studia w&nbsp;warszawskiej Akademii Sztuk Pięknych dyplomem
          w&nbsp;1992&nbsp;r. w&nbsp;pracowni prof.&nbsp;Jana Tarasina. Aneks do
          dyplomu zrealizowała w&nbsp;pracowni prof.&nbsp;Ryszarda Winiarskiego.
          Ukończyła również dwuletnie Studium Podyplomowe w&nbsp;zakresie
          kształcenia pedagogicznego w&nbsp;ASP w&nbsp;Warszawie. Zajmuje się
          malarstwem abstrakcyjnym i&nbsp;rysunkiem, tworzy instalacje
          i&nbsp;happeningi. Dopełnieniem twórczości malarskiej są wiersze, które
          nazywa &bdquo;słownymi obrazami&rdquo;. Są one częścią poszukiwania
          harmonii pejzażu i&nbsp;myśli.
        </div>
      </section>

      <section>
        <h2 className={styles.sectionHeading}>Publikacje</h2>
        <ul className={styles.publications}>
          <li>
            B.Z., Bez zobowiązań, &bdquo;Trybuna&rdquo;, 1999&nbsp;r.,
            13&nbsp;września
          </li>
          <li>
            Bożena Gontarz, Wystawa i&nbsp;turniej rycerski, &bdquo;Życie
            Warszawy&rdquo;, 2003&nbsp;r., nr&nbsp;160, s.&nbsp;10
          </li>
          <li>
            Monika Małkowska, Kolor nasycony energią,
            &bdquo;Rzeczpospolita&rdquo;, 2007&nbsp;r., nr&nbsp;178
          </li>
          <li>
            Magda Raczko, Błękit, rozm. przepr. Katarzyna Droga,
            &bdquo;Cogito&rdquo;, 1994&nbsp;r., nr&nbsp;3, s.&nbsp;2–4
          </li>
          <li>
            Roman Postek, Czas poezji mierzony zegarem słonecznym, Kwartalnik
            Rzeźby &bdquo;OROŃSKO&rdquo;, 2008&nbsp;r., nr&nbsp;4/73,
            s.&nbsp;10
          </li>
          <li>
            Tamara Książek, Błękitne przestrzenie Magdy Raczko, Kwartalnik
            Rzeźby &bdquo;OROŃSKO&rdquo;, 2010&nbsp;r., nr&nbsp;3/80,
            s.&nbsp;14–16
          </li>
          <li>
            IDKART, CONTEMPLATIO — Magda Raczko, w: Magazyn Internetowy
            &bdquo;Na Tle Sztuki&rdquo;, nr&nbsp;4/2015&nbsp;r., s.&nbsp;58
          </li>
          <li>
            Katalog zbiorowy, Sztuka i&nbsp;wiara, BWA Lublin
            &bdquo;Labirynt&rdquo;, 2007&nbsp;r.
          </li>
          <li>
            Katalog zbiorowy, Doznania, BWA Lublin &bdquo;Labirynt&rdquo;,
            2008&nbsp;r.
          </li>
          <li>
            Opracowanie zbiorowe, Delfina Krasicka, życie i&nbsp;twórczość,
            Fundacja Artystyczna Delfiny Krasickiej, Warszawa 2015&nbsp;r.,
            s.&nbsp;194
          </li>
          <li>
            Opracowanie zbiorowe, Warszawska Dekada Sztuki&nbsp;10, Akademia
            Sztuk Pięknych w&nbsp;Warszawie, Warszawa 1992&nbsp;r.
          </li>
          <li>
            Wojciech Włodarczyk, Miejsce malarstwa, Akademia Sztuk Pięknych
            w&nbsp;Warszawie, Warszawa 2008&nbsp;r.
          </li>
          <li>
            Związek Polskich Artystów Plastyków. Okręg Warszawski, Warszawski
            Przegląd Sztuk Pięknych, malarstwo i&nbsp;rzeźba, Warszawa
            1991&nbsp;r., s.&nbsp;45, s.&nbsp;79–80
          </li>
          <li>
            Niebieskie obrazy Magdaleny Raczko-Pietraszek, &bdquo;Poezja
            dzisiaj&rdquo;, Wydawnictwo Książkowe IBIS, 2004&nbsp;r.,
            nr&nbsp;35/36, s.&nbsp;334–339
          </li>
          <li>
            Katalog zbiorowy, &bdquo;CONFIGURACJA&rdquo;, XX&nbsp;Festiwal
            polskiego malarstwa współczesnego, Szczecin 2004&nbsp;r.,
            s.&nbsp;118–119
          </li>
          <li>
            S., Studenckim pędzlem i&nbsp;piórkiem, &bdquo;Życie
            Warszawy&rdquo;, 1992&nbsp;r., nr&nbsp;137
          </li>
          <li>
            Magda Raczko, Andrzej Rejman, Czasem potrzeba iskry, rozm. przepr.
            Maja Baczyńska, &bdquo;ArtPapier&rdquo;, sierpień
            15–16&nbsp;(351–352)/2018&nbsp;r.
          </li>
          <li>
            Spotkanie z&nbsp;obrazem, &bdquo;Presto&rdquo;, 2022&nbsp;r.,
            nr&nbsp;36, s.&nbsp;162
          </li>
        </ul>
      </section>

      <section>
        <h2 className={styles.sectionHeading}>Publikacje autorskie</h2>
        <ul className={styles.publications}>
          <li>Ludziom i&nbsp;miejscom, tomik poezji, 2003&nbsp;r.</li>
          <li>Przez Ciebie, tomik poezji, 2007&nbsp;r.</li>
          <li>
            Cykl artykułów dla miesięcznika &bdquo;Cogito&rdquo;
            w&nbsp;1994&nbsp;r.
          </li>
        </ul>
      </section>
    </article>
  );
}
