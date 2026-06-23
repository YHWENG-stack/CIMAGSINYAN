const WHATSAPP_NUMBER = "2250788038502";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  if (location.hash) {
    history.replaceState(null, "", `${location.pathname}${location.search}`);
  }
  window.scrollTo({ top: 0, left: 0 });
});

const categoryDetails = {
  "Rangement": {
    label: "Rangement",
    text: "Organisation, etageres, portants et solutions gain de place.",
    cover: "2026-06/Rangement/001-Etagere-a-chaussures-3-en-1-0000.png"
  },
  "Cuisine": {
    label: "Cuisine",
    text: "Preparation, conservation et petits appareils pour une cuisine plus rapide.",
    cover: "2026-06/Cuisine/001-Etagere-de-rangement-3-niveaux-0000.png"
  },
  "Maison": {
    label: "Maison",
    text: "Articles utiles pour la maison, le confort et l'entretien.",
    cover: "2026-06/Maison/001-Aspirateur-a-acariens-et-masseur-tactile-0000.png"
  },
  "Sante-Bien-etre": {
    label: "Sant\u00e9 & Bien-\u00eatre",
    text: "Soin, relaxation, mesure et bien-etre au quotidien.",
    cover: "2026-06/Sante-Bien-etre/001-Masseur-cervical-intelligent-0000.png"
  },
  "Beaute": {
    label: "Beaut\u00e9",
    text: "Accessoires coiffure, maquillage et soin pour la routine quotidienne.",
    cover: "2026-06/Beaute/001-Support-de-manucure-avec-loupe-et-lumiere-0000.png"
  },
  "Eclairage": {
    label: "\u00c9clairage",
    text: "Lampes, ring lights, LED et accessoires pour ambiance ou creation.",
    cover: "2026-06/Eclairage/001-Lampe-video-LED-RL-1200-0000.png"
  },
  "Divers": {
    label: "Divers",
    text: "Accessoires pratiques, auto, tech, exterieur et outils.",
    cover: "2026-06/Divers/001-Mini-blender-portable-0000.png"
  }
};
const rawProducts = [
  ["Divers/001-Mini-blender-portable-0000.png", "Mini blender portable", "Divers"],
  ["Sante-Bien-etre/001-Masseur-cervical-intelligent-0000.png", "Masseur cervical intelligent", "Sante-Bien-etre"],
  ["Sante-Bien-etre/002-Pistolet-de-massage-5-tetes-0000.png", "Pistolet de massage 5 tetes", "Sante-Bien-etre"],
  ["Cuisine/001-Etagere-de-rangement-3-niveaux-0000.png", "Etagere de rangement 3 niveaux", "Cuisine"],
  ["Maison/001-Aspirateur-a-acariens-et-masseur-tactile-0000.png", "Aspirateur a acariens et masseur tactile", "Maison"],
  ["Beaute/001-Support-de-manucure-avec-loupe-et-lumiere-0000.png", "Support de manucure avec loupe et lumiere", "Beaute"],
  ["Cuisine/002-Hachoir-electrique-3-L-0000.jpg", "Hachoir electrique 3 L", "Cuisine"],
  ["Cuisine/003-Hachoir-electrique-intelligent-sans-fil-0000.png", "Hachoir electrique intelligent sans fil", "Cuisine"],
  ["Cuisine/004-Hachoir-electrique-multifonction-0000.png", "Hachoir electrique multifonction", "Cuisine"],
  ["Eclairage/001-Lampe-video-LED-RL-1200-0000.png", "Lampe video LED RL-1200", "Eclairage"],
  ["Eclairage/002-Lampe-video-LED-RL-900-0000.png", "Lampe video LED RL-900", "Eclairage"],
  ["Eclairage/003-Projecteur-LED-solaire-0000.png", "Projecteur LED solaire", "Eclairage"],
  ["Eclairage/004-Projecteur-solaire-LED-puissant-0000.png", "Projecteur solaire LED puissant", "Eclairage"],
  ["Rangement/001-Etagere-a-chaussures-3-en-1-0000.png", "Etagere a chaussures 3 en 1", "Rangement"],
  ["Rangement/002-Etagere-a-chaussures-multifonction-0000.png", "Etagere a chaussures multifonction", "Rangement"],
  ["Rangement/003-Porte-manteau-avec-etageres-a-chaussures-0000.png", "Porte-manteau avec etageres a chaussures", "Rangement"],
  ["Eclairage/005-Eclairage-LED-professionnel-0000.png", "Eclairage LED professionnel", "Eclairage"],
  ["Eclairage/006-Eclairage-LED-rechargeable-0000.png", "Eclairage LED rechargeable", "Eclairage"],
  ["Eclairage/007-Ventilateur-LED-camping-3-en-1-0000.png", "Ventilateur LED camping 3 en 1", "Eclairage"],
  ["Beaute/002-Hot-air-styler-5-en-1-0000.png", "Hot air styler 5 en 1", "Beaute"],
  ["Cuisine/005-Ensemble-de-batterie-de-cuisine-10-pieces-0000.png", "Ensemble de batterie de cuisine 10 pieces", "Cuisine"],
  ["Eclairage/008-Lumiere-LED-RGB-studio-0000.png", "Lumiere LED RGB studio", "Eclairage"],
  ["Maison/002-Humidificateur-et-projecteur-etoile-0000.png", "Humidificateur et projecteur etoile", "Maison"],
  ["Cuisine/006-Blender-2-en-1-0000.png", "Blender 2 en 1", "Cuisine"],
  ["Cuisine/007-Mixeur-electrique-sans-fil-0000.png", "Mixeur electrique sans fil", "Cuisine"],
  ["Cuisine/008-Mixeur-multifonction-0000.png", "Mixeur multifonction", "Cuisine"],
  ["Maison/003-Ventilateur-portable-humidificateur-0000.png", "Ventilateur portable humidificateur", "Maison"],
  ["Cuisine/009-Presse-agrumes-electrique-0000.png", "Presse-agrumes electrique", "Cuisine"],
  ["Cuisine/010-Mandoline-de-cuisine-multifonction-0000.png", "Mandoline de cuisine multifonction", "Cuisine"],
  ["Eclairage/009-Ring-light-14-pouces-0000.png", "Ring light 14 pouces", "Eclairage"],
  ["Eclairage/010-Ring-light-18-pouces-0000.png", "Ring light 18 pouces", "Eclairage"],
  ["Eclairage/011-Ring-light-RGB-14-pouces-0000.png", "Ring light RGB 14 pouces", "Eclairage"],
  ["Eclairage/012-Ring-light-RGB-18-pouces-0000.png", "Ring light RGB 18 pouces", "Eclairage"],
  ["Beaute/003-Appareil-de-massage-raffermissant-4-en-1-0000.png", "Appareil de massage raffermissant 4 en 1", "Beaute"],
  ["Beaute/004-Boucleur-automatique-rapide-0000.png", "Boucleur automatique rapide", "Beaute"],
  ["Beaute/005-Boucleur-francais-30-secondes-0000.png", "Boucleur francais 30 secondes", "Beaute"],
  ["Sante-Bien-etre/003-Masseur-cranien-relaxant-0000.png", "Masseur cranien relaxant", "Sante-Bien-etre"],
  ["Sante-Bien-etre/004-Masseur-de-cou-et-d-epaules-0000.png", "Masseur de cou et d'epaules", "Sante-Bien-etre"],
  ["Sante-Bien-etre/005-Mini-masseur-corps-et-relaxation-0000.png", "Mini masseur corps et relaxation", "Sante-Bien-etre"],
  ["Beaute/006-Brosse-soufflante-3-en-1-0000.png", "Brosse soufflante 3 en 1", "Beaute"],
  ["Beaute/007-Seche-cheveux-sans-fil-2-en-1-0000.png", "Seche-cheveux sans fil 2 en 1", "Beaute"],
  ["Beaute/008-Peigne-coiffant-3-en-1-0000.png", "Peigne coiffant 3 en 1", "Beaute"],
  ["Cuisine/011-Etagere-reglable-sous-evier-0000.png", "Etagere reglable sous evier", "Cuisine"],
  ["Sante-Bien-etre/006-Correcteur-de-posture-femme-0000.png", "Correcteur de posture femme", "Sante-Bien-etre"],
  ["Sante-Bien-etre/007-Correcteur-de-posture-homme-0000.png", "Correcteur de posture homme", "Sante-Bien-etre"],
  ["Beaute/009-Eclairage-miroir-parfait-0000.png", "Eclairage miroir parfait", "Beaute"],
  ["Beaute/010-Miroir-de-maquillage-LED-0000.png", "Miroir de maquillage LED", "Beaute"],
  ["Sante-Bien-etre/008-Glucometre-0000.png", "Glucometre", "Sante-Bien-etre"],
  ["Sante-Bien-etre/009-Tensiometre-electronique-0000.png", "Tensiometre electronique", "Sante-Bien-etre"],
  ["Divers/002-Gourde-isolee-sport-0000.png", "Gourde isolee sport", "Divers"],
  ["Divers/003-Gourde-isotherme-coloree-0000.png", "Gourde isotherme coloree", "Divers"],
  ["Rangement/004-Meuble-a-chaussures-anti-poussiere-0000.png", "Meuble a chaussures anti-poussiere", "Rangement"],
  ["Rangement/005-Range-chaussures-2-niveaux-0000.png", "Range chaussures 2 niveaux", "Rangement"],
  ["Rangement/006-Commode-de-rangement-4-tiroirs-0000.png", "Commode de rangement 4 tiroirs", "Rangement"],
  ["Rangement/007-Portant-a-vetements-multifonction-0000.png", "Portant a vetements multifonction", "Rangement"],
  ["Rangement/008-Portant-a-vetements-multifonction-ferme-0000.png", "Portant a vetements multifonction ferme", "Rangement"],
  ["Rangement/009-Portant-a-vetements-multifonction-premium-0000.png", "Portant a vetements multifonction premium", "Rangement"],
  ["Rangement/010-Portant-a-vetements-rotatif-360-0000.png", "Portant a vetements rotatif 360", "Rangement"],
  ["Rangement/011-Portant-a-vetements-sur-pied-0000.png", "Portant a vetements sur pied", "Rangement"],
  ["Rangement/012-Rangement-d-entree-3-en-1-0000.png", "Rangement d'entree 3 en 1", "Rangement"],
  ["Rangement/013-Rangement-intelligent-du-quotidien-0000.png", "Rangement intelligent du quotidien", "Rangement"],
  ["Rangement/014-Rangement-intelligent-salle-de-bain-0000.png", "Rangement intelligent salle de bain", "Rangement"],
  ["Rangement/015-Support-a-poubelle-avec-rangement-0000.png", "Support a poubelle avec rangement", "Rangement"],
  ["Eclairage/013-Anneau-lumineux-LED-12-pouces-0000.png", "Anneau lumineux LED 12 pouces", "Eclairage"],
  ["Eclairage/014-Bande-LED-10-metres-0000.png", "Bande LED 10 metres", "Eclairage"],
  ["Eclairage/015-Bande-LED-neon-360-0000.png", "Bande LED neon 360", "Eclairage"],
  ["Eclairage/016-Eclairage-parfait-pour-creations-0000.png", "Eclairage parfait pour creations", "Eclairage"],
  ["Eclairage/017-Guirlande-lumineuse-LED-5-m-0000.png", "Guirlande lumineuse LED 5 m", "Eclairage"],
  ["Eclairage/018-Lampe-d-appoint-LED-professionnelle-0000.png", "Lampe d'appoint LED professionnelle", "Eclairage"],
  ["Eclairage/019-Lampe-de-camping-solaire-LED-0000.png", "Lampe de camping solaire LED", "Eclairage"],
  ["Eclairage/020-Lampe-d-eclairage-photo-et-direct-PL-48-0000.png", "Lampe d'eclairage photo et direct PL-48", "Eclairage"],
  ["Eclairage/021-Ruban-LED-intelligent-0000.png", "Ruban LED intelligent", "Eclairage"],
  ["Maison/004-Aspirateur-sans-fil-voiture-0000.png", "Aspirateur sans fil voiture", "Maison"],
  ["Rangement/016-Etagere-d-angle-salle-de-bain-0000.png", "Etagere d'angle salle de bain", "Rangement"],
  ["Rangement/017-Etagere-fermee-anti-poussiere-0000.png", "Etagere fermee anti-poussiere", "Rangement"],
  ["Rangement/018-Etagere-fermee-anti-poussiere-premium-0000.png", "Etagere fermee anti-poussiere premium", "Rangement"],
  ["Rangement/019-Etagere-WC-multifonction-0000.png", "Etagere WC multifonction", "Rangement"],
  ["Eclairage/022-Lumiere-spot-RGB-sans-filtre-0000.png", "Lumiere spot RGB sans filtre", "Eclairage"],
  ["Eclairage/023-Selfie-stick-avec-double-lumiere-0000.png", "Selfie stick avec double lumiere", "Eclairage"],
  ["Rangement/020-Penderie-gain-de-place-0000.png", "Penderie gain de place", "Rangement"],
  ["Maison/005-Camera-de-securite-360-0000.png", "Camera de securite 360", "Maison"],
  ["Maison/006-Lampe-acrylique-lumineuse-LED-0000.png", "Lampe acrylique lumineuse LED", "Maison"],
  ["Maison/007-Lampe-ventilateur-2-en-1-0000.png", "Lampe ventilateur 2 en 1", "Maison"],
  ["Maison/008-Mini-ventilateur-brumisateur-0000.png", "Mini ventilateur brumisateur", "Maison"],
  ["Maison/009-Ventilateur-a-pince-flexible-0000.png", "Ventilateur a pince flexible", "Maison"],
  ["Maison/010-Ventilateur-de-bureau-pliable-0000.png", "Ventilateur de bureau pliable", "Maison"],
  ["Maison/011-Humidificateur-cristal-0000.png", "Humidificateur cristal", "Maison"],
  ["Maison/012-Humidificateur-d-air-16-h-0000.png", "Humidificateur d'air 16 h", "Maison"],
  ["Maison/013-Humidificateur-d-air-lumineux-0000.png", "Humidificateur d'air lumineux", "Maison"],
  ["Divers/004-Aspirateur-cyclonique-puissant-0000.png", "Aspirateur cyclonique puissant", "Divers"],
  ["Cuisine/012-DISTRIBUTEUR-DE-RIZ-12L-GRANDE-CAPACITE-0000.png", "DISTRIBUTEUR DE RIZ 12L GRANDE CAPACITÉ", "Cuisine"],
  ["Cuisine/013-Balance-de-cuisine-numerique-0000.png", "Balance de cuisine numerique", "Cuisine"],
  ["Cuisine/014-Batteur-electrique-portatif-0000.png", "Batteur electrique portatif", "Cuisine"],
  ["Cuisine/015-Batteur-electrique-portatif-blanc-0000.png", "Batteur electrique portatif blanc", "Cuisine"],
  ["Cuisine/016-Batteur-electrique-pour-patisserie-0000.png", "Batteur electrique pour patisserie", "Cuisine"],
  ["Cuisine/017-Batteur-electrique-sans-fil-2-en-1-0000.png", "Batteur electrique sans fil 2 en 1", "Cuisine"],
  ["Cuisine/018-Batteur-manuel-0000.png", "Batteur manuel", "Cuisine"],
  ["Cuisine/019-Boite-a-riz-anti-insectes-0000.png", "Boite a riz anti-insectes", "Cuisine"],
  ["Cuisine/020-Boites-a-epices-magnetiques-0000.png", "Boites a epices magnetiques", "Cuisine"],
  ["Divers/005-Bouteille-isotherme-acier-inoxydable-0000.png", "Bouteille isotherme acier inoxydable", "Divers"],
  ["Cuisine/021-Cafetiere-electrique-turque-0000.png", "Cafetiere electrique turque", "Cuisine"],
  ["Cuisine/022-Coupe-frites-polyvalent-0000.png", "Coupe-frites polyvalent", "Cuisine"],
  ["Cuisine/023-Egouttoir-a-couverts-0000.png", "Egouttoir a couverts", "Cuisine"],
  ["Cuisine/024-Egouttoir-reglable-pour-evier-0000.png", "Egouttoir reglable pour evier", "Cuisine"],
  ["Cuisine/025-Filtre-a-eau-transparent-0000.png", "Filtre a eau transparent", "Cuisine"],
  ["Cuisine/026-Hachage-rapide-cuisine-facile-0000.png", "Hachage rapide cuisine facile", "Cuisine"],
  ["Cuisine/027-Hachoir-a-ail-rapide-0000.png", "Hachoir a ail rapide", "Cuisine"],
  ["Cuisine/028-Hachoir-polyvalent-manuel-0000.png", "Hachoir polyvalent manuel", "Cuisine"],
  ["Cuisine/029-Lunch-box-electrique-0000.png", "Lunch box electrique", "Cuisine"],
  ["Cuisine/030-Melangeur-manuel-0000.png", "Melangeur manuel", "Cuisine"],
  ["Cuisine/031-Organisateur-de-cuisine-rotatif-0000.png", "Organisateur de cuisine rotatif", "Cuisine"],
  ["Cuisine/032-Planche-a-decouper-antibacterienne-0000.png", "Planche a decouper antibacterienne", "Cuisine"],
  ["Cuisine/033-Pot-a-epices-retractable-0000.png", "Pot a epices retractable", "Cuisine"],
  ["Cuisine/034-Rape-a-mais-multifonction-0000.png", "Rape a mais multifonction", "Cuisine"],
  ["Cuisine/035-Robinet-electrique-chauffage-instantane-0000.png", "Robinet electrique chauffage instantane", "Cuisine"],
  ["Cuisine/036-Trancheur-d-ananas-0000.png", "Trancheur d'ananas", "Cuisine"],
  ["Cuisine/037-Trancheuse-a-fromage-tout-en-un-0000.png", "Trancheuse a fromage tout-en-un", "Cuisine"],
  ["Beaute/011-Bustier-amincissant-0000.png", "Bustier amincissant", "Beaute"],
  ["Beaute/012-Bustier-amincissant-sans-bretelles-0000.png", "Bustier amincissant sans bretelles", "Beaute"],
  ["Beaute/013-Organisateur-maquillage-elegant-0000.png", "Organisateur maquillage elegant", "Beaute"],
  ["Sante-Bien-etre/010-Bain-de-pieds-chaud-et-relaxant-0000.png", "Bain de pieds chaud et relaxant", "Sante-Bien-etre"],
  ["Sante-Bien-etre/011-Etireur-lombaire-0000.png", "Etireur lombaire", "Sante-Bien-etre"],
  ["Sante-Bien-etre/012-Pese-personne-intelligent-0000.png", "Pese-personne intelligent", "Sante-Bien-etre"],
  ["Sante-Bien-etre/013-Roue-abdominale-0000.png", "Roue abdominale", "Sante-Bien-etre"],
  ["Sante-Bien-etre/014-Roue-abdominale-a-rebond-automatique-0000.png", "Roue abdominale a rebond automatique", "Sante-Bien-etre"],
  ["Sante-Bien-etre/015-Surveillance-pression-arterielle-0000.png", "Surveillance pression arterielle", "Sante-Bien-etre"],
  ["Rangement/021-Panier-a-linge-multifonction-0000.png", "Panier a linge multifonction", "Rangement"],
  ["Rangement/022-Porte-manteau-multifonction-0000.png", "Porte-manteau multifonction", "Rangement"],
  ["Rangement/023-Sechoir-pliant-multifonction-0000.png", "Sechoir pliant multifonction", "Rangement"],
  ["Rangement/024-Table-d-appoint-papillon-0000.png", "Table d'appoint papillon", "Rangement"],
  ["Eclairage/024-Bande-lumineuse-neon-silicone-0000.png", "Bande lumineuse neon silicone", "Eclairage"],
  ["Eclairage/025-Lampe-de-remplissage-RGB-a-clip-0000.png", "Lampe de remplissage RGB a clip", "Eclairage"],
  ["Eclairage/026-Lampe-magnetique-pour-selfie-0000.png", "Lampe magnetique pour selfie", "Eclairage"],
  ["Eclairage/027-Lampe-murale-solaire-intelligente-0000.png", "Lampe murale solaire intelligente", "Eclairage"],
  ["Eclairage/028-Lampe-solaire-d-exterieur-0000.png", "Lampe solaire d'exterieur", "Eclairage"],
  ["Eclairage/029-Lampe-solaire-haute-performance-0000.png", "Lampe solaire haute performance", "Eclairage"],
  ["Eclairage/030-Perche-a-selfie-R1S-L-0000.jpg", "Perche a selfie R1S-L", "Eclairage"],
  ["Eclairage/031-Trepied-suiveur-intelligent-0000.png", "Trepied suiveur intelligent", "Eclairage"],
  ["Maison/014-Ampoule-anti-moustiques-0000.png", "Ampoule anti-moustiques", "Maison"],
  ["Maison/015-Diffuseur-d-arome-effet-flamme-0000.png", "Diffuseur d'arome effet flamme", "Maison"],
  ["Maison/016-Diffuseur-d-aromes-effet-flamme-realiste-0000.png", "Diffuseur d'aromes effet flamme realiste", "Maison"],
  ["Maison/017-Fer-a-repasser-electrique-haute-performance-0000.png", "Fer a repasser electrique haute performance", "Maison"],
  ["Maison/018-Lampe-de-nuit-a-detection-ventouse-0000.png", "Lampe de nuit a detection ventouse", "Maison"],
  ["Maison/019-Mini-machine-a-coudre-0000.png", "Mini machine a coudre", "Maison"],
  ["Maison/020-Mini-machine-a-laver-pliable-8L-0000.png", "Mini machine a laver pliable 8L", "Maison"],
  ["Maison/021-Pompe-a-eau-elegante-0000.png", "Pompe a eau elegante", "Maison"],
  ["Maison/022-Porte-bebe-securise-et-confortable-0000.png", "Porte-bebe securise et confortable", "Maison"],
  ["Maison/023-Porte-brosse-a-dents-intelligent-0000.png", "Porte-brosse a dents intelligent", "Maison"],
  ["Maison/024-Rasoir-anti-bouloches-0000.png", "Rasoir anti-bouloches", "Maison"],
  ["Maison/025-Refroidisseur-d-air-ultra-rapide-0000.png", "Refroidisseur d'air ultra rapide", "Maison"],
  ["Maison/026-Support-mural-TV-pour-ecran-plat-0000.png", "Support mural TV pour ecran plat", "Maison"],
  ["Maison/027-Support-mural-TV-reglable-0000.png", "Support mural TV reglable", "Maison"],
  ["Divers/006-Cle-a-douilles-universelle-8-en-1-0000.png", "Cle a douilles universelle 8 en 1", "Divers"],
  ["Divers/007-Devidoir-de-tuyau-portable-0000.png", "Devidoir de tuyau portable", "Divers"],
  ["Divers/008-Pompe-a-air-electrique-compacte-0000.png", "Pompe a air electrique compacte", "Divers"],
  ["Divers/009-Pompe-a-main-puissante-polyvalente-0000.png", "Pompe a main puissante polyvalente", "Divers"]
];

function thumbnailPath(file) {
  return `thumbs/${file.replace(/\.[^.]+$/, ".webp")}`;
}

function watermarkedPath(file) {
  return `watermarked/${file.replace(/\.[^.]+$/, ".webp")}`;
}

const categoryOrder = ["Eclairage", "Rangement", "Cuisine", "Maison", "Sante-Bien-etre", "Beaute", "Divers", "Tous"];

function fileName(file) {
  return file.split("/").pop() || file;
}

function orderFromFile(file) {
  const match = fileName(file).match(/^(\d+)-/);
  return match ? Number(match[1]) : 9999;
}

function priceFromFile(file) {
  const match = fileName(file).match(/-(\d+)\.[^.]+$/);
  return match ? match[1] : "0000";
}

function categoryRank(category) {
  const rank = categoryOrder.indexOf(category);
  return rank === -1 ? categoryOrder.length : rank;
}

function normalizeCategory(title, category) {
  const name = title.toLowerCase();

  if (categoryDetails[category]) return category;
  if (category === "Cuisine") return "Cuisine";
  if (category === "Beaute") return "Beaute";
  if (category === "Eclairage") return "Eclairage";
  if (category === "Bien-etre" || category === "Sante") return "Sante-Bien-etre";
  if (category === "Outdoor & tech") return "Divers";

  if (
    name.includes("rangement") ||
    name.includes("etagere") ||
    name.includes("chaussure") ||
    name.includes("portant") ||
    name.includes("porte-manteau") ||
    name.includes("penderie") ||
    name.includes("commode") ||
    name.includes("poubelle") ||
    name.includes("panier")
  ) {
    return "Rangement";
  }

  return "Maison";
}
const products = rawProducts.map(([file, title, category]) => {
  const normalizedCategory = normalizeCategory(title, category);

  return {
    title,
    category: normalizedCategory,
    order: orderFromFile(file),
    thumb: thumbnailPath(file),
    largeImage: watermarkedPath(file),
    price: priceFromFile(file),
    description: categoryDetails[normalizedCategory].text
  };
}).sort((a, b) => {
  const categoryDelta = categoryRank(a.category) - categoryRank(b.category);
  if (categoryDelta) return categoryDelta;
  const orderDelta = a.order - b.order;
  if (orderDelta) return orderDelta;
  return a.title.localeCompare(b.title);
}).map((product, index) => {
  return {
    ...product,
    id: index + 1
  };
});

let activeCategory = "Eclairage";

function categoryLabel(category) {
  return categoryDetails[category]?.label || category;
}
const productGrid = document.querySelector("#productGrid");
const categoryTabs = document.querySelector("#categoryTabs");
const imageModal = document.querySelector("#imageModal");
const modalImage = document.querySelector("#modalImage");
const modalTitle = document.querySelector("#modalTitle");
const modalCategory = document.querySelector("#modalCategory");
const modalPrice = document.querySelector("#modalPrice");
const modalWhatsapp = document.querySelector("#modalWhatsapp");
const modalClose = document.querySelector("#modalClose");
const modalBackdrop = document.querySelector("#modalBackdrop");

function whatsappLink(productTitle = "votre catalogue") {
  const message = `Bonjour, je souhaite recevoir plus d'informations sur ${productTitle}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function renderWhatsappLinks() {
  ["heroWhatsapp", "footerWhatsapp"].forEach((id) => {
    const link = document.querySelector(`#${id}`);
    if (link) link.href = whatsappLink();
  });
}

function openImageModal(productId) {
  const product = products.find((item) => item.id === Number(productId));
  if (!product) return;

  modalImage.src = product.largeImage;
  modalImage.alt = `${product.title} - MINIPRIX MARKET`;
  modalTitle.textContent = product.title;
  modalCategory.textContent = categoryLabel(product.category);
  modalPrice.textContent = `Prix: ${product.price} FCFA`;
  modalWhatsapp.href = whatsappLink(product.title);
  imageModal.hidden = false;
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeImageModal() {
  imageModal.hidden = true;
  modalImage.src = "";
  document.body.classList.remove("modal-open");
}

function renderTabs() {
  categoryTabs.innerHTML = categoryOrder.map((category) => {
    const count = category === "Tous"
      ? products.length
      : products.filter((product) => product.category === category).length;
    return `
      <button class="category-tab" type="button" data-category="${category}" aria-pressed="${activeCategory === category}">
        ${categoryLabel(category)} ${count}
      </button>
    `;
  }).join("");

  categoryTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderTabs();
      renderProducts();
    });
  });
}

function getFilteredProducts() {
  return products.filter((product) => {
    const matchesCategory = activeCategory === "Tous" || product.category === activeCategory;
    return matchesCategory;
  });
}

function renderProducts() {
  const filtered = getFilteredProducts();

  if (!filtered.length) {
    productGrid.innerHTML = `<div class="empty-state">Aucun produit ne correspond a cette recherche.</div>`;
    return;
  }

  productGrid.innerHTML = filtered.map((product, index) => `
    <article class="product-card">
      <div class="product-image">
        <button class="image-open" type="button" data-open-image="${product.id}" aria-label="Voir ${product.title}">
          <img src="${product.thumb}" alt="${product.title}" ${index > 5 ? 'loading="lazy" decoding="async"' : 'decoding="async" fetchpriority="high"'}>
          <span class="zoom-label">Voir</span>
        </button>
      </div>
      <div class="product-info">
        <h3>${product.title}</h3>
        <p class="product-price">Prix: ${product.price} FCFA</p>
        <p class="product-mode">Detail et gros disponibles</p>
        <p>${product.description}</p>
        <div class="product-actions">
          <a class="whatsapp-button" href="${whatsappLink(product.title)}" target="_blank" rel="noopener">
            Commander sur WhatsApp
          </a>
        </div>
      </div>
    </article>
  `).join("");

}

productGrid.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-open-image]");
  if (!trigger) return;
  openImageModal(trigger.dataset.openImage);
});

modalClose.addEventListener("click", closeImageModal);
modalBackdrop.addEventListener("click", closeImageModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !imageModal.hidden) closeImageModal();
});

renderWhatsappLinks();
renderTabs();
renderProducts();
