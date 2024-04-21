const bodies = {
  spring: [
    {
      "name": "Antlia",
      "visibility": "Visible from February to May",
      "information": "Antlia, the air pump, is a relatively modern constellation in the southern sky, created by Nicolas Louis de Lacaille in the 18th century. It represents the air pump invented by the French physicist Denis Papin. The constellation is faint, with no stars brighter than the third magnitude.",
      "best_viewing_equipment": "Best viewed with small to medium telescopes."
    },
    {
      "name": "Corvus",
      "visibility": "Visible from March to June",
      "information": "Corvus represents the crow and is one of the 48 constellations listed by Ptolemy in the second century. It is associated with several myths, including the story of Apollo sending the crow to fetch water. Corvus is small and compact, easily identifiable due to its distinctive quadrilateral shape.",
      "best_viewing_equipment": "Visible with the naked eye; binoculars enhance the viewing of its fainter stars."
    },
    {
      "name": "Lynx",
      "visibility": "Visible from January to May",
      "information": "Lynx is named after the animal and was introduced in the 17th century by Johannes Hevelius. It is a faint constellation, challenging to spot with the naked eye, supposedly because Hevelius said only the lynx-eyed (those with good eyesight) would have been able to see it. It spans a large area on the sky's dome and does not contain any particularly bright stars.",
      "best_viewing_equipment": "Best viewed with a medium telescope to see the fainter stars."
    },
    {
      "name": "Boötes",
      "visibility": "Visible from March to August",
      "information": "Boötes, the herdsman, features the bright star Arcturus. Ancient astronomers associated this constellation with plowing and oxen-driving. The name 'Boötes' is derived from the Greek for 'noisy' or 'ox-driver'. Situated away from the Milky Way, it is home to many bright stars and is a starting point for finding several other constellations.",
      "best_viewing_equipment": "Visible with the naked eye; binoculars or a small telescope can be used to view double stars and clusters."
    },
    {
      "name": "Crater",
      "visibility": "Visible from February to June",
      "information": "Crater represents the cup of Apollo and is linked to the neighboring constellation, Corvus. According to myth, Apollo sent the crow to fetch water using this cup. The constellation is not very luminous, with its brightest stars forming a pattern that is visible under good conditions.",
      "best_viewing_equipment": "Binoculars or a small telescope to observe its faint stars."
    },
    {
      "name": "Musca",
      "visibility": "Visible from March to July",
      "information": "Musca, Latin for 'the fly', is one of the smallest constellations. It was originally named 'Apis' (the Bee) in the 16th century but was later changed. It is located in the deep southern sky and is best seen from southern latitudes. The constellation highlights several interesting deep-sky objects, accessible through small telescopes.",
      "best_viewing_equipment": "Small to medium telescopes are ideal to view deep-sky objects."
    },
    {
      "name": "Cancer",
      "visibility": "Visible from January to May",
      "information": "Cancer, the crab, famously known for the Beehive Cluster (Messier 44), is an ancient constellation that lies in the zodiac. The constellation, while faint, plays a significant role in the zodiac as it is linked to the crab that Hera sent to defeat Hercules in Greek mythology.",
      "best_viewing_equipment": "Binoculars or a small telescope to best view the Beehive Cluster."
    },
    {
      "name": "Crux",
      "visibility": "Visible from March to July",
      "information": "Crux, known as the Southern Cross, is the smallest of all 88 constellations but one of the most distinctive. It is crucial for navigation in the southern hemisphere and features a group of stars that are very bright and cross-shaped, which has been an important symbol in various cultures.",
      "best_viewing_equipment": "Visible with the naked eye; binoculars enhance views of its star clusters."
    },
    {
      "name": "Pyxis",
      "visibility": "Visible from January to May",
      "information": "Pyxis, representing the maritime compass, was part of the larger constellation Argo Navis before being split into smaller constellations. Located south of Hydra, Pyxis contains several stars of moderate brightness and is involved in the tale of Jason and the Argonauts.",
      "best_viewing_equipment": "A small telescope can reveal the fainter stars and open clusters."
    },
    {
      "name": "Canes Venatici",
      "visibility": "Visible from February to June",
      "information": "Canes Venatici, the hunting dogs, is situated in the northern sky. This constellation was created by Johannes Hevelius in the 17th century from stars that were previously seen as unformed. It represents the dogs held by Boötes, the herdsman, and contains the famous Whirlpool Galaxy (M51).",
      "best_viewing_equipment": "Medium to large telescopes are recommended to observe galaxies like the Whirlpool Galaxy."
    },
    {
      "name": "Hydra",
      "visibility": "Visible from January to May",
      "information": "Hydra, the water snake, is the largest of all constellations and represents the serpent from Greek mythology slain by Hercules. It stretches across a large portion of the sky and contains several notable deep-sky objects, like the Ghost of Jupiter nebula.",
      "best_viewing_equipment": "A medium telescope is useful to explore its nebulae and star clusters."
    },
    {
      "name": "Sextans",
      "visibility": "Visible from February to May",
      "information": "Sextans is a modern constellation created by Johannes Hevelius in the 17th century. It is named after the astronomical sextant, an instrument that Hevelius used in his stellar observations. This constellation is faint, containing mostly dim stars arranged in a vague line.",
      "best_viewing_equipment": "A medium to large telescope is needed to see its faint stars."
    },
    {
      "name": "Centaurus",
      "visibility": "Visible from January to June",
      "information": "Centaurus is one of the largest southern constellations and includes Alpha Centauri, the closest star system to the Sun. The constellation is rich in mythology, often associated with Chiron, the wise centaur who tutored ancient Greek heroes. It is also home to the globular cluster Omega Centauri, one of the brightest clusters visible from Earth.",
      "best_viewing_equipment": "Binoculars for Alpha Centauri and large telescopes for Omega Centauri and other deep-sky objects."
    },
    {
      "name": "Leo",
      "visibility": "Visible from January to June",
      "information": "Leo, the lion, is a prominent constellation of the zodiac and is linked to the Nemean Lion killed by Hercules. It is one of the most easily recognizable constellations due to its distinctive hook shape, which is often associated with the mane of a lion. Leo contains many bright stars, such as Regulus and Denebola.",
      "best_viewing_equipment": "Visible with the naked eye; binoculars or a small telescope can enhance the view of its galaxies."
    },
    {
      "name": "Ursa Major",
      "visibility": "Visible throughout the year",
      "information": "Ursa Major, the Great Bear, is famous for containing the Big Dipper asterism. This constellation is rich in mythology and has been recognized by many cultures throughout history. It serves as a navigation tool in the northern hemisphere and contains numerous interesting astronomical objects.",
      "best_viewing_equipment": "Visible with the naked eye; binoculars or a small telescope to view double stars and smaller galaxies."
    },
    {
      "name": "Chamaeleon",
      "visibility": "Visible from December to June",
      "information": "Chamaeleon, a small constellation in the southern sky, represents the chameleon. It was created by Dutch navigators Pieter Dirkszoon Keyser and Frederick de Houtman in the 16th century and includes stars that are moderately bright. The constellation is not well-known and is far from the celestial equator.",
      "best_viewing_equipment": "Best viewed with a small to medium telescope to identify its fainter stars."
    },
    {
      "name": "Leo Minor",
      "visibility": "Visible from January to May",
      "information": "Leo Minor, the lesser lion, lies between the more recognized constellations of Leo and Ursa Major. It was also introduced by Johannes Hevelius in the 17th century. The constellation is faint, containing few notable stars, and serves more as a reference point for astronomical observations.",
      "best_viewing_equipment": "A medium telescope is necessary to make out its dim stars."
    },
    {
      "name": "Ursa Minor",
      "visibility": "Visible throughout the year",
      "information": "Ursa Minor, the Little Bear, includes Polaris, the North Star. This constellation is crucial for navigation in the northern hemisphere and is visible throughout the year. Ursa Minor has been significant in astronomy and navigation since classical antiquity.",
      "best_viewing_equipment": "Visible with the naked eye; a small telescope can help discern its fainter stars."
    },
    {
      "name": "Coma Berenices",
      "visibility": "Visible from March to July",
      "information": "Coma Berenices, named after Queen Berenice's hair, is known for its beautiful star cluster, Mel 111, which forms the lion's tail. Ancient in origin, it was recognized as a distinct constellation by Tycho Brahe in the 16th century. It contains the North Galactic Pole and is a good region to view galaxies.",
      "best_viewing_equipment": "Binoculars or a small telescope are ideal for observing its star clusters and galaxies."
    },
    {
      "name": "Lupus",
      "visibility": "Visible from March to July",
      "information": "Lupus, historically known as the wolf, is a constellation in the southern hemisphere. It was once seen as an offering from Centaurus. Lupus is notable for several bright stars and deep-sky objects, making it an interesting target for amateur astronomers with telescopes.",
      "best_viewing_equipment": "A medium to large telescope is recommended to fully appreciate its nebulae and star clusters."
    },
    {
      "name": "Virgo",
      "visibility": "Visible from March to August",
      "information": "Virgo, associated with the goddess of wheat and agriculture, is the largest constellation of the Zodiac and the second-largest overall in the sky. It is particularly rich in galaxies, including the Virgo Cluster, and features Spica, a brilliant blue-white star.",
      "best_viewing_equipment": "Binoculars for star clusters and medium to large telescopes for galaxy observation."
    }
  ],
  summer: [
    "Apus",
    "Draco",
    "Pavo",
    "Aquila",
    "Equuleus",
    "Sagitta",
    "Ara",
    "Hercules",
    "Sagittarius",
    "Capricornus",
    "Indus",
    "Scorpius",
    "Circinus",
    "Libra",
    "Scutum",
    "Corona Australis",
    "Lyra",
    "Serpens",
    "Corona Borealis",
    "Microscopium",
    "Telescopium",
    "Cygnus",
    "Norma",
    "Triangulum Australe",
    "Delphinus",
    "Ophiuchus",
    "Vulpecula",
  ],
  fall: [
    {
      "name": "Andromeda",
      "visibility": "Visible from August to February",
      "information": "Andromeda, named after the mythical princess, is most famous for the Andromeda Galaxy (M31), the closest spiral galaxy to the Milky Way and visible to the naked eye under dark skies. This constellation is part of the Perseus family and is rich in mythology and deep-sky objects.",
      "best_viewing_equipment": "Naked eye for M31; binoculars or a small telescope to resolve its companion galaxies and star clusters."
    },
    {
      "name": "Grus",
      "visibility": "Visible from August to December",
      "information": "Grus, the crane, is a constellation in the southern sky. It was created in the 16th century and is notable for its bright stars and a few interesting deep-sky objects. The stars of Grus were once considered part of the neighboring constellation Piscis Austrinus.",
      "best_viewing_equipment": "Binoculars for its bright stars; small to medium telescopes for deep-sky observations."
    },
    {
      "name": "Pisces",
      "visibility": "Visible from September to November",
      "information": "Pisces, representing the two fish tied together, is a zodiac constellation. It is known for its beautiful star chains that make up the fishes' outlines and for being the location of the vernal equinox in the past. Pisces is rich in galaxies and has a sprawling size on the night sky.",
      "best_viewing_equipment": "Binoculars for star chains; medium telescopes for galaxies."
    },
    {
      "name": "Aquarius",
      "visibility": "Visible from September to November",
      "information": "Aquarius, the water bearer, is a large constellation of the zodiac and is known for its ancient depiction of a man pouring water. It hosts the famous Helix Nebula, one of the closest and brightest planetary nebulae to Earth, along with several other interesting deep-sky objects.",
      "best_viewing_equipment": "Small telescopes for the Helix Nebula; binoculars for star clusters."
    },
    {
      "name": "Lacerta",
      "visibility": "Visible from August to December",
      "information": "Lacerta, the lizard, is a small, faint constellation created in the 17th century. Despite its obscurity, it contains an interesting array of double stars and small deep-sky objects. It lies in the rich field of the Milky Way, providing a backdrop for stunning telescopic views.",
      "best_viewing_equipment": "Small to medium telescopes for double stars and deep-sky objects."
    },
    {
      "name": "Piscis Austrinus",
      "visibility": "Visible from July to November",
      "information": "Piscis Austrinus, the southern fish, is notable for the bright star Fomalhaut, one of the brightest stars in the night sky. This constellation is ancient, with its origins tracing back to Babylonian astronomy. Fomalhaut hosts a significant exoplanetary system, making it a point of interest for astronomers.",
      "best_viewing_equipment": "Naked eye for Fomalhaut; small telescope for nearby deep-sky objects."
    },
    {
      "name": "Aries",
      "visibility": "Visible from October to March",
      "information": "Aries, representing the ram, is a zodiac constellation with historical significance as it once contained the vernal equinox. It is home to the Ram's golden fleece in Greek mythology and contains several bright stars like Hamal. Aries offers a handful of galaxies and double stars for observation.",
      "best_viewing_equipment": "Binoculars for stars; small to medium telescopes for galaxies."
    },
    {
      "name": "Octans",
      "visibility": "Visible throughout the year",
      "information": "Octans, named after the octant navigational instrument, contains the southern celestial pole. It is a faint constellation, established in the 18th century, and includes Sigma Octantis, the southern pole star, which is much dimmer than Polaris in the north.",
      "best_viewing_equipment": "Medium telescope to view Sigma Octantis and other faint stars."
    },
    {
      "name": "Sculptor",
      "visibility": "Visible from September to January",
      "information": "Sculptor, representing a sculptor's workshop, is located south of Aquarius. It was introduced by Nicolas Louis de Lacaille in the 18th century. The constellation is home to the Sculptor Galaxy, one of the brightest galaxies in the sky, and a range of other galaxies suitable for amateur telescopes.",
      "best_viewing_equipment": "Small to medium telescopes for galaxies, especially the Sculptor Galaxy."
    },
    {
      "name": "Cassiopeia",
      "visibility": "Visible throughout the year",
      "information": "Cassiopeia, the queen, is known for its distinctive 'W' shape formed by five bright stars. It is a rich area for star clusters and nebulae, lying in the Milky Way. The constellation plays a key role in Greek mythology, representing the boastful queen who antagonized the sea god Poseidon.",
      "best_viewing_equipment": "Naked eye for the 'W' shape; binoculars and small telescopes for clusters and nebulae."
    },
    {
      "name": "Pegasus",
      "visibility": "Visible from July to January",
      "information": "Pegasus, the winged horse, is a prominent and large northern constellation. It includes the Great Square of Pegasus, a notable asterism used as a guide to finding other stars. Pegasus hosts 51 Pegasi, the first Sun-like star discovered to have an exoplanet.",
      "best_viewing_equipment": "Naked eye for the Great Square; binoculars for stars and small telescopes for deep-sky objects."
    },
    {
      "name": "Triangulum",
      "visibility": "Visible from September to February",
      "information": "Triangulum is a small constellation but notable for containing the Triangulum Galaxy (M33), a member of our Local Group of galaxies. It is one of the most distant objects that can be viewed with the naked eye. The constellation also plays a minor role in Greek mythology.",
      "best_viewing_equipment": "Naked eye for M33 under dark skies; binoculars or a small telescope for galaxy details."
    },
    {
      "name": "Cepheus",
      "visibility": "Visible throughout the year",
      "information": "Cepheus, named after the king in Greek mythology, is recognizable for its house-shaped figure. It is located near Cassiopeia and houses several famous variable stars and nebulae, including the Fireworks Galaxy. Its stars are part of the myth involving his wife Cassiopeia and daughter Andromeda.",
      "best_viewing_equipment": "Naked eye for shape recognition; small telescopes for nebulae and galaxies."
    },
    {
      "name": "Perseus",
      "visibility": "Visible from August to March",
      "information": "Perseus, the hero, is rich in history and mythology, known for slaying the Gorgon Medusa. It hosts the radiant for the annual Perseid meteor shower, one of the most spectacular meteor showers. Perseus contains many interesting stars and deep-sky objects, including the famous Double Cluster.",
      "best_viewing_equipment": "Naked eye for meteor showers; binoculars for the Double Cluster and other deep-sky objects."
    },
    {
      "name": "Tucana",
      "visibility": "Visible from September to November",
      "information": "Tucana, the toucan, is a southern constellation containing part of the Small Magellanic Cloud, a dwarf galaxy near the Milky Way. It was named in the 16th century and is a recent addition to the constellations recognized in the northern hemisphere. Tucana hosts several interesting deep-sky objects.",
      "best_viewing_equipment": "Binoculars for the Small Magellanic Cloud; medium to large telescopes for detailed deep-sky observation."
    },
    {
      "name": "Cetus",
      "visibility": "Visible from October to March",
      "information": "Cetus, representing the sea monster from Greek mythology, is one of the largest constellations. It contains Mira, a well-known variable star, and several other deep-sky objects. Cetus encapsulates the story of Perseus and Andromeda, providing a backdrop for their mythical encounters.",
      "best_viewing_equipment": "Binoculars for general observation; medium telescopes for galaxies and nebulae."
    },
    {
      "name": "Phoenix",
      "visibility": "Visible from September to January",
      "information": "Phoenix, named after the mythical bird that rejuvenates after death, is a southern constellation introduced by navigators in the 16th century. It contains an assortment of bright stars and deep-sky objects and serves as a metaphor for renewal and immortality.",
      "best_viewing_equipment": "Binoculars for bright stars; small to medium telescopes for deep-sky objects."
    }
  ],
  winter: [
    {
      "name": "Auriga",
      "visibility": "Visible from October to March",
      "information": "Auriga, the charioteer, is known for its prominent star Capella, one of the brightest stars in the night sky. The constellation also hosts several interesting deep-sky objects, including the star clusters M36, M37, and M38, which are favorites among amateur astronomers.",
      "best_viewing_equipment": "Naked eye for Capella; binoculars or a small telescope for star clusters."
    },
    {
      "name": "Eridanus",
      "visibility": "Visible from November to March",
      "information": "Eridanus represents the celestial river and is one of the largest constellations. It stretches across the sky from Orion towards the southern pole. Eridanus hosts several bright stars, including Achernar, a particularly luminous star at the river's end.",
      "best_viewing_equipment": "Binoculars for bright stars and fainter parts of the constellation; small telescopes for deeper observations."
    },
    {
      "name": "Orion",
      "visibility": "Visible from November to April",
      "information": "Orion is one of the most well-known and easily recognizable constellations, marked by the Belt of Orion and the stars Betelgeuse and Rigel. It is rich in nebulae, including the famous Orion Nebula (M42), making it a staple of winter stargazing.",
      "best_viewing_equipment": "Naked eye for the belt and nebulae; binoculars or a small telescope to explore the Orion Nebula in detail."
    },
    {
      "name": "Caelum",
      "visibility": "Visible from November to February",
      "information": "Caelum, the chisel, is a small and faint constellation in the southern sky, introduced in the 18th century by Lacaille. It represents the sculptor's chisel and is composed mostly of dim stars, often overlooked without a telescope.",
      "best_viewing_equipment": "A small to medium telescope is required to make out its stars."
    },
    {
      "name": "Fornax",
      "visibility": "Visible from October to February",
      "information": "Fornax, the furnace, was also named by Lacaille and represents a chemical furnace. It is a southern constellation that is home to the Fornax Cluster of galaxies, one of the closest clusters of galaxies, which includes both spiral and elliptical galaxies.",
      "best_viewing_equipment": "Small to medium telescopes for galaxy cluster observations."
    },
    {
      "name": "Pictor",
      "visibility": "Visible from December to March",
      "information": "Pictor, the painter's easel, is another creation by Lacaille, representing a painter's easel. It is relatively faint, containing few notable stars but includes the notable galaxy NGC 1705, a blue compact dwarf galaxy.",
      "best_viewing_equipment": "Medium to large telescopes are recommended to observe galaxy details."
    },
    {
      "name": "Camelopardalis",
      "visibility": "Visible throughout the year",
      "information": "Camelopardalis, the giraffe, is a large but obscure constellation in the northern sky. It represents the exotic animal the giraffe, symbolizing the animal brought back from distant lands. The constellation is mostly made up of faint stars, suitable for deep-sky viewing with a telescope.",
      "best_viewing_equipment": "A medium telescope to view its faint galaxies and open clusters."
    },
    {
      "name": "Gemini",
      "visibility": "Visible from December to March",
      "information": "Gemini, representing the twins Castor and Pollux, is known for its two bright stars that mark the twins' heads. The constellation is rich in interesting deep-sky objects, such as the Geminga supernova remnant, and is a favorite for winter stargazers.",
      "best_viewing_equipment": "Naked eye for Castor and Pollux; binoculars or a small telescope for deep-sky objects."
    },
    {
      "name": "Puppis",
      "visibility": "Visible from December to March",
      "information": "Puppis, the stern of the ship, was once part of the larger constellation Argo Navis. Now it stands alone and includes the open cluster M46, as well as several nebulae within its borders.",
      "best_viewing_equipment": "Binoculars for open clusters; small to medium telescopes for nebulae."
    },
    {
      "name": "Canis Major",
      "visibility": "Visible from December to March",
      "information": "Canis Major, or the Great Dog, is dominated by Sirius, the brightest star in the night sky. The constellation is not just about Sirius but also includes several clusters and the Canis Major Dwarf Galaxy.",
      "best_viewing_equipment": "Naked eye for Sirius; binoculars for star clusters and small telescopes for the dwarf galaxy."
    },
    {
      "name": "Horologium",
      "visibility": "Visible from November to February",
      "information": "Horologium, the clock, is a constellation in the southern sky that is home to mostly dim stars. Named by Lacaille, it represents the pendulum clock and offers a few galaxies viewable with a moderate telescope.",
      "best_viewing_equipment": "Medium telescope for galaxies within Horologium."
    },
    {
      "name": "Reticulum",
      "visibility": "Visible from December to March",
      "information": "Reticulum, the reticle, was named by Lacaille to denote a small net. It is a small constellation in the southern hemisphere that includes some bright galaxies and is best known for containing the radial point for the December meteor showers.",
      "best_viewing_equipment": "Small to medium telescopes for galaxy observation."
    },
    {
      "name": "Canis Minor",
      "visibility": "Visible from December to April",
      "information": "Canis Minor, the Lesser Dog, contains Procyon, the eighth-brightest star in the sky and a nearby binary star system. This constellation is compact but significant due to its bright stars and ease of identification.",
      "best_viewing_equipment": "Naked eye for Procyon; binoculars to explore its binary nature."
    },
    {
      "name": "Hydrus",
      "visibility": "Visible from November to March",
      "information": "Hydrus, not to be confused with Hydra, represents a small water snake. It is a southern constellation best seen from the Southern Hemisphere. It contains a modest number of stars and the deep-sky object NGC 602, a young open cluster.",
      "best_viewing_equipment": "Binoculars for general observation; small telescopes for deep-sky objects."
    },
    {
      "name": "Taurus",
      "visibility": "Visible from November to March",
      "information": "Taurus, the bull, is prominently known for the Pleiades and the Hyades star clusters, along with the Crab Nebula (M1), the remnant of a supernova. It plays a significant role in various mythologies and is one of the oldest constellations.",
      "best_viewing_equipment": "Naked eye for star clusters; binoculars or a small telescope for the Crab Nebula."
    },
    {
      "name": "Carina",
      "visibility": "Visible from December to March",
      "information": "Carina, representing the keel of the ship, contains Canopus, the second-brightest star in the night sky, and is part of the former Argo Navis constellation. It is a treasure trove of spectacular deep-sky objects, including the Carina Nebula.",
      "best_viewing_equipment": "Naked eye for Canopus; small to medium telescopes for the Carina Nebula and other deep-sky objects."
    },
    {
      "name": "Lepus",
      "visibility": "Visible from November to March",
      "information": "Lepus, the hare, is located just beneath Orion, making it relatively easy to find. It includes several bright stars and deep-sky objects, serving as a popular target for amateur astronomers during the winter months.",
      "best_viewing_equipment": "Binoculars for bright stars; small telescopes for deep-sky objects."
    },
    {
      "name": "Vela",
      "visibility": "Visible from December to March",
      "information": "Vela, the sails, was once part of the larger constellation Argo Navis and now stands on its own. It includes the Vela Supernova Remnant, the remains of a supernova explosion visible to the naked eye.",
      "best_viewing_equipment": "Naked eye for general observation; medium telescopes for the supernova remnant."
    },
    {
      "name": "Columba",
      "visibility": "Visible from November to March",
      "information": "Columba, the dove, is a small constellation just south of Canis Major and Lepus. It was named in the late 16th century and is best known for its fairly bright stars, which can be seen without optical aids from southern latitudes.",
      "best_viewing_equipment": "Naked eye for general observation; binoculars for detailed star viewing."
    },
    {
      "name": "Mensa",
      "visibility": "Visible from December to March",
      "information": "Mensa, named after Table Mountain in South Africa, contains part of the Large Magellanic Cloud. It is one of the least conspicuous constellations in the sky, mostly containing dim stars.",
      "best_viewing_equipment": "Small to medium telescopes are needed to observe the Large Magellanic Cloud."
    },
    {
      "name": "Volans",
      "visibility": "Visible from December to March",
      "information": "Volans, the flying fish, is another constellation created by Pieter Dirkszoon Keyser and Frederick de Houtman. It is located in the southern sky and includes moderately bright stars that depict the flying fish.",
      "best_viewing_equipment": "Binoculars are sufficient for star patterns; small telescopes for fainter objects."
    },
    {
      "name": "Dorado",
      "visibility": "Visible from December to March",
      "information": "Dorado, the dolphinfish, is a southern constellation that contains most of the Large Magellanic Cloud and the Tarantula Nebula, one of the most impressive nebulae in the night sky.",
      "best_viewing_equipment": "Binoculars for the Large Magellanic Cloud; medium to large telescopes for the Tarantula Nebula."
    },
    {
      "name": "Monoceros",
      "visibility": "Visible from December to March",
      "information": "Monoceros, the unicorn, is nestled between Orion and Canis Major and is rich in open clusters, nebulae, and other deep-sky objects, including the Rosette Nebula.",
      "best_viewing_equipment": "Small telescopes for clusters and nebulae, particularly the Rosette Nebula."
    }
  ],
  planets: [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
    "Pluto",
  ],
};

export default bodies;
