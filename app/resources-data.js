// Detailed cultural resources — explained
window.RESOURCES = [
  // ========== LITTÉRATURE ==========
  { id: 'genese', cat: 'Littérature', icon: '📖', title: 'Genèse (Bible)', subtitle: "Texte fondateur — Ancien Testament", date: 'Ier millénaire av. J.-C.',
    color: 'terracotta',
    summary: "Récit de la création du monde par Dieu. L'homme y est créé à l'image de Dieu et reçoit la mission de dominer les animaux.",
    why: "Texte clé pour penser la hiérarchie homme/animal dans la culture occidentale. Pose l'idée d'une supériorité ontologique de l'homme.",
    quote: "« Faisons les êtres humains [...] qu'ils commandent aux poissons, aux oiseaux, aux animaux domestiques »",
    useFor: ["Imaginaire sacré", "Hiérarchie homme/animal", "Critique de l'anthropocentrisme"]
  },
  { id: 'odyssee', cat: 'Littérature', icon: '📖', title: "L'Odyssée — Homère", subtitle: "Épopée grecque", date: 'VIIIᵉ siècle av. J.-C.',
    color: 'terracotta',
    summary: "Sur l'île de Circé, la magicienne transforme les compagnons d'Ulysse en porcs. Ulysse résiste et obtient leur libération.",
    why: "La métamorphose en animal révèle la « vraie nature » des hommes : ce qui est animal est ce qui est bestial, instinctif, inférieur. Mais Ulysse, qui résiste, est un héros.",
    useFor: ["Métamorphose comme révélation", "Frontière homme/bête", "Mythologie grecque"]
  },
  { id: 'metamorphoses', cat: 'Littérature', icon: '📖', title: 'Métamorphoses — Ovide', subtitle: "Recueil mythologique latin", date: '8 ap. J.-C.',
    color: 'terracotta',
    summary: "Actéon surprend la déesse Diane au bain. Punition : il est transformé en cerf et dévoré par ses propres chiens.",
    why: "La transformation animale comme châtiment divin. L'homme animalisé devient à la fois proie et victime de ce qu'il a domestiqué.",
    useFor: ["Punition par l'animalisation", "Tension culture/nature", "Anthropomorphisme inversé"]
  },
  { id: 'fables', cat: 'Littérature', icon: '📖', title: 'Fables — Jean de La Fontaine', subtitle: "Apologue, dédié au Dauphin", date: '1668-1694',
    color: 'terracotta',
    summary: "Recueils de fables où les animaux anthropomorphisés mettent en scène les comportements humains : « Le Loup et l'Agneau » critique la justice du puissant ; « Le Loup et le Chien » oppose liberté et servitude à la cour de Louis XIV.",
    why: "L'apologue permet d'échapper à la censure : on critique la cour, la justice, les caractères humains, sous le masque de l'animal. Référence ABSOLUE pour le thème.",
    quote: "« La raison du plus fort est toujours la meilleure »",
    useFor: ["Anthropomorphisme", "Critique sociale", "Animal comme miroir de l'homme"]
  },
  { id: 'belle-bete', cat: 'Littérature', icon: '📖', title: 'La Belle et la Bête', subtitle: "Conte — Jeanne Leprince de Beaumont", date: '1757',
    color: 'terracotta',
    summary: "Un prince transformé en bête par une fée ne peut redevenir humain que s'il est aimé pour lui-même. La Belle, par son amour, brise le sortilège.",
    why: "L'animalité comme épreuve morale. L'amour révèle l'humanité au-delà de l'apparence bestiale. Repris et popularisé par Disney.",
    useFor: ["Métamorphose rédemptrice", "Apparence vs intériorité", "Hybride homme-animal"]
  },
  { id: 'souris-hommes', cat: 'Littérature', icon: '📖', title: 'Des souris et des hommes — Steinbeck', subtitle: "Roman américain", date: '1937',
    color: 'forest',
    summary: "Candy doit accepter qu'on tue son vieux chien rhumatisant et puant. Carlson y voit un acte de pitié, Slim valide. Le texte préfigure tragiquement la mort de Lennie.",
    why: "Pose la question : à partir de quand devient-il acceptable de tuer un animal ? L'utilité comme critère de la valeur d'une vie. Lien direct avec l'élevage industriel.",
    quote: "« Si je deviens vieux et infirme, je voudrais que quelqu'un me foute un coup de fusil » (Slim)",
    useFor: ["Euthanasie animale", "Utilité et valeur d'une vie", "Compagnonnage"]
  },
  { id: 'maus', cat: 'Littérature', icon: '📖', title: 'Maus — Art Spiegelman', subtitle: "Bande dessinée — Prix Pulitzer 1992", date: '1986 / 1992',
    color: 'terracotta',
    summary: "BD qui raconte la Shoah avec des humains animalisés : Juifs = souris, Allemands = chats, Polonais = cochons, Américains = chiens.",
    why: "Spiegelman retourne l'arme nazie : les nazis appelaient les Juifs « Ratte » (rats) pour les déshumaniser. En les dessinant en souris, l'auteur dénonce et interroge le mécanisme même de l'animalisation.",
    useFor: ["Animalisation et déshumanisation", "Allégorie animale", "Mémoire de la Shoah"]
  },
  { id: 'incroyable', cat: 'Littérature', icon: '📖', title: "L'Incroyable Histoire des animaux", subtitle: "BD — Karine-Lou Matignon & Olivier Martin", date: '2021',
    color: 'forest',
    summary: "BD qui raconte la longue histoire de la domestication. Le loup est le premier animal à se rapprocher des humains (-40 000 à -15 000 en Europe). Tous les chiens descendent du loup préhistorique.",
    why: "Donne des repères solides sur la domestication : néoténie domesticatoire (le chien garde des traits juvéniles du loup), rôle des femmes qui allaitaient les louveteaux orphelins.",
    useFor: ["Domestication", "Origine du chien", "Coévolution homme-animal"]
  },

  { id: 'descartes', cat: 'Philosophie', icon: '💭', title: 'Discours de la méthode — Descartes', subtitle: "Essai philosophique — l'animal-machine", date: '1637',
    color: 'azure',
    summary: "Dans la Vᵉ partie du Discours, Descartes développe sa thèse de l'« animal-machine » : les animaux ne sont que des automates complexes, dépourvus de pensée, de raison et d'âme. Ils n'ont ni langage articulé, ni conscience d'eux-mêmes ; leurs cris ne sont que des réactions mécaniques, comme les rouages d'une horloge.",
    why: "Texte fondateur du dualisme moderne et de l'anthropocentrisme occidental. Il a légitimé pendant trois siècles l'exploitation animale (vivisection, élevage, expérimentation) en niant la souffrance animale. C'est la thèse à laquelle s'opposent toute l'éthologie moderne et la Déclaration de Cambridge (2012).",
    quote: "« Les animaux agissent naturellement et par ressorts, ainsi qu'une horloge »",
    useFor: ["Animal-machine", "Anthropocentrisme", "Thèse à dépasser", "Histoire de l'éthique animale"]
  },
  { id: 'voltaire', cat: 'Philosophie', icon: '💭', title: 'Dictionnaire philosophique — Voltaire', subtitle: "Article « Bêtes » — réfutation de Descartes", date: '1764',
    color: 'azure',
    summary: "Dans l'article « Bêtes » de son Dictionnaire philosophique portatif, Voltaire s'oppose violemment à la thèse cartésienne de l'animal-machine. Il décrit un chien qui cherche son maître, qui souffre, qui se réjouit, et demande ironiquement aux disciples de Descartes : « Réponds, machiniste, la nature a-t-elle arrangé tous les ressorts du sentiment dans cet animal afin qu'il ne sente pas ? »",
    why: "Réfutation classique et puissante de Descartes. Voltaire ouvre la voie à la reconnaissance de la sensibilité animale, qui sera entérinée par la science (Cambridge 2012) et le droit (Code civil 2015). Couple INDISPENSABLE avec Descartes pour montrer le débat philosophique.",
    quote: "« A-t-il des nerfs pour être impassible ? Ne suppose pas cette impertinente contradiction dans la nature »",
    useFor: ["Réfutation de Descartes", "Sensibilité animale", "Philosophie des Lumières", "Argumentation contre l'animal-machine"]
  },

  // ========== ARTS VISUELS ==========
  { id: 'chauvet', cat: 'Arts visuels', icon: '🖼️', title: 'Grotte Chauvet', subtitle: "Peintures rupestres — Ardèche, France", date: '≈35 000 av. J.-C.',
    color: 'terracotta',
    summary: "Une des plus anciennes représentations animales connues. Lions, chevaux, rhinocéros, mammouths peints sur les parois.",
    why: "Hypothèse : invocation religieuse pour appeler la chance à la chasse, ou demander protection. L'animal comme puissance sacrée, dès la préhistoire.",
    useFor: ["Animal sacré", "Origines de l'art", "Imaginaire préhistorique"]
  },
  { id: 'durer', cat: 'Arts visuels', icon: '🖼️', title: 'Le Lièvre — Albrecht Dürer', subtitle: "Aquarelle — Albertina, Vienne", date: '1502',
    color: 'terracotta',
    summary: "Étude d'un lièvre d'un réalisme extrême. Chaque poil, chaque détail anatomique est observé.",
    why: "Tournant majeur : à la Renaissance, l'animal devient sujet d'étude pour lui-même, sans symbolique religieuse. Préfigure l'approche scientifique de la zoologie.",
    useFor: ["Animal observé scientifiquement", "Renaissance", "Réalisme animalier"]
  },
  { id: 'gozzoli', cat: 'Arts visuels', icon: '🖼️', title: 'Julien de Médicis avec un guépard', subtitle: "Fresque — Benozzo Gozzoli, Florence", date: '1459',
    color: 'forest',
    summary: "Le jeune Médicis exhibe un guépard apprivoisé.",
    why: "L'animal exotique apprivoisé devient signe de richesse et de pouvoir aristocratique. Préfigure les ménageries royales.",
    useFor: ["Animal de prestige", "Pouvoir et exotisme"]
  },
  { id: 'brueghel', cat: 'Arts visuels', icon: '🖼️', title: "L'Embarquement des animaux dans l'arche de Noé", subtitle: "Jan Brueghel le Jeune — Orléans", date: 'XVIIᵉ siècle',
    color: 'terracotta',
    summary: "Foisonnement biblique : toutes les espèces se pressent pour entrer dans l'arche.",
    why: "L'animal sauvé par l'homme à la demande de Dieu. Hiérarchie cosmique : l'homme est responsable des espèces.",
    useFor: ["Imaginaire biblique", "Responsabilité humaine"]
  },
  { id: 'longhi', cat: 'Arts visuels', icon: '🖼️', title: 'Le Rhinocéros — Pietro Longhi', subtitle: "Huile sur toile — Venise", date: '1751',
    color: 'forest',
    summary: "Tableau qui montre Clara, la rhinocéros exhibée dans toutes les cours d'Europe au XVIIIᵉ siècle.",
    why: "L'animal devient curiosité, spectacle, exotisme — première forme de zoo. L'homme regarde l'animal mais ne le comprend pas encore.",
    useFor: ["Exotisme", "Spectacle animal", "Préhistoire des zoos"]
  },
  { id: 'gericault', cat: 'Arts visuels', icon: '🖼️', title: 'Tête de cheval blanc — Géricault', subtitle: "Huile sur toile — Louvre", date: '1815',
    color: 'terracotta',
    summary: "Portrait romantique d'un cheval blanc, son regard expressif presque humain.",
    why: "Le romantisme élève l'animal : il devient noble, sensible, sujet à part entière. Le cheval n'est plus un outil mais un compagnon dont on cherche l'intériorité.",
    useFor: ["Romantisme", "Animal noble", "Anthropomorphisme du regard"]
  },
  { id: 'bonheur', cat: 'Arts visuels', icon: '🖼️', title: "L'Aigle blessé — Rosa Bonheur", subtitle: "Huile sur toile — Los Angeles", date: 'vers 1870',
    color: 'terracotta',
    summary: "Un aigle blessé, fragile et puissant à la fois.",
    why: "Première peintre animalière reconnue. L'aigle blessé symbolise la fragilité de la nature face à l'homme — modernité écologique avant l'heure.",
    useFor: ["Pionnière de la peinture animalière", "Conscience écologique"]
  },
  { id: 'kahler', cat: 'Arts visuels', icon: '🖼️', title: "My Wife's Lovers — Carl Kahler", subtitle: "Huile sur toile", date: '1891',
    color: 'forest',
    summary: "42 chats persans représentés en train de jouer.",
    why: "Célébration de l'animal de compagnie au XIXᵉ siècle, moment où la bourgeoisie adopte massivement chats et chiens. Naissance de la « culture » animal de compagnie.",
    useFor: ["Animal de compagnie bourgeois", "XIXᵉ siècle", "Histoire du chat"]
  },
  { id: 'rousseau', cat: 'Arts visuels', icon: '🖼️', title: 'Combat de tigre et de buffle — Henri Rousseau', subtitle: "Huile sur toile — Cleveland", date: '1908',
    color: 'terracotta',
    summary: "Scène exotique et naïve d'un tigre attaquant un buffle dans une jungle stylisée.",
    why: "Vision fantasmée de l'animal sauvage par un européen qui n'a jamais quitté Paris. L'animal exotique comme projection occidentale du « primitif ».",
    useFor: ["Exotisme fantasmé", "Animal sauvage imaginaire"]
  },
  { id: 'pompon', cat: 'Arts visuels', icon: '🖼️', title: "Tête d'Orang-outan — François Pompon", subtitle: "Sculpture — Dijon", date: '1930',
    color: 'azure',
    summary: "Sculpture épurée d'une tête d'orang-outan, formes simplifiées et lisses.",
    why: "Dignité et présence de l'animal mises en avant par la stylisation moderne. Préfigure la reconnaissance des grands singes comme « personnes non-humaines ».",
    useFor: ["Sculpture moderne", "Dignité animale", "Grands singes"]
  },
  { id: 'bourgeois', cat: 'Arts visuels', icon: '🖼️', title: 'Maman — Louise Bourgeois', subtitle: "Sculpture monumentale", date: '1999',
    color: 'azure',
    summary: "Araignée géante de bronze (9 mètres de haut), exposée dans le monde entier.",
    why: "Représentation maternelle ambivalente : protectrice (l'araignée veille sur ses œufs sous son ventre) et inquiétante. Brouille la frontière entre humain et animal.",
    useFor: ["Symbolique maternelle", "Art contemporain", "Animal-monstre poétique"]
  },

  // ========== SCIENCES ==========
  { id: 'lorenz', cat: 'Sciences', icon: '🔬', title: 'Konrad Lorenz', subtitle: "Père de l'éthologie — Prix Nobel 1973", date: '1903-1989',
    color: 'azure',
    summary: "Étudie les oies cendrées et découvre la théorie de l'empreinte : un oiseau né suit le premier être qu'il voit (sa mère, ou Lorenz lui-même).",
    why: "Fondation scientifique de l'éthologie. Montre que les comportements animaux sont régis par des mécanismes complexes et non par un simple « instinct ».",
    useFor: ["Éthologie", "Empreinte", "Science vs anthropomorphisme"]
  },
  { id: 'goodall', cat: 'Sciences', icon: '🔬', title: 'Jane Goodall', subtitle: "Primatologue", date: 'à partir de 1960',
    color: 'azure',
    summary: "Étudie les chimpanzés en Tanzanie pendant des décennies. Découvre qu'ils utilisent des outils, ont des cultures, des émotions, des conflits.",
    why: "Brise le dogme de l'outil comme propre de l'homme. Fait basculer notre regard sur les grands singes : ce sont des êtres culturels, sensibles.",
    useFor: ["Intelligence animale", "Culture chez les animaux", "Grands singes"]
  },
  { id: 'fossey', cat: 'Sciences', icon: '🔬', title: 'Dian Fossey', subtitle: "Primatologue — assassinée", date: '1932-1985',
    color: 'azure',
    summary: "Étudie les gorilles des montagnes au Rwanda. Lutte contre le braconnage. Assassinée en 1985 dans son camp, probablement par des braconniers.",
    why: "Figure de la défense des animaux jusqu'au sacrifice. Son livre Gorillas in the Mist (1983) inspire un film qui sensibilise le grand public.",
    useFor: ["Protection des espèces", "Engagement scientifique", "Grands singes"]
  },
  { id: 'dewaal', cat: 'Sciences', icon: '🔬', title: 'Frans de Waal', subtitle: "Primatologue néerlandais", date: 'né en 1948',
    color: 'azure',
    summary: "Étudie l'empathie chez les primates. Auteur de Sommes-nous trop bêtes pour comprendre l'intelligence des animaux ?",
    why: "Propose un changement de paradigme : ne plus se demander « jusqu'où vont les animaux ? » mais « qu'est-ce qui nous empêche de les comprendre ? »",
    useFor: ["Empathie animale", "Cognition", "Critique de l'anthropocentrisme"]
  },
  { id: 'cambridge', cat: 'Sciences', icon: '🔬', title: 'Déclaration de Cambridge sur la conscience', subtitle: "Texte signé par 25 neuroscientifiques", date: '7 juillet 2012',
    color: 'azure',
    summary: "Affirme que les humains ne sont pas les seuls êtres conscients : tous les mammifères, les oiseaux et de nombreux autres animaux (notamment les poulpes) le sont aussi.",
    why: "Texte CLÉ de l'évolution scientifique. Donne une base aux changements juridiques (Code civil 2015) et aux mouvements antispécistes.",
    quote: "« Tous les mammifères, les oiseaux, et de nombreux autres animaux, tels les poulpes [sont conscients] »",
    useFor: ["Conscience animale", "Argument scientifique majeur", "Citation à mémoriser"]
  },
  { id: 'baratay', cat: 'Sciences', icon: '🔬', title: 'Eric Baratay', subtitle: "Historien des relations homme/animal", date: 'contemporain',
    color: 'forest',
    summary: "Historien qui retrace les « quatre âges » du chat : adulé en Égypte, diabolisé au Moyen Âge, aristocratique du XIVᵉ au XVIIIᵉ, démocratisé au XIXᵉ.",
    why: "Source précieuse pour l'évolution culturelle de notre rapport à un animal donné. Notion de « chatchien » (chat sociable, promené en laisse, mais anxieux).",
    useFor: ["Histoire culturelle", "Évolution du chat", "Domestication"]
  },
  { id: 'grandgorge', cat: 'Sciences', icon: '🔬', title: 'Marine Grandgorge', subtitle: "Docteure en psychologie — EthoS, Université de Rennes", date: 'contemporain',
    color: 'forest',
    summary: "Étudie les bénéfices des animaux sur le développement de l'enfant : éveil, motricité, langage, confiance en soi, gestion du stress.",
    why: "Source scientifique récente (Psychologie Magazine, septembre 2025) qui valide l'intuition courante. À citer pour défendre la valeur de l'animal de compagnie.",
    useFor: ["Bienfaits animal de compagnie", "Médiation animale", "Enfance"]
  },

  // ========== DROIT & PHILOSOPHIE ==========
  { id: 'singer', cat: 'Philosophie', icon: '💭', title: 'Peter Singer — La Libération animale', subtitle: "Essai philosophique", date: '1975',
    color: 'azure',
    summary: "Singer popularise le terme « antispécisme » (inventé par Richard Ryder en 1970) : la discrimination fondée sur l'espèce est moralement injustifiable, comme le sont le racisme et le sexisme.",
    why: "Texte fondateur de la philosophie animaliste contemporaine. Influence directe sur le mouvement vegan et les associations comme L214.",
    useFor: ["Antispécisme", "Éthique animale", "Argumentation philosophique"]
  },
  { id: 'great-ape', cat: 'Philosophie', icon: '💭', title: 'Great Ape Project', subtitle: "Peter Singer & Paola Cavalieri", date: '1993',
    color: 'azure',
    summary: "Projet qui propose d'étendre les droits humains fondamentaux (vie, liberté, non-torture) aux grands singes : chimpanzés, bonobos, gorilles, orangs-outans.",
    why: "Concrétise l'antispécisme dans le droit. Inspire la décision argentine de 2014 sur Sandra l'orang-outan.",
    useFor: ["Droit des animaux", "Grands singes", "Personne non-humaine"]
  },
  { id: 'sandra', cat: 'Droit', icon: '⚖️', title: "Sandra, première personne non-humaine", subtitle: "Décision de justice — Argentine", date: 'décembre 2014',
    color: 'azure',
    summary: "La justice argentine reconnaît l'orang-outan Sandra comme « personne non-humaine » pouvant bénéficier de droits fondamentaux. Elle est transférée du zoo de Buenos Aires vers un sanctuaire.",
    why: "Précédent juridique mondial. Sandra devient le symbole de l'évolution du statut juridique de l'animal.",
    useFor: ["Personne non-humaine", "Évolution juridique", "Cas emblématique"]
  },
  { id: 'code-civil', cat: 'Droit', icon: '⚖️', title: "Code civil français — article 515-14", subtitle: "Loi du 16 février 2015", date: '2015',
    color: 'azure',
    summary: "Les animaux deviennent des « êtres vivants doués de sensibilité ». Avant, ils étaient considérés comme de simples « biens meubles » (Code Napoléon).",
    why: "Évolution juridique majeure en France. Tarde à venir mais entérine ce que la science savait déjà.",
    useFor: ["Statut juridique de l'animal", "Évolution récente", "Accroche d'introduction"]
  },
  { id: 'l214', cat: 'Droit', icon: '⚖️', title: 'L214', subtitle: "Association française", date: 'créée en 2008',
    color: 'azure',
    summary: "Tire son nom de l'article L. 214-1 du Code rural. Lanceurs d'alerte : vidéos d'enquêtes en abattoirs (à partir de 2015) qui ont choqué l'opinion publique.",
    why: "Acteur majeur du débat français sur la condition animale. Source fiable pour les chiffres-clés.",
    useFor: ["Condition animale", "Lanceurs d'alerte", "Source pour chiffres"]
  },

  // ========== POP CULTURE ==========
  { id: 'godzilla', cat: 'Pop culture', icon: '🎬', title: 'Godzilla', subtitle: "Film japonais — Ishirō Honda", date: '1954',
    color: 'terracotta',
    summary: "Animal-monstre géant qui surgit de l'océan et détruit Tokyo.",
    why: "Métaphore de l'arme nucléaire (Hiroshima, Nagasaki, 1945) et des essais américains à Bikini. L'animal-monstre comme projection d'une peur historique.",
    useFor: ["Animal-monstre", "Allégorie historique", "Pop culture mondiale"]
  },
  { id: 'babar', cat: 'Pop culture', icon: '🎬', title: 'Babar — Jean de Brunhoff', subtitle: "Album illustré", date: 'à partir de 1931',
    color: 'terracotta',
    summary: "Histoire d'un éléphant orphelin qui devient roi des éléphants après un séjour chez les humains.",
    why: "Figure paternelle protectrice. L'éléphant anthropomorphisé pour transmettre des valeurs aux enfants. Cas typique d'animal-miroir.",
    useFor: ["Anthropomorphisme jeunesse", "Imaginaire de l'éléphant"]
  },
  { id: 'pokemon', cat: 'Pop culture', icon: '🎬', title: 'Pokémon', subtitle: "Franchise japonaise", date: 'depuis 1996',
    color: 'terracotta',
    summary: "Créatures inventées que les joueurs « capturent » et entraînent au combat. Pikachu en est la mascotte.",
    why: "Univers entier d'animaux imaginaires qui peuplent l'imaginaire des enfants depuis 30 ans. Pose la question de la « capture » et de l'instrumentalisation ludique.",
    useFor: ["Animal imaginaire", "Pop culture jeunesse"]
  },
];
