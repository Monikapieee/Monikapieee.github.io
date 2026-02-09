import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Wystawy — Magda Raczko",
  description:
    "Wystawy indywidualne i zbiorowe Magdy Raczko — malarstwo abstrakcyjne, instalacje i happeningi w Polsce i za granicą.",
  openGraph: {
    title: "Wystawy — Magda Raczko",
    description:
      "Wystawy indywidualne i zbiorowe Magdy Raczko — malarstwo abstrakcyjne, instalacje i happeningi w Polsce i za granicą.",
  },
};

export default function WystawyPage() {
  return (
    <article className={styles.article}>
      <section>
        <h2 className={styles.sectionHeading}>Wystawy indywidualne</h2>
        <ul className={styles.exhibitionList}>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2023</span> — „Pamiętnik artystyczny
            — ślady 365&nbsp;dni", Centrum Łowicka, Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2022</span> — „Transformacje", Galeria
            Oranżeria, Pałac Zjazdów i&nbsp;Konferencji PAN, Jabłonna
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2022</span> — „Transformacje", Galeria
            Sztuki na Prostej, Jabłonna
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2021</span> — „Strumień", Centrum
            Łowicka, Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2020</span> — „Drogi wspólne
            równoległe&nbsp;III", To Się Wytnie, Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2018</span> — „Drogi wspólne
            równoległe&nbsp;II", Instytut 116, Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2017</span> — „Drogi wspólne
            równoległe", Magda Raczko. Galeria i&nbsp;Pracownia
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2015</span> — „Contemplatio", Galeria
            8&nbsp;Plus &&nbsp;Idkart, Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2015</span> — „Psalmy", Galeria
            Wieża, Muzeum Zbrojownia Na Zamku w&nbsp;Liwie
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2014</span> — „Poszukiwania", Galeria
            Mabellini, Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2014</span> — „Zmysły
            i&nbsp;zamysły", Mazowieckie Centrum Kultury i&nbsp;Sztuki, Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2012</span> — „Malarstwo
            i&nbsp;Poezja", Cafe Gallery Belle-Epoque, Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2012</span> — „Szukając życia
            w&nbsp;błękicie", Galeria 8&nbsp;Plus, Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2010</span> — „Energia myśli",
            Galeria Kaplica, Centrum Rzeźby Polskiej, Orońsko
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2009</span> — „Chwile
            nieskończoności", Pałac Księżnej Anny Jabłonowskiej, Kock
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2009</span> — „Chwile
            nieskończoności", Archiwum Państwowe (Pałac Potockich), Radzyń
            Podlaski
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2009</span> — „Błękit między dębami",
            Biblioteka Publiczna w&nbsp;Zalesiu Górnym
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2008</span> — „Doznania" (współautorka
            Anna Szprynger), Galeria Grodzka, BWA, Lublin
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2008</span> — „Tajemnica przejścia"
            (współautor Roman Postek), Galeria XXI — Kuchnia, Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2008</span> — „Zegar słoneczny" —
            instalacja (współautor Roman Postek), Centrum Rzeźby Polskiej,
            Orońsko
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2007</span> — „Błękit", Austriackie
            Forum Kultury, Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2007</span> — „Znak", Galeria Wieża,
            Muzeum Zbrojownia Na Zamku w&nbsp;Liwie — inauguracja tomiku poezji
            pt.:&nbsp;„Przez Ciebie"
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2006</span> — „Nieba jest więcej niż
            ziemi", Galeria Delfiny, Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2005</span> — „Przestrzenie błękitu",
            Galeria Promocyjna, Oddział Sztuki Współczesnej Muzeum Narodowego
            w&nbsp;Gdańsku
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2005</span> — „Janowi Pawłowi&nbsp;II
            w&nbsp;hołdzie" (współautor Roman Postek), Galeria Wieża, Muzeum
            Zbrojownia na Zamku w&nbsp;Liwie
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2004</span> — IV&nbsp;Światowy Dzień
            Poezji „Obraz i&nbsp;słowo", Galeria „Bellotto", Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2004</span> — Happening „Spektakl
            Trzech Żywiołów" (współautor Roman Postek), Galeria Wieża, Muzeum
            Zbrojownia na Zamku w&nbsp;Liwie
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2003</span> — „Pejzaże", malarstwo,
            rysunek, poezja, Galeria Tess, Pruszków
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2001</span> — „Malarstwo", Galeria
            Aktyn, Business Center, Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>1997</span> — „Źródło", Galeria
            Dziekanka, Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>1993</span> — „Obraz", Galeria
            Rzeźby, Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>1993</span> — „Bez tytułu", Galeria
            Labirynt&nbsp;2, Lublin
          </li>
        </ul>
      </section>

      <section>
        <h2 className={styles.sectionHeading}>Wystawy zbiorowe</h2>
        <ul className={styles.exhibitionList}>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2017–2019</span> — Stałe wystawy
            w&nbsp;Galerii 8&nbsp;plus &&nbsp;Idkart, „Z&nbsp;cyklu Iwona
            i&nbsp;przyjaciele", Noc Muzeów, cykle stałych wystaw wraz
            z&nbsp;warsztatami dla dzieci „Ja też potrafię tworzyć!", Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2016</span> — „Art For Peace 2016",
            międzynarodowa wystawa „Zajmij się sztuką, nie wojną!!!", Galeria
            8&nbsp;Plus &&nbsp;Idkart, Warszawa, kurator Irmina
            Dubaniowska-Kutek
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2015</span> — IV&nbsp;Edycja
            Konferencji Międzynarodowej Idkart, „Współczesna Sztuka Polska",
            Finlandia
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2015</span> — „Wiosenna prezentacja",
            Galeria 8&nbsp;plus &&nbsp;Idkart, Warszawa, kurator Irmina
            Dubaniowska-Kutek
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2014</span> — Polish Modern Art
            Exhibition, Poriginal Gallery, pod honorowym patronatem Ambasadora
            RP w&nbsp;Finlandii, Pori, Finlandia, kurator Irmina
            Dubaniowska-Kutek
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2014</span> — „Gruzja
            i&nbsp;Przyjaciele", Galeria 8&nbsp;Plus &&nbsp;Idkart, patronat
            Ambasady Gruzji w&nbsp;RP, w&nbsp;ramach III&nbsp;Międzynarodowej
            Konferencji Artystycznej Idkart Trading, Warszawa, kurator Irmina
            Dubaniowska-Kutek
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2014</span> — „Namalować muzykę",
            Galeria Pi oraz Klub Kultury w&nbsp;Zalesiu Górnym
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2013</span> — „Abstrakcja", ZPAP,
            Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2012</span> — „Podział błękitu",
            Atran, Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2012</span> — II&nbsp;Międzynarodowa
            Konferencja artystyczna Idkart Trading&nbsp;II, Mediateka
            Start-Meta, Warszawa, kurator Irmina Dubaniowska-Kutek
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2012</span> — „Artedonna", Galeria
            Spazi Oficyna, Rzym
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2012</span> — „Panorama Zalesia", Dom
            Sztuki SMB „Jary", Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2012</span> — „Jadowskie klimaty",
            GOK w&nbsp;Jadowie
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2011</span> — I&nbsp;Edycja
            Konferencji Międzynarodowej Idkart, Centrum Flanders, patronat
            honorowy Jerzego Buzka, kurator Irmina Dubaniowska-Kutek
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2011</span> — „Natale di Roma",
            V&nbsp;Międzynarodowy Konkurs Malarstwa i&nbsp;Grafiki
            (wyróżnienie), Casina Farsetti, Rzym, Włochy
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2011</span> — „Pejzaże", Galeria
            Wieża, Muzeum Zbrojownia na Zamku w&nbsp;Liwie
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2011</span> — „Abstrakcja
            w&nbsp;malarstwie", OW ZPAP, Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2009</span> — „Energia koloru",
            Galeria Grodzka, BWA, Lublin
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2007</span> — „Sztuka i&nbsp;wiara",
            Galeria Grodzka, BWA, Lublin
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2007</span> — 7.&nbsp;Biennale Małych
            Form Malarskich, Galeria Sztuki „Wozownia", Toruń
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2004</span> — „Polskie malarstwo
            współczesne", Galeria „Ciminiere", Catania, Włochy
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2004</span> — Happening „Spektakl
            3&nbsp;żywiołów", Muzeum Zbrojownia na Zamku w&nbsp;Liwie
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2004</span> — „Configuracja",
            20.&nbsp;Festiwal Polskiego Malarstwa Współczesnego, Szczecin
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2003</span> — „Warszawski Przegląd
            Sztuk Pięknych", Galeria DAP, Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2003</span> — „Powroty", Galeria
            „Wieża", Muzeum Zbrojownia Na Zamku w&nbsp;Liwie — inauguracja
            tomiku poezji pt.:&nbsp;„Ludziom i&nbsp;Miejscom..."
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2003</span> — „Mini Graphic &
            Painting World Wide Show", Pisa, Włochy
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2003</span> — 5.&nbsp;Biennale Małych
            Form Malarskich, Galeria Sztuki „Wozownia", Toruń
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2003</span> — „Polskie malarstwo
            współczesne", Galeria „Ciminiere", Catania, Włochy
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>2002–2004</span> — „Petit format de
            papier", Musée du Petit Format, Belgia
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>1999</span> — „Z&nbsp;czterech
            stron...", Galeria Prezydenta Miasta Warszawy, Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>1999</span> — „Poza Czasem", Muzeum
            Plakatu w&nbsp;Wilanowie, Mała Galeria, Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>1997</span> — „Julian Raczko
            i&nbsp;uczniowie", Galeria Działań, Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>1992</span> — „Warszawska Dekada
            Sztuki", DAP, Warszawa
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>1991</span> — Wystawa Plenerowa pod
            patronatem Galerii Działań, Nadarzyn
          </li>
          <li className={styles.exhibitionItem}>
            <span className={styles.year}>1991</span> — „Dwie Pracownie", BWA
            Białystok
          </li>
        </ul>
      </section>
    </article>
  );
}
