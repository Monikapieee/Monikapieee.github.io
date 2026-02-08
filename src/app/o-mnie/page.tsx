import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "O mnie — Magda Raczko",
  description:
    "Magda Raczko — artystka interdyscyplinarna. Malarstwo, poezja, instalacja i performance. Esej krytyczny Weroniki Zasady-Stańskiej.",
  openGraph: {
    title: "O mnie — Magda Raczko",
    description:
      "Magda Raczko — artystka interdyscyplinarna. Malarstwo, poezja, instalacja i performance.",
    images: [{ url: "/images/o-mnie.jpg", width: 1600, height: 1552 }],
  },
};

export default function OmniePage() {
  return (
    <article className={styles.article}>
      <div className={styles.photoWrapper}>
        <Image
          src="/images/o-mnie.jpg"
          alt="Magda Raczko"
          width={1600}
          height={1552}
          priority
          sizes="(max-width: 800px) 100vw, 800px"
          quality={85}
          className={styles.photo}
        />
      </div>

      <div className={styles.content}>
        <p>
          Z procesu artystycznego opartego na konsekwencji, wytrwałości
          i&nbsp;pogłębionej pracy nad tematem wydobywają się malarskie impresje
          o&nbsp;świetle i&nbsp;kolorze oraz cykle miniatur poetyckich
          o&nbsp;naturze i&nbsp;kondycji człowieka. Przebijające się z&nbsp;daleka
          niepewne, błękitne plamy jasności, impet barw dopełniających
          i&nbsp;nasyconych kolorowym światłem oraz studia malarskie nad
          osobliwością błękitu to malarska przestrzeń tworzona znakiem i&nbsp;formą
          z&nbsp;pogranicza obecności, otwarta na niematerialność. Nastrojowe
          i&nbsp;refleksyjne kompozycje liryczne, impresjonistyczne z&nbsp;ducha,
          są o&nbsp;ulotności, odkryciu siły, szukaniu duchowego wsparcia
          w&nbsp;tym, co najbliżej człowieka. Obserwacje mające punkt podparcia
          w&nbsp;konkrecie, przechodzące od prostego i&nbsp;oczywistego
          spostrzeżenia do pogłębionej myśli egzystencjalnej objawiają wielką
          wrażliwość — nie tylko artystyczną, ale też życiową, duchową
          i&nbsp;uczuciową Magdy Raczko. Pomiędzy jednoznacznością przekazu
          o&nbsp;pięknie, harmonii, tajemnicy istnienia, przemijalności, niepokoju,
          wierze i&nbsp;nadziei, a&nbsp;próbą utrwalenia wrażenia, chwili
          i&nbsp;błysku refleksji jest postawa zaufania i&nbsp;szczerości pytania
          o&nbsp;pewność i&nbsp;sensowność świata.
        </p>

        <p>
          Sztuka Magdy Raczko często wynika z&nbsp;potrzeby znalezienia punktów
          odniesienia w&nbsp;przyrodzie, własnej wrażliwości i&nbsp;otwartości na
          świat subiektywnych, jednostkowych wrażeń przychodzących każdego dnia
          podczas spacerów, chwil zadumy, powszedniej pracy, a&nbsp;także
          kaprysów losu. Twórczość malarska odwołuje się do nurtu sztuki
          abstrakcyjnej. Inspirowana jest także ekspresjonizmem, co widać
          w&nbsp;przejmującej grze barw ciepłych i&nbsp;zimnych oraz
          kolorystycznej śmiałości, odejściu od równowagi i&nbsp;harmonii oraz
          charakterystycznej dla wielu prac wyciszającej monochromatyczności barwy
          błękitnej. W&nbsp;dziełach Artystki pojawia się także delikatna
          geometryzacja, która zastępuje muzyczność i&nbsp;giętkość rytmu plam czy
          linearnych pociągnięć pędzla. Artystka plasuje się w&nbsp;kręgu
          indywidualności artystycznych, twórców zafascynowanych potęgą kolorów
          i&nbsp;jednym wybranym jako wyrazistym bohaterem obrazu, studiujących
          naturę wybranej barwy i&nbsp;operujących nią jako samowystarczalnym
          językiem malarskim. Magda Raczko za punkt wyjścia w&nbsp;zmierzaniu do
          własnego stylu obrała postimpresjonizm oraz to, co dało i&nbsp;wynikało
          z&nbsp;relacji z&nbsp;ojcem, Julianem Henrykiem Raczko — cały bogaty
          świat bodźców, obrazów, rozmów, odczuć, buntów i&nbsp;powrotów
          podejmowanych przez lata, wchłoniętych jako artystyczny mikroświat
          domowego zacisza i&nbsp;ewokujących do dziś wieloma świadomymi lub
          bardziej intuicyjnymi decyzjami twórczymi i&nbsp;obranymi kierunkami
          rozwoju. Zresztą twórczość Artysty, której podporządkował całe swoje
          życie, nie daje się prosto uplasować w&nbsp;żadnym kręgu gatunkowym czy
          stylowym, zaś Raczko tworzył nie tylko na płaszczyźnie, lecz także
          włączał się ze swymi realizacjami w&nbsp;zamkniętą przestrzeń miejsca
          lub otoczenia przyrody.
        </p>

        <p>
          Do świata swoistego dialogu, jaki prace Magdy Raczko prowadzą
          z&nbsp;nurtami sztuki współczesnej, można zaliczyć informel dążący do
          ekspresji poprzez niepoddane rygorom, a&nbsp;przez to bardziej
          dramatyczne stosowanie barwnych plam, idące nieraz w&nbsp;kierunku
          mistyki lub swobodnej ekspresji energii i&nbsp;emocji. Magdzie Raczko
          bliskie jest malarstwo emocji oraz idee color field painting. Nowojorscy
          artyści tego nurtu działający w&nbsp;czasach powojennych pytali, czy
          potencjał ekspresji barwy ma granice oraz jak wiele może sam kolor jako,
          w&nbsp;ich założeniu, jedyny środek do wydobycia na podobraziu ruchu,
          przestrzeni, masy. Kolor jako język abstrakcji jest pionierskim
          założeniem i&nbsp;niezbywalną cechą poetyki prac Magdy Raczko.
        </p>

        <p>
          Dorobek Artystki to nie tylko malarstwo, ale też wiersze. Intelekt
          i&nbsp;myśl filozoficzna w&nbsp;pełni współpracuje z&nbsp;wrażeniami
          zmysłowymi. To, co widzialne, staje się pożywką dla koncepcji
          myślowych, a&nbsp;wrażliwość na światło i&nbsp;kolor pobudza pracę
          intelektu. W&nbsp;twórczości Raczko na styku percepcji wzrokowej
          i&nbsp;abstrakcyjnej myśli filozoficznej tworzą się metafory kreacyjne,
          poprzez które świat wokół jawi się jako funkcja „ja".
          Z&nbsp;zetknięcia barwy, światła i&nbsp;słowa buduje ona świat wrażeń,
          przeczuć, refleksji, pretekstów do rozmyślań i&nbsp;zachwytów. Nawet
          czysta estetyczna radość z&nbsp;obcowania z&nbsp;pięknem świata natury
          staje się asumptem do poszukania głębszego sensu. Nasycanie treścią
          obrazów wchłanianych z&nbsp;najbliższego otoczenia, gromadzonych
          w&nbsp;symbolicznym wnętrzu to proces, którego owocem jest wspomnienie —
          reminiscencja ewokująca nowe wzruszenia duszy, emocje i&nbsp;nowe stany
          witalności myśli. W&nbsp;taki sposób świat obrazów i&nbsp;słów
          współistnieje, ożywia nawzajem, dopełnia się i&nbsp;jednoczy, tworząc
          niewyczerpane zaplecze inspiracji i&nbsp;otwartych dróg.
        </p>

        <p>
          Dziś najistotniejszy jest osobisty przekaz twórcy, a&nbsp;ideologiczne
          spory między figuracją i&nbsp;abstrakcją już dawno się wyciszyły. Każde
          posunięcia formalne twórcy są równorzędne i&nbsp;otwierają pola
          dialogowe, jeśli wyrosły ze szczerych motywacji i&nbsp;rozumienia
          wartości materii malarskiej. Prace malarskie Magdy Raczko istnieją nie
          tylko jako korespondencja z&nbsp;tekstami lirycznymi, ale wręcz
          w&nbsp;syntezie z&nbsp;nimi. Są koherentnym przekazem zmysłowym
          i&nbsp;duchowym. Wywodzą się z&nbsp;jednego źródła — pragnienia
          wyrażania świata poprzez siebie jak najpełniej poprzez abstrakcyjną
          poetykę formy i&nbsp;inicjacje słowne. Autentyczność oparta
          o&nbsp;wewnętrzną rzeczywistość doznań jest potwierdzona konsekwencją
          i&nbsp;spójnością przesłania, przez co staje się dążeniem zbliżającym
          do ogólnej prawdy o&nbsp;jednostce i&nbsp;świecie, zawartej tyle
          w&nbsp;barwie i&nbsp;świetle, co w&nbsp;słowie.
        </p>

        <h2 className={styles.sectionHeading}>Malarstwo</h2>

        <p>
          Błękit kojarzony jest priorytetowo z&nbsp;otwartym bezkresem nieba,
          kosmicznymi przestworzami lub głębią morza. W&nbsp;opisie psychologii
          koloru niebieski oznacza solidność, otwartość, inteligencję, szczególny
          nacisk kładzie się też na możliwość wywoływania w&nbsp;nas stanów
          zadumy, poczucia spokoju i&nbsp;odprężenia. Oddziaływanie kolorów na
          umysł i&nbsp;emocje jest ściśle powiązane zarówno z&nbsp;pierwotnym
          zaistnieniem barw w&nbsp;naturze, jak i&nbsp;z&nbsp;bogatą semantyką
          kulturową i&nbsp;historią percepcji.
        </p>

        <p>
          Dla Magdy Raczko, ważniejsze niż same desygnaty danej barwy
          w&nbsp;realnym świecie, jest przypisywanie kolorom cech projekcyjnych
          i&nbsp;ekspresyjnych oraz to, by, parafrazując słowa
          Kandinsky&apos;ego, kolory wywoływały w&nbsp;duszy wibracje. Można też
          przywołać bliskie Artystce zamiłowanie Yvesa Kleina do osiągania
          intensywności i&nbsp;promienności błękitu, co służy wykorzystaniu
          pojemności znaczeniowej tego koloru i&nbsp;jego umiejętności nadawania
          nowych, niebanalnych kontekstów lub wręcz konkurowanie z&nbsp;nimi.
        </p>

        <p>
          Szczególnie barwy dopełniające dynamizują kompozycję i&nbsp;doprowadzają
          do wewnętrznego poruszenia wnętrza odbiorcy. Jednak Artystka nie zawsze
          zmierza do kolorystycznej pełni — preferuje barwę niebieską,
          transparentną i&nbsp;niezwykle wdzięczną w&nbsp;malowaniu, świetlistą,
          urokliwą i&nbsp;pełną odmian „niebieskości".
        </p>

        <p>
          Puchate, błękitne plamy czy nieregularne w&nbsp;natężeniu, szorstkie
          gesty pędzla odsłaniające ciepłą jasność podobrazia uwznioślają
          i&nbsp;przywołują na myśl niebiosa, sferę sacrum, budzą ideały wiary
          i&nbsp;wierności, uszlachetniają tęsknotą za doskonałością
          i&nbsp;przekraczaniem granic swego jestestwa w&nbsp;kierunku
          diagonalnym, w&nbsp;locie ku wieczności. Monochromatyczne płaszczyzny
          z&nbsp;niejednorodnym światłem wydobywającym się podskórnie
          z&nbsp;płaszczyzny oraz miękkość ruchu pędzla w&nbsp;wybranych pracach
          przywołują wspomnienia oszczędnego, abstrakcyjnego malarstwa Marka
          Rothko, który pragnął obdarzyć widza zarówno możliwością przeżycia
          wielkich emocji, jak i&nbsp;przyjemnością kontaktu z&nbsp;nasyconą,
          konkretną barwą — samoistnym bohaterem obrazu, elementem większej
          całości sztuki i&nbsp;świata realnego.
        </p>

        <p>
          Niebieski asocjuje też kulturowo z&nbsp;mistycznymi doznaniami
          i&nbsp;wierzeniami związanymi z&nbsp;tajemnicą istnienia i&nbsp;śmierci.
          Jako światło niebieski działa odrętwiająco. Odpowiada na noszoną
          w&nbsp;sobie introwertyczność, melancholię, wycisza, ułatwia zatopienie
          się w&nbsp;siebie. W&nbsp;nadmiarze może wywoływać w&nbsp;nas
          osamotnienie, pustkę, przygnębia swą nicością, zaś spokój
          i&nbsp;ukojenie, które miał przynieść, przeistacza się w&nbsp;uczucie
          bezsensu istnienia, oziębłość uczuciową i&nbsp;martwotę wewnętrzną,
          która trawi po cichu. Choć niemal każdy kolor w&nbsp;nadmiarze i&nbsp;bez
          sąsiedztwa z&nbsp;innymi posiada ciemną stronę swej chromatycznej mocy,
          Magda Raczko często stara się wydobyć z&nbsp;tej barwy delikatną
          beztroskę, rozładowywanie napięć, harmonię i&nbsp;równowagę. Afektywne,
          energetyczno-dynamiczne tony niebieskiego to jej język sztuki, który
          odsłania ukrytą prawdę o&nbsp;człowieku oraz o&nbsp;niej osobiście.
        </p>

        <p>
          W&nbsp;pracach Raczko oraz jej inspiracjach widać nawiązania do Pieta
          Mondriana. Artystka nie narzuca pracom zgeometryzowanego układu pionów
          czy poziomów, ale porządkuje pasy barw diagonalnie i&nbsp;horyzontalnie.
          Lubi niejako „jednoczyć formę i&nbsp;kolor", harmonizując ruch pędzla
          z&nbsp;działaniem samej barwy, co daje wizualne rytmy. W&nbsp;szczególny
          sposób uwidocznia się to w&nbsp;ostatnich pracach Raczko. Można tam
          dostrzec dynamiczne rozpracowanie barw dopełniających oraz budowanie
          harmonii nie tylko analogii, ale też opozycji i&nbsp;kontrastów. Zmieniła
          się skala i&nbsp;inwazyjność emocji bijących z&nbsp;prac. W&nbsp;mocnych,
          wręcz konturowych, pionowych i&nbsp;poziomych na zmianę, zamaszystych
          pociągnięciach pędzla daje się odszukać werwę twórczą i&nbsp;zmienność,
          niemal muzyczną, natężenia energii barwowej w&nbsp;obrazie. Tym razem
          obszary świetlne zostają odsłonięte, a&nbsp;światła zimne i&nbsp;ciepłe
          zbijają się w&nbsp;nierównej walce. Mimo wszystko na wielu obrazach
          „zwycięża" błękit i&nbsp;jego nasycone, połyskliwe światło. Obrazy te
          stają się pejzażem mentalnym nie tylko artysty, ale też widza. Może on
          odnaleźć swe elementarne emocje wyrażone w&nbsp;abstrakcyjnych formach
          opartych na sile i&nbsp;rytmie barw. Obrazy te zyskują wymiar
          nowoczesności, drapieżności śmiałości, bez tabu.
        </p>

        <p>
          Zauważony wcześniej w&nbsp;pracach Raczko fenomen błękitu łączy wszelkie
          przestrzenie wyobrażone i&nbsp;mentalne, i&nbsp;potwierdza naturę
          malarstwa, odkrywając własne obszary, ukryte w&nbsp;materii obrazu. Barwa
          ta prowadzi percepcję widza od zobaczonego zewnętrznie do wnętrza, które
          też można zobaczyć po odrzuceniu wielu zbędnych dodatków, dzięki czemu
          pozostaje najprawdziwsza, najpewniejsza tajemnica obrazu. Droga do niej
          zapisana w&nbsp;malarskiej materii barwy i&nbsp;światła
          w&nbsp;rozmigotanej, skrzącej, rozproszonej, zasnutej przestrzeni obrazu
          jest nową prawdą o&nbsp;rzeczywistości, która również dopiero zaistniała.
          Artystka, przekonana o&nbsp;słuszności wyboru, tożsama z&nbsp;objętą
          drogą, pozwala też sobie na otwieranie kręgu malarskich rozważań. Wśród
          gestów twardych, sprężystych, zmiękczonych, a&nbsp;wręcz zatartych,
          w&nbsp;świecie, w&nbsp;którym błękit królował jako jedyny argument
          w&nbsp;nieustającej dyskusji, pojawiają się barwy ciepłe wchodzące od
          razu z&nbsp;intensywny dialog z&nbsp;niebieskością. Wibracje
          temperaturowe nie tylko niosą dreszcze emocji, ale są też inwazyjne
          i&nbsp;zawłaszczające. W&nbsp;ostatnich obrazach Magda Raczko otworzyła
          przestrzeń swych błękitnych prac na zderzenie bogactwa jego możliwości
          z&nbsp;energetyzującą sferą czerwieni, oranżu, magenty, żółcieni,
          czystych i&nbsp;świetlistych barw.
        </p>

        <p>
          Do kręgów inspiracji zaliczyć można także twórczość ojca Artystki. Julian
          Henryk Raczko zainspirował swymi kosmicznymi przestrzeniami, walorowo
          rozpracowanymi, natężającymi się z&nbsp;geometryczną precyzją
          rozjaśnieniami. To na jego obrazach Artystka odczuła magię, totalność
          i&nbsp;autonomiczność oraz możliwości wrażeniowe punktowego źródła
          światła. U&nbsp;Magdy Raczko nastrojowe, miękkie półtony, zjawiskowe
          przeprucia światłem, przetarcia i&nbsp;dyskretne w&nbsp;swym oświetleniu
          pasy lub powidoki błękitu emanują, paradoksalnie, ciepłem, ukojeniem,
          intrygującą tajemnicą. Trudno też oprzeć się wrażeniu, że obrazy te
          intensywnie działają na wyobraźnię i&nbsp;niepokoją pozorami ruchu,
          kuszą dopatrywaniem się ukrytych warstw pod niebieskimi płaszczyznami,
          nigdy nie kryjącymi w&nbsp;pełni tego, co pod nimi. Eteryczne błękitne
          powietrze barwowe wypełniające przestrzeń na obrazie, swym ciekawym
          zawieszeniem pomiędzy szkicowym — i&nbsp;może nieraz przypadkowym —
          odwzorowaniem świata realnego, a&nbsp;abstrakcyjnymi przestrzeniami
          koloru sprawiają, że percepcja obrazu może przebiegać wciąż od nowa,
          a&nbsp;wędrówka po świecie widzialnym wymaga od odbiorcy aktywnego
          udziału, wpatrzenia się w&nbsp;dzieło i&nbsp;zespolenia z&nbsp;nim, zaś
          następnie znalezienia w&nbsp;sobie takich śladów mentalnych, które są
          wynikiem tej symbolicznej podróży.
        </p>

        <p>
          Błękitne, rozrzedzone mgły stonowanych szarości, pierzaste kłęby farby
          olejnej i&nbsp;ich pozory materialności oraz rozproszone, niekiedy
          migotliwe i&nbsp;tlące się w&nbsp;swej znikomości mgławicowe światło to
          przestrzeń twórcza i&nbsp;warsztat Artystki, która impresje codzienności
          oraz pogłębione wzruszenia intelektu przekazuje nie tylko poprzez
          malarskie medium, ale także materię słów, grę paradoksów ich znaczeń
          i&nbsp;uważne semantyczne zestrojenia słownych kompozycji.
        </p>

        <h2 className={styles.sectionHeading}>Poezja</h2>

        <p>
          W&nbsp;nietrwałych elementach przyrody, w&nbsp;której wszystko przemija
          i&nbsp;się odradza naprzemiennie, Magda Raczko umie odczytać potencjał
          wielkich możliwości. Jeden z&nbsp;wierszy przedstawia uschnięty liść,
          którego już nic nie czeka, jest on na granicy rozpadu, zdany na łaskę sił
          natury. Jednak wiatr, zamiast doprowadzić do jego zatracenia, staje się
          odradzającym natchnieniem, dzięki któremu balansujący na granicy
          istnienia, samotny liść może wznieść się wysoko. W&nbsp;przyrodzie, nawet
          w&nbsp;tak niepozornych jej przejawach, tkwią wielkie metafory ludzkiego
          losu. Ludzie pojmowali cykliczność i&nbsp;prawa natury jako gwarancję,
          że powstaną do lepszego życia w&nbsp;przyszłym świecie. Jednocześnie
          towarzyszyły im negatywistyczne przeczucia i&nbsp;wizje świata jako
          miejsca, gdzie tak naprawdę wszystko w&nbsp;końcu obumiera
          i&nbsp;przekwita, wszystko się rodzi, żeby umrzeć. Artystkę fascynuje ta
          zmienność i&nbsp;ulotność. Tka swój mikroświat z&nbsp;drobnych wrażeń,
          uważnie przygląda się detalom. Nieuchwytny niemal moment upadania kropli
          rosy z&nbsp;purpurowego liścia jest holistyczną metaforą nocnego chłodu
          spowijającego jak mara ziemię. Wątki o&nbsp;wanitatywnym zabarwieniu
          z&nbsp;delikatnością przewijają się przez cykle wierszy, na przykład
          obserwowane podczas prędkiej jazdy „Drzewa uciekają / Jak minione dni",
          a&nbsp;„wytrwałe świerszcze usiłują jeszcze „wskrzesić lato". Niepokoje
          i&nbsp;lęki przemijania pojawiają się w&nbsp;innym wierszu. Jest tam
          widmo jesieni, która dodaje nocy, choć jej samej jeszcze nawet nie widać.
        </p>

        <p>
          Poetka z&nbsp;czułością wczuwa się w&nbsp;przemijające elementy świata
          natury i&nbsp;w&nbsp;lapidarnych fabułach opowiada o&nbsp;nich, nadając
          im znamiona symbolu ludzkiego istnienia. W&nbsp;onirycznej konwencji
          opowiada o&nbsp;sztucznych ogniach, które „od gwiazd piękniejsze / Być
          chciały". Niczym Narcyz i&nbsp;Ikar, uległy własnym złudzeniom,
          a&nbsp;niespokojne szukanie w&nbsp;tafli wodnej jak w&nbsp;zwierciadle
          potwierdzenia ich upragnionej trwałości i&nbsp;uroku, stały się utopią —
          światła dalekich galaktyk okazały się najtrwalsze. Pragnienia, by
          przekraczać własne granice, mogą skazać człowieka na upadek z&nbsp;wysoka
          i&nbsp;odkrycie swej znikomości. Ale czy to oznacza, że nie warto
          próbować?
        </p>

        <p>
          Poetka używa synestezyjnych metafor („odcienie ciszy") i&nbsp;często
          posługuje się psychizacją oraz uosobieniem („Sad pijany opadłymi
          jabłkami", „mgły / Księżyc wysrebrzył. / Osiadły szronem /
          Odpocząć"). Wrażliwość malarska na światło, kolor i&nbsp;fakturę oraz
          zauważone poprzez nią obrazy detali, ulotnych zjawisk i&nbsp;chwil
          intrygującego piękna skłaniają Artystkę do odkrywania duchowej natury
          świata, utożsamiania się z&nbsp;jego magią, dobrocią, wtapiania się
          w&nbsp;jego rytm. Przykładem jest wiersz: „Wiatr, / Duszę wierzb
          odsłania / Delikatną srebrzystość liści". Zwykły powiew wiatru staje
          się czymś znaczącym, a&nbsp;jednocześnie baśniowym, zaś od zawieszenia
          na moment wzroku na migotliwym świetle muskającym błyszczące nerwy liści
          nastąpiło płynne przejście do wrażeń metafizycznych, pozazmysłowych.
          Witalność przyrody i&nbsp;ukryty w&nbsp;niej nieodparty pęd życia bywają
          silniejsze niż rytmiczność naturalnych przemian: mimo że „Dzień odpłynął
          / z&nbsp;nurtem rzeki (...) / Słowiki / budziły gwiazdy".
        </p>

        <p>
          W&nbsp;jednym z&nbsp;wierszy podmiot liryczny zauważa, że wrażliwość na
          malarskość i&nbsp;walory estetyczne stają się grą wyobraźni. Na tle
          „ceglanych murów katedr" widać było morze, kamyki, ludzi. Elementy te,
          nie sprzężając się ze sobą, istniały obok siebie: „Historia ludzi",
          „Historia morza". Kobieta obserwująca te nadmorskie typowe obrazy
          w&nbsp;pewnych chwili zauważyła, że wszystko, co beztrosko obserwowała,
          jest połączone optyką wzajemnych uczuć: „Historia morza i&nbsp;ludzi /
          ceglane serduszko / wyrzeźbione przez fale". Każdy neutralny dotychczas
          element krajobrazu nasycił się jednostkowym konkretem.
          Z&nbsp;powszechnego, niezmiennego pejzażu wyłonił się intymny świat
          ludzkich emocji, ciepła i&nbsp;sentymentu, ulotny i&nbsp;niepowtarzalny.
          Pomiędzy introwertycznymi stanami cichego zachwytu pełnego estetycznych
          doznań, w&nbsp;wierszach przewija się subtelnie motyw drugiej osoby,
          której obecność może urealnić postrzegany świat. Tak jak na obrazach
          błękity chronią pewien eteryczny kosmos ulotności i&nbsp;dogasającego
          światła, tak pod feerią barw i&nbsp;szczerym podziwem nad naturą
          przemyka się tęsknota za drugą obecnością drugiej osoby jako wiernego
          towarzysza afirmacji świata i&nbsp;współdzielenia subiektywnego piękna
          „tańczących strzępów mgły".
        </p>

        <p>
          W&nbsp;niektórych swoich utworach Poetka dzieli się subiektywnymi opisami
          dobrze znanych każdemu stanów duszy i&nbsp;umysłu. Trafna
          i&nbsp;delikatna w&nbsp;swej sile jest definicja samotności: „To takie
          uczucie / Kiedy myśli / Odbijają się bez echa / A&nbsp;serce źle się
          czuje / Na swoim starym miejscu". Twórca w&nbsp;szczególny sposób
          rozumie i&nbsp;traktuje samotność. Można odnieść wrażenie, że stanowi
          ona nie tyle atrybut artystycznej pracy nad utworem, ale buduje niszę do
          pełnego skupienia odbioru świata językiem sztuki. Dlatego refleksy
          odosobnionego stanu postrzegania można dostrzec w&nbsp;wielu wierszach.
          Mimo że Poetka początkowo, z&nbsp;nutą żalu stwierdza: „Czemu ciągle
          się / zachwycam / tym, czego nikt / nie dostrzega", to potem opowiada
          o&nbsp;radości z&nbsp;niepowtarzalnego postrzegania świata i&nbsp;ciągłego
          zadziwiania się jego obiektami. W&nbsp;myśl stwierdzenia, że przedmiot
          zależy od podmiotu, Artystka stwierdza nawet, że nieraz osobliwy
          charakter elementów realności zależy od jej sposobu postrzegania.
          Wreszcie granice się zacierają i&nbsp;podmiot liryczny pozwala się
          niejako pochłonąć naturze, utożsamia się z&nbsp;nią, współodczuwa jej
          nastroje i&nbsp;ponosi odpowiedzialność za swój sposób postrzegania
          i&nbsp;kreowania świata, godząc się być czasem „ciemną chmurą / czasem
          tęczą".
        </p>

        <p>
          Szczególnym nośnikiem osobliwości procesu twórczego jako postrzegania
          i&nbsp;kumulowania doświadczeń są językowe metafory. Odsłaniają one
          świat natury, w&nbsp;którym mgła zawłaszcza kształty i&nbsp;kontury,
          z&nbsp;dębów zostają cienie, ale w&nbsp;tym spektaklu znikania trwa na
          swoim miejscu nadal czytelny „rysunek pajęczyn". A&nbsp;gdy zachodzi
          wiosenne słońce, z&nbsp;obiektów przyrody pozostają tylko plamy fioletu
          i&nbsp;czerni, a&nbsp;świat zatraca się bez światła. Jednak
          w&nbsp;ostatnich mglistych promieniach „pulsuje żółtą linią" piach,
          a&nbsp;jego kryształki posłusznie odbijają światło, dopóki tylko jest.
        </p>

        <p>
          O&nbsp;konstruktywnej samotności mówi też wiersz „[Myślałam, że mogę
          wiele...]". Poetka wspomina o&nbsp;wielu planach, pragnieniach, celach,
          które z&nbsp;jakiegoś powodu się nie zrealizowały. Być może były wynikiem
          przeświadczenia, że wszystko, co tylko człowiek zapragnie, zawsze może
          osiągnąć, życie jednak zweryfikowało tę typowo ludzką zuchwałość —
          i&nbsp;pozostały tylko „Rozmowy z&nbsp;Bogiem". Stwórca poucza poprzez
          to, co znikome, niekiedy niedoceniane jak wróble na płocie czy krople
          rosy, wschody i&nbsp;zachody słońca. Jednak te franciszkańskie z&nbsp;ducha
          mądrości nie powodują, że podmiot liryczny kryguje się przed Boskim
          majestatem. Ze szczerością za to mówi, że „nie zawsze rozumie". Pomiędzy
          pewnością siebie, dumą i&nbsp;ambicją wypełniającymi ludzkie spojrzenie
          na siebie i&nbsp;świat, a&nbsp;perspektywą doskonałości, wieczności
          i&nbsp;mądrości Boskiej jest mądrość płynąca z&nbsp;księgi natury. Jest
          także zwykłe ludzkie zagubienie, szczery głos człowieka, który mimo swych
          chęci nie potrafi wykorzystać w&nbsp;swym skomplikowanym życiu tego
          Boskiego, wyczekiwanego i&nbsp;potrzebnego przekazu. Czy zmotywuje to
          człowieka do tym usilniejszych poszukiwań wiedzy i&nbsp;prawdy?
        </p>

        <p>
          Jedną ze złotych myśli przekazuje urokliwy w&nbsp;swej prostocie
          i&nbsp;głębi wiersz: „Żeby naprawdę / Czymś się zachwycić / Trzeba /
          Zapomnieć / O&nbsp;sobie". Przerzutnie charakteryzujące ten liryk
          pomagają ważyć każde słowo i&nbsp;zastanowić się nad siłą jego przekazu.
          Wiersz stanowi jednocześnie intrygujące credo bycia artystą, który,
          posługując się ewangeliczną metaforą, musi umieć „zaprzeć się samego
          siebie" lub inaczej zatracić się, by wnikliwie i&nbsp;w&nbsp;pełni
          zobaczyć i&nbsp;przeżyć otaczające go obrazy oraz wyrazić te stany
          w&nbsp;swojej sztuce.
        </p>

        <p>
          W&nbsp;miniaturach poetyckich pisanych zazwyczaj wierszem białym przyroda
          współistnieje z&nbsp;myślą symboliczną, kulturową i&nbsp;religijną.
          Poetka utrwala wzruszenia trafnymi, obrazowymi, oszczędnymi metaforami.
          Poranna mgła może być kroplami krwi na cierniach, łzami na wierzbie
          i&nbsp;diamentami na płatkach róży. Artystka z&nbsp;subtelnością
          odwołuje się do myśli religijnej. Z&nbsp;nadzieją, też powściągliwie
          i&nbsp;taktownie dzieli się swoimi duchowymi spostrzeżeniami,
          skojarzeniami i&nbsp;zadumami, spacerując o&nbsp;zmierzchu, świcie,
          obserwując naturę jako niepowtarzalny, tak bliski mentalnie istocie
          ludzkiej artefakt. W&nbsp;fakcie, że zamysł i&nbsp;słowo stały się
          początkiem powstania wszechrzeczy, dostrzega przejmujący fakt.
          Jednocześnie człowiek ujęty w&nbsp;karby czasu musi oczekiwać
          „w&nbsp;nieskończoności oceanu / Na znak". Tak powszechne dzieła
          stworzenia jak drzewa i&nbsp;chmury, mgły i&nbsp;stawy, pory roku,
          dzień i&nbsp;noc okazują się niezwykle ważne, choć bez obcowania
          z&nbsp;nimi na co dzień nie odczuwa się tej więzi tak mocno.
          A&nbsp;jednak poetka nadaje im wymiar egzystencjalny i&nbsp;wyraża
          wdzięczność Bogu za „mgieł jesiennych dymy, / W&nbsp;których myśl
          odpoczywa".
        </p>

        <p>
          „Życie i&nbsp;śmierć / kropla wody na rozgrzaną blachę kuchni" — oto
          synteza status quo człowieka. Poetyckie odwołania do przyrody w&nbsp;myśl
          zasady, że w&nbsp;niej nic nie ginie, są nośnikiem nadziei. Oparcie, gdy
          nachodzą trudne myśli, poetka znajduje w&nbsp;akcentowaniu trwania
          i&nbsp;właściwym rozłożeniu akcentów: „Ludzie nie odchodzą / tylko my /
          już ich nie mamy". Kres istnieje tylko z&nbsp;określonej perspektywy
          patrzenia. Nie umierają także słowa, a&nbsp;ich moc trwania jest ogromna
          i&nbsp;odpowiedzialność za nie bardzo duża: „Każde słowo / raz
          powiedziane / zawsze będzie żyło". Nauka o&nbsp;prawdzie istnienia
          zawarta jest też w&nbsp;drzewach. Są one piękne i&nbsp;pełne mocy,
          majestatu. Ich wytrwała moc bierze się stąd, że każde drzewo „nauczyło
          się / umierać i&nbsp;odradzać". W&nbsp;innym wierszu drzewa jawią się
          jako nieukrywające niczego, mężnie i&nbsp;godnie trwające w&nbsp;swej
          nadszarpniętej przez trudy życia formie. Są połamane, popękane, ale mimo
          to całymi sobą wyczekują wiosny.
        </p>

        <p>
          Poetka stara się odnaleźć w&nbsp;najprostszych pulsach natury otuchę
          i&nbsp;pokrzepienie. Gorąca ziemia, łąka tętniąca życiem drobnych,
          pracowitych istot to podpory dla ludzkich marzeń o&nbsp;trwałości
          i&nbsp;sensowności istnienia, a&nbsp;symboliczny „Cień został /
          w&nbsp;olchach / nad Liwcem", co oznacza, że mroki ludzkiej duszy
          pozostały zgubione daleko, nie ma do nich już dostępu i&nbsp;ulecą
          niedługo jak cień. W&nbsp;wierszach Raczko świat stwarza się wciąż na
          nowo. Proste i&nbsp;codzienne zjawiska przyrodnicze nabierają nowych
          kontekstów i&nbsp;wywołują opozycyjne skojarzenia w&nbsp;umyśle
          obserwatora. Poetka jest wyczulona na ciszę, która w&nbsp;wierszach jest
          pełna określonych barw, tajemniczego bezkresu i&nbsp;spokojnie
          trwającego, ukrytego życia: „Bezkresna biel pól, / fioletowe koronki
          cieni, (...) I&nbsp;tylko kra / płynąca meandrami rzeki / zna mowę /
          zimowej ciszy". Przyroda jest uspokojeniem i&nbsp;aż zadziwia swym
          błogim spokojem, utula człowieka i&nbsp;omamia zapachami, upaja światłem,
          ciepłem, kolorem. Raczko maluje słowne obrazy natury. Mgły i&nbsp;chmury
          wiszące na niebie i&nbsp;odbite w&nbsp;stawie mieszają się „rzeźbione
          falami" jak na morzu i&nbsp;„spijają resztki słońca". Szpaki zostają
          w&nbsp;ciszy pochłonięte przez mgliste szarości, a&nbsp;śnieg nie jest
          biały jak drzewa ani szary jak niebo, ale właśnie niebieski. Autorka nie
          opatruje tych wrażeń komentarzem refleksji — traktuje je jak słowne
          obrazy, które nie wymagają dopowiadania i&nbsp;tłumaczenia swego sensu.
          Nieopatrzone komentarzem intelektualnym, niedopowiedziane do końca
          słowne miniatury mają formę kilku równoważników, a&nbsp;ich
          skondensowana treść otwiera przed odbiorcą nienachalny przekaz ukryty
          między słowami.
        </p>

        <h2 className={styles.sectionHeading}>Instalacja i&nbsp;performance</h2>

        <p>
          Wzajemne relacje między przedmiotami i&nbsp;obiektami oparte na
          kontraście, z&nbsp;wykorzystaniem gry kontekstów można zaobserwować
          w&nbsp;instalacjach Magdy Raczko. Urokiem tego środka wypowiedzi
          artystycznej jest fakt, że z&nbsp;nieograniczoną swobodną daje się
          wykorzystać jako medium każdą rzecz oraz przekuć ją w&nbsp;artefakt
          i&nbsp;nośnik treści ukrytych w&nbsp;dowolnej przestrzeni. Jednym
          z&nbsp;takich symbolicznych wydarzeń był happening-misterium pt.
          „Spektakl trzech żywiołów" z&nbsp;5&nbsp;czerwca 2004&nbsp;r. podczas
          obchodów 700-lecia Liwa, w&nbsp;przestrzeni wieży i&nbsp;murów obronnych
          XV-wiecznego zamku. Aby poruszyć problematykę związaną z&nbsp;istotą
          kultury i&nbsp;temat jej związków z&nbsp;czasem, Magda Raczko oraz Roman
          Postek wykorzystali transową muzykę Laurie Anderson, dramę, ogniste
          światło oraz wiersz mówiony przez Artystkę na tle nocnego pejzażu
          podzamcza. Jednak najważniejszym elementem były trzy identyczne, większe
          od człowieka, prostokątne, błękitne ramy. Jedna z&nbsp;nich stała na
          ziemi, druga na murach, a&nbsp;trzecia — wisiała na wieży.
          W&nbsp;mrocznej scenerii wypełnionej niepokojącą muzyką
          i&nbsp;dramatycznym światłem odsłaniały swe istnienie po kolei dwie
          niebieskie ramy. Trzecia z&nbsp;nich, ta na wieży, zaistniała
          w&nbsp;ciszy, w&nbsp;silnym, punktowym świetle jako symboliczny trzeci
          znak, składowa dwóch pozostałych. Stworzyło to symboliczną drogę, zaś
          przestrzeń pomiędzy łąką pod murami a&nbsp;samą wieżą zamku nabrała
          uniwersalnego znaczenia. Po ostatnich słowach wiersza autorstwa Magdy
          Raczko i&nbsp;czytanego przez nią: „Nieba jest więcej na ziemi",
          wygaśnięciu świateł i&nbsp;zamilknięciu muzyki widzowie mogli poddać
          interpretacji to, co widzieli, a&nbsp;czemu sprzyjała wymowna, nasycona
          przesłaniem, nastrojowa, finalna cisza.
        </p>

        <p>
          Czym były trzy żywioły wspomniane w&nbsp;tytule akcji? Sama Artystka
          wyjaśniła, że są to trzy rytmy życia, też cykle istnienia od narodzin
          poprzez dojrzałość do starości i&nbsp;śmierci, które są rozumiane nie
          tylko w&nbsp;kontekście biologizmu, ale też kulturowej witalności
          i&nbsp;poczucia związków z&nbsp;historią. W&nbsp;przestrzeni
          średniowiecznego zamku, którego ruiny wtopiły się w&nbsp;okoliczny
          pejzaż, błękitna, jakby nieziemska rama to symbol w&nbsp;sensie ogólnym
          cywilizacji, jak i&nbsp;konkretniej jej twórczej, kreacyjnej siły. To
          także znak świadomości kulturowej, ciągłości tradycji, mitów, kontynuacji
          myśli poprzednich pokoleń. Rama stojąca na ziemi w&nbsp;przestrzeni
          podzamcza przekazuje myśl, że „kultura nie może być oderwana od
          świadomości istnienia biologicznego" (M.&nbsp;Raczko). Rama na murze,
          zawieszona niejako w&nbsp;przestrzeni wysoko, oznacza ludzką potrzebę
          twórczości, siłę sprawczą działań artystów, zaś trzecia błękitna rama,
          która wisiała na ścianie zamku, w&nbsp;sensie metaforycznym najbliżej
          jego wielowiekowego bagażu historii, jest symbolicznym łącznikiem
          pomiędzy dawnością a&nbsp;dniem dzisiejszym i&nbsp;wyraża potrzebę,
          wręcz obowiązek kontynuacji myśli przeszłości w&nbsp;czasach
          współczesnych.
        </p>

        <p>
          Warto zauważyć, iż rolę symboliczną i&nbsp;odkrywającą mądrość symboli
          pełniło światło. To, które oświetliło ramę na ziemi, było niesione przez
          zakapturzone postaci z&nbsp;pochodniami, jakby wysłanników przeszłości,
          zaś rama na wieży została oświetlona długim, nowoczesnym światłem
          z&nbsp;reflektorów. Wypełniająca wszystko muzyka lub refleksyjna cisza,
          błękit i&nbsp;powtarzalność ramy, której trzy sztuki zostały ułożone
          w&nbsp;jednej linii w&nbsp;bliskości i&nbsp;dali zamku, zawsze jednak
          widocznego i&nbsp;trwającego w&nbsp;czasie, oraz światło — wszystkie te
          komponenty symbolicznie spajały świat historii i&nbsp;teraźniejszości,
          natury i&nbsp;kultury, pierwotnych sił biologii i&nbsp;wznoszących się
          w&nbsp;wymiar bardziej astralny wykreowany świat sztuki. Odrzucenie
          jednego z&nbsp;tych elementów, czyli wyłączenie z&nbsp;przestrzeni
          oświetlania jednej z&nbsp;ram, pozostawiłoby wyrwę w&nbsp;tożsamości
          kulturowej, potrzebie twórczości artystycznej oraz obcowania ze sztuką
          oraz w&nbsp;świadomej egzystencji człowieka, który pozbawiony choćby
          jednej z&nbsp;ram, być może utraciłby łączność z&nbsp;pozostałymi
          wartościami i&nbsp;żyłby z&nbsp;poczuciem niezrozumienia biologicznej
          natury swego bytu, nieuchwytności jego wymiaru metafizycznego,
          z&nbsp;symboliczną zbiorową amnezją, bez poczucia wspólnoty
          z&nbsp;historią i&nbsp;ludźmi, którzy kiedyś żyli tam, gdzie teraz on.
        </p>

        <p>
          W&nbsp;okolicy zamku w&nbsp;Liwie zaistniała także instalacja Magdy
          Raczko i&nbsp;Romana Postka pt. „Czas poezji mierzony zegarem
          słonecznym" (2007), a&nbsp;rok później pojawiła się w&nbsp;parku Centrum
          Polskiej Rzeźby w&nbsp;Orońsku. Formę stanowił zegar słoneczny
          z&nbsp;drewnianym, błękitnym palem skierowanym ku Gwieździe Polarnej,
          czyli wskazówką-gnomonem. Ten stary rodzaj przyrządu astronomicznego
          łączy oś ziemską z&nbsp;centrum wszechświata. Tarczą w&nbsp;płaszczyźnie
          horyzontu jest ziemia ograniczona dwunastoma polnymi głazami, na których
          zostały wyryte wiersze Magdy Raczko. Cień na podstawie położenia słońca
          wskazuje czas na tej kamiennej podziałce — czas poezji, czas sztuki. Gdy
          stanie się w&nbsp;sferze cienia gnomona, czyli tam, gdzie styka się
          sfera sacrum symbolizowana przez działanie światła i&nbsp;profanum, czyli
          tarcza ziemi, można odczytać dany wiersz. W&nbsp;taki sposób poezja
          staje się składową wyznaczanego przez błękitny gnomon wnętrza czasu,
          osadzoną w&nbsp;wymiarze metafizycznym, tak ważnym dla natury człowieka,
          który w&nbsp;świecie mechanizacji i&nbsp;uniformizacji gubi zdolność do
          odczuwania tego, co ponadzmysłowe i&nbsp;nieempiryczne, duchowe. Ulotny
          z&nbsp;natury cień zyskuje ważny wymiar kosmiczny, a&nbsp;jego
          nietrwałość nie burzy szansy na odczucie trwałości idei, wzruszenia
          i&nbsp;inspiracji pięknem podczas czytania kolejnych wierszy. Czas jest
          przestrzenią sztuki i&nbsp;może pokazać siłę jej trwania oraz nieść
          niezniszczalne wartości. Metaforyczny błękit gnomonu, jego symboliczne
          osadzenie między kosmosem a&nbsp;płaszczyzną ziemi, na której tkwią
          nieforemne kamienie, wyraża — poprzez wiersze na głazach — pragnienie, by
          oderwać się od tej przyziemności i&nbsp;choćby na chwilę, czyli na tyle,
          co trwa w&nbsp;danym miejscu cień, dotknąć czegoś podstawowego
          i&nbsp;pierwotnego, co poruszy wnętrze i&nbsp;zostawi trwały ślad, tak
          namacalny jak ciężkie, polne kamienie. W&nbsp;świecie kulturowych symboli
          kamienie to z&nbsp;jednej strony martwe opoki bez duszy, zaś z&nbsp;drugiej
          osobliwości o&nbsp;indywidualnych, niepowtarzalnych cechach, zaklęte
          w&nbsp;bryle i&nbsp;uwięzione personifikowane kosmiczne znaki. Toporność
          materii i&nbsp;oczywistość kamienia przypomina trwałość faktu, jakim jest
          upływ czasu, ale wiersz wyryty na każdym z&nbsp;głazów niczym dekalog
          sztuki wskazywany przez ślizgający się po murawie nietrwały cień
          prowadzi człowieka po morzu życia w&nbsp;wędrówce w&nbsp;nieznane, dając
          mu choć trochę oderwania od przyziemności i&nbsp;materialności istnienia,
          a&nbsp;przenosząc jego myśli w&nbsp;świat idei i&nbsp;wartości
          wychodzących poza racjonalne „szkiełko i&nbsp;oko". Instalacja niesie
          też ze sobą przesłanie, by podjąć wysiłek i&nbsp;wygospodarować czas na
          nadawanie prawdziwych sensów temu, co przemija i&nbsp;odchodzi. Dzięki
          sztuce, w&nbsp;tym poezji można skupić się na płynącym
          w&nbsp;nieskończoność czasie i&nbsp;nadać znaczenia temu, co mija,
          a&nbsp;w&nbsp;czym może służyć poezja. To właśnie daje możliwość rozwoju
          duchowego, który zamiast biegu w&nbsp;nieznane za mrzonkami i&nbsp;pogonią
          za zmysłami, delikatnie ewoluuje w&nbsp;zaciszu skupienia, refleksji,
          niespiesznej myśli, zadumy.
        </p>

        <p>
          Instalacja „Czas poezji mierzony zegarem słonecznym" daje się odnieść
          także do sposobu przebiegania procesu twórczego, odbiorczego i&nbsp;samej
          istoty poezji. Jest ona eteryczna, ożywa na moment podczas czytania,
          słuchania, mówienia, ale nie zależy od odbiorcy, trwa niezmiennie
          w&nbsp;przestrzeni czasu jako system symboli, znaków, form, kontekstów.
          „Żyje" jak każdy tekst w&nbsp;sferze kultury, jest nieprzemijająca, jeśli
          broni jej ważna myśl mogąca być mentalną bezcenną perłą i&nbsp;symbolicznym
          zegarem dla człowieka.
        </p>

        <p>
          W&nbsp;instalacji „Energia myśli" w&nbsp;Galerii „Kaplica" pojawia się
          wyrażony poprzez malarskie medium błękit, który ma wywołać werwę
          i&nbsp;nerw natchnienia niezbędny do stworzenia poetyckiej
          rzeczywistości. W&nbsp;instalacji można dostrzec przejście od pisarskich
          szkiców i&nbsp;improwizacji do przekucia myśli w&nbsp;słowo, które jest
          w&nbsp;stanie udźwignąć ciężar kreacji. Narodziny tekstu mogą wymagać
          dekonstrukcji starych form myślowych i&nbsp;ich mentalnych wizualizacji.
          Nasycona semantycznie myśl rodzi się z&nbsp;romantycznego otwarcia umysłu
          na to, co przed „oczyma duszy". Słowa pochłaniają myśli, niejako je
          łamią i&nbsp;określają w&nbsp;swoich granicach, zamykają
          i&nbsp;konkretyzują we własnych polach znaczeniowych. Dzieło artystyczne
          zawsze w&nbsp;swoim obrębie ewokuje energię oraz odsłania krytyczne
          napięcia, przeciwstawne siły i&nbsp;przeciążenia oraz blaknące emocje czy
          wrażenia, które artysta zebrał i&nbsp;zamknął w&nbsp;kształt.
          Pochłaniające myśli słowa tworzą nurt zapisanych kartek, które zostają
          uporządkowane poprzez formę stabilną i&nbsp;określoną. Tytułowa „energia
          myśli" objawia się więc w&nbsp;cegłach postawionych dłuższymi bokami na
          podłodze i&nbsp;wychodzących w&nbsp;przestrzeń widza. Wydobywają się one
          z&nbsp;konstruktu składającego się z&nbsp;naruszonej, wręcz uszkodzonej
          formy kominka, stykającej się w&nbsp;pewnym miejscu ze sferą
          transcendentalną symbolizowaną poprzez błękitne, abstrakcyjne prace
          malarskie wiszące na ścianach. Widać też wysypujący się z&nbsp;wnętrza
          kominka stos kartek z&nbsp;wierszami Magdy Raczko. Kominek ma
          w&nbsp;swym otoczeniu stojące i&nbsp;wiszące obrazy oraz epitafia.
          Wędrówka od formy kojarzonej z&nbsp;cegłami do abstrakcyjnych sensów
          słów lecących diagonalnie ku duchowości oraz podróż odwrotna, od nieba
          poprzez ograniczające idee słowa aż do zmysłowego konkretu ciążącego ku
          sferze przyziemności, to nieustanna ludzka odyseja wymagająca wysiłku,
          wytrwałości i&nbsp;poznawczego niepokoju.
        </p>

        <p>
          Poprzez instalacje Magda Raczko odnosi się do naszego kulturowego
          człowieczeństwa, artystycznej szlachetności i&nbsp;godności tworzenia.
          Mówi językiem symboli i&nbsp;metafor oraz zawieszeniem między konkretem
          i&nbsp;abstrakcją. Unaocznia, jak bardzo ważne są formy i&nbsp;porządki,
          w&nbsp;których koegzystujemy, i&nbsp;jak istotne są struktury, które
          budujemy często z&nbsp;determinacją i&nbsp;kierując się wewnętrznym
          zamiłowaniem do porządku, rozumnego sensu i&nbsp;wnikliwością podczas
          poszukiwania tego, co nienamacalne. W&nbsp;subiektywnym komentarzu do
          rzeczywistości Artystka opowiada się za nami jako wrażliwymi na upływ
          czasu, z&nbsp;atencją zaglądającymi w&nbsp;przeszłość, wnikliwymi
          obserwatorami codzienności, porządkującymi swe metafizyczne impresje
          z&nbsp;twórczym niepokojem wobec tego, co tu i&nbsp;teraz, ale też ze
          stoickim spokojem o&nbsp;przyszłość. W&nbsp;odwołaniu do powszechnych
          wrażeń, widoków zaczerpniętych z&nbsp;letnich wyjazdów i&nbsp;obrazów
          natury z&nbsp;skali makro i&nbsp;mikro Artystka stwarza swój
          wyimaginowany świat wrażeń, uniesień, obrazów i&nbsp;spostrzeżeń,
          których głębszą interpretację pozostawia odbiorcy i&nbsp;przechowuje we
          własnym wnętrzu jako skarby swej codzienności. Zauważalny jest
          w&nbsp;tym procesie odbioru świata zaplanowany i&nbsp;wytrwale
          podejmowany wysiłek: każdy wiersz został opatrzony dokładną datą, zaś
          obrazy malarskie jako najróżniejsze wariacje zaistnienia błękitu są
          świadectwem uporządkowania warsztatowego i&nbsp;świadomej, wnikliwej,
          przemyślanej pracy. W&nbsp;korespondencji prac wizualnych i&nbsp;słownych
          można odczuć pokorę twórczą oraz poszukiwanie swoich artystycznych
          korzeni w&nbsp;naturze, która inspiruje i&nbsp;odradza wciąż na nowo
          osobisty świat sensualny i&nbsp;duchowy. W&nbsp;tej powstałej
          wyobrażeniowej rzeczywistości, pełnej ciepła, uważności i&nbsp;delikatnej
          zadumy stanowiącej zaplecze mentalne artystki wypełnieniem nie są ból,
          chaos czy niestabilność materialistycznej i&nbsp;powierzchownej
          w&nbsp;swej refleksji cywilizacji współczesnego człowieka jako istoty
          zdezintegrowanej i&nbsp;zatracającej swe duchowe pierwiastki.
        </p>
      </div>

      <footer className={styles.attribution}>Weronika Zasada-Stańska</footer>
    </article>
  );
}
