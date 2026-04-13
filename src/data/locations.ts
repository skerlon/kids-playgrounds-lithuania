export interface Location {
  id: string;
  title: string;
  description: string;
  city: string;
  address: string;
  lat: number;
  lng: number;
  category: string;
  highlights: string[];
  ageRange: string;
  sourceUrl: string;
  imageUrl: string;
}

export const locations: Location[] = [
  // 1. Vilnius. Šv. Florijono skvero žaidimų aikštelė
  {
    id: "vilnius-florijono-skveras",
    title: "Šv. Florijono skvero žaidimų aikštelė",
    description:
      "2026 m. pavasarį Vilniuje duris atvėrė viena laukiamiausių žaidimų aikštelių. Ji išskirtinė tuo, kad yra vienintelė tokia Lietuvoje – ugniagesių tematikos. Aikštelėje vaikai susipažįsta su dūmų detektoriais, gaisrinės automobilio siurblio sekcijos modeliu, gesintuvais ir hidrantais.",
    city: "Vilnius",
    address: "Švitrigailos g. 18, Vilnius (Naujamiestis)",
    lat: 54.6744,
    lng: 25.283,
    category: "Teminė aikštelė",
    highlights: [
      "Ugniagesių tematika",
      "Vienintelė tokia Lietuvoje",
      "Edukacinė",
      "Naujamiestis",
    ],
    ageRange: "2–12 m.",
    sourceUrl: "https://kelionessuvaikais.lt/florijono-sveras-vilniuje/",
    imageUrl:
      "https://images.unsplash.com/photo-1587691592099-24045f35ab40?w=800&q=80",
  },
  // 2. Kaunas. Kovo 11-osios parko žaidimų aikštelė
  {
    id: "kaunas-kovo-11-parkas",
    title: "Kovo 11-osios parko žaidimų aikštelė",
    description:
      "Nauja įspūdingiausia žaidimų aikštelė Lietuvoje atnaujintame Kovo 11-osios parke. Aikštelėje rasite šokinėjimo grindis, laipiojimo konstrukcijas, labirintą ir lauko laipiojimo sieną. Vaikų žaidimų zonos padengtos specialia apsaugine guminė danga.",
    city: "Kaunas",
    address: "Kovo 11-osios g., Kaunas",
    lat: 54.9062,
    lng: 23.9726,
    category: "Miesto parkas",
    highlights: [
      "Šokinėjimo grindys",
      "Labirintas",
      "Laipiojimo siena",
      "Atnaujintas parkas",
    ],
    ageRange: "2–14 m.",
    sourceUrl:
      "https://kelionessuvaikais.lt/kovo-11-osios-parkas-kaune-nauja-ispudingiausia-zaidimu-aikstele-lietuvoje/",
    imageUrl:
      "https://images.unsplash.com/photo-1596997000103-e597b3ca50df?w=800&q=80",
  },
  // 3. Širvintos. Žaidimų aikštelė miesto centre
  {
    id: "sirvintos-miesto-centre",
    title: "Žaidimų aikštelė Širvintų miesto centre",
    description:
      "Nauja, moderni ir erdvi vaikų žaidimų aikštelė Širvintų miesto centre. Aikštelė suprojektuota taip, kad žaisti joje būtų smagu ir saugu įvairaus amžiaus vaikams. Modernus įrangos dizainas, saugi danga ir estetiškas aplinkos sutvarkymas.",
    city: "Širvintos",
    address: "I. Šeiniaus g. 5, Širvintos",
    lat: 55.04,
    lng: 24.9588,
    category: "Žaidimų aikštelė",
    highlights: [
      "Nauja moderni aikštelė",
      "Saugi danga",
      "Miesto centras",
      "Šalia Širvintos skulptūros",
    ],
    ageRange: "1–12 m.",
    sourceUrl:
      "https://zemelapis.kelionessuvaikais.lt/lankytinos-vietos/zaidimu-aikstele-sirvintu-miesto-centre/",
    imageUrl:
      "https://images.unsplash.com/photo-1566454825481-9c31bd88e498?w=800&q=80",
  },
  // 4. Jonava. Žaidimų aikštelė Rimkų mikrorajone
  {
    id: "jonava-rimku-mikrorajonas",
    title: "Žaidimų aikštelė Rimkų mikrorajone",
    description:
      "Naujasis Rimkų parkas Jonavoje – 2,6 ha teritorija tarp Chemikų, P. Vaičiūno ir A. Kulviečio gatvių. Parke įrengtos vaikų žaidimų aikštelės, takai ir funkcinės poilsio erdvės – ramaus ir aktyvaus poilsio zonos su vaikų žaidimų ploteliais.",
    city: "Jonava",
    address: "Chemikų g., Rimkų mikrorajonas, Jonava",
    lat: 55.0734,
    lng: 24.2803,
    category: "Miesto parkas",
    highlights: [
      "Rimkų parkas",
      "Ramaus ir aktyvaus poilsio zonos",
      "Pėsčiųjų-dviračių takai",
    ],
    ageRange: "2–12 m.",
    sourceUrl:
      "https://kelionessuvaikais.lt/geriausios-zaidimu-aiksteles-lietuvoje/",
    imageUrl:
      "https://images.unsplash.com/photo-1611329857570-f02f340e7378?w=800&q=80",
  },
  // 5. Palanga. Vaikų parkas
  {
    id: "palanga-vaiku-parkas",
    title: "Vaikų parkas Palangoje",
    description:
      "Turbūt didžiausia žaidimų aikštelė Lietuvoje! Didžiulis vaikų parkas prie jūros su įvairiausiais atrakcionais ir įranga. Čia rasite supynių, čiuožyklų, laipiojimo konstrukcijų ir dar daugiau pramogų visai šeimai.",
    city: "Palanga",
    address: "Šermukšnių g. 1, Palanga",
    lat: 55.9168,
    lng: 21.0686,
    category: "Vaikų parkas",
    highlights: [
      "Didžiausia Lietuvoje",
      "Prie jūros",
      "Atrakcionai",
      "Visos amžiaus grupės",
    ],
    ageRange: "1–12 m.",
    sourceUrl:
      "https://kelionessuvaikais.lt/geriausios-zaidimu-aiksteles-lietuvoje/",
    imageUrl:
      "https://images.unsplash.com/photo-1564429238961-bf8ee0a91613?w=800&q=80",
  },
  // 6. Kaunas. Kalniečių parko žaidimų aikštelės
  {
    id: "kaunas-kalnieciu-parkas",
    title: "Kalniečių parko žaidimų aikštelės",
    description:
      "Kalniečių parkas – viena mylimiausių Kauno žaliųjų erdvių. Parke rasite daugybę žaidimų aikštelių vaikams, didelį tvenkinį su fontanu, riedlenčių zoną, parkūro erdvę ir kavinę. Puiki vieta šeimos poilsiui.",
    city: "Kaunas",
    address: "P. Lukšio g., Kaunas",
    lat: 54.9249,
    lng: 23.9491,
    category: "Miesto parkas",
    highlights: [
      "Tvenkinys su fontanu",
      "Riedlenčių zona",
      "Parkūro erdvė",
      "Kavinė",
    ],
    ageRange: "1–16 m.",
    sourceUrl:
      "https://kelionessuvaikais.lt/geriausios-zaidimu-aiksteles-lietuvoje/",
    imageUrl:
      "https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=800&q=80",
  },
  // 7. Utena. Vyžuonos parkas
  {
    id: "utena-vyzuonos-parkas",
    title: "Vyžuonos parkas Utenoje",
    description:
      "Didžiausias parkas Utenoje palei Vyžuonos upę. Parke atnaujinta vaikų žaidimų aikštelė su modernia įranga. Puiki vieta pasivaikščiojimui ir aktyviam laisvalaikiui su vaikais ežerų krašte.",
    city: "Utena",
    address: "Vyžuonos parkas, Utena",
    lat: 55.502,
    lng: 25.597,
    category: "Miesto parkas",
    highlights: [
      "Palei Vyžuonos upę",
      "Atnaujinta aikštelė",
      "Ežerų kraštas",
    ],
    ageRange: "2–12 m.",
    sourceUrl:
      "https://kelionessuvaikais.lt/geriausios-zaidimu-aiksteles-lietuvoje/",
    imageUrl:
      "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=800&q=80",
  },
  // 8. Zarasai. Zaraso ežero pakrantė
  {
    id: "zarasai-zaraso-ezero-pakrante",
    title: "Zaraso ežero pakrantė",
    description:
      "Zaraso ežero pakrantės takas Zarasuose – 1,4 km ilgio takas palei ežerą su vaikų žaidimų aikštele, fontanu, pontoniniais laiptais, valčių nuomos punktu ir paspirtukų bei dviračių nuoma. Galima eiti pėsčiomis arba dviračiu.",
    city: "Zarasai",
    address: "D. Bukonto g., Zarasai",
    lat: 55.7282,
    lng: 26.2443,
    category: "Ežero pakrantė",
    highlights: [
      "1,4 km takas",
      "Prie ežero",
      "Fontanas",
      "Dviračių nuoma",
    ],
    ageRange: "2–14 m.",
    sourceUrl:
      "https://kelionessuvaikais.lt/geriausios-zaidimu-aiksteles-lietuvoje/",
    imageUrl:
      "https://images.unsplash.com/photo-1596997000103-e597b3ca50df?w=800&q=80",
  },
  // 9. Panevėžys. Kultūros ir poilsio parkas
  {
    id: "panevezys-kulturos-parkas",
    title: "Kultūros ir poilsio parkas",
    description:
      "Modernizuotas kultūros ir poilsio parkas Panevėžyje su didelėmis vaikų žaidimų aikštelėmis, sporto zonomis ir pasivaikščiojimo takais. Parke galima rasti pramogų visai šeimai bet kuriuo metų laiku.",
    city: "Panevėžys",
    address: "Parko g., Panevėžys",
    lat: 55.7367,
    lng: 24.3198,
    category: "Kultūros parkas",
    highlights: [
      "Modernizuotas parkas",
      "Sporto zonos",
      "Pasivaikščiojimo takai",
    ],
    ageRange: "2–16 m.",
    sourceUrl:
      "https://kelionessuvaikais.lt/geriausios-zaidimu-aiksteles-lietuvoje/",
    imageUrl:
      "https://images.unsplash.com/photo-1680458842485-dc02b04e4856?w=800&q=80",
  },
  // 10. Biržai. Žaidimų aikštelė prie Evangelikų reformatų bažnyčios
  {
    id: "birzai-reformatu",
    title: "Žaidimų aikštelė prie Evangelikų reformatų bažnyčios",
    description:
      "Moderni žaidimų aikštelė šalia Evangelikų reformatų bažnyčios Biržuose su interaktyviu daugiafunkciniu YALP MEMO žaidimų įrenginiu. Aikštelė įrengta tarp Reformatų ir J. Bielinio gatvių, siūlo unikalią žaidimų patirtį.",
    city: "Biržai",
    address: "Reformatų g., Biržai",
    lat: 56.2005,
    lng: 24.757,
    category: "Žaidimų aikštelė",
    highlights: [
      "YALP MEMO interaktyvus įrenginys",
      "Prie istorinės bažnyčios",
      "Moderni įranga",
    ],
    ageRange: "3–12 m.",
    sourceUrl:
      "https://kelionessuvaikais.lt/geriausios-zaidimu-aiksteles-lietuvoje/",
    imageUrl:
      "https://images.unsplash.com/photo-1566454825481-9c31bd88e498?w=800&q=80",
  },
  // 11. Visaginas. Žaidimų miestelis
  {
    id: "visaginas-zaidimu-miestelis",
    title: "Žaidimų miestelis Visagine",
    description:
      "Spalvingas žaidimų miestelis su didelėmis ir ryškiomis laipiojimo konstrukcijomis, čiuožyklomis ir smėlio dėžėmis po atviru dangumi. Šalia Visagino ežero paplūdimio – puiki vieta šeimos poilsiui.",
    city: "Visaginas",
    address: "Vilties g., Visaginas",
    lat: 55.5973,
    lng: 26.434,
    category: "Žaidimų miestelis",
    highlights: [
      "Prie ežero",
      "Spalvingos konstrukcijos",
      "Ekstremalaus sporto aikštelė šalia",
    ],
    ageRange: "2–14 m.",
    sourceUrl:
      "https://kelionessuvaikais.lt/geriausios-zaidimu-aiksteles-lietuvoje/",
    imageUrl:
      "https://images.unsplash.com/photo-1564429238961-bf8ee0a91613?w=800&q=80",
  },
  // 12. Alytus. Jaunimo parkas
  {
    id: "alytus-jaunimo-parkas",
    title: "Jaunimo parkas Alytuje",
    description:
      "Viena moderniausių žaidimų aikštelių Lietuvoje! Čia rasite įvairias sūpynes, tinklinio aikštelę, riedučių-riedlenčių zoną, dviračių kalnelių trasas (pumptrack) – viena jų didžiausia Lietuvoje, 8 metrų aukščio aktyvumų bokštą, edukacinius stendus, batutus ir balanso platformas.",
    city: "Alytus",
    address: "Parko g. 4, Alytus",
    lat: 54.396,
    lng: 24.045,
    category: "Jaunimo parkas",
    highlights: [
      "8 m aktyvumų bokštas",
      "Didžiausias pumptrack Lietuvoje",
      "Batutai",
      "Tinklinio aikštelė",
    ],
    ageRange: "3–18 m.",
    sourceUrl:
      "https://kelionessuvaikais.lt/geriausios-zaidimu-aiksteles-lietuvoje/",
    imageUrl:
      "https://images.unsplash.com/photo-1611329857570-f02f340e7378?w=800&q=80",
  },
  // 13. Klaipėda. Poilsio parkas
  {
    id: "klaipeda-poilsio-parkas",
    title: "Poilsio parkas Klaipėdoje",
    description:
      "Sporto, pramogų ir poilsio erdvė Klaipėdoje su 18 aktyvaus laisvalaikio zonų. Vaikų aikštelėje – spalvingos ilgaamžės dangos, daugiafunkciniai aktyvumų bokštai su tunelių čiuožyklomis, sūpynėmis ir balanso elementais, lavinančiais motoriką.",
    city: "Klaipėda",
    address: "H. Manto g. 77, Klaipėda",
    lat: 55.694,
    lng: 21.149,
    category: "Poilsio parkas",
    highlights: [
      "18 aktyvaus laisvalaikio zonų",
      "Tunelių čiuožyklės",
      "Futbolas, krepšinis, tenisas",
      "Mini golfas",
    ],
    ageRange: "1–18 m.",
    sourceUrl:
      "https://zemelapis.kelionessuvaikais.lt/lankytinos-vietos/klaipedos-poilsio-parkas/",
    imageUrl:
      "https://images.unsplash.com/photo-1587691592099-24045f35ab40?w=800&q=80",
  },
  // 14. Vilnius. Perkūno skveras
  {
    id: "vilnius-perkuno-skveras",
    title: "Perkūno skveras Vilniuje",
    description:
      "Pašilaičių rajone sukurta erdvė, padalinta į 7 zonas su sporto ir laisvalaikio erdvėmis, šachmatų stalais, hamakomis, pikniko zona su griliumi ir puikia vaikų žaidimų aikštele nuo 1 metų amžiaus su smėlio dėžėmis, čiuožyklomis, laipynėmis, karuselėmis ir sūpynėmis.",
    city: "Vilnius",
    address: "Perkūnkiemio g., Pašilaičiai, Vilnius",
    lat: 54.713,
    lng: 25.2215,
    category: "Skveras",
    highlights: [
      "7 zonos",
      "Šachmatų stalai",
      "Hamakos",
      "Pikniko zona su griliu",
    ],
    ageRange: "1–12 m.",
    sourceUrl:
      "https://zemelapis.kelionessuvaikais.lt/lankytinos-vietos/perkuno-skveras-ir-zaidimu-aikstele/",
    imageUrl:
      "https://images.unsplash.com/photo-1596997000103-e597b3ca50df?w=800&q=80",
  },
  // 15. Nemenčinė. Įspūdingiausias Pump track Lietuvoje
  {
    id: "nemencine-pump-track",
    title: "Įspūdingiausias Pump track Lietuvoje",
    description:
      "Viena maloniausių vietų šalia Vilniaus su dengta žaidimų zona, minkšta danga, daugybe sūpynių ir čiuožyklų. Šalia – didžiulis pumptrack, turbūt didžiausias Vilniaus regione, ir riedlenčių parkas. Puikiai prižiūrima ir aptverta erdvė.",
    city: "Nemenčinė",
    address: "Vėtrungės g. 34, Nemenčinė",
    lat: 54.7572,
    lng: 25.4701,
    category: "Pump track",
    highlights: [
      "Didžiausias pump track regione",
      "Dengta žaidimų zona",
      "Riedlenčių parkas",
      "Šalia Vilniaus",
    ],
    ageRange: "3–16 m.",
    sourceUrl:
      "https://zemelapis.kelionessuvaikais.lt/lankytinos-vietos/nemencines-zaidimu-aikstele-ir-laisvalaikio-erdve/",
    imageUrl:
      "https://images.unsplash.com/photo-1680458842485-dc02b04e4856?w=800&q=80",
  },
];
