const WHATSAPP_NUMBER = "000000000000";

const categoryDetails = {
  "Cuisine": {
    text: "Preparation, conservation et petits appareils pour une cuisine plus rapide.",
    cover: "2026-06/B0797A07-5994-46D4-93F9-F4C2561B565B.png"
  },
  "Maison & rangement": {
    text: "Solutions de rangement, organisation et confort pour la maison.",
    cover: "2026-06/BB8C9D42-2216-4DAC-A842-E628D8DC2679.png"
  },
  "Beaute": {
    text: "Accessoires coiffure, maquillage et soin pour la routine quotidienne.",
    cover: "2026-06/B157559F-A2DF-4879-A6B1-CDC91D26883F.png"
  },
  "Bien-etre": {
    text: "Massage, relaxation et petits essentiels pour se sentir mieux.",
    cover: "2026-06/1E37EC98-15D8-402B-8DE8-5112248CBA93.png"
  },
  "Eclairage": {
    text: "Lampes, ring lights, LED et accessoires pour ambiance ou creation.",
    cover: "2026-06/C9154DF6-41C7-4F8E-ABAF-65C557CC45EF.png"
  },
  "Outdoor & tech": {
    text: "Accessoires nomades, auto, securite, camping et exterieur.",
    cover: "2026-06/82145C20-B581-4AF8-9A0E-E5838256C4A7.png"
  },
  "Sante": {
    text: "Mesure, suivi et confort pour une selection orientee bien-etre.",
    cover: "2026-06/AD8E991C-809B-4DB4-B522-4DF85A657F2F.png"
  }
};

const products = [
  ["001A7A04-2B45-4981-B4FC-D9315B63B6AB.png", "Mini masseur corps et relaxation", "Bien-etre"],
  ["02687373-9C1F-46AC-9C70-699CBAC3A72A.png", "Gourde isolee sport", "Outdoor & tech"],
  ["026F2E6E-813B-43EE-B5FB-194657325C05.png", "Penderie gain de place", "Maison & rangement"],
  ["05495164-5B1E-4CD3-B5BF-77CCD5788BA5.png", "Sechoir pliant multifonction", "Maison & rangement"],
  ["08C2AE6D-5E3A-4299-9B32-BEB5D9DCE524.png", "Organisateur de cuisine rotatif", "Cuisine"],
  ["09A7D501-9057-47CF-9F9F-A4500669FF56.png", "Eclairage LED professionnel", "Eclairage"],
  ["0AE17CAC-5DFA-45D6-A16B-612E3044EFB9.png", "Table d'appoint papillon", "Maison & rangement"],
  ["0B556585-BFBF-4523-AC7E-1EB90EF3EEB7.png", "Meuble a chaussures anti-poussiere", "Maison & rangement"],
  ["0BC61863-FFBA-4C91-9E56-ABEA29118054.png", "Cle a douilles universelle 8 en 1", "Outdoor & tech"],
  ["0CDDBF58-81F1-43EA-B006-037A679233A8.png", "Cafetiere electrique turque", "Cuisine"],
  ["0E246947-7206-496E-B9D6-F6133CBDFA6E.png", "Eclairage parfait pour creations", "Eclairage"],
  ["0E28535C-72B3-4CD9-AB32-16C9214DD78C.png", "Aspirateur a acariens et masseur tactile", "Maison & rangement"],
  ["10805788-EA8D-44B1-8B94-CA769ABE9423.png", "Etagere d'angle salle de bain", "Maison & rangement"],
  ["1130429F-4538-42C8-BD1D-AD5066D05A7C.png", "Robinet electrique chauffage instantane", "Cuisine"],
  ["14F232CE-FD59-4579-86DF-3D9C478EF27B.png", "Commode de rangement 4 tiroirs", "Maison & rangement"],
  ["171A33F0-5625-46E7-8046-64CE809AAC28.png", "Diffuseur d'arome effet flamme", "Bien-etre"],
  ["182651E6-8C33-42C4-8304-B44A3897E874.png", "Bain de pieds chaud et relaxant", "Bien-etre"],
  ["1A35A06B-CA67-4FC1-8F52-1D81CCB05007.png", "Lumiere spot RGB sans filtre", "Eclairage"],
  ["1D98657B-94B0-4306-86EE-FFDB0E4112D4.png", "Fer a repasser electrique haute performance", "Maison & rangement"],
  ["1E37EC98-15D8-402B-8DE8-5112248CBA93.png", "Masseur cervical intelligent", "Bien-etre"],
  ["1E87CC34-AB8E-49FA-A510-6262986401FE.png", "Masseur de cou et d'epaules", "Bien-etre"],
  ["1EFC5120-F0ED-469C-B7A2-F8F66A084C2B.png", "Lampe video LED RL-1200", "Eclairage"],
  ["227259A6-CDD2-4B28-BACF-735DE969E0CD.png", "Pompe a eau elegante", "Cuisine"],
  ["257536B8-98DC-4CBC-B4EF-D9F0C6750A6A.png", "Hachoir a ail rapide", "Cuisine"],
  ["28DB284D-DA67-4404-B8B1-8889F1113869.png", "Support de manucure avec loupe et lumiere", "Beaute"],
  ["2996330A-0DD2-42D3-B16B-0A2018014A4E.png", "Support mural TV pour ecran plat", "Maison & rangement"],
  ["2C0FABCF-53EA-42BC-97E9-9687EFED778A.png", "Etagere reglable sous evier", "Cuisine"],
  ["2C75F147-ADC8-4D66-99F5-78753221598A.png", "Porte-brosse a dents intelligent", "Maison & rangement"],
  ["2D9EA5B3-AA01-47BB-B5E5-768345C00282.png", "Etireur lombaire", "Bien-etre"],
  ["2EA324E8-E1C8-440F-8A18-622D4C13458C.png", "Blender 2 en 1", "Cuisine"],
  ["2FE85B30-C12B-4876-B3B3-739AD2987F00.png", "Lunch box electrique", "Cuisine"],
  ["395C55AF-62C8-4316-8CBD-C29C982D524C.png", "Bouteille isotherme acier inoxydable", "Outdoor & tech"],
  ["3974BC7F-01BE-4F41-AA76-0813FA7D9E08.png", "Mini ventilateur brumisateur", "Outdoor & tech"],
  ["39D04E7A-468E-4B0F-9E8E-D87F04E6FD6C.png", "Devidoir de tuyau portable", "Outdoor & tech"],
  ["3A73B2CC-0767-408B-B4DF-57662A26B031.png", "Portant a vetements rotatif 360", "Maison & rangement"],
  ["3B29B78B-B9B7-4BDE-A7BE-417E69B6FCD5.png", "Batteur electrique sans fil 2 en 1", "Cuisine"],
  ["4097.png", "Support a poubelle avec rangement", "Maison & rangement"],
  ["4112.png", "Portant a vetements sur pied", "Maison & rangement"],
  ["4116.png", "Mini machine a laver pliable 8L", "Maison & rangement"],
  ["4183.png", "Boucleur francais 30 secondes", "Beaute"],
  ["4185.png", "Lampe de nuit a detection ventouse", "Eclairage"],
  ["4188.png", "Ruban LED intelligent", "Eclairage"],
  ["4212.png", "Anneau lumineux LED 12 pouces", "Eclairage"],
  ["43BC86AB-C693-4728-8CDC-82C938A1B0C4.png", "Lampe solaire haute performance", "Outdoor & tech"],
  ["43F6BB76-5F4D-4A0D-AA0A-0B117AB6301E.png", "Lampe acrylique lumineuse LED", "Eclairage"],
  ["477B8FF9-B662-4DBE-A7CB-F855B29EFEF1.png", "Lampe ventilateur 2 en 1", "Maison & rangement"],
  ["47BE02FB-96C6-4A4A-B8DF-53A5F64D693D.png", "Organisateur maquillage elegant", "Beaute"],
  ["48705214-CC0B-4353-9D52-54AE0BD837E4.png", "Boucleur automatique rapide", "Beaute"],
  ["49147C5C-E18E-4F30-9123-F20FC4E99C17.png", "Lampe murale solaire intelligente", "Outdoor & tech"],
  ["4AEA69D3-9523-41C7-9618-850CA1BF7945.png", "Refroidisseur d'air ultra rapide", "Maison & rangement"],
  ["4B9BC5DB-7E16-414D-82F4-9A01B19C8C41.png", "Brosse soufflante 3 en 1", "Beaute"],
  ["4C1F84D9-D5E7-482B-BCBD-6A35DA548095.png", "Miroir de maquillage LED", "Beaute"],
  ["4D221A8D-3676-4DAA-B2AE-146D34DC5D6E.png", "Egouttoir reglable pour evier", "Cuisine"],
  ["53A45783-3509-4B01-BB7F-0F7154175F9D.png", "Humidificateur d'air lumineux", "Bien-etre"],
  ["560F6C6E-FBD3-469A-873D-8A59CBAA865E.png", "Lampe video LED RL-900", "Eclairage"],
  ["5AAD02F0-4EA9-42D1-9789-75E4CED6DB5D.png", "Etagere fermee anti-poussiere", "Maison & rangement"],
  ["5B5EF402-3649-4D82-B3B8-6A37DD299F8A.png", "Batteur electrique pour patisserie", "Cuisine"],
  ["5CA334ED-D3A3-4F3F-8E17-52BA5B1ACB02.png", "Aspirateur cyclonique puissant", "Maison & rangement"],
  ["5EEBF8E1-BF2E-43C9-9DAD-5465B745D782.png", "Trancheuse a fromage tout-en-un", "Cuisine"],
  ["60C7385C-C74A-440B-BBB9-E5D2319577B5.png", "Presse-agrumes electrique", "Cuisine"],
  ["697BF57B-E75D-4FA1-B10F-F45F71C93AC5.png", "Lampe d'appoint LED professionnelle", "Eclairage"],
  ["69e9ef74-55cc-4d34-843d-6341b8cbd051.jpg", "Perche a selfie R1S-L", "Outdoor & tech"],
  ["6A6190AC-4400-4D7C-B9A0-E139EE307745.png", "Portant a vetements multifonction", "Maison & rangement"],
  ["6A9F4CF7-8699-4D46-A917-683FE6380C15.png", "Boite a riz anti-insectes", "Cuisine"],
  ["6C8B6382-B764-4120-BD9D-A8189858148D.png", "Aspirateur sans fil voiture", "Outdoor & tech"],
  ["6C92CFFF-44DE-44CC-AD8D-68F2CC48ACD2.png", "Balance de cuisine numerique", "Cuisine"],
  ["720FB07D-54D4-44E0-8B63-FB9CFB1303E9.png", "Diffuseur d'aromes effet flamme realiste", "Bien-etre"],
  ["745A3AD3-7B04-4695-A61A-994B0092AFFA.png", "Rangement intelligent salle de bain", "Maison & rangement"],
  ["75F3A75B-229B-47E3-BE16-6FF5B361655D.png", "Planche a decouper antibacterienne", "Cuisine"],
  ["77A501A0-5091-4E3C-84FB-933001BAEAC1.png", "Lumiere LED RGB studio", "Eclairage"],
  ["78915D69-6E3C-4A57-B379-73B555DB79EF.png", "Roue abdominale", "Bien-etre"],
  ["7B5EFC71-44CB-420F-AFFA-4AD69B8A473A.png", "Lampe magnetique pour selfie", "Eclairage"],
  ["7F526717-EE40-4138-81D7-B1AB478487AE.png", "Lampe de remplissage RGB a clip", "Eclairage"],
  ["82145C20-B581-4AF8-9A0E-E5838256C4A7.png", "Projecteur LED solaire", "Outdoor & tech"],
  ["8240402F-058C-4C84-B641-C480ECD06B90.png", "Hachage rapide cuisine facile", "Cuisine"],
  ["8517A169-C270-413B-8529-BBA76CB83069.png", "Porte-bebe securise et confortable", "Maison & rangement"],
  ["86714715-B0F7-468E-B153-97C60D7D1A71.png", "Coupe-frites polyvalent", "Cuisine"],
  ["873C5991-1DD0-4957-9D02-FE9AA818D8DA.png", "Ring light RGB 18 pouces", "Eclairage"],
  ["88EE032D-DCEB-4C5F-8B41-E55871833FB5.png", "Mixeur electrique sans fil", "Cuisine"],
  ["8B9C80DE-F734-460E-9EE9-23AA74BFA84C.png", "Eclairage LED rechargeable", "Eclairage"],
  ["91079404-C9CC-4D0F-86AB-EFBD52F64A9D.png", "Portant a vetements multifonction premium", "Maison & rangement"],
  ["93B76441-F458-416E-B38E-483BA9C4914E.png", "Pompe a main puissante polyvalente", "Outdoor & tech"],
  ["9535CE9C-D44D-4617-8A31-489D85833FAE.png", "Rape a mais multifonction", "Cuisine"],
  ["958C92EC-F36F-4F7E-9F80-DF94964CA4AE.png", "Gourde isotherme coloree", "Outdoor & tech"],
  ["9BFFF3C1-57AD-426B-B4FA-725A37B100D3.png", "Ventilateur portable humidificateur", "Maison & rangement"],
  ["9DE69576-003C-4083-8685-B238AE8FDCC4.png", "Rangement intelligent du quotidien", "Maison & rangement"],
  ["9E3475F1-9874-4563-9F2B-DD524ECEC660.png", "Camera de securite 360", "Outdoor & tech"],
  ["9F572B7E-01EA-4144-A521-015C764EAE7C.png", "Mini blender portable", "Cuisine"],
  ["A3974B24-4D9D-4FEF-BE3C-198DE810836C.png", "Rasoir anti-bouloches", "Maison & rangement"],
  ["A3EC513E-1F5B-4BFE-BAFE-FD7F43D42652.png", "Etagere de rangement 3 niveaux", "Maison & rangement"],
  ["A7B4353C-0117-477C-8771-7A66693951F9.png", "Distributeur de riz grande capacite", "Cuisine"],
  ["A88B8DD4-504B-4A2B-A75F-C2C2C60DD9C1.png", "Ventilateur de bureau pliable", "Maison & rangement"],
  ["AA0A0442-FA83-4A49-B52E-8ACF32B7C3CB.png", "Lampe solaire d'exterieur", "Outdoor & tech"],
  ["AA7CC764-BD6C-4CC8-B17A-41DC7ADFDABE.png", "Masseur cranien relaxant", "Bien-etre"],
  ["AD8E991C-809B-4DB4-B522-4DF85A657F2F.png", "Tensiometre electronique", "Sante"],
  ["AEBA194E-2752-4909-A03C-36665B6ADD21.png", "Bande LED 10 metres", "Eclairage"],
  ["B0797A07-5994-46D4-93F9-F4C2561B565B.png", "Ensemble de batterie de cuisine 10 pieces", "Cuisine"],
  ["B157559F-A2DF-4879-A6B1-CDC91D26883F.png", "Hot air styler 5 en 1", "Beaute"],
  ["b1851fca-109b-40db-9fdc-4b8fdd65e464.jpg", "Hachoir electrique 3 L", "Cuisine"],
  ["B1B3F09C-2E1E-4E8C-9BA5-B0DA2B196A5B.png", "Glucometre", "Sante"],
  ["B70DF1B6-9A27-438F-A216-A1DB22CACF1C.png", "Etagere a chaussures 3 en 1", "Maison & rangement"],
  ["B7B57E5C-666C-4041-86D9-58F3B9C7935E.png", "Projecteur solaire LED puissant", "Outdoor & tech"],
  ["BA0282F4-8D95-4083-A842-470A3A7BD0B2.png", "Ring light 18 pouces", "Eclairage"],
  ["BB8C9D42-2216-4DAC-A842-E628D8DC2679.png", "Porte-manteau multifonction", "Maison & rangement"],
  ["BDA4BA53-1DBA-464D-9441-547D2E067411.png", "Bande lumineuse neon silicone", "Eclairage"],
  ["C09B3978-E21C-43A0-B1DC-4D8773F12DCF.png", "Trancheur d'ananas", "Cuisine"],
  ["C134B36A-291A-46F0-845D-E8C04BE0CFDE.png", "Bustier amincissant", "Beaute"],
  ["C7B378BE-A08A-46BD-8D84-D00FE40B4E4B.png", "Ring light 14 pouces", "Eclairage"],
  ["C8638D93-AF81-4C63-919E-EAB7E87BFFDA.png", "Hachoir electrique multifonction", "Cuisine"],
  ["C9154DF6-41C7-4F8E-ABAF-65C557CC45EF.png", "Ring light RGB 14 pouces", "Eclairage"],
  ["C951FAB1-3EFB-4317-BF34-D1AE292D8B26.png", "Batteur manuel", "Cuisine"],
  ["CE92E392-9E69-43C9-A763-337D4771EBA5.png", "Guirlande lumineuse LED 5 m", "Eclairage"],
  ["CF3CB91C-A0AD-4F87-AE52-DA632C17CE99.png", "Appareil de massage raffermissant 4 en 1", "Bien-etre"],
  ["CFA25482-CB8B-46F6-922F-27439EC834BE.png", "Boites a epices magnetiques", "Cuisine"],
  ["D1B5C9ED-58B1-4731-B212-2443D613E78C.png", "Trepied suiveur intelligent", "Outdoor & tech"],
  ["D29F8E3B-3F68-4B07-A0BE-16527009FFE0.png", "Batteur electrique portatif", "Cuisine"],
  ["D2C4F618-C027-462E-A205-5D4019D82937.png", "Surveillance pression arterielle", "Sante"],
  ["D563170D-FAE4-4D63-A462-9EE4092F9910.png", "Etagere fermee anti-poussiere premium", "Maison & rangement"],
  ["D64AD7A1-A879-469C-9C49-D8B393B4C656.png", "Pese-personne intelligent", "Sante"],
  ["D74C0037-E4B7-4469-A018-745694586533.png", "Eclairage miroir parfait", "Eclairage"],
  ["D91ED21F-CC66-4CA2-9E7F-2BE0D98B221A.png", "Ventilateur LED camping 3 en 1", "Outdoor & tech"],
  ["DB37B432-D565-4CBB-AC8E-A5F6896C5F18.png", "Mixeur multifonction", "Cuisine"],
  ["DB597E78-500A-4FC5-BEAA-530CA3483766.png", "Humidificateur et projecteur etoile", "Bien-etre"],
  ["E055FCC3-DF9B-4A42-A03E-94386A5D6B1C.png", "Melangeur manuel", "Cuisine"],
  ["E16C6A0F-78C0-404F-BAD1-1E34117A59E4.png", "Humidificateur cristal", "Bien-etre"],
  ["E19C2E09-5D43-43C6-8DE2-4FC8FAB5836F.png", "Roue abdominale a rebond automatique", "Bien-etre"],
  ["E3CC4807-4B1A-4D58-BD91-FA6098AE31BA.png", "Bustier amincissant sans bretelles", "Beaute"],
  ["E442A706-91CB-4422-8AA2-46A9D3C10A54.png", "Mini machine a coudre", "Maison & rangement"],
  ["E54A4541-B7FC-435B-AC6C-A9AD486777CA.png", "Panier a linge multifonction", "Maison & rangement"],
  ["E582A160-AC4A-4150-87AE-6DBF61C13C44.png", "Peigne coiffant 3 en 1", "Beaute"],
  ["E5F78757-44A1-4A42-8F15-E188300E7DAD.png", "Humidificateur d'air 16 h", "Bien-etre"],
  ["E7FB129F-5889-482E-B006-3343639CAC46.png", "Range chaussures 2 niveaux", "Maison & rangement"],
  ["E94ED14C-3D64-4EEB-8CDA-13E1C11B79F4.png", "Hachoir electrique intelligent sans fil", "Cuisine"],
  ["ED295B68-50DF-4A35-86E0-10E1B4DBC2DF.png", "Mandoline de cuisine multifonction", "Cuisine"],
  ["ED7A5914-260B-43E2-BA5E-5237747CEDF6.png", "Filtre a eau transparent", "Cuisine"],
  ["EDC84401-FBF9-4188-825E-684A5448FBA3.png", "Pompe a air electrique compacte", "Outdoor & tech"],
  ["EE42B176-BC41-4FA6-8FF8-9F4282330E6E.png", "Lampe de camping solaire LED", "Outdoor & tech"],
  ["EF6F14D4-87EE-4BA3-AEAC-BC0524F0007B.png", "Egouttoir a couverts", "Cuisine"],
  ["EFBB5A55-1F9F-4808-934D-6C164DFA5C98.png", "Ampoule anti-moustiques", "Outdoor & tech"],
  ["EFDC6AC8-6A2D-4B5E-8008-88F2E9D1A80E.png", "Portant a vetements multifonction ferme", "Maison & rangement"],
  ["F0C0C945-B9DE-49CB-9E9E-C8FC7B59F998.png", "Lampe d'eclairage photo et direct PL-48", "Eclairage"],
  ["F0F1923E-1040-4DC4-BB9A-979413EEF428.png", "Support mural TV reglable", "Maison & rangement"],
  ["F12F7F58-59F6-4BA3-B6F4-11877ED35E5E.png", "Correcteur de posture homme", "Bien-etre"],
  ["F1D9C520-108E-4187-83D9-57D619F17E76.png", "Pot a epices retractable", "Cuisine"],
  ["F2705623-4629-4F7E-84EF-C9E79383D677.png", "Etagere WC multifonction", "Maison & rangement"],
  ["F2A1BD3C-814F-4C0F-9500-C5CAAD43F667.png", "Batteur electrique portatif blanc", "Cuisine"],
  ["F3D089D5-291E-45F2-932B-7AE47CDECB94.png", "Bande LED neon 360", "Eclairage"],
  ["F483043E-E08E-45DF-95CB-2E29A35A4503.png", "Rangement d'entree 3 en 1", "Maison & rangement"],
  ["F697288D-1728-4D2E-91D2-DF5D10FD1DEC.png", "Etagere a chaussures multifonction", "Maison & rangement"],
  ["FA0F723E-CBFB-4934-9447-FF43C4D5E250.png", "Seche-cheveux sans fil 2 en 1", "Beaute"],
  ["FA4E93CC-FB2B-4BC9-A9F7-AFC1B0CBD84B.png", "Correcteur de posture femme", "Bien-etre"],
  ["FB1087E4-BC3F-4012-988E-A2851E7FB956.png", "Ventilateur a pince flexible", "Maison & rangement"],
  ["FD2E46B8-364A-40FC-982A-D07CE79AEF1F.png", "Porte-manteau avec etageres a chaussures", "Maison & rangement"],
  ["FE1A6F1D-6877-4B70-935D-423802CBA566.png", "Hachoir polyvalent manuel", "Cuisine"],
  ["FE6F05DD-AC01-413E-BCFC-85264C2F4303.png", "Pistolet de massage 5 tetes", "Bien-etre"],
  ["FF091E59-99BD-4133-A068-88BAC66BA08D.png", "Selfie stick avec double lumiere", "Eclairage"],
  ["IMG_1605.JPG", "Brosses de rechange electriques", "Sante"]
].map(([file, title, category], index) => ({
  id: index + 1,
  title,
  category,
  image: `2026-06/${file}`,
  description: categoryDetails[category].text
}));

let activeCategory = "Tous";
let searchTerm = "";

const categoryOrder = ["Tous", ...Object.keys(categoryDetails)];
const productGrid = document.querySelector("#productGrid");
const categoryTabs = document.querySelector("#categoryTabs");
const collectionGrid = document.querySelector("#collectionGrid");
const searchInput = document.querySelector("#searchInput");
const resultCount = document.querySelector("#resultCount");

function whatsappLink(productTitle = "votre catalogue") {
  const message = `Bonjour MINIPRIX MARKET, je suis en Cote d'Ivoire et je souhaite recevoir plus d'informations sur ${productTitle}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function renderWhatsappLinks() {
  ["headerWhatsapp", "heroWhatsapp", "footerWhatsapp"].forEach((id) => {
    const link = document.querySelector(`#${id}`);
    if (link) link.href = whatsappLink();
  });
}

function renderCollections() {
  collectionGrid.innerHTML = Object.entries(categoryDetails).map(([category, detail]) => {
    const total = products.filter((product) => product.category === category).length;
    return `
      <a class="collection-card" href="#catalogue" data-category="${category}">
        <img src="${detail.cover}" alt="${category}">
        <span class="collection-content">
          <h3>${category}</h3>
          <p>${total} produits selectionnes</p>
        </span>
      </a>
    `;
  }).join("");

  collectionGrid.querySelectorAll("[data-category]").forEach((card) => {
    card.addEventListener("click", () => {
      activeCategory = card.dataset.category;
      renderTabs();
      renderProducts();
    });
  });
}

function renderTabs() {
  categoryTabs.innerHTML = categoryOrder.map((category) => {
    const count = category === "Tous"
      ? products.length
      : products.filter((product) => product.category === category).length;
    return `
      <button class="category-tab" type="button" data-category="${category}" aria-pressed="${activeCategory === category}">
        ${category} ${count}
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
    const haystack = `${product.title} ${product.category}`.toLowerCase();
    const matchesSearch = haystack.includes(searchTerm.toLowerCase().trim());
    return matchesCategory && matchesSearch;
  });
}

function renderProducts() {
  const filtered = getFilteredProducts();
  resultCount.textContent = `${filtered.length} produit${filtered.length > 1 ? "s" : ""} affiche${filtered.length > 1 ? "s" : ""}`;

  if (!filtered.length) {
    productGrid.innerHTML = `<div class="empty-state">Aucun produit ne correspond a cette recherche.</div>`;
    return;
  }

  productGrid.innerHTML = filtered.map((product) => `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.title}" loading="lazy">
        <span class="badge">${product.category}</span>
      </div>
      <div class="product-info">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <div class="product-actions">
          <a class="whatsapp-button" href="${whatsappLink(product.title)}" target="_blank" rel="noopener">
            Demander sur WhatsApp
          </a>
        </div>
      </div>
    </article>
  `).join("");
}

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value;
  renderProducts();
});

document.querySelector("#clearFilters").addEventListener("click", () => {
  activeCategory = "Tous";
  searchTerm = "";
  searchInput.value = "";
  renderTabs();
  renderProducts();
});

renderWhatsappLinks();
renderCollections();
renderTabs();
renderProducts();
