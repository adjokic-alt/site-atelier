import type { InspirationItem } from "./inspiration";
import { inspirationItems } from "./inspiration";

type Text = Pick<InspirationItem, "title" | "description" | "altText">;

/** Serbian titles, descriptions and alt texts for every inspiration picture (by id). */
const sr: Record<string, Text> = {
  "scandi-living-daylight": { title: "Dnevna soba puna dnevnog svetla", description: "Svetlo drvo, meki tekstil i jasno kretanje kroz prostor.", altText: "Skandinavska dnevna soba sa mnogo dnevnog svetla, svetlim drvetom i mekim tekstilom" },
  "scandi-kitchen-storage": { title: "Mirna kuhinja sa skrivenim ostavama", description: "Funkcionalni stolarski elementi u svetloj, uzdržanoj paleti materijala.", altText: "Skandinavska kuhinja sa skrivenim ostavama, svetlim frontovima i prirodnom paletom" },
  "scandi-bedroom-linen": { title: "Meki slojevi u spavaćoj sobi", description: "Prirodni lan, prigušene boje i malo vizuelne buke.", altText: "Skandinavska spavaća soba sa prirodnim lanom, prigušenim bojama i slojevitim tekstilom" },
  "modern-living-geometry": { title: "Arhitektonski dnevni prostor", description: "Jasna geometrija, ugrađeno osvetljenje i promišljeni tamni akcenti.", altText: "Moderni dnevni prostor sa izraženom arhitektonskom geometrijom, neutralnim tonovima i tamnim akcentima" },
  "minimalist-bath-calm": { title: "Toplo minimalističko kupatilo", description: "Tihe površine, meko svetlo i pažljivo skrivene ostave.", altText: "Toplo minimalističko kupatilo sa prirodnim površinama, mekim svetlom i skrivenim ostavama" },
  "industrial-kitchen-raw": { title: "Profinjena industrijska kuhinja", description: "Sirova tekstura uravnotežena preciznom stolarijom i toplim svetlom.", altText: "Industrijska kuhinja sa sirovim teksturama, tamnim frontovima i toplim ugrađenim svetlom" },
  "luxury-bedroom-layered": { title: "Slojeviti detalji spavaće sobe", description: "Elementi po meri, taktilne površine i uzdržan kontrast.", altText: "Luksuzna spavaća soba sa detaljima po meri, taktilnim površinama i uzdržanim kontrastom" },
  "rustic-living-natural": { title: "Prirodna rustična dnevna soba", description: "Drvo, mineralne teksture i topla, proživljena atmosfera.", altText: "Rustična dnevna soba sa vidljivim drvetom, mineralnim teksturama i toplom atmosferom" },
  "mediterranean-outdoor": { title: "Senovita veza sa spoljnim prostorom", description: "Teksturisane površine, filtrirano svetlo i lak prelaz napolje.", altText: "Mediteranski spoljni prostor u hladu, sa teksturisanim površinama i filtriranim svetlom" },
  "scandi-living-sofa": { title: "Otvorena dnevna soba", description: "Lanena sofa, hrast i meko popodnevno svetlo.", altText: "Skandinavska dnevna soba sa lanenom ugaonom sofom, hrastovim stočićem i vratima ka terasi" },
  "scandi-kitchen-oak": { title: "Kuhinja od svetlog hrasta", description: "Frontovi od svetlog drveta i miran radni pult.", altText: "Skandinavska kuhinja sa elementima od svetlog hrasta i mekim dnevnim svetlom" },
  "scandi-bedroom-calm": { title: "Mirna spavaća soba", description: "Bela posteljina, vuneni prekrivač i papirna lampa.", altText: "Skandinavska spavaća soba sa belom lanenom posteljinom, vunenim prekrivačem i papirnom lampom" },
  "scandi-workspace": { title: "Mali radni kutak", description: "Sto pored prozora, ništa više.", altText: "Skandinavski radni kutak sa hrastovim stolom pored svetlog prozora" },
  "modern-living-fire": { title: "Moderna dnevna soba", description: "Niska sofa, tamna stolarija i dug pogled.", altText: "Moderna dnevna soba sa niskom sofom, tamnom stolarijom i linearnim kaminom" },
  "modern-kitchen-island": { title: "Kuhinja sa kamenim ostrvom", description: "Monolitno ostrvo i frontovi bez ručki.", altText: "Moderna kuhinja sa ostrvom od žilavog kamena i ravnim frontovima" },
  "modern-dining": { title: "Moderna trpezarija", description: "Linearne lampe iznad tamnog drvenog stola.", altText: "Moderna trpezarija sa tamnim drvenim stolom i linearnim visećim lampama" },
  "modern-bathroom": { title: "Moderno kupatilo", description: "Kameni lavabo, tuš bez kade i tiho svetlo.", altText: "Moderno kupatilo sa kamenim lavaboom, tuš kabinom i samostojećom kadom" },
  "industrial-living-brick": { title: "Dnevna soba sa zidom od opeke", description: "Koža, crni čelik i topla šinska rasveta.", altText: "Industrijska dnevna soba sa zidom od opeke, kožnom sofom i crnim čeličnim policama" },
  "industrial-kitchen-concrete": { title: "Kuhinja od betona i opeke", description: "Sivi frontovi, otvorene police i hrastov bar.", altText: "Industrijska kuhinja sa elementima u izgledu betona, zidom od opeke i hrastovim šankom" },
  "industrial-bedroom-brick": { title: "Spavaća soba sa zidom od opeke", description: "Tamni lan, kožna klupa i stakleni ormar.", altText: "Industrijska spavaća soba sa zidom od opeke, tamnom posteljinom i ormarom od crnog čelika i stakla" },
  "industrial-bathroom-dark": { title: "Kupatilo od tamnog kamena", description: "Crne armature i toplo skriveno svetlo.", altText: "Industrijsko kupatilo sa tamnim kamenim pločicama, crnim armaturama i osvetljenim nišama" },
  "rustic-living-plaster": { title: "Dnevna soba sa zidovima od maltera", description: "Sto od recikliranog hrasta i lan na sve strane.", altText: "Rustična dnevna soba sa zidovima od krečnog maltera, stočićem od recikliranog hrasta i lanenom sofom" },
  "rustic-kitchen-dining": { title: "Hrastova kuhinja i trpezarija", description: "Seoski sto u gradskom stanu.", altText: "Rustična kuhinja i trpezarija sa hrastovim elementima i stolom od recikliranog drveta" },
  "rustic-bedroom-linen": { title: "Lanena spavaća soba", description: "Izgužvan lan, hrastova klupa i tepih od jute.", altText: "Rustična spavaća soba sa lanenom posteljinom, hrastovom klupom i tepihom od jute" },
  "rustic-bathroom-stone": { title: "Kupatilo od toplog kamena", description: "Bež kamen, hrastov lavabo i bronzane slavine.", altText: "Rustično kupatilo sa bež kamenim pločicama, hrastovim lavaboom i bronzanim armaturama" },
  "mediterranean-balcony": { title: "Terasa sa maslinom", description: "Sto od travertina i ugrađena klupa.", altText: "Mediteranska terasa sa maslinom, stolom od travertina i ugrađenom lanenom klupom" },
  "luxury-living-stone": { title: "Dnevna soba sa kamenim zidom", description: "Buklé, tamni hrast i žilav kameni zid.", altText: "Luksuzna dnevna soba sa zidom od žilavog kamena, buklé foteljom i tamnim hrastom" },
  "luxury-kitchen-marble": { title: "Kuhinja sa mermernim ostrvom", description: "Kamen koji se preliva preko ivica i mesingane lampe.", altText: "Luksuzna kuhinja sa mermernim ostrvom i mesinganim visećim lampama" },
  "luxury-bedroom-walnut": { title: "Spavaća soba od oraha i kamena", description: "Osvetljen kameni zid iza kreveta.", altText: "Luksuzna spavaća soba sa osvetljenim kamenim zidom, panelima od oraha i staklenim ormarom" },
  "luxury-open-plan": { title: "Otvorena trpezarija", description: "Kameni sto između kuhinje i dnevne sobe.", altText: "Luksuzna otvorena trpezarija sa tamnim kamenim stolom i drvenom pregradom od letvica" },
};

export function localizeInspiration<T extends InspirationItem>(item: T, locale: "en" | "sr"): T {
  return locale === "sr" && sr[item.id] ? { ...item, ...sr[item.id] } : item;
}

/** All inspiration pictures in the visitor's language. */
export function getInspirationItems(locale: "en" | "sr"): InspirationItem[] {
  return locale === "sr" ? inspirationItems.map((i) => localizeInspiration(i, locale)) : inspirationItems;
}
