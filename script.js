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
    cover: "2026-06/Rangement/001-Etagere-a-chaussures-3-en-1-7500.png"
  },
  "Cuisine": {
    label: "Cuisine",
    text: "Preparation, conservation et petits appareils pour une cuisine plus rapide.",
    cover: "2026-06/Cuisine/001-Ensemble-de-batterie-de-cuisine-10-pieces-12000.png"
  },
  "Maison": {
    label: "Maison",
    text: "Articles utiles pour la maison, le confort et l'entretien.",
    cover: "2026-06/Maison/001-Aspirateur-a-acariens-et-masseur-tactile-9500.png"
  },
  "Sante-Bien-etre": {
    label: "Sant\u00e9 & Bien-\u00eatre",
    text: "Soin, relaxation, mesure et bien-etre au quotidien.",
    cover: "2026-06/Sante-Bien-etre/001-Masseur-cervical-intelligent-3500.png"
  },
  "Beaute": {
    label: "Beaut\u00e9",
    text: "Accessoires coiffure, maquillage et soin pour la routine quotidienne.",
    cover: "2026-06/Beaute/001-Hot-air-styler-5-en-1-7500.png"
  },
  "Eclairage": {
    label: "\u00c9clairage",
    text: "Lampes, ring lights, LED et accessoires pour ambiance ou creation.",
    cover: "2026-06/Eclairage/001-Ring-light-LED-12-pouces-6000.png"
  },
  "Divers": {
    label: "Divers",
    text: "Accessoires pratiques, auto, tech, exterieur et outils.",
    cover: "2026-06/Divers/001-Aspirateur-cyclonique-puissant-0000.png"
  }
};
const rawProducts = [
  ["Rangement/001-Etagere-a-chaussures-3-en-1-7500.png", "Etagere a Chaussures 3 en 1", "Rangement"],
  ["Rangement/002-Etagere-a-chaussures-multifonction-6500.png", "Etagere a Chaussures Multifonction", "Rangement"],
  ["Rangement/003-Meuble-a-chaussures-anti-poussiere-8500.png", "Meuble a Chaussures anti Poussiere", "Rangement"],
  ["Rangement/004-Rangement-d-entree-3-en-1-8500.png", "Rangement d'Entree 3 en 1", "Rangement"],
  ["Rangement/005-Range-chaussures-2-niveaux-4500.png", "Range Chaussures 2 Niveaux", "Rangement"],
  ["Rangement/006-Portant-a-vetements-multifonction-premium-12000.png", "Portant a Vetements Multifonction Premium", "Rangement"],
  ["Rangement/007-Portant-a-vetements-sur-pied-13000.png", "Portant a Vetements sur Pied", "Rangement"],
  ["Rangement/008-Portant-a-vetements-multifonction-7500.png", "Portant a Vetements Multifonction", "Rangement"],
  ["Rangement/009-Portant-a-vetements-multifonction-ferme-11000.png", "Portant a Vetements Multifonction Ferme", "Rangement"],
  ["Rangement/010-Portant-a-vetements-rotatif-360-8000.png", "Portant a Vetements Rotatif 360", "Rangement"],
  ["Rangement/011-Porte-manteau-avec-etageres-a-chaussures-13000.png", "Porte Manteau avec Etageres a Chaussures", "Rangement"],
  ["Rangement/012-Porte-manteau-multifonction-8500.png", "Porte Manteau Multifonction", "Rangement"],
  ["Rangement/013-Penderie-gain-de-place-7500.png", "Penderie Gain de Place", "Rangement"],
  ["Rangement/014-Sechoir-pliant-multifonction-9500.png", "Sechoir Pliant Multifonction", "Rangement"],
  ["Rangement/015-Etagere-fermee-anti-poussiere-13000.png", "Etagere Fermee anti Poussiere", "Rangement"],
  ["Rangement/016-Table-d-appoint-papillon-5000.png", "Table d'Appoint Papillon", "Rangement"],
  ["Rangement/017-Commode-de-rangement-4-tiroirs-22000.png", "Commode de Rangement 4 Tiroirs", "Rangement"],
  ["Rangement/018-Rangement-intelligent-du-quotidien-12000.png", "Rangement Intelligent du Quotidien", "Rangement"],
  ["Rangement/019-Etagere-d-angle-salle-de-bain-8500.png", "Etagere d'Angle Salle de Bain", "Rangement"],
  ["Rangement/020-Rangement-intelligent-salle-de-bain-17500.png", "Rangement Intelligent Salle de Bain", "Rangement"],
  ["Rangement/020-Support-a-poubelle-avec-rangement-11000.png", "Support a Poubelle avec Rangement", "Rangement"],
  ["Rangement/021-Etagere-WC-multifonction-9500.png", "Etagere WC Multifonction", "Rangement"],
  ["Cuisine/001-Ensemble-de-batterie-de-cuisine-10-pieces-12000.png", "Ensemble de Batterie de Cuisine 10 Pieces", "Cuisine"],
  ["Cuisine/002-Blender-2-en-1-15000.png", "Blender 2 en 1", "Cuisine"],
  ["Cuisine/003-Mixeur-electrique-sans-fil-4000.png", "Mixeur Electrique sans Fil", "Cuisine"],
  ["Cuisine/004-Mixeur-multifonction-6000.png", "Mixeur Multifonction", "Cuisine"],
  ["Cuisine/005-Hachoir-electrique-3L-8500.jpg", "Hachoir Electrique 3L", "Cuisine"],
  ["Cuisine/006-Hachoir-electrique-intelligent-sans-fil-2500.png", "Hachoir Electrique Intelligent sans Fil", "Cuisine"],
  ["Cuisine/007-Hachoir-electrique-multifonction-9500.png", "Hachoir Electrique Multifonction", "Cuisine"],
  ["Cuisine/008-Hachage-rapide-cuisine-facile-2500.png", "Hachage Rapide Cuisine Facile", "Cuisine"],
  ["Cuisine/009-Hachoir-a-ail-rapide-2500.png", "Hachoir a Ail Rapide", "Cuisine"],
  ["Cuisine/010-Hachoir-polyvalent-manuel-5000.png", "Hachoir Polyvalent Manuel", "Cuisine"],
  ["Cuisine/011-Mandoline-de-cuisine-multifonction-6000.png", "Mandoline de Cuisine Multifonction", "Cuisine"],
  ["Cuisine/012-Coupe-frites-polyvalent-3500.png", "Coupe Frites Polyvalent", "Cuisine"],
  ["Cuisine/013-Trancheur-d-ananas-1500.png", "Trancheur d'Ananas", "Cuisine"],
  ["Cuisine/014-Trancheuse-a-fromage-tout-en-un-4000.png", "Trancheuse a Fromage tout en Un", "Cuisine"],
  ["Cuisine/015-Rape-a-mais-multifonction-2500.png", "Rape a Mais Multifonction", "Cuisine"],
  ["Cuisine/016-Presse-agrumes-electrique-5500.png", "Presse Agrumes Electrique", "Cuisine"],
  ["Cuisine/017-Batteur-electrique-pour-patisserie-5000.png", "Batteur Electrique pour Patisserie", "Cuisine"],
  ["Cuisine/018-Batteur-electrique-sans-fil-2-en-1-5000.png", "Batteur Electrique sans Fil 2 en 1", "Cuisine"],
  ["Cuisine/019-Batteur-electrique-portatif-6000.png", "Batteur Electrique Portatif", "Cuisine"],
  ["Cuisine/020-Batteur-electrique-portatif-blanc-5000.png", "Batteur Electrique Portatif Blanc", "Cuisine"],
  ["Cuisine/021-Batteur-manuel-3500.png", "Batteur Manuel", "Cuisine"],
  ["Cuisine/022-Melangeur-manuel-3000.png", "Melangeur Manuel", "Cuisine"],
  ["Cuisine/023-Cafetiere-electrique-turque-3500.png", "Cafetiere Electrique Turque", "Cuisine"],
  ["Cuisine/024-Lunch-box-electrique-7000.png", "Lunch Box Electrique", "Cuisine"],
  ["Cuisine/025-Robinet-electrique-chauffage-instantane-12000.png", "Robinet Electrique Chauffage Instantane", "Cuisine"],
  ["Cuisine/026-Balance-de-cuisine-numerique-3500.png", "Balance de Cuisine Numerique", "Cuisine"],
  ["Cuisine/027-Planche-a-decouper-antibacterienne-7000.png", "Planche a Decouper Antibacterienne", "Cuisine"],
  ["Cuisine/028-Filtre-a-eau-transparent-5000.png", "Filtre a Eau Transparent", "Cuisine"],
  ["Cuisine/029-DISTRIBUTEUR-DE-RIZ-12L-GRANDE-CAPACITE-10000.png", "Distributeur de Riz 12L Grande Capacite", "Cuisine"],
  ["Cuisine/030-Boite-a-riz-anti-insectes-9000.png", "Boite a Riz anti Insectes", "Cuisine"],
  ["Cuisine/031-Boites-a-epices-magnetiques-3000.png", "Boites a Epices Magnetiques", "Cuisine"],
  ["Cuisine/032-Pot-a-epices-retractable-1500.png", "Pot a Epices Retractable", "Cuisine"],
  ["Cuisine/033-Organisateur-de-cuisine-rotatif-0000.png", "Organisateur de Cuisine Rotatif", "Cuisine"],
  ["Cuisine/034-Egouttoir-reglable-pour-evier-4000.png", "Egouttoir Reglable pour Evier", "Cuisine"],
  ["Cuisine/035-Egouttoir-a-couverts-3500.png", "Egouttoir a Couverts", "Cuisine"],
  ["Cuisine/036-Etagere-reglable-sous-evier-5000.png", "Etagere Reglable sous Evier", "Cuisine"],
  ["Cuisine/037-Etagere-de-rangement-3-niveaux-4000.png", "Etagere de Rangement 3 Niveaux", "Cuisine"],
  ["Maison/001-Aspirateur-a-acariens-et-masseur-tactile-9500.png", "Aspirateur a Acariens et Masseur Tactile", "Maison"],
  ["Maison/002-Aspirateur-sans-fil-voiture-6500.png", "Aspirateur sans Fil Voiture", "Maison"],
  ["Maison/003-Refroidisseur-d-air-ultra-rapide-6500.png", "Refroidisseur d'Air Ultra Rapide", "Maison"],
  ["Maison/004-Ventilateur-portable-humidificateur-6000.png", "Ventilateur Portable Humidificateur", "Maison"],
  ["Maison/005-Mini-ventilateur-brumisateur-2500.png", "Mini Ventilateur Brumisateur", "Maison"],
  ["Maison/006-Ventilateur-a-pince-flexible-2000.png", "Ventilateur a Pince Flexible", "Maison"],
  ["Maison/007-Ventilateur-de-bureau-pliable-3500.png", "Ventilateur de Bureau Pliable", "Maison"],
  ["Maison/008-Humidificateur-et-projecteur-etoile-4000.png", "Humidificateur et Projecteur Etoile", "Maison"],
  ["Maison/009-Humidificateur-d-air-lumineux-3500.png", "Humidificateur d'Air Lumineux", "Maison"],
  ["Maison/010-Humidificateur-d-air-16-h-7000.png", "Humidificateur d'Air 16 H", "Maison"],
  ["Maison/011-Humidificateur-cristal-5000.png", "Humidificateur Cristal", "Maison"],
  ["Maison/012-Diffuseur-d-aromes-effet-flamme-realiste-6500.png", "Diffuseur d'Aromes Effet Flamme Realiste", "Maison"],
  ["Maison/013-Diffuseur-d-arome-effet-flamme-5000.png", "Diffuseur d'Arome Effet Flamme", "Maison"],
  ["Maison/014-Camera-de-securite-360-9500.png", "Camera de Securite 360", "Maison"],
  ["Maison/015-Ampoule-anti-moustiques-2000.png", "Ampoule anti Moustiques", "Maison"],
  ["Maison/016-Lampe-ventilateur-2-en-1-5000.png", "Lampe Ventilateur 2 en 1", "Maison"],
  ["Maison/017-Lampe-acrylique-lumineuse-LED-5000.png", "Lampe Acrylique Lumineuse LED", "Maison"],
  ["Maison/018-Lampe-de-nuit-a-detection-ventouse-2500.png", "Lampe de Nuit a Detection Ventouse", "Maison"],
  ["Maison/019-Pompe-a-eau-elegante-3000.png", "Pompe a Eau Elegante", "Maison"],
  ["Maison/020-Porte-brosse-a-dents-intelligent-6500.png", "Porte Brosse a Dents Intelligent", "Maison"],
  ["Maison/021-Fer-a-repasser-electrique-haute-performance-7500.png", "Fer a Repasser Electrique Haute Performance", "Maison"],
  ["Maison/022-Mini-machine-a-laver-pliable-8L-0000.png", "Mini Machine a Laver Pliable 8L", "Maison"],
  ["Maison/023-Mini-machine-a-coudre-8500.png", "Mini Machine a Coudre", "Maison"],
  ["Maison/024-Rasoir-anti-bouloches-2500.png", "Rasoir anti Bouloches", "Maison"],
  ["Maison/025-Porte-bebe-securise-et-confortable-5000.png", "Porte Bebe Securise et Confortable", "Maison"],
  ["Maison/026-Support-mural-TV-reglable-3000.png", "Support Mural TV Reglable", "Maison"],
  ["Maison/027-Support-mural-TV-pour-ecran-plat-3500.png", "Support Mural TV pour Ecran Plat", "Maison"],
  ["Sante-Bien-etre/001-Masseur-cervical-intelligent-3500.png", "Masseur Cervical Intelligent", "Sante-Bien-etre"],
  ["Sante-Bien-etre/002-Pistolet-de-massage-5-tetes-0000.png", "Pistolet de Massage 5 Tetes", "Sante-Bien-etre"],
  ["Sante-Bien-etre/003-Masseur-de-cou-et-d-epaules-8500.png", "Masseur de Cou et d'Epaules", "Sante-Bien-etre"],
  ["Sante-Bien-etre/004-Masseur-cranien-relaxant-6500.png", "Masseur Cranien Relaxant", "Sante-Bien-etre"],
  ["Sante-Bien-etre/005-Mini-masseur-corps-et-relaxation-7500.png", "Mini Masseur Corps et Relaxation", "Sante-Bien-etre"],
  ["Sante-Bien-etre/006-Bain-de-pieds-chaud-et-relaxant-14500.png", "Bain de Pieds Chaud et Relaxant", "Sante-Bien-etre"],
  ["Sante-Bien-etre/007-Etireur-lombaire-5000.png", "Etireur Lombaire", "Sante-Bien-etre"],
  ["Sante-Bien-etre/008-Correcteur-de-posture-femme-3500.png", "Correcteur de Posture Femme", "Sante-Bien-etre"],
  ["Sante-Bien-etre/009-Correcteur-de-posture-homme-6000.png", "Correcteur de Posture Homme", "Sante-Bien-etre"],
  ["Sante-Bien-etre/010-Tensiometre-electronique-7000.png", "Tensiometre Electronique", "Sante-Bien-etre"],
  ["Sante-Bien-etre/011-Surveillance-pression-arterielle-5000.png", "Surveillance Pression Arterielle", "Sante-Bien-etre"],
  ["Sante-Bien-etre/012-Glucometre-5500.png", "Glucometre", "Sante-Bien-etre"],
  ["Sante-Bien-etre/013-Pese-personne-intelligent-5500.png", "Pese Personne Intelligent", "Sante-Bien-etre"],
  ["Sante-Bien-etre/014-Roue-abdominale-a-rebond-automatique-9500.png", "Roue Abdominale a Rebond Automatique", "Sante-Bien-etre"],
  ["Sante-Bien-etre/015-Roue-abdominale-6000.png", "Roue Abdominale", "Sante-Bien-etre"],
  ["Beaute/001-Hot-air-styler-5-en-1-7500.png", "Hot Air Styler 5 en 1", "Beaute"],
  ["Beaute/002-Boucleur-automatique-rapide-7000.png", "Boucleur Automatique Rapide", "Beaute"],
  ["Beaute/003-Boucleur-francais-30-secondes-6000.png", "Boucleur Francais 30 Secondes", "Beaute"],
  ["Beaute/004-Brosse-soufflante-3-en-1-6500.png", "Brosse Soufflante 3 en 1", "Beaute"],
  ["Beaute/005-Seche-cheveux-sans-fil-2-en-1-8000.png", "Seche Cheveux sans Fil 2 en 1", "Beaute"],
  ["Beaute/006-Peigne-coiffant-3-en-1-3500.png", "Peigne Coiffant 3 en 1", "Beaute"],
  ["Beaute/007-Miroir-de-maquillage-LED-3000.png", "Miroir de Maquillage LED", "Beaute"],
  ["Beaute/008-Eclairage-miroir-parfait-0000.png", "Eclairage Miroir Parfait", "Beaute"],
  ["Beaute/009-Support-de-manucure-avec-loupe-et-lumiere-5000.png", "Support de Manucure avec Loupe et Lumiere", "Beaute"],
  ["Beaute/010-Organisateur-maquillage-elegant-7500.png", "Organisateur Maquillage Elegant", "Beaute"],
  ["Beaute/011-Appareil-de-massage-raffermissant-4-en-1-5500.png", "Appareil de Massage Raffermissant 4 en 1", "Beaute"],
  ["Beaute/012-Bustier-amincissant-5000.png", "Bustier Amincissant", "Beaute"],
  ["Beaute/013-Bustier-amincissant-sans-bretelles-5000.png", "Bustier Amincissant sans Bretelles", "Beaute"],
  ["Eclairage/001-Ring-light-LED-12-pouces-6000.png", "Ring Light LED 12 Pouces", "Eclairage"],
  ["Eclairage/002-Ring-light-14-pouces-7500.png", "Ring Light 14 Pouces", "Eclairage"],
  ["Eclairage/003-Ring-light-18-pouces-15000.png", "Ring Light 18 Pouces", "Eclairage"],
  ["Eclairage/004-Ring-light-RGB-14-pouces-7500.png", "Ring Light RGB 14 Pouces", "Eclairage"],
  ["Eclairage/005-Ring-light-RGB-18-pouces-15000.png", "Ring Light RGB 18 Pouces", "Eclairage"],
  ["Eclairage/006-Lampe-video-LED-RL-900-10000.png", "Lampe Video LED RL 900", "Eclairage"],
  ["Eclairage/007-Lampe-video-LED-RL-1800-13000.png", "Lampe Video LED RL 1800", "Eclairage"],
  ["Eclairage/008-Lampe-d-appoint-LED-professionnelle-9000.png", "Lampe d'Appoint LED Professionnelle", "Eclairage"],
  ["Eclairage/009-Lampe-d-eclairage-photo-et-direct-PL-48-13500.png", "Lampe d'Eclairage Photo et Direct PL 48", "Eclairage"],
  ["Eclairage/009-Lumiere-LED-RGB-studio-20000.png", "Lumiere LED RGB Studio", "Eclairage"],
  ["Eclairage/010-Lumiere-spot-RGB-sans-filtre-15000.png", "Lumiere Spot RGB sans Filtre", "Eclairage"],
  ["Eclairage/011-Eclairage-parfait-pour-creations-18000.png", "Eclairage Parfait pour Creations", "Eclairage"],
  ["Eclairage/012-Eclairage-LED-rechargeable-23000.png", "Eclairage LED Rechargeable", "Eclairage"],
  ["Eclairage/013-Eclairage-LED-professionnel-9500.png", "Eclairage LED Professionnel", "Eclairage"],
  ["Eclairage/014-Perche-a-selfie-R1S-L-3000.jpg", "Perche a Selfie R1S L", "Eclairage"],
  ["Eclairage/015-Selfie-stick-avec-double-lumiere-5500.png", "Selfie Stick avec Double Lumiere", "Eclairage"],
  ["Eclairage/016-Trepied-suiveur-intelligent-9500.png", "Trepied Suiveur Intelligent", "Eclairage"],
  ["Eclairage/017-Guirlande-lumineuse-LED-5-m-4500.png", "Guirlande Lumineuse LED 5 M", "Eclairage"],
  ["Eclairage/018-Ruban-LED-intelligent-4500.png", "Ruban LED Intelligent", "Eclairage"],
  ["Eclairage/019-Bande-lumineuse-neon-silicone-5500.png", "Bande Lumineuse Neon Silicone", "Eclairage"],
  ["Eclairage/020-Bande-LED-10-metres-5500.png", "Bande LED 10 Metres", "Eclairage"],
  ["Eclairage/021-Bande-LED-neon-360-9500.png", "Bande LED Neon 360", "Eclairage"],
  ["Eclairage/022-Lampe-de-remplissage-RGB-a-clip-4000.png", "Lampe de Remplissage RGB a Clip", "Eclairage"],
  ["Eclairage/023-Lampe-magnetique-pour-selfie-4000.png", "Lampe Magnetique pour Selfie", "Eclairage"],
  ["Eclairage/024-Lampe-solaire-haute-performance-3500.png", "Lampe Solaire Haute Performance", "Eclairage"],
  ["Eclairage/025-Lampe-de-camping-solaire-LED-3500.png", "Lampe de Camping Solaire LED", "Eclairage"],
  ["Eclairage/026-Lampe-solaire-d-exterieur-7500.png", "Lampe Solaire d'Exterieur", "Eclairage"],
  ["Eclairage/027-Lampe-murale-solaire-intelligente-7500.png", "Lampe Murale Solaire Intelligente", "Eclairage"],
  ["Eclairage/0032-Projecteur-solaire-LED-puissant-6500.png", "Projecteur Solaire LED Puissant", "Eclairage"],
  ["Eclairage/033-Projecteur-LED-solaire-7000.png", "Projecteur LED Solaire", "Eclairage"],
  ["Eclairage/034-Ventilateur-LED-camping-3-en-1-5500.png", "Ventilateur LED Camping 3 en 1", "Eclairage"],
  ["Divers/001-Aspirateur-cyclonique-puissant-0000.png", "Aspirateur Cyclonique Puissant", "Divers"],
  ["Divers/002-Mini-blender-portable-3500.png", "Mini Blender Portable", "Divers"],
  ["Divers/003-Bouteille-isotherme-acier-inoxydable-5000.png", "Bouteille Isotherme Acier Inoxydable", "Divers"],
  ["Divers/004-Gourde-isotherme-coloree-0000.png", "Gourde Isotherme Coloree", "Divers"],
  ["Divers/005-Gourde-isolee-sport-0000.png", "Gourde Isolee Sport", "Divers"],
  ["Divers/006-Pompe-a-air-electrique-compacte-2500.png", "Pompe a Air Electrique Compacte", "Divers"],
  ["Divers/007-Pompe-a-main-puissante-polyvalente-2000.png", "Pompe a Main Puissante Polyvalente", "Divers"],
  ["Divers/008-Cle-a-douilles-universelle-8-en-1-0000.png", "Cle a Douilles Universelle 8 en 1", "Divers"],
  ["Divers/009-Devidoir-de-tuyau-portable-0000.png", "Devidoir de Tuyau Portable", "Divers"]
];

function thumbnailPath(file) {
  return `thumbs/${file.replace(/\.[^.]+$/, ".webp")}`;
}

function watermarkedPath(file) {
  return `watermarked/${file.replace(/\.[^.]+$/, ".webp")}`;
}

const categoryOrder = ["Rangement", "Cuisine", "Maison", "Sante-Bien-etre", "Beaute", "Eclairage", "Divers", "Tous"];

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

let activeCategory = "Rangement";

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
const modalLoader = document.querySelector("#modalLoader");

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

  modalLoader.classList.add("is-visible");
  modalImage.classList.add("is-loading");
  modalImage.removeAttribute("src");
  modalImage.alt = `${product.title} - MINIPRIX MARKET`;
  modalTitle.textContent = product.title;
  modalCategory.textContent = categoryLabel(product.category);
  modalPrice.textContent = `Prix: ${product.price} FCFA`;
  modalWhatsapp.href = whatsappLink(product.title);
  imageModal.hidden = false;
  document.body.classList.add("modal-open");
  modalClose.focus();
  modalImage.src = product.largeImage;
}

function closeImageModal() {
  imageModal.hidden = true;
  modalImage.src = "";
  modalImage.classList.add("is-loading");
  modalLoader.classList.remove("is-visible");
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

modalImage.addEventListener("load", () => {
  modalImage.classList.remove("is-loading");
  modalLoader.classList.remove("is-visible");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !imageModal.hidden) closeImageModal();
});

renderWhatsappLinks();
renderTabs();
renderProducts();
