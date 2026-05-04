// Sujets d'essai enrichis — L'Homme et l'Animal (CGE BTS)
// Méthodologie CUGEX : Accroche → Sujet reformulé → "Autrement dit" → Plan → AER → Conclusion

window.REVISION_ESSAIS = [
  {
    id:'e1',
    q:"Pensez-vous que l'animal puisse être considéré comme un véritable ami pour l'homme ?",

    notions:[
      { mot:'Amitié', def:'Relation affective réciproque fondée sur la confiance et le soutien mutuel. Aristote (<em>Éthique à Nicomaque</em>) distingue 3 types : amitié d\'utilité, de plaisir, et vertueuse (la vraie — fondée sur les qualités morales de l\'autre, rare et durable).' },
      { mot:'Animal', def:'Être vivant doté de sensibilité et d\'instincts. Longtemps perçu comme simple machine par Descartes (XVIIe), reconnu comme "être vivant doué de sensibilité" par le Code civil français depuis 2015 (art. 515-14). Ici : l\'animal non-humain domestique.' },
      { mot:'Véritable', def:'Authentique, profond, non simulé. Renvoie à la question de la <strong>réciprocité</strong> et de la conscience du lien. Un lien peut être réel sans être symétrique.' },
    ],

    accroche:'"Jusqu\'à ce qu\'on ait aimé un animal, une partie de notre âme reste endormie." — Anatole France',

    sujet_reformule:'Peut-on dire que l\'animal est capable d\'entretenir avec l\'homme une véritable relation d\'amitié ?',

    reformulation:'Autrement dit, le lien qui unit l\'homme à son animal de compagnie peut-il atteindre la profondeur et la réciprocité d\'une amitié authentique, ou reste-t-il fondamentalement asymétrique ?',

    plan:{
      type:'Dialectique (thèse / antithèse / synthèse)',
      parties:[
        { num:'I', titre:'L\'animal manifeste des qualités réelles de compagnon fidèle',
          sousparties:[
            { arg:'Une fidélité et une empathie attestées scientifiquement', expl:'La Déclaration de Cambridge sur la Conscience (2012) reconnaît que les mammifères et oiseaux possèdent des substrats neurologiques de la conscience émotionnelle.', ref:'Déclaration de Cambridge, 2012' },
            { arg:'Le soutien affectif de l\'animal est mesurable', expl:'La zoothérapie (chiens, chevaux) réduit le cortisol, accompagne les personnes âgées, dépressives ou traumatisées. Des effets thérapeutiques prouvés.', ref:'Zoothérapie — études cliniques' },
            { arg:'La littérature témoigne de cette fidélité légendaire', expl:'Argos reconnaît Ulysse après vingt ans d\'absence et meurt aussitôt — symbole universel d\'un lien indéfectible.', ref:'Odyssée, Homère (VIIIe s. av. J.-C.)' },
          ]
        },
        { num:'II', titre:'Les limites philosophiques d\'une amitié véritable',
          sousparties:[
            { arg:'L\'amitié exige réciprocité consciente : l\'animal ne "choisit" pas son ami', expl:'Aristote exige que l\'ami soit aimé pour ses qualités propres. Or l\'animal est conditionné par la nourriture, la sécurité — pas par le choix moral.', ref:'Aristote, Éthique à Nicomaque' },
            { arg:'L\'anthropomorphisme biaise notre lecture du lien', expl:'La Fontaine prête aux animaux nos vices et vertus pour critiquer la cour de Louis XIV — c\'est une projection littéraire, non une réalité comportementale.', ref:'La Fontaine, Fables (1668)' },
            { arg:'La dépendance fausse la notion de lien libre', expl:'La domestication crée un lien de subordination (nourriture, abri, soin) — ce n\'est pas l\'égalité que requiert une amitié vertueuse.', ref:'Histoire de la domestication' },
          ]
        },
        { num:'III', titre:'Un lien unique qui enrichit et redéfinit l\'amitié',
          sousparties:[
            { arg:'Cette relation nous responsabilise et nous humanise moralement', expl:'La relation avec l\'animal développe empathie, sens du soin et responsabilité — des valeurs au cœur de l\'éthique.', ref:'Jack London, Croc-Blanc (1906)' },
            { arg:'L\'éthique du "care" inter-espèces comme nouveau modèle', expl:'Donna Haraway propose une relation de co-devenir avec l\'animal : non pas une amitié humaine transposée, mais un lien inédit qui nous oblige.', ref:'Donna Haraway, When Species Meet (2008)' },
            { arg:'La reconnaissance juridique valide ce lien moral', expl:'Le Code civil 2015 reconnaît la sensibilité animale — premier pas vers une reconnaissance du rapport affectif homme-animal.', ref:'Code civil, art. 515-14 (2015)' },
          ]
        },
      ]
    },

    refs_cles:[
      'Odyssée (Homère) — Argos, fidélité absolue',
      'La Fontaine, Fables (1668) — anthropomorphisme',
      'Croc-Blanc (Jack London, 1906) — lien homme-loup',
      'Déclaration de Cambridge sur la Conscience (2012)',
      'Donna Haraway, When Species Meet (2008)',
      'Code civil, art. 515-14 (France, 2015)',
      'Zoothérapie — études sur l\'animal de soutien',
    ],

    correction:{
      intro:`"Jusqu'à ce qu'on ait aimé un animal, une partie de notre âme reste endormie", écrivait Anatole France. Peut-on dire que l'animal est capable d'entretenir avec l'homme une véritable relation d'amitié ? Autrement dit, le lien qui unit l'homme à son animal peut-il atteindre la profondeur et la réciprocité d'une amitié authentique, ou reste-t-il fondamentalement asymétrique ? Nous verrons d'abord que l'animal manifeste des qualités réelles de compagnon fidèle (I), avant d'examiner les limites philosophiques d'une telle amitié (II), pour montrer enfin que ce lien unique enrichit et redéfinit notre conception de l'amitié (III).`,
      para_modele:`<strong>Paragraphe rédigé (I.2 — la zoothérapie)</strong><br><br>L'animal offre à l'homme un soutien affectif dont les effets thérapeutiques sont aujourd'hui scientifiquement documentés. En effet, la <strong>zoothérapie</strong> — utilisation encadrée de l'animal en contexte médical et psychologique — démontre que la présence d'un chien ou d'un cheval réduit le cortisol (hormone du stress), apaise l'anxiété et accompagne les personnes souffrant de dépression ou d'isolement. Ce soutien inconditionnel, sans jugement, sans attente de réciprocité verbale, ressemble précisément à ce que nous attendons d'un ami proche. Cette réalité thérapeutique s'ancre dans une reconnaissance scientifique plus large : la <strong>Déclaration de Cambridge sur la Conscience (2012)</strong>, signée par des neuroscientifiques du monde entier, confirme que les mammifères et oiseaux possèdent les substrats neurologiques de la conscience émotionnelle. Ainsi, la relation affective que l'homme ressent avec son animal n'est pas une simple illusion anthropomorphiste — elle repose sur un lien émotionnel réel, des deux côtés.`,
      conclusion:`En définitive, si l'amitié au sens aristotélicien strict exige une réciprocité consciente que l'animal ne peut pleinement offrir, la relation homme-animal n'en est pas moins réelle, profonde et moralement engageante. Peut-être convient-il de sortir de nos catégories exclusivement humaines pour reconnaître ce lien inter-espèces dans ses propres termes — non comme une amitié au rabais, mais comme un lien inédit qui nous oblige et nous enrichit. N'est-ce pas là que réside la vraie question : jusqu'où sommes-nous prêts à élargir notre conception de l'amitié ?`,
    }
  },

  {
    id:'e2',
    q:"Faut-il interdire l'élevage industriel ?",

    notions:[
      { mot:'Élevage industriel', def:'Production animale intensive et standardisée à grande échelle, visant la rentabilité maximale. Se distingue de l\'élevage traditionnel par la densité, la mécanisation et les conditions de vie des animaux.' },
      { mot:'Interdire', def:'Prohibition totale par la loi. À distinguer de <em>réglementer</em> (encadrer) ou <em>réformer</em> (transformer progressivement). Le verbe pose une question de radicalité.' },
      { mot:'Faut-il', def:'Question de nécessité morale ou pratique. Implique un jugement de valeur : est-ce souhaitable, possible, juste ?' },
    ],

    accroche:'Selon la FAO (2013), l\'élevage représente 14,5 % des émissions mondiales de gaz à effet de serre — davantage que tous les transports réunis. Chaque année, plus de 80 milliards d\'animaux terrestres sont tués pour l\'alimentation humaine. Ces chiffres imposent une question : cette pratique est-elle encore justifiable ?',

    sujet_reformule:'Peut-on dire que l\'élevage industriel doit être interdit ?',

    reformulation:'Autrement dit, face aux dommages éthiques et environnementaux de l\'élevage intensif, faut-il envisager une prohibition totale, ou plutôt une transformation progressive de nos pratiques ?',

    plan:{
      type:'Dialectique (thèse / antithèse / synthèse)',
      parties:[
        { num:'I', titre:'L\'élevage industriel génère des problèmes graves qui justifient une remise en cause profonde',
          sousparties:[
            { arg:'Un traitement des animaux contraire à leur bien-être', expl:'Les animaux d\'élevage intensif vivent dans des espaces extrêmement réduits, sans comportements naturels, souvent maltraités. Peter Singer montre que leur sensibilité prouvée rend cette souffrance moralement inacceptable.', ref:'Peter Singer, La Libération animale (1975)' },
            { arg:'Un désastre environnemental documenté', expl:'14,5% des GES mondiaux (FAO, 2013), déforestation massive (Amazonie), pollution des eaux par les nitrates, épuisement des ressources en eau.', ref:'FAO, Rapport Livestock\'s Long Shadow (2013)' },
            { arg:'Des conditions sanitaires dangereuses', expl:'L\'utilisation massive d\'antibiotiques dans l\'élevage intensif favorise l\'émergence de bactéries résistantes — une menace de santé publique mondiale.', ref:'OMS, rapports sur la résistance aux antibiotiques' },
          ]
        },
        { num:'II', titre:'Une interdiction totale est impossible et contre-productive',
          sousparties:[
            { arg:'Une dépendance économique et culturelle massive', expl:'Des millions d\'emplois, des traditions régionales et des identités culturelles sont liés à l\'élevage. Une interdiction brutale provoquerait des crises sociales majeures.', ref:'Filières agricoles, territoires ruraux' },
            { arg:'Une question d\'accès alimentaire mondial', expl:'La protéine animale reste essentielle dans les pays en développement où les alternatives végétales sont moins accessibles. Interdire serait un luxe occidental.', ref:'FAO, sécurité alimentaire mondiale' },
            { arg:'L\'impossibilité juridique et pratique d\'une prohibition globale', expl:'Aucun traité international ne permet d\'imposer une telle interdiction. Les cultures ont des pratiques alimentaires très diverses.', ref:'Droit international, souveraineté alimentaire' },
          ]
        },
        { num:'III', titre:'Des transformations progressives plutôt qu\'une interdiction',
          sousparties:[
            { arg:'La réglementation du bien-être animal comme voie réaliste', expl:'La règle des 3R (Replace, Reduce, Refine) encadre déjà l\'expérimentation. Des labels bien-être animal commencent à émerger dans l\'élevage.', ref:'Règle des 3R, labels bien-être animal' },
            { arg:'L\'essor du végétarisme et du flexitarisme comme évolution collective', expl:'La réduction de la consommation de viande, sans interdiction, est une voie efficace. Le marché des protéines végétales et de la viande cellulaire se développe.', ref:'L214, WWF, marché des alternatives protéiques' },
            { arg:'L\'innovation technologique : la viande cultivée en laboratoire', expl:'La viande cellulaire (sans abattage) pourrait remplacer l\'élevage sans choc culturel ni économique brutal.', ref:'Viande in vitro, 1er burger cultured meat (2013)' },
          ]
        },
      ]
    },

    refs_cles:[
      'FAO, Livestock\'s Long Shadow (2013) — 14,5% GES',
      'Peter Singer, La Libération animale (1975)',
      'L214 (association française) et WWF',
      'Règle des 3R (Replace, Reduce, Refine)',
      'Code rural, art. L214 — "être sensible"',
      'Viande cellulaire — premier burger (2013)',
    ],

    correction:{
      intro:`Selon la FAO (2013), l'élevage représente 14,5 % des émissions mondiales de gaz à effet de serre, davantage que tous les transports réunis. Peut-on dire que l'élevage industriel doit être interdit ? Autrement dit, face aux dommages éthiques et environnementaux de l'élevage intensif, faut-il envisager une prohibition totale, ou plutôt une transformation progressive de nos pratiques ? Nous verrons d'abord que l'élevage industriel génère des problèmes graves qui justifient une remise en cause (I), avant d'examiner pourquoi une interdiction totale serait impossible (II), pour proposer enfin des voies de transformation progressives (III).`,
      para_modele:`<strong>Paragraphe rédigé (I.1 — le bien-être animal)</strong><br><br>L'élevage industriel soumet les animaux à des conditions de vie qui violent leur sensibilité prouvée. En effet, dans les élevages intensifs, les porcs, poulets et bovins sont entassés dans des espaces extrêmement réduits, privés de comportements naturels (fouiller, se déplacer, socialiser) et souvent mutilés préventivament (bec coupé, queue coupée). Or, la sensibilité des animaux n'est plus un sujet de débat : la <strong>Déclaration de Cambridge sur la Conscience (2012)</strong> affirme que les mammifères et oiseaux possèdent des substrats neurologiques de la souffrance. Dès 1975, le philosophe <strong>Peter Singer</strong> (<em>La Libération animale</em>) avait montré que causer de la souffrance à un être sensible, sans justification proportionnelle, constitue une injustice morale — qu'il nomme le "spécisme". Tolérer l'élevage intensif revient donc à accepter une forme de violence institutionnalisée envers des êtres dont on reconnaît la sensibilité.`,
      conclusion:`En définitive, l'élevage industriel est une pratique moralement et environnementalement intenable à long terme — mais son interdiction immédiate serait socialement et pratiquement impossible. La voie réaliste est celle d'une transformation progressive : réglementation renforcée du bien-être animal, soutien au végétarisme et aux alternatives protéiques, développement de la viande cellulaire. La question n'est pas "faut-il interdire ?" mais "comment accélérer la transition ?"`,
    }
  },

  {
    id:'e3',
    q:"Notre regard sur l'animal a-t-il changé ces dernières décennies ?",

    notions:[
      { mot:'Regard', def:'Perception culturelle, juridique et scientifique que l\'on porte sur un objet. Le regard n\'est pas neutre : il est construit par l\'histoire, la culture, la science.' },
      { mot:'Animal', def:'Être vivant non-humain. Longtemps perçu comme inférieur ou comme outil, sa définition évolue avec les découvertes scientifiques sur la conscience animale.' },
      { mot:'Décennies', def:'Période récente : fin du XXe siècle – début du XXIe. Implique de repérer des <strong>ruptures</strong> dans une histoire longue.' },
    ],

    accroche:'Descartes, au XVIIe siècle, affirmait que l\'animal était une simple "machine" sans âme ni sentiment. En 2012, des neuroscientifiques réunis à Cambridge déclaraient officiellement que les animaux sont dotés de conscience. En moins de quatre siècles — et surtout en quelques décennies — notre regard a opéré une révolution vertigineuse.',

    sujet_reformule:'Peut-on dire que notre regard sur l\'animal a profondément changé au cours des dernières décennies ?',

    reformulation:'Autrement dit, cette transformation est-elle une rupture radicale ou une évolution progressive, et touche-t-elle vraiment tous les aspects de notre rapport à l\'animal — scientifique, juridique, affectif et éthique ?',

    plan:{
      type:'Analytique / progressif (du passé au présent)',
      parties:[
        { num:'I', titre:'Un regard longtemps marqué par la domination et l\'indifférence',
          sousparties:[
            { arg:'Descartes et l\'animal-machine : la négation radicale de la sensibilité animale', expl:'Au XVIIe s., Descartes affirmait que les animaux sont des automates complexes dont les cris sont comparables au bruit d\'une horloge brisée. Cette vision a légitimé des siècles d\'exploitation.', ref:'Descartes, Discours de la méthode (1637)' },
            { arg:'Le Code civil de 1804 : l\'animal, simple "bien meuble"', expl:'Pendant plus de deux siècles, le droit français a traité l\'animal comme un objet mobilier, au même titre qu\'une chaise ou une machine.', ref:'Code Napoléon (1804)' },
            { arg:'L\'industrialisation du vivant au XXe siècle', expl:'L\'élevage intensif, développé après 1945, a transformé l\'animal en unité de production — outil quantifiable, optimisé et interchangeable.', ref:'Développement de l\'élevage industriel, années 1950-1970' },
          ]
        },
        { num:'II', titre:'La révolution scientifique et éthique du XXe siècle',
          sousparties:[
            { arg:'L\'éthologie découvre l\'intelligence et la culture animale', expl:'Depuis 1920, l\'éthologie (Lorenz, Tinbergen) étudie scientifiquement le comportement animal. On découvre des langages, des outils, des rituels sociaux chez de nombreuses espèces.', ref:'Éthologie — Konrad Lorenz, Nikolaas Tinbergen' },
            { arg:'Peter Singer et le mouvement de libération animale', expl:'En 1975, Singer nomme le "spécisme" — discrimination envers les animaux fondée sur l\'espèce — et remet en cause le droit de causer de la souffrance à des êtres sensibles.', ref:'Peter Singer, La Libération animale (1975)' },
            { arg:'La Déclaration de Cambridge : reconnaissance officielle de la conscience animale', expl:'En 2012, des neuroscientifiques affirment officiellement que les animaux non-humains (mammifères, oiseaux, céphalopodes) possèdent les substrats neurologiques de la conscience.', ref:'Déclaration de Cambridge sur la Conscience (2012)' },
          ]
        },
        { num:'III', titre:'Un regard contemporain transformé mais contradictoire',
          sousparties:[
            { arg:'La reconnaissance juridique en France (2015)', expl:'L\'art. 515-14 du Code civil reconnaît les animaux comme "êtres vivants doués de sensibilité" — une révolution symbolique, même si le régime des biens reste applicable.', ref:'Code civil, art. 515-14 (2015)' },
            { arg:'La place croissante de l\'animal de compagnie dans les sociétés occidentales', expl:'L\'animal domestique est désormais un membre de la famille, bénéficie de soins vétérinaires coûteux, est présent dans la publicité et les réseaux sociaux. La zoothérapie témoigne de cette nouvelle relation affective.', ref:'Zoothérapie, animaux de compagnie au XXIe s.' },
            { arg:'Mais des contradictions persistent : élevage intensif, zoos, chasse', expl:'Malgré ces évolutions, l\'élevage industriel se maintient, les cirques animaliers ont longtemps perduré et la chasse est toujours pratiquée. Notre regard a changé mais nos comportements restent contradictoires.', ref:'L214, WWF — conflits éthiques persistants' },
          ]
        },
      ]
    },

    refs_cles:[
      'Descartes, Discours de la méthode (1637) — animal-machine',
      'Éthologie — Lorenz, Tinbergen (depuis 1920)',
      'Peter Singer, La Libération animale (1975)',
      'Déclaration de Cambridge sur la Conscience (2012)',
      'Code civil, art. 515-14 (France, 2015)',
      'L214, WWF — associations de protection',
    ],

    correction:{
      intro:`Descartes, au XVIIe siècle, affirmait que l'animal était une simple "machine" sans âme ni sentiment. En 2012, des neuroscientifiques réunis à Cambridge déclaraient officiellement que les animaux sont dotés de conscience. Peut-on dire que notre regard sur l'animal a profondément changé au cours des dernières décennies ? Autrement dit, cette transformation est-elle une rupture radicale ou une évolution lente, et touche-t-elle vraiment tous les aspects de notre rapport à l'animal ? Nous verrons d'abord que ce regard fut longtemps marqué par la domination (I), avant d'examiner la révolution scientifique et éthique du XXe siècle (II), pour constater enfin que le regard contemporain, transformé, reste néanmoins contradictoire (III).`,
      para_modele:`<strong>Paragraphe rédigé (II.3 — la Déclaration de Cambridge)</strong><br><br>La rupture la plus spectaculaire dans notre regard sur l'animal est sans doute scientifique. En 2012, lors d'un congrès tenu à l'université de Cambridge, des neuroscientifiques de renom ont signé la <strong>Déclaration de Cambridge sur la Conscience</strong>, affirmant officiellement que les animaux non-humains — mammifères, oiseaux et même céphalopodes — possèdent les substrats neurologiques de la conscience. En d'autres termes, la science reconnaissait ce que beaucoup pressentaient : les animaux ressentent de la douleur, de la peur, de la joie. Ce texte a eu une portée considérable, car il offrait une base empirique solide à la défense du bien-être animal. Il venait clore deux siècles de débats philosophiques en apportant des preuves neurologiques. Cette reconnaissance scientifique a directement nourri les évolutions juridiques qui ont suivi, comme la réforme du Code civil français en 2015 (art. 515-14) reconnaissant les animaux comme "êtres vivants doués de sensibilité". Notre regard a donc changé parce que notre savoir a changé.`,
      conclusion:`En définitive, notre regard sur l'animal a profondément changé en quelques décennies : d'une machine sans âme à un être sensible reconnu juridiquement. Cette transformation est réelle, portée par la science, le droit et une évolution culturelle profonde. Pourtant, nos comportements collectifs restent en retard sur notre sensibilité : l'élevage intensif perdure, la chasse aussi. La vraie question n'est peut-être pas "notre regard a-t-il changé ?" — il a clairement changé — mais "sommes-nous prêts à agir en conséquence ?"`,
    }
  },

  {
    id:'e4',
    q:"Les animaux ont-ils des droits ?",

    notions:[
      { mot:'Droits', def:'En droit positif : prérogatives reconnues par la loi. En philosophie morale : revendications légitimes fondées sur la nature ou la dignité d\'un être. Distinction essentielle entre <em>avoir</em> des droits (en droit) et <em>mériter</em> des droits (en éthique).' },
      { mot:'Animaux', def:'Êtres vivants non-humains. Depuis 2015 en France : "êtres vivants doués de sensibilité" (art. 515-14 Code civil), mais toujours soumis au régime des biens.' },
      { mot:'Avoir', def:'Posséder ou mériter. L\'enjeu du sujet : les animaux <em>ont-ils</em> déjà des droits reconnus, ou <em>devraient-ils</em> en avoir ? Les deux lectures sont possibles.' },
    ],

    accroche:'En 2015, l\'article 515-14 du Code civil français reconnaissait enfin les animaux comme "êtres vivants doués de sensibilité". Pourtant, ce même texte les maintient sous le régime des biens. Cette contradiction révèle toute la difficulté d\'accorder des droits à des êtres qui ne peuvent pas les revendiquer eux-mêmes.',

    sujet_reformule:'Peut-on dire que les animaux possèdent ou devraient posséder des droits ?',

    reformulation:'Autrement dit, sur quel fondement — biologique, moral ou juridique — peut-on légitimement accorder des droits à des êtres non-humains, et jusqu\'où peut aller cette reconnaissance ?',

    plan:{
      type:'Dialectique',
      parties:[
        { num:'I', titre:'Des arguments solides fondent l\'idée de droits animaliers',
          sousparties:[
            { arg:'La sensibilité prouvée comme fondement naturel du droit à ne pas souffrir', expl:'Si la douleur est le mal le plus fondamental, et si les animaux souffrent (Cambridge 2012), alors ils ont droit à ne pas souffrir inutilement — c\'est la base d\'un droit minimal.', ref:'Déclaration de Cambridge (2012), Bentham : "La question n\'est pas : peuvent-ils raisonner ? mais : peuvent-ils souffrir ?"' },
            { arg:'Singer : le spécisme est une discrimination injustifiable', expl:'Discriminer un être en raison de son espèce est aussi arbitraire que le racisme ou le sexisme. Si un être souffre, sa souffrance compte également, quelle que soit son espèce.', ref:'Peter Singer, La Libération animale (1975)' },
            { arg:'Tom Regan : les animaux sont des "sujets d\'une vie" dignes de droits', expl:'Les animaux ont des croyances, désirs, perceptions, mémoire — ils sont les sujets de leur propre vie. À ce titre, ils ont une valeur inhérente et méritent des droits.', ref:'Tom Regan, The Case for Animal Rights (1983)' },
          ]
        },
        { num:'II', titre:'Les obstacles philosophiques et pratiques',
          sousparties:[
            { arg:'Les droits impliquent des obligations réciproques que l\'animal ne peut assumer', expl:'La tradition juridique lie droits et responsabilités. L\'animal ne peut être tenu responsable de ses actes ni remplir des obligations civiques. Peut-on alors être titulaire de droits ?', ref:'Tradition juridique romano-germanique' },
            { arg:'Accorder des droits aux animaux risque de relativiser les droits humains', expl:'Si tous les êtres sensibles ont des droits équivalents, la hiérarchie qui protège spécifiquement l\'homme est menacée. C\'est un enjeu de cohérence du système juridique.', ref:'Débat philosophique sur la personnalité juridique' },
            { arg:'Quelle limite ? Le moustique a-t-il autant de droits que le chimpanzé ?', expl:'L\'extension des droits aux animaux pose le problème de la gradation. Tous les animaux n\'ont pas le même degré de conscience ni de sensibilité.', ref:'Hiérarchie des êtres sensibles' },
          ]
        },
        { num:'III', titre:'Vers une protection renforcée, adaptée à la nature de l\'animal',
          sousparties:[
            { arg:'Le statut intermédiaire de 2015 : ni bien ni personne', expl:'L\'art. 515-14 reconnaît la sensibilité animale sans créer de personnalité juridique. C\'est un statut sui generis, une voie médiane entre objet et sujet de droit.', ref:'Code civil, art. 515-14 (2015)' },
            { arg:'La règle des 3R : une protection pratique dans l\'expérimentation', expl:'Replace (remplacer l\'animal par une alternative), Reduce (réduire le nombre d\'animaux), Refine (améliorer les conditions) — une éthique appliquée qui fonctionne.', ref:'Règle des 3R — expérimentation animale' },
            { arg:'La protection des espèces menacées comme droit collectif', expl:'L\'interdiction de chasser l\'éléphant, le tigre ou le rhinocéros est une forme de droit accordé à l\'espèce — une protection collective sans personnalité individuelle.', ref:'CITES, espèces protégées' },
          ]
        },
      ]
    },

    refs_cles:[
      'Bentham : "peuvent-ils souffrir ?" — fondement moral',
      'Peter Singer, La Libération animale (1975)',
      'Tom Regan, The Case for Animal Rights (1983)',
      'Déclaration de Cambridge (2012)',
      'Code civil, art. 515-14 (France, 2015)',
      'Règle des 3R — expérimentation animale',
      'CITES — espèces menacées protégées',
    ],

    correction:{
      intro:`En 2015, l'article 515-14 du Code civil français reconnaissait enfin les animaux comme "êtres vivants doués de sensibilité". Pourtant, ce même texte les maintient sous le régime des biens. Peut-on dire que les animaux possèdent ou devraient posséder des droits ? Autrement dit, sur quel fondement peut-on légitimement accorder des droits à des êtres non-humains, et jusqu'où peut aller cette reconnaissance ? Nous verrons d'abord que des arguments solides fondent l'idée de droits animaliers (I), avant d'examiner les obstacles philosophiques et pratiques (II), pour proposer enfin une voie de protection renforcée adaptée (III).`,
      para_modele:`<strong>Paragraphe rédigé (I.2 — Peter Singer)</strong><br><br>L'un des arguments les plus puissants en faveur de droits animaliers repose sur la notion de <strong>spécisme</strong>, concept forgé par le philosophe australien <strong>Peter Singer</strong> dans <em>La Libération animale</em> (1975). Singer y démontre que discriminer un être en raison de son seule appartenance à une espèce est aussi arbitraire — et aussi injustifiable moralement — que le racisme ou le sexisme. Si un être éprouve de la souffrance, cette souffrance a une valeur morale, quelle que soit son espèce. En se fondant sur l'utilitarisme (minimiser la souffrance totale), Singer conclut que nos pratiques d'élevage industriel et d'expérimentation animale constituent des formes de violence morale institutionnalisée. Cette argumentation a eu une influence considérable sur les mouvements de protection animale et sur l'évolution du droit : elle a contribué à faire reconnaître, en France comme ailleurs, la sensibilité animale comme donnée juridique incontournable, jusqu'à la réforme du Code civil de 2015.`,
      conclusion:`En définitive, les animaux n'ont pas de droits au sens juridique plein du terme — ils ne peuvent pas être sujets de droit comme un être humain. Mais ils méritent une protection juridique renforcée, fondée sur leur sensibilité prouvée. La question n'est pas "ont-ils des droits ?" mais "quelle forme de protection est adaptée à leur nature ?" L'enjeu pour les décennies à venir est de construire un droit de l'animal qui soit à la fois cohérent, gradué et réellement contraignant.`,
    }
  },

  {
    id:'e5',
    q:"L'homme est-il un animal comme les autres ?",

    notions:[
      { mot:'Homme', def:'Être humain, <em>Homo sapiens</em>. Traditionnellement défini par la raison, le langage, la culture et la conscience morale. Sa définition est au cœur du débat philosophique depuis l\'Antiquité.' },
      { mot:'Animal', def:'Être vivant non-humain. Mais biologiquement, l\'homme EST un animal (règne animal, classe des mammifères, ordre des primates).' },
      { mot:'Comme les autres', def:'Similaire, sans distinction fondamentale. Le sujet interroge l\'existence d\'une spécificité humaine. S\'il est "comme les autres", qu\'est-ce qui le distingue — ou rien ?' },
    ],

    accroche:'En 1859, Darwin publiait <em>De l\'origine des espèces</em>, démontrant que l\'homme et les grands singes descendent d\'un ancêtre commun. Depuis, les recherches sur l\'ADN ont confirmé que nous partageons 98,7 % de notre génome avec le chimpanzé. Sommes-nous, au fond, simplement un singe nu ?',

    sujet_reformule:'Peut-on dire que l\'homme n\'est qu\'un animal parmi les autres, sans caractéristique fondamentalement distinctive ?',

    reformulation:'Autrement dit, si l\'homme partage une origine commune avec les autres animaux, existe-t-il des traits proprement humains qui justifient une distinction — et cette distinction crée-t-elle une responsabilité particulière ?',

    plan:{
      type:'Dialectique',
      parties:[
        { num:'I', titre:'L\'homme partage une continuité profonde avec les autres animaux',
          sousparties:[
            { arg:'La continuité biologique : l\'homme est un animal', expl:'98,7% d\'ADN commun avec le chimpanzé (Darwin, 1859). L\'homme est un primate, mammifère, soumis aux mêmes besoins physiologiques (manger, dormir, se reproduire).', ref:'Darwin, De l\'origine des espèces (1859)' },
            { arg:'Les animaux ont des cultures, des langages, des émotions', expl:'L\'éthologie a découvert que les chimpanzés utilisent des outils, que les éléphants font leur deuil, que les corneilles résolvent des problèmes complexes. La frontière cognitivo-culturelle s\'efface.', ref:'Éthologie, Lorenz, Jane Goodall' },
            { arg:'La conscience : pas l\'apanage de l\'homme', expl:'La Déclaration de Cambridge (2012) reconnaît la conscience chez les mammifères, oiseaux et céphalopodes. L\'homme n\'est pas seul à être "conscient".', ref:'Déclaration de Cambridge (2012)' },
          ]
        },
        { num:'II', titre:'Des caractéristiques proprement humaines créent une distinction fondamentale',
          sousparties:[
            { arg:'Le langage articulé et la pensée abstraite', expl:'Aristote définissait l\'homme comme "animal politique" possédant le <em>logos</em> (raison et langage). Seul l\'homme crée des concepts abstraits, des mathématiques, de la philosophie.', ref:'Aristote, Politique — "zôon politikon"' },
            { arg:'La culture, l\'art, la religion : productions uniquement humaines', expl:'Seul l\'homme crée des œuvres d\'art durables (grotte Chauvet, -35 000), des religions, des systèmes éthiques complexes, des États et des lois.', ref:'Grotte Chauvet (-35 000) — premiers arts rupestres' },
            { arg:'La conscience morale : l\'homme peut juger ses propres actes', expl:'L\'homme est le seul être qui puisse se demander s\'il a bien agi, ressentir de la culpabilité, créer des systèmes de justice. C\'est ce que Kant appelle l\'autonomie morale.', ref:'Kant, philosophie morale' },
          ]
        },
        { num:'III', titre:'Cette distinction crée une responsabilité particulière envers les autres animaux',
          sousparties:[
            { arg:'Si l\'homme est supérieur par sa conscience, il en a l\'obligation morale', expl:'La supériorité ne justifie pas l\'exploitation — elle oblige. La capacité à comprendre la souffrance de l\'animal nous rend responsables de la limiter.', ref:'Peter Singer — la conscience oblige' },
            { arg:'La théorie de l\'évolution brouille la frontière sans la supprimer', expl:'Darwin lui-même ne niait pas les spécificités humaines : il montrait seulement qu\'elles s\'inscrivent dans une continuité, pas dans une rupture absolue.', ref:'Darwin, La Filiation de l\'homme (1871)' },
            { arg:'Vers une éthique de la co-responsabilité', expl:'Reconnaître notre parenté animale tout en assumant notre singularité morale : c\'est le fondement d\'une éthique de la coexistence responsable.', ref:'Code civil 2015, Déclaration Cambridge' },
          ]
        },
      ]
    },

    refs_cles:[
      'Darwin, De l\'origine des espèces (1859)',
      'Aristote — "zôon politikon", le logos',
      'Grotte Chauvet (-35 000) — culture uniquement humaine',
      'Éthologie — Lorenz, Jane Goodall',
      'Déclaration de Cambridge (2012)',
      'Descartes — cogito et conscience (1637)',
    ],

    correction:{
      intro:`En 1859, Darwin publiait De l'origine des espèces, démontrant que l'homme et les grands singes descendent d'un ancêtre commun, et que nous partageons 98,7 % de notre ADN avec le chimpanzé. Peut-on dire que l'homme n'est qu'un animal parmi les autres, sans caractéristique fondamentalement distinctive ? Autrement dit, si l'homme partage une origine commune avec les autres animaux, existe-t-il des traits proprement humains qui justifient une distinction — et cette distinction crée-t-elle une responsabilité particulière envers les autres vivants ? Nous verrons d'abord que l'homme partage une continuité profonde avec les autres animaux (I), avant d'examiner les caractéristiques proprement humaines (II), pour montrer enfin que cette distinction crée une responsabilité morale particulière (III).`,
      para_modele:`<strong>Paragraphe rédigé (II.1 — le logos d'Aristote)</strong><br><br>Ce qui distingue fondamentalement l'homme de l'animal réside peut-être dans ce qu'Aristote nommait le <strong><em>logos</em></strong> — à la fois raison et langage. Dans la <em>Politique</em>, le philosophe grec définit l'homme comme "animal politique" (<em>zôon politikon</em>) : un être qui, par la parole articulée, est capable de distinguer le juste de l'injuste, le bien du mal, et de construire des communautés fondées sur des lois. Or, si les animaux communiquent (chants des baleines, cris d'alarme des primates, danse des abeilles), aucun n'a développé un système de concepts abstraits permettant de raisonner sur sa propre existence, de créer des mathématiques ou de formuler une éthique. C'est cette capacité de pensée abstraite qui a permis à l'homme de produire de l'art (grotte Chauvet, -35 000 av. J.-C.), des religions, des systèmes juridiques et des sciences — autant de productions inconnues dans le règne animal. Si la frontière biologique est poreuse, la frontière culturelle reste, elle, bien réelle.`,
      conclusion:`En définitive, l'homme est biologiquement un animal parmi les autres — la science l'a établi sans appel depuis Darwin. Mais il est le seul animal qui ait développé une conscience morale, un langage abstrait et une culture cumulative. Cette singularité ne justifie pas la domination mais crée une obligation : l'homme, seul à comprendre la souffrance animale, est seul à pouvoir choisir de la limiter. Être "différent des autres" implique d'être responsable envers eux.`,
    }
  },

  {
    id:'e6',
    q:"L'anthropomorphisme nous éloigne-t-il de la véritable nature des animaux ?",

    notions:[
      { mot:'Anthropomorphisme', def:'Tendance à prêter des caractéristiques, émotions, intentions et valeurs humaines à des êtres non-humains (animaux, dieux, robots). Du grec <em>anthropos</em> (homme) et <em>morphê</em> (forme).' },
      { mot:'Véritable nature', def:'Ce que l\'animal est réellement — ses comportements, besoins et motivations tels que l\'éthologie les étudie scientifiquement, sans projection humaine.' },
      { mot:'Éloigner', def:'Créer une distance, une distorsion. Le sujet demande si cette projection nous empêche de connaître l\'animal tel qu\'il est vraiment.' },
    ],

    accroche:'Dans les <em>Fables</em> de La Fontaine (1668), un Renard "flatteur" et un Corbeau "vaniteux" mettent en scène les vices de la cour de Louis XIV. Ces animaux ont façonné notre imaginaire pour des siècles. Mais un vrai renard face à un vrai corbeau ne cherche pas à flatter ni à parader — il cherche à manger. L\'écart entre l\'animal fabuleux et l\'animal réel est vertigineux.',

    sujet_reformule:'Peut-on dire que l\'anthropomorphisme nous empêche de comprendre la véritable nature des animaux ?',

    reformulation:'Autrement dit, projeter des émotions, intentions et valeurs humaines sur les animaux aide-t-il à les comprendre et à les respecter, ou crée-t-il une illusion qui déforme notre connaissance et notre relation réelle à l\'animal ?',

    plan:{
      type:'Dialectique',
      parties:[
        { num:'I', titre:'L\'anthropomorphisme, un outil d\'empathie et de sensibilisation utile',
          sousparties:[
            { arg:'Il crée de l\'identification et développe l\'empathie envers l\'animal', expl:'En prêtant des sentiments humains à l\'animal (Bambi, Dumbo, Babar), la fiction permet aux enfants — et aux adultes — de s\'identifier à lui, de ressentir sa souffrance et de vouloir le protéger.', ref:'Films Disney, Babar (Jean de Brunhoff, 1931)' },
            { arg:'L\'allégorie animale permet de critiquer l\'homme lui-même', expl:'La Fontaine utilise le renard et le corbeau non pour parler de ces animaux mais pour dénoncer la flatterie de cour. Spiegelman utilise les souris et les chats pour raconter l\'Holocauste. L\'animal devient un miroir moral.', ref:'La Fontaine, Fables (1668) ; Spiegelman, Maus (1986)' },
            { arg:'Il favorise la prise de conscience sur le bien-être animal', expl:'C\'est parce que nous imaginons que l\'animal "souffre comme nous" que nous développons des lois de protection. L\'anthropomorphisme a une utilité morale même s\'il est philosophiquement inexact.', ref:'Loi 2015, mouvement de protection animale' },
          ]
        },
        { num:'II', titre:'L\'anthropomorphisme déforme notre compréhension réelle de l\'animal',
          sousparties:[
            { arg:'Il projette des intentions que l\'animal n\'a pas', expl:'Le renard "rusé" des fables n\'est pas rusé — il est prédateur. Le loup "méchant" du Petit Chaperon Rouge n\'est pas cruel — il est chasseur. Ces projections créent des représentations fausses durablement ancrées.', ref:'Représentations animales dans les contes populaires' },
            { arg:'Il peut nuire à la conservation et à la gestion des espèces', expl:'Croire que les ours "aiment les câlins" (comme dans les dessins animés) a conduit des touristes à s\'approcher dangereusement d\'ours sauvages en Amérique du Nord. L\'anthropomorphisme mal compris tue.', ref:'Cas documentés de comportements dangereux envers la faune sauvage' },
            { arg:'Il entretient des représentations erronées qui bloquent la recherche', expl:'Pendant longtemps, les scientifiques eux-mêmes évitaient de parler d\'émotions animales par peur de l\'anthropomorphisme — ce qui a retardé la reconnaissance de la conscience animale.', ref:'Histoire de l\'éthologie — résistance au terme "émotion animale"' },
          ]
        },
        { num:'III', titre:'L\'éthologie scientifique : la voie du juste milieu',
          sousparties:[
            { arg:'L\'éthologie étudie l\'animal sans projection humaine', expl:'Depuis Lorenz et Tinbergen (1920-1930), l\'éthologie observe le comportement animal dans son milieu naturel, sans projeter de motivations humaines. Elle révèle une complexité bien réelle — mais différente.', ref:'Konrad Lorenz, Nikolaas Tinbergen — éthologie classique' },
            { arg:'La science reconnaît des émotions animales — sans les "humaniser"', expl:'La Déclaration de Cambridge (2012) parle de conscience et d\'émotions chez les animaux — mais dans des termes neurobiologiques, pas métaphoriques. L\'animal a des émotions, mais pas les nôtres.', ref:'Déclaration de Cambridge (2012)' },
            { arg:'L\'anthropomorphisme "critique" reste utile pour la sensibilisation', expl:'Jane Goodall, éthologiste pionnière, a nommé ses chimpanzés et décrit leurs relations familiales — une démarche critiquée à l\'époque mais qui a révélé leur réelle complexité sociale. Le bon anthropomorphisme est conscient de ses limites.', ref:'Jane Goodall — étude des chimpanzés de Gombe' },
          ]
        },
      ]
    },

    refs_cles:[
      'La Fontaine, Fables (1668) — allégorie morale',
      'Spiegelman, Maus (1986) — animalisation symbolique',
      'Babar (Jean de Brunhoff, 1931) — anthropomorphisme enfantin',
      'Lorenz & Tinbergen — éthologie (depuis 1920)',
      'Déclaration de Cambridge (2012)',
      'Jane Goodall — chimpanzés de Gombe',
    ],

    correction:{
      intro:`Dans les Fables de La Fontaine (1668), un Renard "flatteur" et un Corbeau "vaniteux" mettent en scène les vices de la cour de Louis XIV. Un vrai renard face à un vrai corbeau ne cherche pas à flatter — il cherche à manger. Peut-on dire que l'anthropomorphisme nous empêche de comprendre la véritable nature des animaux ? Autrement dit, projeter des émotions et valeurs humaines sur les animaux aide-t-il à les comprendre et à les respecter, ou crée-t-il une illusion qui déforme notre connaissance réelle du monde animal ? Nous verrons d'abord que l'anthropomorphisme est un outil d'empathie et de sensibilisation (I), avant d'examiner comment il peut déformer notre compréhension réelle (II), pour montrer enfin que l'éthologie scientifique offre une voie du juste milieu (III).`,
      para_modele:`<strong>Paragraphe rédigé (I.2 — Maus et La Fontaine)</strong><br><br>L'anthropomorphisme ne sert pas toujours à parler des animaux : il sert souvent à parler de l'homme lui-même, avec une liberté que la réalité n'autorise pas. C'est le propre de l'<strong>allégorie animale</strong>. Dans les <em>Fables</em> de <strong>La Fontaine</strong> (1668), le corbeau vaniteux et le renard flatteur ne décrivent pas un comportement animal réel — ils caricaturent les courtisans de Louis XIV, que l'auteur ne pouvait pas critiquer directement. De même, dans <em>Maus</em> (1986), <strong>Art Spiegelman</strong> représente les Juifs en souris et les nazis en chats non pour dire quelque chose sur ces animaux, mais pour rendre tangible, par la métaphore animale, la logique de prédation nazie qui présentait les Juifs comme des "nuisibles à exterminer". Dans les deux cas, l'animal est un prétexte — un écran de projection moral. Et cet usage, loin d'être trompeur, est un des plus puissants outils de la littérature : il permet de tout dire en ne disant rien directement.`,
      conclusion:`En définitive, l'anthropomorphisme nous éloigne de la véritable nature biologique de l'animal — mais nous rapproche de nous-mêmes. C'est là sa double nature : illusion et outil. Il convient de ne pas le confondre avec la réalité animale (rôle de l'éthologie), mais de reconnaître sa fonction culturelle et morale irremplaçable. La question n'est pas d'éliminer l'anthropomorphisme — impossible — mais d'en être conscient pour éviter ses dérives, et d'y ajouter le regard scientifique qui seul peut nous dire ce qu'est vraiment un animal.`,
    }
  },

  {
    id:'e7',
    q:"Doit-on accorder un statut juridique de personne aux grands singes ?",

    notions:[
      { mot:'Statut juridique de personne', def:'En droit, la "personne" (physique ou morale) est un sujet de droits et d\'obligations. Les animaux sont actuellement des <em>objets</em> de droit. Leur accorder la personnalité juridique serait une révolution du système.' },
      { mot:'Grands singes', def:'Chimpanzés, gorilles, orangs-outans, bonobos. Partagent 98,7 % (chimpanzé) à 96 % (gorille) de l\'ADN humain. Capacité à se reconnaître dans un miroir, à apprendre des langages des signes, à planifier.' },
      { mot:'Doit-on', def:'Question de nécessité morale. Implique un jugement de valeur : est-ce juste, nécessaire, faisable ?' },
    ],

    accroche:'En 2015, un tribunal de l\'État de New York a été saisi d\'une requête inédite : accorder la personnalité juridique à deux chimpanzés de laboratoire, Hercules et Leo, détenus à l\'université de Stony Brook. La demande fut rejetée. Mais la question posée reste entière : peut-on continuer à traiter comme de simples objets de droit des êtres qui partagent 98,7 % de notre génome et sont capables de planifier, de communiquer par signes et de se reconnaître dans un miroir ?',

    sujet_reformule:'Peut-on dire qu\'il est légitime et nécessaire d\'accorder un statut juridique de personne aux grands singes ?',

    reformulation:'Autrement dit, leur intelligence, leur conscience et leur proximité génétique avec l\'homme suffisent-elles à justifier une révolution du système juridique, ou des alternatives de protection sont-elles préférables ?',

    plan:{
      type:'Dialectique',
      parties:[
        { num:'I', titre:'Des arguments convaincants pour une personnalité juridique partielle',
          sousparties:[
            { arg:'Proximité génétique et capacités cognitives hors normes', expl:'98,7% d\'ADN commun avec le chimpanzé. Les grands singes se reconnaissent dans un miroir (test du miroir, Gallup 1970), apprennent le langage des signes (Washoe), planifient et utilisent des outils. Ces capacités dépassent celles de certains humains en bas âge.', ref:'Déclaration de Cambridge (2012) ; test du miroir (Gallup, 1970)' },
            { arg:'Singer et Cavalieri : le "Projet Grands Singes" (1993)', expl:'Ce projet international demande des droits fondamentaux pour les grands singes : droit à la vie, à la liberté, à ne pas être torturé. En 2008, l\'Espagne a accordé des "droits quasi-humains" aux grands singes.', ref:'Peter Singer & Paola Cavalieri, Le Projet Grand Singe (1993)' },
            { arg:'L\'affaire Hercules & Leo (2015) : le débat juridique est ouvert', expl:'Des avocats américains ont utilisé le concept d\'<em>habeas corpus</em> (droit de ne pas être détenu arbitrairement) pour libérer des chimpanzés de laboratoire. Le débat est désormais juridiquement posé.', ref:'Nonhuman Rights Project, affaire Hercules & Leo (2015)' },
          ]
        },
        { num:'II', titre:'Les risques et limites d\'une telle mesure',
          sousparties:[
            { arg:'La personnalité juridique implique des droits ET des obligations', expl:'Un sujet de droit peut être poursuivi en justice. Comment condamner un chimpanzé ? Ce paradoxe révèle l\'inadéquation du concept de "personne" appliqué à l\'animal.', ref:'Tradition juridique romano-germanique' },
            { arg:'Risque de hiérarchiser les animaux et d\'abandonner les autres', expl:'Si seuls les grands singes obtiennent des droits, qu\'en est-il des dauphins, des éléphants, des chiens ? Cette hiérarchie entre animaux "dignes" et "indignes" de droits est problématique.', ref:'Débat sur la gradation des droits animaliers' },
            { arg:'Difficultés pratiques : qui représente le grand singe en justice ?', expl:'Un tuteur humain ? Une ONG ? Cela crée des asymétries et des conflits d\'intérêts potentiels. Le droit des incapables (tutelle) offre peut-être un modèle plus adapté.', ref:'Droit de la tutelle — analogie avec les incapables majeurs' },
          ]
        },
        { num:'III', titre:'Des alternatives pragmatiques : protection renforcée sans personnalité',
          sousparties:[
            { arg:'Interdire leur utilisation en expérimentation médicale', expl:'L\'Union européenne a interdit l\'utilisation des grands singes dans les laboratoires depuis 2010 — une protection forte sans créer de personnalité juridique.', ref:'Directive UE 2010/63 — protection des animaux de laboratoire' },
            { arg:'Renforcer leur protection en tant qu\'espèces menacées', expl:'La CITES (Convention de Washington) protège déjà les grands singes. Renforcer ces protections et créer des sanctuaires juridiquement protégés est une voie réaliste.', ref:'CITES — grands singes espèces protégées' },
            { arg:'Le statut sui generis : ni bien ni personne, mais être sensible protégé', expl:'Comme la France a créé en 2015 un statut intermédiaire pour tous les animaux (art. 515-14), on pourrait créer un statut renforcé pour les grands singes — plus protecteur sans être une personnalité complète.', ref:'Code civil, art. 515-14 (2015)' },
          ]
        },
      ]
    },

    refs_cles:[
      'Peter Singer & Cavalieri, Le Projet Grand Singe (1993)',
      'Affaire Hercules & Leo, New York (2015)',
      'Déclaration de Cambridge (2012)',
      'Test du miroir, Gallup (1970)',
      'Directive UE 2010/63 — fin des tests sur grands singes',
      'Code civil, art. 515-14 (France, 2015)',
    ],

    correction:{
      intro:`En 2015, un tribunal de l'État de New York a été saisi d'une requête inédite : accorder la personnalité juridique à deux chimpanzés de laboratoire, Hercules et Leo. La demande fut rejetée. Peut-on dire qu'il est légitime et nécessaire d'accorder un statut juridique de personne aux grands singes ? Autrement dit, leur intelligence, leur conscience et leur proximité génétique avec l'homme suffisent-elles à justifier une révolution du système juridique, ou des alternatives de protection sont-elles préférables ? Nous verrons d'abord que des arguments convaincants fondent cette idée (I), avant d'en examiner les risques et limites (II), pour proposer enfin des alternatives pragmatiques (III).`,
      para_modele:`<strong>Paragraphe rédigé (I.2 — le Projet Grand Singe)</strong><br><br>En 1993, le philosophe <strong>Peter Singer</strong> et la philosophe italienne <strong>Paola Cavalieri</strong> lançaient le <em>Projet Grand Singe</em> — un appel international visant à accorder aux chimpanzés, gorilles, orangs-outans et bonobos des droits fondamentaux : le droit à la vie, à la liberté et à ne pas être soumis à la torture. Leur argument principal est simple : ces animaux partagent avec nous des capacités cognitives et émotionnelles qui, chez un humain, justifieraient ces droits sans discussion. Un chimpanzé peut apprendre le langage des signes (cas de Washoe, enseigné à l'université du Nevada), se reconnaître dans un miroir et planifier ses actions. Si un être humain présentant les mêmes capacités bénéficierait d'une protection juridique totale, pourquoi refuser cette protection à un chimpanzé ? L'argument est d'une cohérence difficile à réfuter. En 2008, l'Espagne est allée dans ce sens en reconnaissant des "droits quasi-humains" aux grands singes — première avancée juridique concrète dans ce domaine.`,
      conclusion:`En définitive, accorder une personnalité juridique complète aux grands singes soulève des obstacles pratiques et théoriques importants. Mais les ignorer au nom du statu quo est difficile à défendre moralement. La voie la plus réaliste est celle d'une protection renforcée : interdire leur utilisation en laboratoire, créer des sanctuaires légalement protégés, développer un statut juridique sui generis. La question n'est pas "méritent-ils des droits comme les humains ?" mais "comment protéger efficacement des êtres dont la conscience est prouvée ?"`,
    }
  },

  {
    id:'e8',
    q:"L'art permet-il de mieux comprendre notre rapport aux animaux ?",

    notions:[
      { mot:'Art', def:'Création humaine qui donne forme à une vision du monde — peinture, sculpture, littérature, cinéma, musique. L\'art ne représente pas la réalité : il l\'interprète, la questionne, la révèle.' },
      { mot:'Rapport aux animaux', def:'La relation complexe que l\'homme entretient avec l\'animal : domination, affection, exploitation, fascination, peur, respect.' },
      { mot:'Mieux comprendre', def:'Prendre conscience, voir autrement, développer un regard critique ou empathique. Implique que l\'art apporte quelque chose que la réalité brute ne peut pas donner.' },
    ],

    accroche:'Il y a 35 000 ans, des hommes de Cro-Magnon pénétraient dans la grotte Chauvet pour peindre des lions, des rhinocéros, des mammouths à la lueur des torches. Ces premières traces d\'art humain connu ne représentent pas des humains — elles représentent des animaux. Depuis les origines, l\'homme a regardé l\'animal et a voulu le représenter. Mais pourquoi ?',

    sujet_reformule:'Peut-on dire que l\'art nous aide à mieux comprendre la relation — complexe et souvent contradictoire — que l\'homme entretient avec l\'animal ?',

    reformulation:'Autrement dit, au-delà de la simple représentation, l\'œuvre d\'art révèle-t-elle quelque chose d\'essentiel sur la façon dont l\'homme perçoit, utilise et se lie à l\'animal — quelque chose que la réalité brute ne suffirait pas à montrer ?',

    plan:{
      type:'Thématique (3 angles complémentaires)',
      parties:[
        { num:'I', titre:'L\'art comme révélateur de nos fantasmes et projections sur l\'animal',
          sousparties:[
            { arg:'L\'animal sacré et magique : l\'art préhistorique', expl:'Les peintures de Chauvet (-35 000), Lascaux (-17 000) représentent des animaux dans des poses dynamiques, avec un réalisme surprenant. Signe que l\'animal était sacré, redouté, respecté — au cœur de la spiritualité humaine.', ref:'Grotte Chauvet (-35 000), Lascaux (-17 000)' },
            { arg:'Les hybrides mythologiques : nos peurs et désirs projetés', expl:'Minotaure, Centaure, Sphinx, Pégase : ces créatures mi-humaines mi-animales révèlent nos fantasmes. Elles disent quelque chose sur ce que nous projetons sur l\'animal et sur ce que nous craignons ou admirons en lui.', ref:'Mythologies grecque, égyptienne (Anubis, Bastet)' },
            { arg:'L\'anthropomorphisme littéraire : l\'animal comme miroir de l\'homme', expl:'La Fontaine (1668) prête aux animaux nos vices pour critiquer la cour. Spiegelman (1986) utilise les animaux pour raconter l\'Holocauste. L\'art animalier dit souvent plus sur l\'homme que sur l\'animal.', ref:'La Fontaine, Fables ; Spiegelman, Maus' },
          ]
        },
        { num:'II', titre:'L\'art comme espace de critique de notre comportement envers l\'animal',
          sousparties:[
            { arg:'L\'art dénonce l\'exploitation de l\'animal', expl:'Le documentaire Blackfish (2013) sur les orques captives de SeaWorld a déclenché un mouvement mondial contre la captivité des cétacés. Le cinéma documentaire a changé les lois plus rapidement que les traités scientifiques.', ref:'Blackfish (Gabriela Cowperthwaite, 2013)' },
            { arg:'L\'art rend visible la déshumanisation par animalisation', expl:'Dans Maus, l\'animalisation des Juifs (souris) et des Nazis (chats) n\'est pas une métaphore anodine : elle reproduit la rhétorique nazie, la détourne et la dénonce simultanément.', ref:'Spiegelman, Maus (1986)' },
            { arg:'La sculpture et l\'installation contemporaines interrogent nos pratiques', expl:'Louise Bourgeois (Maman, araignée géante, 1999) trouble nos frontières entre fascination et répulsion envers l\'animal. Damien Hirst (requin dans formol) pose des questions sur la mort et la beauté animales.', ref:'Louise Bourgeois, Maman (1999) ; Damien Hirst' },
          ]
        },
        { num:'III', titre:'L\'art comme lieu d\'empathie et de rencontre avec l\'animal réel',
          sousparties:[
            { arg:'L\'observation minutieuse : rendre justice à l\'animal tel qu\'il est', expl:'Albrecht Dürer peint Le Lièvre (1502) avec une précision quasi-scientifique — chaque poil, chaque reflet dans l\'œil. Ce regard attentif est un acte de respect envers la réalité de l\'animal.', ref:'Albrecht Dürer, Le Lièvre (1502)' },
            { arg:'Le roman permet de vivre la subjectivité animale', expl:'Jack London, dans Croc-Blanc (1906), narre le monde du point de vue d\'un loup — ses peurs, ses désirs, ses apprentissages. Cette empathie romanesque est une leçon de respect de la réalité animale.', ref:'Jack London, Croc-Blanc (1906)' },
            { arg:'L\'art militant : changer le regard pour changer les pratiques', expl:'Les campagnes de L214 utilisent des images d\'élevage industriel — une forme d\'art documentaire — pour provoquer une prise de conscience viscérale que les statistiques seules ne peuvent pas déclencher.', ref:'L214 — images d\'abattoirs' },
          ]
        },
      ]
    },

    refs_cles:[
      'Grotte Chauvet (-35 000) — premiers arts rupestres',
      'Albrecht Dürer, Le Lièvre (1502)',
      'La Fontaine, Fables (1668)',
      'Spiegelman, Maus (1986)',
      'Jack London, Croc-Blanc (1906)',
      'Louise Bourgeois, Maman (1999)',
      'Blackfish (documentaire, 2013)',
      'L214 — images d\'abattoirs',
    ],

    correction:{
      intro:`Il y a 35 000 ans, des hommes de Cro-Magnon pénétraient dans la grotte Chauvet pour y peindre des lions, des rhinocéros, des mammouths. Ces premières traces d'art humain ne représentent pas des humains — elles représentent des animaux. Peut-on dire que l'art nous aide à mieux comprendre la relation que l'homme entretient avec l'animal ? Autrement dit, au-delà de la simple représentation, l'œuvre d'art révèle-t-elle quelque chose d'essentiel sur la façon dont l'homme perçoit, utilise et se lie à l'animal ? Nous verrons d'abord que l'art révèle nos fantasmes et projections (I), avant d'examiner comment il peut critiquer nos comportements envers l'animal (II), pour montrer enfin qu'il est un lieu d'empathie et de rencontre avec l'animal réel (III).`,
      para_modele:`<strong>Paragraphe rédigé (III.2 — Croc-Blanc)</strong><br><br>L'art peut aller plus loin que la simple représentation ou la critique : il peut nous donner accès à la subjectivité animale elle-même. C'est ce que réalise <strong>Jack London</strong> dans <em>Croc-Blanc</em> (1906), roman dans lequel le lecteur vit le monde à travers les sens et les émotions d'un loup-chien évoluant entre la sauvagerie du Grand Nord et la domestication humaine. London décrit la peur de l'animal devant l'inconnu, sa faim, son apprentissage progressif de la confiance, ses loyautés et ses trahisons — avec une précision comportementale qui anticipe l'éthologie. Cette narration à hauteur d'animal est un acte d'empathie littéraire radical : elle oblige le lecteur à sortir de sa perspective humaine pour habiter, même brièvement, une autre forme de conscience. Cet exercice de décentrement est peut-être l'une des contributions les plus précieuses de la littérature animalière : non pas nous parler de l'animal, mais nous faire penser <em>avec</em> lui.`,
      conclusion:`En définitive, l'art est l'un des outils les plus puissants pour comprendre notre rapport à l'animal — précisément parce qu'il ne prétend pas à l'objectivité. En révélant nos projections, en dénonçant nos violences, en nous permettant de vivre la subjectivité animale, il complète ce que la science ne peut pas faire seule. Peut-être est-ce pour cela que l'art a commencé par les animaux : parce que l'animal, depuis les origines, est le miroir dans lequel l'homme cherche à se comprendre lui-même.`,
    }
  },

  {
    id:'e9',
    q:"Les animaux de fiction sont-ils plus parlants que les vrais pour comprendre l'humain ?",

    notions:[
      { mot:'Animaux de fiction', def:'Représentations symboliques, allégoriques ou narrativisées d\'animaux dans la littérature, le cinéma, la BD, les fables. Ils ne prétendent pas décrire le comportement animal réel.' },
      { mot:'Vrais animaux', def:'Les animaux dans leur réalité biologique et comportementale, étudiés par l\'éthologie. Ils ne sont pas des métaphores : ils existent pour eux-mêmes.' },
      { mot:'Parlants', def:'Révélateurs, expressifs, capables de nous dire quelque chose. Le sujet demande si la fiction animale est un meilleur outil que la réalité pour comprendre l\'humanité.' },
    ],

    accroche:'Dans <em>La Ferme des animaux</em> (1945), Orwell raconte une révolution de cochons et de moutons pour dénoncer le stalinisme. Dans <em>Maus</em> (1986), Spiegelman dessine les Juifs en souris et les nazis en chats pour raconter l\'Holocauste. Ces deux œuvres disent peut-être plus sur la nature humaine — la tyrannie, la déshumanisation, la résistance — que n\'importe quel essai politique ou historique.',

    sujet_reformule:'Peut-on dire que les animaux de fiction sont un outil plus efficace que les vrais animaux pour nous faire comprendre ce qu\'est l\'homme ?',

    reformulation:'Autrement dit, la fictionnalisation de l\'animal — qui en fait un miroir ou une allégorie de l\'humain — est-elle un détour nécessaire et plus puissant que l\'observation réelle des animaux pour accéder à la connaissance de l\'homme ?',

    plan:{
      type:'Dialectique',
      parties:[
        { num:'I', titre:'La fiction animale, outil privilégié pour parler de l\'homme',
          sousparties:[
            { arg:'L\'allégorie permet de tout dire en contournant la censure', expl:'La Fontaine ne pouvait pas critiquer Louis XIV en face. Orwell écrivait sous la pression stalinienne. L\'animal de fiction est un écran protecteur qui autorise une liberté de parole que la réalité interdit.', ref:'La Fontaine, Fables (1668) ; Orwell, La Ferme des animaux (1945)' },
            { arg:'L\'anthropomorphisme crée une identification et une empathie plus fortes', expl:'Le lecteur de Maus ressent la peur des souris-Juifs plus intensément que s\'il lisait un témoignage humain — la distanciation par l\'animal paradoxalement rapproche. La médiation fictionnelle intensifie l\'émotion.', ref:'Spiegelman, Maus (1986)' },
            { arg:'La fiction animale libère la subjectivité : elle donne voix à ce qui n\'en a pas', expl:'Croc-Blanc (London, 1906) permet au lecteur de vivre dans la peau d\'un loup. Cette narration à hauteur d\'animal est impossible dans la réalité : la fiction est le seul accès à cette perspective.', ref:'Jack London, Croc-Blanc (1906)' },
          ]
        },
        { num:'II', titre:'Les limites : la fiction instrumentalise l\'animal et déforme la réalité',
          sousparties:[
            { arg:'L\'animal de fiction est un prétexte : sa réalité propre disparaît', expl:'Dans Maus, les souris et les chats n\'ont rien à voir avec les comportements réels de ces animaux. L\'animal est ici entièrement au service d\'un propos humain — sa propre nature est effacée.', ref:'Critique de l\'anthropomorphisme littéraire' },
            { arg:'La fiction renforce des représentations fausses durablement', expl:'Le loup "méchant" des contes populaires a contribué à sa persécution historique en Europe. Ces représentations fictionnelles ont des conséquences bien réelles sur la perception et la survie des espèces.', ref:'Extermination du loup en France (XIXe s.)' },
            { arg:'L\'animal de fiction nous apprend sur l\'homme, pas sur l\'animal', expl:'La Ferme des animaux n\'enseigne rien sur le comportement réel des cochons ou des chevaux. Elle démontre les mécanismes du totalitarisme. L\'outil est puissant pour l\'humanité, pas pour la zoologie.', ref:'Orwell, La Ferme des animaux (1945)' },
          ]
        },
        { num:'III', titre:'Le vrai animal, irremplaçable miroir non distordu',
          sousparties:[
            { arg:'L\'éthologie révèle une réalité animale plus surprenante que la fiction', expl:'Jane Goodall a découvert que les chimpanzés font la guerre, se prostituent, adoptent des orphelins et pleurent leurs morts. Ces comportements réels dépassent en complexité tout animal de fiction.', ref:'Jane Goodall — chimpanzés de Gombe' },
            { arg:'La réalité animale nous oblige à sortir de nos catégories humaines', expl:'Un vrai poulpe, avec ses 9 cerveaux et sa capacité à résoudre des problèmes, nous dit quelque chose sur l\'intelligence que la fiction n\'aurait pu inventer. La Déclaration de Cambridge (2012) a reconnu cette complexité.', ref:'Déclaration de Cambridge (2012) ; éthologie des céphalopodes' },
            { arg:'La fiction et la réalité sont complémentaires, non opposées', expl:'La fiction animale crée l\'empathie qui pousse à s\'intéresser aux vrais animaux. L\'éthologie approfondit ce que la fiction a éveillé. L\'une sans l\'autre serait moins efficace.', ref:'Complémentarité art et science' },
          ]
        },
      ]
    },

    refs_cles:[
      'La Fontaine, Fables (1668)',
      'Orwell, La Ferme des animaux (1945)',
      'Spiegelman, Maus (1986)',
      'Jack London, Croc-Blanc (1906)',
      'Jane Goodall — chimpanzés de Gombe',
      'Déclaration de Cambridge (2012)',
      'Kipling, Le Livre de la Jungle (1894)',
    ],

    correction:{
      intro:`Dans La Ferme des animaux (1945), Orwell raconte une révolution de cochons et de moutons pour dénoncer le stalinisme. Dans Maus (1986), Spiegelman dessine les Juifs en souris et les nazis en chats pour raconter l'Holocauste. Peut-on dire que les animaux de fiction sont un outil plus efficace que les vrais animaux pour nous faire comprendre ce qu'est l'homme ? Autrement dit, la fictionnalisation de l'animal — qui en fait un miroir ou une allégorie de l'humain — est-elle un détour nécessaire et plus puissant que l'observation réelle des animaux ? Nous verrons d'abord que la fiction animale est un outil privilégié pour parler de l'homme (I), avant d'examiner ses limites et ses distorsions (II), pour montrer enfin que le vrai animal reste un miroir irremplaçable et complémentaire (III).`,
      para_modele:`<strong>Paragraphe rédigé (I.1 — La Fontaine et Orwell)</strong><br><br>L'un des avantages les plus évidents de l'animal de fiction est qu'il permet de tout dire en évitant la censure. C'est ce que <strong>La Fontaine</strong> a magistralement exploité dans ses <em>Fables</em> (1668) : sous couvert de parler de corbeaux et de renards, il critique les courtisans de Louis XIV sans risquer les foudres royales. Le renard flatteur n'est pas un renard — c'est un courtisan. L'allégorie animale est un déguisement qui autorise une liberté de parole que la réalité interdit. Trois siècles plus tard, <strong>George Orwell</strong> utilisait le même procédé dans <em>La Ferme des animaux</em> (1945) : les cochons staliniens prennent le pouvoir sur les autres animaux, au nom de la révolution, avant de devenir aussi tyranniques que les humains qu'ils ont chassés. "Tous les animaux sont égaux, mais certains animaux sont plus égaux que d'autres" : cette formule résume à elle seule les mécanismes du totalitarisme — avec une force que n'aurait pas eue un essai politique direct. L'animal de fiction est ici plus parlant que n'importe quelle analyse réelle : il rend sensible ce que la raison seule ne suffit pas à faire comprendre.`,
      conclusion:`En définitive, les animaux de fiction sont des outils extraordinairement puissants pour comprendre l'homme — parce qu'ils permettent une liberté, une distance et une empathie que la réalité brute n'autorise pas toujours. Mais ils ne peuvent pas remplacer le vrai animal, dont la réalité complexe et autonome nous oblige à sortir de nos catégories humaines. La fiction éveille, la réalité approfondit. L'un sans l'autre, nous comprendrions moins — à la fois l'homme et l'animal.`,
    }
  },

  {
    id:'e10',
    q:"Manger de la viande est-il un acte moralement neutre ?",

    notions:[
      { mot:'Manger de la viande', def:'Alimentation carnée. Acte quotidien, culturel, biologiquement naturel pour un omnivore. Mais aussi acte de consommation qui suppose la mort d\'un être sensible et une chaîne de production.' },
      { mot:'Acte moral', def:'Acte qui engage une responsabilité éthique — vis-à-vis d\'autrui, d\'un animal, de la société, de l\'environnement. Tout acte n\'est pas moral : certains relèvent de la sphère privée ou naturelle.' },
      { mot:'Neutre', def:'Sans valeur morale, ni bien ni mal, indifférent éthiquement. La question demande si cet acte échappe au jugement moral ou s\'il y est soumis.' },
    ],

    accroche:'Selon la FAO (2013), l\'élevage représente 14,5 % des émissions mondiales de gaz à effet de serre. Chaque année, plus de 80 milliards d\'animaux terrestres sont tués pour l\'alimentation humaine. Pourtant, pour beaucoup, manger un steak reste un geste banal, convivial, culturellement neutre. Cet écart entre la réalité des chiffres et la banalité de l\'acte est-il tenable ?',

    sujet_reformule:'Peut-on dire que manger de la viande est un acte sans dimension morale, qui n\'engage aucune responsabilité éthique ?',

    reformulation:'Autrement dit, consommer de la chair animale engage-t-il une responsabilité vis-à-vis de l\'animal, de l\'environnement et d\'autrui, ou cette consommation relève-t-elle d\'une liberté individuelle qui échappe au jugement moral ?',

    plan:{
      type:'Dialectique',
      parties:[
        { num:'I', titre:'Des arguments pour une relative neutralité morale de la consommation carnée',
          sousparties:[
            { arg:'La naturalité : l\'homme est omnivore depuis la Préhistoire', expl:'L\'homme consomme de la viande depuis 2 millions d\'années. Les chasseurs-cueilleurs de la grotte Chauvet (-35 000) chassaient pour survivre. Manger de la viande est inscrit dans l\'évolution biologique humaine.', ref:'Grotte Chauvet — traces de chasse préhistorique' },
            { arg:'La dimension culturelle : la viande est au cœur de traditions et d\'identités', expl:'Le mouton de l\'Aïd, le repas de Noël, le barbecue estival — la consommation de viande est profondément culturelle. Lui attribuer une culpabilité morale universelle ignore ces dimensions identitaires et sociales.', ref:'Anthropologie alimentaire' },
            { arg:'La liberté individuelle : les choix alimentaires relèvent de la sphère privée', expl:'Dans une société libérale, chacun choisit ce qu\'il mange. Moraliser l\'alimentation risque de créer une police de la nourriture incompatible avec la liberté individuelle.', ref:'Libéralisme politique — sphère privée' },
          ]
        },
        { num:'II', titre:'Des arguments qui en font un acte moralement chargé',
          sousparties:[
            { arg:'Consommer un être sensible engage une responsabilité morale', expl:'Si les animaux souffrent (Cambridge 2012), leur tuer pour se nourrir — quand des alternatives existent — est un acte qui engage une responsabilité. Peter Singer montre que toute souffrance inutile est injustifiable.', ref:'Peter Singer, La Libération animale (1975) ; Déclaration de Cambridge (2012)' },
            { arg:'L\'impact environnemental de l\'élevage est une responsabilité collective', expl:'14,5% des GES (FAO, 2013), déforestation massive (Amazonie), pollution des cours d\'eau. Chaque consommateur de viande contribue à ces dommages. L\'acte individuel a des conséquences collectives.', ref:'FAO (2013) ; crise climatique' },
            { arg:'Les conditions de l\'élevage industriel sont moralement inacceptables', expl:'L\'association L214 a révélé des conditions d\'élevage qui choquent même les non-végétariens : confinement extrême, douleurs non traitées, mutilations préventives. Acheter ces produits revient à financer ces pratiques.', ref:'L214 — images d\'abattoirs (France)' },
          ]
        },
        { num:'III', titre:'Vers une éthique alimentaire responsable et progressive',
          sousparties:[
            { arg:'Le végétarisme et le véganisme : des réponses cohérentes mais non universelles', expl:'Ces choix sont moralement cohérents mais difficiles à imposer : raisons de santé, accès économique, contexte culturel. La morale ne peut ignorer les contraintes réelles des individus.', ref:'Végétarisme, véganisme — mouvements en croissance' },
            { arg:'Le flexitarisme : réduire sans interdire', expl:'Réduire sa consommation de viande (1 fois par semaine plutôt que 3) est un compromis moralement sérieux, accessible au plus grand nombre. Chaque geste compte même s\'il n\'est pas radical.', ref:'Flexitarisme — évolution des comportements alimentaires' },
            { arg:'L\'innovation : vers des alternatives à la viande animale', expl:'La viande cultivée en laboratoire (premier burger in vitro en 2013), les protéines végétales, les insectes comestibles : des alternatives émergent qui pourraient rendre l\'acte de manger de la viande moralement neutre... parce que plus d\'animal n\'aurait souffert.', ref:'Viande cellulaire ; protéines alternatives' },
          ]
        },
      ]
    },

    refs_cles:[
      'FAO, Livestock\'s Long Shadow (2013) — 14,5% GES',
      'Peter Singer, La Libération animale (1975)',
      'Déclaration de Cambridge (2012)',
      'L214 — images d\'abattoirs, élevage intensif',
      'Grotte Chauvet — chasse préhistorique',
      'Viande cellulaire — 1er burger in vitro (2013)',
    ],

    correction:{
      intro:`Selon la FAO (2013), l'élevage représente 14,5 % des émissions mondiales de gaz à effet de serre, davantage que tous les transports réunis. Pourtant, pour beaucoup, manger un steak reste un geste banal et convivial. Peut-on dire que manger de la viande est un acte sans dimension morale, qui n'engage aucune responsabilité éthique ? Autrement dit, consommer de la chair animale engage-t-il une responsabilité vis-à-vis de l'animal et de l'environnement, ou cette consommation relève-t-elle d'une liberté individuelle qui échappe au jugement moral ? Nous verrons d'abord des arguments pour une relative neutralité morale (I), avant d'examiner ceux qui en font un acte moralement chargé (II), pour proposer enfin une éthique alimentaire progressive et réaliste (III).`,
      para_modele:`<strong>Paragraphe rédigé (II.1 — Peter Singer)</strong><br><br>Si les animaux que nous consommons sont des êtres sensibles — ce qu'affirme la <strong>Déclaration de Cambridge sur la Conscience (2012)</strong> —, alors les tuer pour se nourrir, lorsque des alternatives nutritives existent, engage une responsabilité morale. C'est la thèse centrale du philosophe australien <strong>Peter Singer</strong> dans <em>La Libération animale</em> (1975). Singer y développe une éthique utilitariste simple : la souffrance est un mal, qu'elle soit ressentie par un humain ou un animal. Choisir de consommer un produit issu de l'élevage intensif — où des êtres sensibles vivent entassés dans des conditions douloureuses —, lorsqu'on dispose de choix alimentaires alternatifs, c'est choisir de financer cette souffrance. Ce n'est donc pas un acte moralement neutre. Singer nomme "spécisme" le fait de considérer que la souffrance animale compte moins que la souffrance humaine, au seul motif de l'appartenance à une espèce différente — une discrimination qu'il compare, dans sa structure logique, au racisme ou au sexisme.`,
      conclusion:`En définitive, manger de la viande n'est pas un acte moralement neutre — mais ce n'est pas non plus un acte uniformément condamnable. La responsabilité est réelle, mais graduée : elle dépend des moyens, du contexte culturel, des alternatives disponibles. L'enjeu n'est pas de créer une morale alimentaire punitive, mais d'inviter chacun à une réflexion sur les conséquences de ses choix. La vraie neutralité morale n'existera peut-être que le jour où la viande sera produite sans faire souffrir aucun être sensible.`,
    }
  },
];

// Citations clés pour l'accroche (tirées de la méthode CUGEX)
window.CUGEX_CITATIONS = [
  { texte:"La grandeur d'une nation et son progrès moral se jugent à la façon dont elle traite les animaux.", auteur:"Gandhi" },
  { texte:"Jusqu'à ce qu'on ait aimé un animal, une partie de notre âme reste endormie.", auteur:"Anatole France" },
  { texte:"Celui qui est cruel envers les animaux ne peut être un homme bon.", auteur:"Schopenhauer" },
  { texte:"On peut juger le cœur d'un homme à la manière dont il traite les animaux.", auteur:"Kant" },
  { texte:"La question n'est pas : peuvent-ils raisonner ? Peuvent-ils parler ? Mais : peuvent-ils souffrir ?", auteur:"Bentham" },
  { texte:"Tous les animaux sont égaux, mais certains animaux sont plus égaux que d'autres.", auteur:"George Orwell, La Ferme des animaux (1945)" },
  { texte:"On reconnaît le niveau de civilisation d'un peuple à la manière dont il traite ses animaux.", auteur:"Émile Zola" },
];
