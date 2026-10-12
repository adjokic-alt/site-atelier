import type { StyleId } from "@/types";
import { styleStudios, type StyleStudioData } from "./style-studios";
import { materialBoards, type MaterialSample } from "./material-boards";

type StudioText = {
  name: string;
  tagline: string;
  heroAlt: string;
  principles: [string, string][];
  palette: string[];
  bestForTitle: string;
  bestFor: string[];
  strengthsTitle: string;
  strengths: string[];
  cautionsTitle: string;
  cautions: string[];
  pairings: string[];
  board: [string, string][];
};

/** Serbian wording for each Style Studio page and its material board. */
const sr: Record<StyleId, StudioText> = {
  scandinavian: {
    name: "Skandinavski",
    tagline: "Svetlo, mirno i namerno jednostavno.",
    heroAlt: "Skandinavska dnevna soba sa lanenom ugaonom sofom, hrastovim stočićem i vratima ka terasi",
    principles: [
      ["Prirodno dnevno svetlo", "Svetle površine i uzdržane zavese pomažu da dnevno svetlo dopre dublje u dom."],
      ["Svetlo drvo", "Svetli hrast i jasen unose toplinu, a da manje prostorije ne deluju teško."],
      ["Meki tekstil", "Lan, vuna i taktilne presvlake uravnotežuju čistu arhitekturu i udobnost."],
      ["Jasno kretanje", "Manje, a bolje postavljenih komada čuva prolaz, pristup ostavama i svakodnevne navike."],
    ],
    palette: ["Topla bela", "Meki pesak", "Svetli hrast", "Kamena siva", "Šumska siva"],
    bestForTitle: "Pravi domovi i praktične navike.",
    bestFor: ["Mali i srednji evropski stanovi", "Otvorene kuhinje sa dnevnim boravkom", "Porodični domovi kojima treba praktično odlaganje", "Renoviranja sa malo prirodnog svetla"],
    strengthsTitle: "Zašto ovaj pravac traje.",
    strengths: ["Manje prostorije deluju mirnije i otvorenije", "Koristi trajne i lako dostupne materijale", "Prilagođava se kako se menjaju nameštaj i porodica", "Spaja uzdržanost i svakodnevnu udobnost"],
    cautionsTitle: "Kako izbeći ravan, bezličan rezultat.",
    cautions: ["Ne koristite samo svetle bež tonove bez tamnijih akcenata", "Ne uklanjajte korisne ostave u ime minimalizma", "Dodajte teksture i toplo svetlo da prostor ne deluje klinički"],
    pairings: ["Minimalistički", "Moderni"],
    board: [["Svetli hrast", "Podovi, stolarija"], ["Prirodni lan", "Zavese, presvlake"], ["Vuna", "Tepisi, prekrivači"], ["Brušeni kamen", "Kuhinja, kupatilo"]],
  },
  modern: {
    name: "Moderni",
    tagline: "Arhitektonska jasnoća sa promišljenim kontrastom.",
    heroAlt: "Moderna dnevna soba sa niskom sofom, tamnom stolarijom i linearnim kaminom",
    principles: [
      ["Snažna geometrija", "Jasne horizontalne i vertikalne linije daju prostoru strukturu i vizuelnu sigurnost."],
      ["Ugrađeni detalji", "Rasveta, odlaganje i tehnologija planiraju se kao deo arhitekture."],
      ["Slojeviti neutralni tonovi", "Kamen, sivo-bež, antracit i drvo stvaraju dubinu bez oslanjanja na dekoraciju."],
      ["Kontrolisan kontrast", "Tamni akcenti prizemljuju svetlije površine i vode pogled kroz prostor."],
    ],
    palette: ["Kreda", "Sivo-bež", "Taupe", "Antracit", "Mastilo"],
    bestForTitle: "Strukturirani prostori sa arhitektonskom namerom.",
    bestFor: ["Stanovi otvorenog tipa", "Domovi u novogradnji", "Renoviranja sa ugradnim nameštajem", "Klijenti koji vole jasan vizuelni red"],
    strengthsTitle: "Zašto moderni stil deluje zaokruženo.",
    strengths: ["Stvara jasnu hijerarhiju prostora", "Lako prihvata ugrađeno odlaganje i tehnologiju", "Nosi kontrast bez nereda", "Funkcioniše u malim i velikim prostorima"],
    cautionsTitle: "Kako da ostane prijatan za život.",
    cautions: ["Izbegavajte previše tvrdih površina bez akustične mekoće", "Moderno ne znači hladno ili jednobojno", "Zadržite ljudske proporcije i udoban nameštaj"],
    pairings: ["Skandinavski", "Industrijski"],
    board: [["Žilavi krečnjak", "Ostrva, zidovi"], ["Mikrocement", "Zidovi bez spojeva"], ["Tamno drvo", "Visoki elementi"], ["Zatamnjeni metal", "Uređaji, okviri"]],
  },
  minimalist: {
    name: "Minimalistički",
    tagline: "Tihi prostori bez ičeg suvišnog.",
    heroAlt: "Toplo minimalističko kupatilo sa tihim prirodnim površinama i skrivenim ostavama",
    principles: [
      ["Vizuelna uzdržanost", "Mali broj oblika i završnih obrada stvara mir, a da prostor ne deluje prazno."],
      ["Skrivene ostave", "Svakodnevne stvari imaju logično mesto iza čistih, ugrađenih frontova."],
      ["Taktilne površine", "Kreč, drvo, lan i kamen sprečavaju da jednostavnost deluje sterilno."],
      ["Precizne proporcije", "Kada je dekoracije manje, razmera, razmak i poravnanje dobijaju na težini."],
    ],
    palette: ["Slonovača", "Pesak", "Pečurka", "Kamen", "Zemlja"],
    bestForTitle: "Domovi kojima trebaju mir i bolja organizacija.",
    bestFor: ["Manji stanovi", "Kupatila i kuhinje", "Klijenti osetljivi na vizuelni nered", "Domovi sa dobrim odlaganjem po meri"],
    strengthsTitle: "Zašto svedeno može delovati velikodušno.",
    strengths: ["Svakodnevica deluje uređenije", "Stvara bezvremenu vizuelnu osnovu", "Ističe kvalitet i proporcije", "Lako se održava"],
    cautionsTitle: "Kako izbeći sterilan minimalizam.",
    cautions: ["Ne izbacujte korisne stvari ni lični karakter", "Izbegavajte ravne bele površine bez teksture", "Planirajte budžet za preciznu stolariju i detalje"],
    pairings: ["Skandinavski", "Moderni"],
    board: [["Krečni malter", "Zidovi"], ["Svetli hrast", "Skrivena stolarija"], ["Brušeni krečnjak", "Radne ploče"], ["Brušena bronza", "Slavine, detalji"]],
  },
  industrial: {
    name: "Industrijski",
    tagline: "Sirov karakter, profinjen za pravi život.",
    heroAlt: "Industrijska dnevna soba sa zidom od opeke, kožnom sofom i crnim čeličnim policama",
    principles: [
      ["Iskrena konstrukcija", "Opeka, beton i vidljiva konstrukcija daju karakter kada se koriste sa namerom."],
      ["Tamni metal", "Zatamnjeni čelik i tanki okviri daju jasnoću i snažan vizuelni ritam."],
      ["Toplo svetlo", "Slojevito ćilibarno svetlo uravnotežuje tamne materijale da prostor ne deluje strogo."],
      ["Profinjena stolarija", "Precizno odlaganje i radne površine ne daju sirovoj teksturi da postane haos."],
    ],
    palette: ["Beton", "Rđa", "Umbra", "Grafit", "Crna"],
    bestForTitle: "Prostori kojima prijaju tekstura i jasnoća.",
    bestFor: ["Otvorene kuhinje", "Stanovi u stilu lofta", "Domovi sa vidljivom konstrukcijom", "Klijenti koji vole tamnije, prizemljene prostore"],
    strengthsTitle: "Zašto industrijski stil može biti sofisticiran.",
    strengths: ["Odmah daje prostoru identitet kroz materijale", "Dobro ide uz trajne završne obrade", "Stvara snažan kontrast i dubinu", "Tehnički detalji postaju deo dizajna"],
    cautionsTitle: "Kako izbeći tematski izgled.",
    cautions: ["Izbegavajte fabričke dekorativne klišee", "Uravnotežite tvrde materijale tekstilom i akustikom", "Koristite toplo svetlo da atmosfera ne bude hladna"],
    pairings: ["Moderni", "Rustični"],
    board: [["Stara opeka", "Akcentni zidovi"], ["Zatamnjeni čelik", "Ormari, okviri"], ["Beton", "Frontovi, podovi"], ["Nauljeni hrast", "Stolovi, radne ploče"]],
  },
  luxury: {
    name: "Luksuzni",
    tagline: "Bogati materijali, izraženi sa merom.",
    heroAlt: "Luksuzna dnevna soba sa zidom od žilavog kamena, buklé foteljom i tamnim hrastom",
    principles: [
      ["Detalji po meri", "Stolarija po meri i pažljivo rešeni spojevi čine da prostor deluje promišljeno."],
      ["Taktilni slojevi", "Somot, vuna, drvo i kamen stvaraju dubinu kroz dodir i suptilan odsjaj."],
      ["Kontrolisano svetlo", "Indirektno, radno i dekorativno svetlo zajedno oblikuju atmosferu."],
      ["Uzdržan kontrast", "Nekoliko bogatih tamnih tonova prizemljuje meke površine, a ne preplavljuje prostor."],
    ],
    palette: ["Biser", "Šampanj", "Taupe", "Šuma", "Tamnozelena"],
    bestForTitle: "Prostorije u kojima detalj i atmosfera znače najviše.",
    bestFor: ["Glavne spavaće sobe", "Reprezentativni dnevni prostori", "Renoviranja sa mnogo detalja", "Klijenti koji ulažu u stolariju po meri"],
    strengthsTitle: "Zašto uzdržanost deluje luksuznije.",
    strengths: ["Stvara izrazito lično rešenje", "Nagrađuje kvalitet materijala i zanat", "Gradi atmosferu kroz svetlo", "Funkcioniše i sa svetlim i sa tamnim paletama"],
    cautionsTitle: "Kako izbeći vizuelni višak.",
    cautions: ["Ne kombinujte previše upečatljivih obrada", "Proporcije su važnije od dekorativnih detalja", "Reflektujuće materijale koristite promišljeno"],
    pairings: ["Moderni", "Minimalistički"],
    board: [["Žilavi kamen", "Akcentne površine"], ["Tamno drvo", "Paneli, stubovi"], ["Brušeni mesing", "Slavine, rasveta"], ["Vuneni buklé", "Upečatljive fotelje"]],
  },
  rustic: {
    name: "Rustični",
    tagline: "Prirodna tekstura i toplina proživljenog doma.",
    heroAlt: "Rustična dnevna soba sa zidovima od krečnog maltera, stolom od recikliranog hrasta i lanenom sofom",
    principles: [
      ["Prirodno drvo", "Vidljiva godova, čvorovi i razlike donose toplinu i osećaj trajnosti."],
      ["Mineralna tekstura", "Kamen, krečni malter i ručno rađene površine daju dubinu bez ukrasa."],
      ["Zanatski detalji", "Stolarija, keramika i tkani predmeti unose ljudsku meru i posebnost."],
      ["Opuštena udobnost", "Široka sedišta i trajan tekstil čine da prostor deluje živo, a ne izloženo."],
    ],
    palette: ["Kreda", "Glina", "Terakota", "Drvo", "Zemlja"],
    bestForTitle: "Domovi kojima trebaju toplina i karakter materijala.",
    bestFor: ["Porodične dnevne sobe", "Kuće na selu i u predgrađu", "Stanovi kojima treba toplina", "Renoviranja sa originalnim detaljima"],
    strengthsTitle: "Zašto prirodna nesavršenost funkcioniše.",
    strengths: ["Deluje udobno i pristupačno", "Materijali lepo stare", "Daje mesta lokalnom i ručno rađenom", "Stvara snažnu čulnu toplinu"],
    cautionsTitle: "Kako da rustično ostane savremeno.",
    cautions: ["Izbegavajte tematsku seosku dekoraciju", "Uravnotežite teško drvo svetlom i otvorenim prostorom", "Koristite uzdržanu paletu materijala"],
    pairings: ["Skandinavski", "Industrijski"],
    board: [["Reciklirani hrast", "Stolovi, klupe"], ["Krečni malter", "Zidovi"], ["Debeli lan", "Posteljina, zavese"], ["Juta", "Tepisi"]],
  },
  mediterranean: {
    name: "Mediteranski",
    tagline: "Filtrirano svetlo i lak izlazak napolje.",
    heroAlt: "Mediteranska terasa sa maslinom, stolom od travertina i ugrađenom lanenom klupom",
    principles: [
      ["Filtrirano sunce", "Duboki otvori, drvene pregrade i meke zavese oblikuju svetlo, a ne samo ga pojačavaju."],
      ["Svetli kamen", "Neprekinute mineralne površine povezuju unutrašnjost sa terasama i baštama."],
      ["Spoj unutra i napolju", "Poravnati podovi, široki otvori i zasenčeni pragovi čine spoljni prostor upotrebljivim."],
      ["Ručno rađena tekstura", "Kreč, keramika i tkana vlakna daju dubinu kroz suptilnu nepravilnost."],
    ],
    palette: ["Krečnjak", "Pesak", "Maslina", "Morska siva", "Mineral"],
    bestForTitle: "Domovi u kojima su svetlo i život napolju važni.",
    bestFor: ["Domovi sa terasama ili balkonima", "Svetli stanovi kojima treba mekoća", "Renoviranja u toploj klimi", "Otvoreni dnevni prostori i trpezarije"],
    strengthsTitle: "Zašto mediteranski stil deluje bez napora.",
    strengths: ["Prirodno povezuje unutrašnjost sa spoljnim prostorom", "Koristi trajne mineralne materijale", "Opušten je, a ne nemaran", "Lepo podnosi jako dnevno svetlo"],
    cautionsTitle: "Kako izbeći klišee letovališta.",
    cautions: ["Izbegavajte tematsku plavo-belu dekoraciju", "Lukove koristite samo gde ih arhitektura podržava", "Uravnotežite teksturisane površine čistim detaljima"],
    pairings: ["Minimalistički", "Rustični"],
    board: [["Travertin", "Stolovi, podovi"], ["Krečni premaz", "Zidovi"], ["Maslinovo drvo", "Ugrađena sedišta"], ["Ručno rađena glina", "Saksije, posude"]],
  },
};

/** A Style Studio in the visitor's language. */
export function getStyleStudio(id: StyleId, locale: "en" | "sr"): StyleStudioData {
  const base = styleStudios[id];
  if (locale !== "sr") return base;
  const t = sr[id];
  return {
    ...base,
    name: t.name,
    tagline: t.tagline,
    heroAlt: t.heroAlt,
    principles: base.principles.map((p, i) => (t.principles[i] ? { ...p, title: t.principles[i][0], description: t.principles[i][1] } : p)),
    palette: base.palette.map((c, i) => ({ ...c, name: t.palette[i] ?? c.name })),
    bestForTitle: t.bestForTitle,
    bestFor: t.bestFor,
    strengthsTitle: t.strengthsTitle,
    strengths: t.strengths,
    cautionsTitle: t.cautionsTitle,
    cautions: t.cautions,
    pairings: base.pairings.map((p, i) => ({ ...p, name: t.pairings[i] ?? p.name })),
  };
}

/** A style's material board in the visitor's language. */
export function getMaterialBoard(id: StyleId, locale: "en" | "sr"): MaterialSample[] {
  const base = materialBoards[id] ?? [];
  if (locale !== "sr") return base;
  return base.map((m, i) => ({ ...m, name: sr[id].board[i]?.[0] ?? m.name, use: sr[id].board[i]?.[1] ?? m.use }));
}
