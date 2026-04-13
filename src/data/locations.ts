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
  {
    id: "palanga-vaiku-parkas",
    title: "Vaikų parkas Palangoje",
    description:
      "Turbūt didžiausia žaidimų aikštelė Lietuvoje! Didžiulis vaikų parkas prie jūros su įvairiausiais atrakcionais ir įranga. Čia rasite supynių, čiuožyklų, laipiojimo konstrukcijų ir dar daugiau pramogų visai šeimai.",
    city: "Palanga",
    address: "Šermukšnių g. 1, Palanga",
    lat: 55.9168,
    lng: 21.0686,
    category: "Žaidimų aikštelė",
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
      "https://images.unsplash.com/photo-1596997000103-e597b3ca50df?w=800&q=80",
  },
  {
    id: "visaginas-zaidimu-miestelis",
    title: "Žaidimų miestelis Visagine",
    description:
      "Spalvingas žaidimų miestelis su didelėmis ir ryškiomis laipiojimo konstrukcijomis, čiuožyklomis ir smėlio dėžėmis po atviru dangumi. Šalia Visagino ežero paplūdimio – puiki vieta šeimos poilsiui.",
    city: "Visaginas",
    address: "Vilties g., Visaginas",
    lat: 55.5973,
    lng: 26.434,
    category: "Žaidimų aikštelė",
    highlights: [
      "Prie ežero",
      "Spalvingos konstrukcijos",
      "Ekstremalaus sporto aikštelė šalia",
    ],
    ageRange: "2–14 m.",
    sourceUrl:
      "https://kelionessuvaikais.lt/geriausios-zaidimu-aiksteles-lietuvoje/",
    imageUrl:
      "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=800&q=80",
  },
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
  {
    id: "nemencine-laisvalaikio-erdve",
    title: "Žaidimų aikštelė ir laisvalaikio erdvė Nemenčinėje",
    description:
      "Viena maloniausių vietų šalia Vilniaus su dengta žaidimų zona, minkšta danga, daugybe sūpynių ir čiuožyklų. Šalia – didžiulis pumptrack ir riedlenčių parkas. Puikiai prižiūrima ir aptverta erdvė.",
    city: "Nemenčinė",
    address: "Vėtrungės g. 34, Nemenčinė",
    lat: 54.7572,
    lng: 25.4701,
    category: "Laisvalaikio erdvė",
    highlights: [
      "Dengta žaidimų zona",
      "Pumptrack",
      "Riedlenčių parkas",
      "Šalia Vilniaus",
    ],
    ageRange: "1–16 m.",
    sourceUrl:
      "https://zemelapis.kelionessuvaikais.lt/lankytinos-vietos/nemencines-zaidimu-aikstele-ir-laisvalaikio-erdve/",
    imageUrl:
      "https://images.unsplash.com/photo-1680458842485-dc02b04e4856?w=800&q=80",
  },
  {
    id: "klaipeda-sajudzio-parkas",
    title: "Sąjūdžio parkas Klaipėdoje",
    description:
      "8,3 hektarų parkas su muzikos instrumentais vaikams, pritaikytais ir žmonėms su judėjimo negalia. Čia rasite vieną didžiausių BMX, riedlenčių ir riedučių parkų Lietuvoje, sporto zoną, pėsčiųjų ir dviračių takus, mini amfiteatrą bei vandens telkinius su tilteliais.",
    city: "Klaipėda",
    address: "Laukininkų g. 30, Klaipėda",
    lat: 55.6852,
    lng: 21.1505,
    category: "Miesto parkas",
    highlights: [
      "Muzikos instrumentai",
      "BMX parkas",
      "Pritaikyta neįgaliesiems",
      "Mini amfiteatras",
    ],
    ageRange: "1–18 m.",
    sourceUrl:
      "https://kelionessuvaikais.lt/geriausios-zaidimu-aiksteles-lietuvoje/",
    imageUrl:
      "https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=800&q=80",
  },
  {
    id: "vilnius-perkuno-skveras",
    title: "Perkūno skveras Vilniuje",
    description:
      "Pašilaičių rajone sukurta erdvė, padalinta į 7 zonas su sporto ir laisvalaikio erdvėmis, šachmatų stalais, hamakomis, pikniko zona su griliumi ir puikia vaikų žaidimų aikštele nuo 1 metų amžiaus su smėlio dėžėmis, čiuožyklomis, laipynėmis, karuselėmis ir sūpynėmis.",
    city: "Vilnius",
    address: "Perkūnkiemio g., Vilnius",
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
      "https://images.unsplash.com/photo-1587691592099-24045f35ab40?w=800&q=80",
  },
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
      "Širvintų centras",
      "Šalia Širvintos skulptūros",
    ],
    ageRange: "1–12 m.",
    sourceUrl:
      "https://zemelapis.kelionessuvaikais.lt/lankytinos-vietos/zaidimu-aikstele-sirvintu-miesto-centre/",
    imageUrl:
      "https://images.unsplash.com/photo-1566454825481-9c31bd88e498?w=800&q=80",
  },
];
