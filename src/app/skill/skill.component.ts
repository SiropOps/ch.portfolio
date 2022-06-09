import { Component, Inject, NgZone, PLATFORM_ID, OnInit, OnDestroy, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Input, TemplateRef, ViewChild } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import { isPlatformBrowser } from '@angular/common';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_frozen from '@amcharts/amcharts4/themes/frozen';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements AfterViewInit, OnInit {

    radioModel: string = '1';

    private skillTypeChart!: am4charts.RadarChart;
    private skillAcademyTypeChart!: am4charts.RadarChart;

    private dataType = [
        [
            {
                "category": "C1",
                "power": 2,
                "categoryLabel": "Débutant",
                "axisLabel": "Expliciter, étayer et argumenter les valeurs, les principes éthiques et  le cadre déontologique du travail social qui fondent leur action.",
                "why": "<p>Tout au long du 1er semestre, les lectures données, les réflexions demandées ainsi que les exercices à réaliser notamment en lien avec les cours suivants :</p><p>Histoire du travail social ; introduction aux droits fondamentaux ; introduction à l’éthique ; introduction à la déontologie,</p><p>Introduction à la systémique ; observation ; développement du pouvoir d’agir ; sociologie du travail social</p><p>M’ont permis d’avoir de meilleures connaissances sur l’origine du travail social, de ses évolutions au cours des siècles et des courants de pensée qui les traversent. Des courants de pensée façonnés par les sciences,     les cultures, la philosophie, les facteurs sociaux et environnementaux, etc. Ces connaissances me permettent de comprendre et expliquer pourquoi le travail social et ses professionnels-les rencontrent certaines difficultés, tensions et prônent actuellement ces valeurs. À l’occasion de notre projet sur la possibilité de réinsertion d’adultes « haut potentiel » à l’aide sociale, nous désirons prendre très au sérieux l’envie et le besoin réel de ces personnes. Ce premier semestre m’a éclairé sur le fait que nous proposions souvent nos idées d’activités et qu’elles ne suscitent pas chaque fois l’unanimité et l’adhésion des personnes accompagnée. Adhésion primordiale, si l’on veut permettre un changement durable. Cette pratique rentre dans le cadre de l’éthique et de la déontologie du            travail social. Malheureusement, ce genre de démarche est parfois difficile à faire entendre et adopter par des institutions ou des services soumis aux contraintes de l’économie libre. Ces derniers souhaitant voir des résultats à courts et moyens termes.</p>"
            },
            {
                "category": "C2",
                "power": 3,
                "categoryLabel": "Apprenant",
                "axisLabel": "Évaluer leurs propres ressources et leurs limites dans les dimensions cognitives, émotionnelles, corporelles et sociales, et identifier leurs besoins en matière de professionnalisation.",
                "why": "<p>Je suis apte à réfléchir sur mes pensées, mes actions et mes expériences. J’essaie de les comprendre et analyser dans la limite de mes connaissances théoriques.</p><p>Dans le cadre d’une leçon d’escalade, j’ai été capable de me rendre compte de ma limite à motiver des adolescents en leur proposant des exercices stimulants et ciblés sur leurs besoins du moment. J’ai également pu réfléchir sur mes émotions et leurs limites lorsque les jeunes se sont permis de courir et déranger (selon mon interprétation) la clientèle, en plus de ne pas réaliser les consignes que j’avais données. Ce constat m’a gêné et j’ai donc cherché une stratégie pour plus les investir et mieux canaliser leurs énergies pour le cours suivant. J’ai fait appel à mes ressources.</p><p><b>Cognitives</b> : en m’appuyant sur des théories pour impliquer davantage des personnes dans une activité. J’ai proposé aux jeunes de me dire qu’elles étaient leurs motivations profondes à faire de la grimpe. Ma réflexion s’est aussi basée sur la manière dont j’allais communiquer avec eux. Avec quel vocabulaire, quelles intonations de voix, quelle posture, quel discours. Parler de mes ressentis, mon utilité pour eux, mon statut dans la salle d’escalade, mes envies.</p><p><b>Émotionnelles</b> : j’arrive à montrer mon agacement ou ma joie en fonction qu’un jeune adopte une attitude déplacée ou alors progresse dans sa grimpe.</p><p><b>Corporelles</b> : L’art de trouver la bonne distance selon la personne et au bon moment de l’interaction. Mes années de pratique en escalade ont façonné ma gestuelle. L’estime que me portent les jeunes (espérons-le) peut éventuellement augmenter lorsqu’en grimpant, je réalise facilement et leur décortique les mouvements sur lesquels ils butent. Le corps et sa mobilité peuvent être un outil d’influence et d’identification. J’essaie d’en avoir conscience et d’utiliser ces outils avec précaution et parcimonie.</p><p><b>Sociales</b> : Je me soucie de partager mon temps équitablement entre chaque élève. De leur donner les bons conseils au bon moment, d’expliquer différemment s’ils ne comprennent pas, de rester positif selon les difficultés rencontrées et d’avoir un petit encouragement, un mot ou une blague personnalisée. J’ai également dans mon entourage beaucoup de spécialistes travaillant dans divers domaines. Je me permets sans gêne d’échanger avec eux et avec elles sur une situation où j’ai senti mes limites poindre.</p>"
            },
            {
                "category": "C3",
                "power": 3,
                "categoryLabel": "Apprenant",
                "axisLabel": "Construire et développer une relation professionnelle dans une posture favorisant le pouvoir d’agir et l’autodétermination des individus, groupes et communautés.",
                "why": "<p>Cela fait une dizaine d’années que je m’interroge sur la bonne attitude a adoptée pour obtenir une relation la plus profitable aux deux partis. Chaque journée de travail permet d'appliquer cette compétence. Je tente de l’affiner au maximum en partageant et questionnant d’autres professionnels-les sur leurs expériences et connaissances.</p><p>J’ai su développer une posture professionnelle en tant que vendeur spécialisé et moniteurs d’escalade durant ces 10 dernières années. En tentant de mettre en pratique mes notions basiques de communication, j’ai pu avoir majoritairement des retours positifs sur ma manière d’agir. J’essaie de me renseigner en questionnant la clientèle et les élèves sur leurs envies, et en creusant plus, sur leurs réels besoins. Tout en estimant la bonne distance : physique et respect de la vie privée. Interroger astucieusement les personnes, permet de mettre en lumière des problématiques puis des besoins ou des moyens pour y répondre. Une fois ces derniers mis en avant, je prends garde de ne pas décider à la place des gens. Cela a souvent permis de les rendre acteurs et actrices de leurs choix et par conséquent, plus engagé dans les mesures ou les directions à prendre.</p>"
            },
            {
                "category": "C4",
                "power": 2,
                "categoryLabel": "Débutant",
                "axisLabel": "Établir des diagnostics de situation, construire, mener et évaluer des projets d’intervention et des actions en se basant sur des connaissances scientifiques, méthodologiques et des savoirs d’action.",
                "why": "<p>J’ai remplacé un collègue pour son cours d’escalade « jeune et bloc »<sup>1</sup>. Sur les 6 adolescents présents, 3 ont commencé à ne plus réaliser les exercices que je leur avais présentés. Ils ont entrepris à courir sur les matelas, faire du bruit et se chamailler. J’ai établi ce diagnostic :</p><ul><li>L’activité proposé ne leur convenait pas, ou était devenue monotone.</li><li>Leurs conduites dérangeaient les autres clients et clientes dans la salle.</li><li>Malgré plusieurs rappels des règles et suggestions de nouveaux exercices, leurs attitudes n’ont pas changé. J’ai ressenti qu’en filigrane, la question pouvait se poser de mon professionnalisme à faire face à cette situation.</li></ul><p>Après ce diagnostic, j’ai décidé d’élaborer un « projet » d’intervention pour les cours à venir. Pour avoir l’adhésion des jeunes dans le cours, il fallait que je sache ce qui les motivait dans la grimpe et qu’est-ce que je pouvais leur apporter dans ce cours.</p><p>La leçon suivante, j’ai organisé un échauffement avec 5 postes d’exercices physiques et 1 poste dédié à la réflexion sur leurs envies pour les prochains cours. Avant de commencer, je leur ai expliqué les consignes et leur ai également donné quelques pistes de questionnement pour faciliter l’enclenchement de leurs réflexions. Inclure ce poste dans l’échauffement a bien marché, car il pouvait à la fois se reposer en réfléchissant sans rester « passif » avec le risque de déranger les autres. Passer par l’écrit permet de garder une base concrète des envies et de s’y référer au besoin. À la fin de l’échauffement, tous ensemble nous avons repris les souhaits de chacun et avons ainsi développé la séance et les futures cours à venir.</p><p>J’ai constaté que la dynamique a évolué dans la leçon du jour et dans celles qui ont suivi. Les jeunes avaient plus de volonté pour grimper et progresser, chacun dans son niveau et à son rythme.</p><p>J’estime être encore débutant, car il me manque encore des connaissances scientifiques pour réussir à analyser des situations plus complexes et avoir les outils adéquats pour y répondre.</p><p><sup>1</sup> Cours de grimpe proposé par la salle Vertic-Halle à des jeunes de 11 et 14 ans pour la pratique du bloc. Le bloc est une discipline de l’escalade consistant à gravir des murs d’une hauteur de 4 m maximum, la chute étant protégée par des matelas au sol.</p>"
            },
            {
                "category": "C5",
                "power": 1,
                "categoryLabel": "Novice",
                "axisLabel": "Développer une pensée critique, questionner le sens de l’action sociale et proposer des modes d’intervention et de transformation sociales pertinents, créatifs et diversifiés, qui intègrent les enjeux sociaux, économiques, culturels et politiques aux niveaux : local, national et international.",
                "why": "<p> Les différents cours du semestre m’ont donné plusieurs pistes de réflexion pour travailler cette compétence, notamment: <p><b>Les pouvoirs</b>: Nous en possédons beaucoup en tant que TS.Souvent ces pouvoirs sont peu visibles, mais bien présents.Il en va de notre éthique de s’en rendre compte et d’en user avec toute la conscience nécessaire pour respecter les droits et les choix des personnes que l’on accompagne.</p><p><b>Les mandats</b> : En tant que TS nous devons répondre à trois mandats.Notre employeur, les personnes que l’accompagne, l’éthique et la déontologie auxquelles notre profession aspire.Ces derniers ne sont pas toujours compatibles entre eux.Il en va de notre sens critique et de notre éthique d’amener une intervention ou une transformation pertinente qui tiennent en compte les problématiques de chaque partie.</p><p><b>Champy</b> m’as appris, que chaque cas est singulier et toutes les situations sont complexes.Dans ce contexte, apparait souvent des tensions entre les professionnels•les concernant la hiérarchisation des moyens et des finalités.Découlant de ces tensions, l’accompagnement des personnes peut en être détérioré. </p><p><b>L’observation et la systémique</b> m’ont entre autres expliqué qu’il est important d’avoir et de garder un regard critique sur nos visions et interprétations.Pour les humains la réalité ne peut être que construite.Par conséquent, chacun•e à la sienne.En tant que TS je me dois de connaitre la mienne et comprendre celle des autres, pour en coconstruire une permettant de travailler au mieux.</p><p><b>Le développement du pouvoir d’agir</b> m’a aussi montré que selon la posture prise par le TS, l’accompagnement des personnes peut être plus ou moins réussi.J’ai l’impression que cette méthode offre une intervention et un soutien pertinent, créatif et diversifié. </p><p>Toutes ces approches nous aident à déchiffrer des processus par lesquels peuvent apparaitre des tensions et créer des conflits. En s’en rendant compte, on peut plus facilement prendre du recul et adopter une attitude constructive permettant d’avancer.</p > <p><b>J’estime être novice </b>, car j’ai de légères bases théoriques qui ne demandent qu’à être consolidées par de la pratique et de la supervision.</p> "
            },
            {
                "category": "C6",
                "power": 3,
                "categoryLabel": "Apprenant",
                "axisLabel": "Communiquer de manière claire et adéquate, oralement, par écrit et/ou selon des modalités appropriées, auprès de publics diversifiés et dans des contextes variés.",
                "why": "<p>J’ai reçu les connaissances de base de la communication orale et écrite durant mes années de formation (rd, ECG, CFC, maturité sociale, brevet fédéral professeur d’escalade). Puis, j’ai toujours essayé de les mettre en pratique et les améliorer tout au long de ma carrière professionnelle. 5 années comme vendeur spécialisé et 5 années comme moniteur, hôte d’accueil et ouvreur dans une salle d’escalade (Vertic-Halle). Le responsable des cours de la salle étant formé à la PNL m’a beaucoup appris et rendu curieux sur cet art. Il m’a notamment expliqué l’importance d’exprimer ses ressentis et ses émotions afin d’éviter un maximum les mauvaises interprétations de nos propos.</p><p>Les cours du premier semestre et spécialement ceux sur l’école de Palo Alto (communication et la 2e cybernétique) m’ont permis de consolider et d’élargir mes connaissances théoriques et empiriques de base. Désormais, j’arrive mieux à analyser mes séquences de communication. Cela m’aide pour la mise en pratique ces nouvelles connaissances dans ma vie privée et professionnelle.</p><p>En plus d’avoir suivi l’atelier d’écriture proposé par la HEVS, la rédaction des divers travaux pour l’école et mon correcteur « Antidote 11 », me permettent d’améliorer mon expression écrite.</p>"
            },
            {
                "category": "C7",
                "power": 2,
                "categoryLabel": "Débutant",
                "axisLabel": "Organiser, coordonner le travail en équipe et en réseau, et collaborer dans des logiques d’interprofessionnalité et d’interdisciplinarité.",
                "why": "<p>Comme vendeur, j’ai souvent dû organiser et coordonner notre travail avec l’équipe de l’atelier afin de répondre aux demandes expresses de clients. En pleine saison d’hiver, certains•es clients•es voulaient ressortir du magasin avec leurs de skis et chaussures de randonnée fraichement achetée sous le bras. Cependant en amont, il fallait réussir à installer les fixations sur les skis, les régler avec les chaussures que je thermoformais en même temps, monter et tailler les peaux. Dans mon métier d’ouvreur à Vertic-Halle, nous travaillions toujours en binôme pour réaliser une zone de bloc. Après avoir démonté toutes les prises, il fallait recréer les nouveaux passages, les tester et les coter. L’organisation, la négociation et la coordination étaient constantes. Entre nous, mais parfois avec des moniteurs•trices pour leurs cours ou des clients.</p><p>J’ai certainement développé certaines compétences empiriques dans mes stages d’ASE et mes diverses activités me permettant de collaborer avec d’autres professionnels•les. J’estime pourtant être débutant, car il me manque les connaissances théoriques, et surtout les logiques d’interprofessionnalité et d’interdisciplinarité avec les professions qui gravitent autour du domaine social.</p>"
            },
            {
                "category": "C8",
                "power": 3,
                "categoryLabel": "Apprenant",
                "axisLabel": "Comprendre les divers déterminants de l’organisation, se situer et assurer les tâches de gestion, d’administration et de coordination.",
                "why": "<p>Aux files de mes stages d’ASE et de mes diverses expériences, j’ai acquis une certaine compréhension des hiérarchies et des fonctionnements qui en découlent. Je sais trouver et prendre ma place ; réaliser les travaux qui me sont demandées ; demander des explications ou de l’assistance si je ne comprends pas ce qui est attendu de moi ; proposer mon aide si je me sens capable d’effectuer une tâche hors de mon cahier des charges ; je sais rappeler mon statut dans le cas où l’on me demande trop de responsabilités sans compensation en retour.</p><p>J’évolue dans le monde professionnel depuis 15 ans (moniteur de ski, serveur, crèche, Castalie, EMS, construction, vendeur, intervenant graffiteur, moniteur d’escalade, réception, ouvreur de voie d’escalade, expert des examens oraux français CPLN). J’ai acquis quelques bases de connaissances théoriques dans mes formations. Je considère surtout avoir développé un savoir empirique quant à ma façon de découvrir et évoluer dans une nouvelle organisation. Il me faudra dorénavant assimiler les postures et codes que demande le domaine social et ses institutions. Je devrai notamment m’entrainer à réaliser des tâches d’administration, de coordination et de gestion.</p>"
            }
        ],
        [
            {
                "category": "C1",
                "power": 3,
                "categoryLabel": "Apprenant",
                "axisLabel": "Expliciter, étayer et argumenter les valeurs, les principes éthiques et  le cadre déontologique du travail social qui fondent leur action.",
                "why": "<p>Les cours de ces deux semestres et les liens que j’ai pu faire entre eux et avec mes expériences professionnelles et privées m’ont apporté beaucoup de connaissances me permettant de mieux comprendre les enjeux, les valeurs, l’éthique et la déontologie du travail social. Ces éclairages me permettent de mieux structurer ma pensée et ainsi développer un meilleur argumentaire pour expliciter et étayer ma vision du monde, proche des valeurs du travail social.</p><p>En effet, débroussailler les politiques sociales et les systèmes d’assurance (F8) ; avoir un aperçu des différentes organisations, leurs rôles, leurs effets et leurs inscriptions dans différents types d’économies (F9) ; tenter de démêler et de comprendre la complexité des relations sociales (F3, F6, F7), l'importance de la communication dans ce domaine (F6, F7), m’amène à mieux comprendre les différents enjeux des individus, des groupes sociaux et de l’organisation structurelle de notre société.</p><p>J’ai pu entrainer cette compétence dans ma vie privée à travers des débats avec personnes possédant une vision moins globale que la mienne sur des sujets comme l'école et la reproduction des inégalités, l'immigration et l'essentialisme de certains groupes d'individus. J'ai remarqué que mes interlocuteurs.trices acquiesçaient de manière plus fréquente mes propos qu'il y a quelques mois en arrière. J'en déduis que si j'arrive à mieux convaincre d'autres humains c'est que j'ai mieux intégré et compris les principes de ce domaine.</p><p>Interroger des professionnels.les durant la phase de conscientisation de notre projet sur le haut potentiel (HP) nous a confrontés à leurs analyses plus expérimentées de la réalité du terrain. Imaginer ou vouloir apporter une réponse à un problème social n’en crée-t-il pas un (stigmatisation) ? Comment alors mettre en place des actions allant dans le sens de la déontologie et l'éthique du travail social ? Ces questions m'ont permis d'élargir mes réflexions pour ensuite m'apporter des savoir-faire dans cette compétence.</p><p>La construction des statuts de notre association et la présentation du Houston Call nous a obligés à questionner, identifier et prôner nos valeurs, nos éthiques et celle du travail social. J’ai beaucoup ressenti cela lors de la préparation de la présentation du Houston Call. Premièrement, pour nous présenter en tant que groupe, il fallait définir qui nous étions et quelles valeurs faisaient l’unanimité. Deuxièmement, le changement de consigne et le format \"compétition\" ainsi que la participation et le « price money » donné par une assurance, à soulever pas mal de questionnement éthique pour ma part et pour le groupe. Notre retour à Jean-Charles est l’annulation de la présentation de l’assurance, à démontrer que nous avons pu faire valoir nos arguments quant à cette association questionnable de l’économie privée et du milieu de l’instruction. Troisièmement, nous avons bien ressenti les stéréotypes persistants entre le monde l’économie libérale et celui du social. Cela nous a permis de développer une présentation authentique en jouant avec les codes de nos hôtes sans nier nos valeurs et l’idéologie qui anime notre domaine professionnel et nous-mêmes.</p>",
            },
            {
                "category": "C2",
                "power": 3,
                "categoryLabel": "Apprenant",
                "axisLabel": "Évaluer leurs propres ressources et leurs limites dans les dimensions cognitives, émotionnelles, corporelles et sociales, et identifier leurs besoins en matière de professionnalisation.",
                "why": "<p>Le travail de ma lecture sur le chapitre du pouvoir dans les groupes des autrices Aebischer et Oberlé m’apporte un outil pour comprendre une situation à travers le prisme du pouvoir en psychologie sociale. Je suis capable d’esquisser un début d’analyse en identifiant les prises, les recherches et les (res)sources du pouvoir dans un contexte. Cela me permet d’envisager un échange relationnel ou une situation avec un regard m’apportant une autre évaluation et me permet de comprendre les attitudes adoptées par moi et d’autres personnes. Cette réflexion sur le pouvoir m'a aidé à comprendre les rétroactions qui se jouaient dans quelques situations familiales, professionnelles et scolaires que je vivais ou observais. J'ai expérimenté qu'en fonction du statut qu'on m'attribuait ou que je pensais avoir et du rôle que je jouais ou non, cela développait en moi et chez les autres différents types de sentiments et d'émotions. Je suis content d'arriver à en prendre conscience, car cela me permet alors de revoir le jugement que j'ai de l'humain en face de moi et par conséquent de changer mon attitude.</p><p>Je retire de l’article sur le management humaniste de Stéphanie Arnaud, l’importance d’évaluer pour soi et les personnes que l’on accompagne, les besoins en autonomie, en compétence et en reconnaissance, pour améliorer le sentiment de bienêtre. Dès lors, j'essaie d'apercevoir ces besoins et d'y remédier autant que j'en ressens la nécessité dans les situations que j'intègre.</p><p>Arnaud est également venu sur la théorie de l’autodétermination développée par Decy et Ryan. J’ai pu comprendre les concepts de « motivation autorégulée » et motivation extrinsèque et les évaluer chez moi. Cela m'amène à mieux comprendre pourquoi j'entreprends d'effectuer une tâche avec plus de plaisir qu'une autre. Par conséquent, je suis plus à même de pouvoir évaluer et argumenter le bienfondé ou non d’activités à exécuter, comme, par exemple, des travaux pour l’école.</p><p>Ces apports théoriques me permettent d’amorcer un temps d’arrêt vis-à-vis d'une situation (vécue ou allant se produire) pouvant me faire agir sous l’impulsion d’émotions. Cette temporisation me donne l'opportunité de prendre une distance envers cette situation. Je peux alors mieux évaluer mon fonctionnement, donc mes ressources et mes limites émotionnelles, sociales, corporelles, sociales et mon besoin en matière de professionnalisation qui en ressort.</p>"
            },
            {
                "category": "C3",
                "power": 3,
                "categoryLabel": "Apprenant",
                "axisLabel": "Construire et développer une relation professionnelle dans une posture favorisant le pouvoir d’agir et l’autodétermination des individus, groupes et communautés.",
                "why": "<p>Je donne des cours d’escalade hebdomadaire à des enfants d’une dizaine d’années. Je me sens parfois limité pour les motiver et apporter des exercices sous forme de jeux pour un apprentissage ludique de l’escalade. J’ai alors pensé à lier les apports théoriques vus dans mon article réflexif (AR) concernant la motivation, ceux des cours avec l’échelle de participation, l’action collective et la participation (F7), et les expérimenter dans mes cours. J’ai toujours eu à cœur d’impliquer au maximum les jeunes, mais cela n’a jamais aussi bien fonctionné que je le souhaitais. La mise en pratique de ces théories m’a donné de meilleurs résultats sur leur motivation, leur participation, la dynamique de groupe, le plaisir des enfants et le mien.</p><p>J’ai aussi pu expérimenter cette posture dans le processus amorcé par la SD sur l’organisation de notre équipe de la STA. Mais surtout, je vis cette compétence de l’intérieur en étant moi-même dans un système pédagogique valorisant l’autodétermination et le pouvoir d’agir. J’ai le sentiment d’avoir quelques fois exprimé à mes collègues le fait que nous avions une grande marge de manœuvre et qu’il nous suffisait d’essayer d’agir et de constater les résultats par la suite. Ces déclarations ont peu résonné chez mes collègues. Le Bossé dit que le pouvoir d’agir est certes d'accompagner les personnes vers l'autonomie, mais parfois, cela passe également par faire pour et/ou faire avec. Je sens l’importance et la plus-value d’établir une relation de confiance, professionnelle et si possible amicale avec chaque sociopreneureuse pour oser se lancer dans la co-construction de nos projets.</p><p>Je tente de pratiquer cette posture en tant que moniteur d’escalade quand j’accompagne des enfants et des adultes à devenir autonome dans cette discipline. En tant qu’étudiant.e.s nous adoptons, à mon sens, plutôt inconsciemment cette posture les uns envers les autres lorsque nous effectuons des travaux en communs. Nous analysons ensemble les objectifs et les tâches. Nous nous partageons le travail, nous nous assurons que chacun se sente à l’aise avec sa tâche, nous nous laissons travailler en autonomie, mais nous sommes toujours à disposition les uns envers les autres en cas de besoin.</p>"
            },
            {
                "category": "C4",
                "power": 2,
                "categoryLabel": "Débutant",
                "axisLabel": "Établir des diagnostics de situation, construire, mener et évaluer des projets d’intervention et des actions en se basant sur des connaissances scientifiques, méthodologiques et des savoirs d’action.",
                "why": "<p>A la vue des apports empiriques (projet, diverses relations (in)formelles, rédaction AR) et théoriques (F2, F3, F4, F5, F6, F7, F8, F9, diverses lectures), je commence à pouvoir établir le diagnostic d’une situation. J’essaie de mobiliser ces connaissances scientifiques, méthodologiques et mes savoirs d’action (humour, taquinerie, persuasion, politesse, responsabilité) dans mes équipes de travail, mes cours d’escalade et ma vie privée. L’exemple le plus frappant à mes yeux est ma perception de situation à travers les théories ressorties du pouvoir dans les groupes (Aebischer & Oberlé) et sur le management humaniste (Arnaud). En effet, plutôt que de me laisser emporter par les émotions qu’engendre certains réactions et contexte d’un ou plusieurs individu.s, j’ai pu les envisager différemment, et ainsi avoir une autre explication des circonstances d’une situation et de moi-même. Cela me donne la possibilité de proposer une intervention différente que celle logiquement attendue. Lorsque que j’étais personnellement en relation avec d’autres personnes et impliqué dans une situation qui à mon sens allait en se dégradant, ces apports théoriques m’ont permis d’adopter et d’expérimenter une autre attitude et un autre comportement (patience, écoute et reconnaissance de l'autre). Cette alternance m’a donné la possibilité d’évaluer et de comparer l’impact de mes différentes postures vis-à-vis des personnes et par corrélation sur la dynamique et l'ambiance.</p><p>La première phase du projet HP a attiré mon attention sur les notions de haut potentiel émotionnel et intellectuel ainsi qu’à l'intégration et/ou inclusion ou non dans notre société de ces personnes. Nous avons pu ébaucher plusieurs pistes d’actions et évaluer les plus pertinentes après nous être documentés. Nous sommes allés confronter nos idées sur le terrain en interviewant quatre professionnel.s.les. Leurs réponses nous ont permis d’affiner encore plus nos démarches à venir. Nous avons aussi pu commencer à assimiler quelques bases méthodologiques apportées par Jean-Charles en début d’année en les expérimentant. Cela m’a fait remarquer les lacunes que j’ai encore à combler pour gagner en efficacité.</p>"
            },
            {
                "category": "C5",
                "power": 2,
                "categoryLabel": "Débutant",
                "axisLabel": "Développer une pensée critique, questionner le sens de l’action sociale et proposer des modes d’intervention et de transformation sociales pertinents, créatifs et diversifiés, qui intègrent les enjeux sociaux, économiques, culturels et politiques aux niveaux : local, national et international.",
                "why": "<p>Les théories de ce semestre ont, entre autres, développé ma pensée critique sur : les techniques d’informations et de communications (TIC) ainsi que sur les postures et les représentations que l’on pouvait avoir vis-à-vis d'elles, dont les miennes et celle de notre groupe ; les politiques et assurances sociales, ainsi que les concepts fondant un état social, m’apportent beaucoup de nuances quant à la prise en charge d’un problème social ou individuel ; les notions de déviance, de migration d’intégration et de pauvreté m'ont fait remarquer tout la subjectivité et l'ethnocentrisme que les travailleurs.euses social.e peuvent avoir ; les relations entre l’économie sociale et solidaire (ESS), le marché libéral et l’état me font remarquer les tensions que cela peut créer ; les politiques sociales cherchant à résoudre une problématique tout en pouvant l’accentuer (Becker).</p><p>En effet, les cours du deuxième semestre plus axés sur l’approche structurelle de notre société, de ses réponses pour créer et maintenir de la cohésion sociale ainsi que le questionnement sur soi (comme agent du système) s’inscrivant dans un contexte complexe me permettent de développer une pensée critique sur le sens de l’action sociale et de ses modes d’intervention et de transformation.</p><p>Pour créer une motivation commune et du lien dans deux groupes de cours d’escalade, j’ai expérimenté des notions vues sur le modèle participatif (DPA, intelligence collective). Je remarque que cette approche soulève quelques curiosités auprès de mes collègues et des parents. Certainement que ce modèle est encore un peu atypique pour certaines structures et pour certaines personnes. Suivre la STA me donne la possibilité de vivre de l’intérieur les notions de dynamique de groupe et d’expérimenter des modèles pour faire participer et prendre en compte les avis des personnes. J’ai vécu cela lors des « Motorola », du « Word Café » et lors du F9 avec le partage et la sélection des statuts des différents groupes. Expérimenter cela m’amène à développer mon esprit critique sur ce qui fonctionne bien ou non. Cela me donne aussi l'occasion de tester d'autres modes d'intervention.</p><p>(Jean-Marc Roduit : Le travail social est un métier créatif par essence, car on ne propose pas des solutions conformistes, mais adaptées à la situation.)</p>"
            },
            {
                "category": "C6",
                "power": 3,
                "categoryLabel": "Apprenant",
                "axisLabel": "Communiquer de manière claire et adéquate, oralement, par écrit et/ou selon des modalités appropriées, auprès de publics diversifiés et dans des contextes variés.",
                "why": "<p>J’ai volontairement répondu à un email de l’école concernant la FP1 sur un niveau de communication plus informel pour vérifier mon hypothèse de base : peut-on travailler sérieusement tout en rigolant ? La collaboratrice de l’école n’a pas compris mon « humour » et sa réponse fut plutôt recadrant. Après débriefing de cette expérience et de ce postulat avec un coach et la collaboratrice en question, il m’a bien fallu me rendre à l’évidence. Selon le contexte et notre méconnaissance respective (uniquement par emails formels), il est très compliqué, voire contreproductif, d'adopter un ton humoristique. L’humour demande souvent de connaitre son interlocuteur et de partager des valeurs communes. Lorsqu’on s’adresse à un inconnu, en plus par écrit, il est difficile d’amener toutes les subtilités d’une blague en éliminant le non- et le para- verbal. Je n’entends pas démordre de mon idée de base, mais simplement sélectionner le récepteur et le contexte dans lequel je peux me le permettre. Je réalise l’importance d’une bonne communication pour donner l’image d’un professionnel crédible.</p><p>Rédiger le portfolio et l’AR me met face à mes limites quant à la structuration d’un texte pour développer une idée. J’ai aussi expérimenté l’importance de bien comprendre un texte pour tirer au maximum profit des concepts qu’il présente. Bien que tout cela m’avait été transmis dans les ateliers d’écriture du premier semestre, j’ai réellement assimilé ce que voulait nous transmettre J.M. Roduit, en le pratiquant. Avoir une feuille de papier pour y griffonner un plan et y écrire en vrac les idées qui nous traversent facilite la construction d’un texte. Ce travail a initié un modelage de ma pensée pour structurer mes idées par écrits. J’ai aussi pu me familiariser avec les normes APA concernant les citations dans un texte et tout cela me donne un meilleur aperçu de ce que va représenter la rédaction du Bachelor (si j’arrive à ce stade).</p><p>J’ai aussi fait l’expérience d’adopter un niveau de langage différent selon mes interlocuteurs.trices et le contexte. Je communique différemment avec un.e responsable d’institution, qu'avec un.e professeur.e, qu'avec des jeunes dont j’ai la charge. Avec les jeunes des cours de grimpe ou ceux de St-Raphael venu participer à la vidéo du F10, j’ai pu jouer sur la variation entre différents niveaux de communication et de langage pour attirer l’attention, créer une affinité ou alors mettre une distance.</p><p>Cette démarche et les résultats qu'elle produit m’aident à réaliser l’impact de ma communication et à l'(la re)ajuster au besoin du contexte ou de la tournure des évènements. J'ai fait l'expérience qu’avoir un discours ou un texte structuré me donne l’occasion d’être plus convaincant et par conséquent me faire gagner de l’énergie et de la crédibilité dans les échanges.</p><p>Ces \"tests\" s’inscrivent dans la lignée d’autres qu’ils soient oraux, écrits (in) formels, dans un cadre professionnel, privé, ou scolaire, symétrique ou complémentaire. Je réalise que j’apprécie la provocation et la (l’auto) dérision. C’est à mon sens une force pour certaines situations, mais également dangereux si mon analyse de cette dernière s’avère incorrecte.</p>"
            },
            {
                "category": "C7",
                "power": 3,
                "categoryLabel": "Apprenant",
                "axisLabel": "Organiser, coordonner le travail en équipe et en réseau, et collaborer dans des logiques d’interprofessionnalité et d’interdisciplinarité.",
                "why": "<p>J’estime pouvoir me considérer comme apprenant à la suite de cette première année en travail social. Par exemple, de mi-mars à mi-mai, j’ai dû organiser mon temps entre et avec les différentes personnes gravitant autour de mes multiples groupes de projet et activités, tout en travaillant deux soirs par semaine et en suivant les cours à plein temps.</p><p>Projet HP, 4 puis 3 personnes ; F6 journal de bord, 6 personnes et multimédia 3 personnes ; Projet ASLEC, 2 puis 5 personnes ; Organisation STA, 4 personnes ; Groupe STA, 23 personnes ; Projet Houston Call, 23 personnes ; rédaction et relecture AR, 2 personnes ; cours d’escalade et remplacements.</p><p>J’ai premièrement appris à gérer mon propre en temps en trouvant enfin un agenda me correspondant (outlook). Deuxièmement, toutes ces activités restreignent mon temps et m’ont obligé, selon les dynamiques des groupes à séparer, hiérarchiser et coordonner les différentes tâches au sein de chaque équipe. La distribution des tâches s’est le plus souvent faite selon les domaines de compétence de chacun. Troisièmement les apports théoriques sur la dynamique de groupe, la gestion d’un projet, le fonctionnement d’une association sont venus compléter mes constats empiriques. J’ai ainsi pu faire des liens qui m’ont permis de fluidifier mes relations et optimisé le travail et son partage (besoin de production et de conservation d'un groupe). Finalement, mes expériences agrémentées de la théorie m’ont démontré que je devais être attentif à la singularité et la sensibilité de chaque personne concernant la direction du travail ou le résultat qu’elle a fourni, et cela notamment lorsqu’il s’agit de prendre une décision ou de relire et modifier des textes.</p><p>Au moment où j’écris ces lignes, je vis à nouveau une période passablement chargée qui me demande d’être organisé. Je suis en train de lancer une coopération avec d’autres étudiants.es pour se partager les résumés des cours du module F8. Je suis en contact avec d’autres pour collaborer quant aux réponses à fournir aux questions complexes demandées pour l’examen du F7. En parallèle, la relecture de mon portfolio, à la lumière des précisions de Jean-Charles, m’a fait reprendre plusieurs démonstrations de compétence et me retarde dans mon planning. J’ai reçu il y a quelques jours, une proposition pour la place en emploi dont je rêvais. Ne pouvant laisser passer une telle opportunité, je vais aller à l’entretien, au préalable, j’ai contacté madame Peter pour connaitre les différents scénarios possibles si je devais être pris. Il me faudra planifier des journées tests. Si tout cela est positif, je devrais trouver le moyen de casser mon contrat de FP1 et rester en bons termes avec l’institution m’ayant déjà engagée. Courant mai, j’ai accepté un job d’expert aux examens oraux de français de la filière CFC d’employé.e de commerce à Neuchâtel. Il me faut lire et préparer les huit textes et penser à des questions pour les examinés.es. Ajouter à cela quelques cours d’escalade à donner et la matière du F6 à intégrer. Pour faire face à ce début juin passablement chargé, je me suis constitué un planning avec des horaires de travail que je respecte. Je prends de plus en plus le pli de noter toutes mes questions, mes idées et les liens que je fais en relation avec les tâches que j’ai à réaliser. Pour m’aider à cela, j’ai téléchargé une application de liste à faire (to do List) avec des rappels pour libérer (s'il en reste) de la mémoire vive dans mon cerveau et la mettre à profit des travaux que j’effectue.</p>"
            },
            {
                "category": "C8",
                "power": 3,
                "categoryLabel": "Apprenant",
                "axisLabel": "Comprendre les divers déterminants de l’organisation, se situer et assurer les tâches de gestion, d’administration et de coordination.",
                "why": "<p>J’ai reçu un mail de la part d’une personne responsable de la FP1 que j’ai perçue comme maternisant et m’a un peu vexé. Cela est peut-être dû à mon âge et des (quelques) notions de professionnalismes que je pense avoir déjà acquis. J’ai voulu faire l’expérience d’y répondre par l’humour. Inconsciemment (au moment des faits, mais j’en fais l’analyse maintenant), cette touche d’humour était probablement destinée à réduire ce sentiment de relation trop asymétrique. Sans surprise, la blague a fait rire que moi et la réponse m’a remis dans ma position tout en me demandant d’éclaircir mes propos. J’ai donc compris que l’on ne pouvait pas se permettre de tels traits de familiarité par écrit avec des personnes responsables que l’on ne connait pas. Je fais l’apprentissage que dans une structure qui s’occupe de centaines de personnes on ne peut guère être d'emblée reconnu singulièrement. Il faut donc accepter les codes de l’organisation et pouvoir prendre du recul si une relation ne va pas exactement dans le sens que l’on imaginait. Dorénavant, je fais attention à utiliser les moyens et les formes de communication adéquates en fonction des diverses personnes en face de moi et de leur statut.</p><p>J’ai pris contact avec l’ASLEC, car j’ai ressenti l’enjeu, pour cette classe pilote de pédagogie Team Academy, de donner une image de personnes intéressées et motivées. Étant à cette période passablement occupé par ma vie scolaire, professionnelle et privée, j’ai dû organiser, coordonner et agender plusieurs rencontres. Au premier entretien avec l’ASLEC, j’ai situé et explicité mon statut et mon rôle dans cette classe STA, elle-même intégrée, dans le cursus Bachelor en Travail social (BATS) de la HEVS.</p><p>Mes connaissances théoriques de bases sont les divers documents et explications reçus sur le fonctionnement de la HEVS, de la HES-SO et de la Team Academy. Mes connaissances concernant la communication et la relation pour s’organiser et collaborer avec d’autres personnes. J’ai pu employer ces théories et mobiliser mes savoir-être et savoir-faire dans plusieurs projets et situation demandant de s’organiser et de comprendre mon statut. Pour l’instant cela à fonctionner, car je n’ai eu aucune rupture abrupte de relation avec les personnes concernées par nos projets communs</p>"
            }
        ]
    ];

    constructor(@Inject(PLATFORM_ID) private platformId: any,
        private zone: NgZone,

    ) { }

    ngOnInit(): void {

    }

    changeRadio(): void {
        console.info(this.radioModel);

        this.skillTypeChart.closeAllPopups();
        this.skillAcademyTypeChart.closeAllPopups();
        
        if (this.radioModel === '1')
            this.skillTypeChart.data = this.dataType[0];
        if (this.radioModel === '2')
            this.skillTypeChart.data = this.dataType[1];
    }

    // Run the function only in the browser
    browserOnly(f: () => void) {
        if (isPlatformBrowser(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                f();
            });
        }
    }

    ngAfterViewInit() {
        // Chart code goes in here
        this.browserOnly(() => {
            am4core.useTheme(am4themes_frozen);
            am4core.useTheme(am4themes_animated);
            {
                this.skillTypeChart = am4core.create('skilltypechartdiv', am4charts.RadarChart);

                if (this.radioModel === '1')
                    this.skillTypeChart.data = this.dataType[0];
                if (this.radioModel === '2')
                    this.skillTypeChart.data = this.dataType[1];

                this.skillTypeChart.innerRadius = am4core.percent(40);

                const categoryAxis = this.skillTypeChart.xAxes.push(new am4charts.CategoryAxis<any>());
                categoryAxis.renderer.grid.template.location = 0;
                categoryAxis.dataFields.category = 'category';
                categoryAxis.renderer.minGridDistance = 60;
                categoryAxis.renderer.labels.template.location = 0.5;
                categoryAxis.renderer.grid.template.strokeOpacity = 0.08;

                categoryAxis.renderer.labels.template.tooltip = new am4core.Tooltip();
                categoryAxis.renderer.labels.template.cloneTooltip = false;
                categoryAxis.renderer.labels.template.tooltipText = '{axisLabel}';
                categoryAxis.renderer.labels.template.tooltip.background.opacity = 0.7;
                categoryAxis.renderer.labels.template.tooltip.maxWidth = 200;
                categoryAxis.renderer.labels.template.tooltip.label.wrap = true;
                categoryAxis.cursorTooltipEnabled = false;
                categoryAxis.renderer.labels.template.tooltip.setBounds({ x: 0, y: 0, width: 2000, height: 2000 });
                categoryAxis.cursorTooltipEnabled = false;
                categoryAxis.renderer.labels.template.fill = am4core.color("#495C43");

                categoryAxis.renderer.labels.template.adapter.add("textOutput", function(text: any) {
                    console.info(text);
                    return '[font-size: 30px;text-decoration: underline]' + text + '[/]';
                });

                const valueAxis = this.skillTypeChart.yAxes.push(new am4charts.ValueAxis<any>());
                valueAxis.min = 0;
                valueAxis.max = 6;
                valueAxis.renderer.minGridDistance = 20;

                const series = this.skillTypeChart.series.push(new am4charts.RadarColumnSeries());
                series.dataFields.categoryX = 'category';
                series.dataFields.valueY = 'power';
                series.tooltipText = '{categoryLabel}';

                series.columns.template.events.on("hit", (ev) => {
                    if (ev && ev.target && ev.target.dataItem) {
                        this.skillTypeChart.closeAllPopups();
                        this.skillTypeChart.openPopup((<any>ev.target.dataItem.dataContext)['why']);
                    }
                });

                series.columns.template.strokeOpacity = 0;
                series.columns.template.radarColumn.cornerRadius = 5;
                series.columns.template.radarColumn.innerCornerRadius = 0;

                this.skillTypeChart.zoomOutButton.disabled = true;

                series.columns.template.adapter.add('fill', (fill, target) => {
                    if (target.dataItem)
                        return this.skillTypeChart.colors.getIndex(target.dataItem.index);
                    return undefined;
                });

                this.skillTypeChart.cursor = new am4charts.RadarCursor();
                this.skillTypeChart.cursor.behavior = 'none';
                this.skillTypeChart.cursor.lineX.disabled = true;
                this.skillTypeChart.cursor.lineY.disabled = true;
            }

            {
                this.skillAcademyTypeChart = am4core.create('skillacademytypechartdiv', am4charts.RadarChart);

                this.skillAcademyTypeChart.data = [{
                    "category": "C9",
                    "power": 2,
                    "categoryLabel": "Débutant",
                    "axisLabel": "Apprendre à apprendre : Concevoir son projet d’apprentissages et le piloter. Faire des choix favorisant ses apprentissages et le développement de ses compétences vers un niveau professionnel",
                    "why": "<p> J’ai pu faire des liens entre ma pratique passionnée de l’escalade et l’apprentissage d’autres disciplines.Par intérêt et motivation, j’ai évolué dans ce domaine jusqu’à pouvoir en faire mon métier.Durant ce processus et les échanges avec mes paires, j’ai pu réaliser ce qui me faisait progresser, comment et pourquoi.À travers des expériences personnelles et ma première lecture individuelle pour la STA(apprendre à gérer son temps), j’ai constaté qu’il y avait beaucoup d’étapes similaires entre la progression dans un sport et l’apprentissage d’une matière.Fort de cette découverte, il me reste à cibler mes apprentissages et développer mes compétences tout en cherchant l’intérêt et la motivation.J’ai compris que j’apprenais mieux en échangeant avec d’autres.Dans la perspective des examens, j’ai donc proposé à quelques personnes de la classe de réviser ensemble.</p>"
                },
                {
                    "category": "C10",
                    "power": 4,
                    "categoryLabel": "Pratiquant",
                    "axisLabel": "Apprentissage en équipe : Se former ensemble avec d'autres membres de l'équipe et créer de nouvelles connaissances par la mutualisation des savoirs et la stimulation réciproque",
                    "why": "<p>Naturellement sociable, j’ai toujours pratiqué des sports ou travaillé avec une équipe en partageant nos savoirs. Par ce mode d’apprentissage, j’ose prétendre me situer au niveau professionnel junior dans le domaine de la grimpe. Je pense connaitre la forme, il me reste à transposer le fond, passer de la sphère de l’escalade au champ de l’école et du social. Au cours des quatre projets de groupe du premier semestre et par la création d’une équipe ayant pour objectif l’assimilation de la matière des prochains examens, j’ai déjà pu éprouver cette compétence dans ces deux domaines. Je me considère comme pratiquant, car je possède une base, et que je dois encore me familiariser avec de nouveaux milieux et d’autres outils.</p>"
                },
                {
                    "category": "C11",
                    "power": 3,
                    "categoryLabel": "Apprenant",
                    "axisLabel": "Auto-initiative : démontrer une volonté affirmée de lancer des projets en s’appuyant sur ses compétences et un état d’esprit entrepreneurial",
                    "why": "<p>Pour avoir une rentrée d’argent durant ma formation, j’ai élaboré une offre de cours d’escalade dans le cadre de mon travail de diplôme pour le brevet fédéral. Afin de comprendre les besoins et les envies des grimpeurs, j’ai créé un questionnaire « Google Forms » auquel j’ai obtenu 276 réponses en 2 semaines. Ensuite, j’ai analysé les réponses en développant des tableaux croisés, dans le but de cibler les désirs. Je me suis naturellement entouré de personnes qui avaient les connaissances nécessaires pour me guider dans : étudier et interpréter les réponses ; ébaucher des idées de marketing ; l’organisation, la rédaction et la correction du travail.</p><p>J’ai la conviction que je peux m’améliorer en ce qui concerne la « volonté affirmée de lancer » des projets. Je me mets souvent plus en activité en raison de facteurs externes qu’internes. En revanche, lorsque je sens que mes ressources sont suffisantes, j’essaie de les mobiliser autant que possible. Au long de mes expériences professionnelles dans le privé, je pense avoir eu un aperçu de ce qui est et n’est pas un esprit entrepreneurial, bien que je l'aie encore peu développé pour moi-même. Par contre, au travers des relations que j’ai entretenues avec mes divers patrons, j’ai été sensibilisé sur : l'équilibre dans les budgets ; la notion de bénéfice/risque ; le management du personnel ; gérer la communication avec les employés et les clients ; etc.</p>"
                },
                {
                    "category": "C12",
                    "power": 2,
                    "categoryLabel": "Débutant",
                    "axisLabel": "Leadership d’équipe : construire une équipe qui fonctionne sur une longue période et à conduire cette équipe",
                    "why": "<p>Comme moniteur d’escalade, je me suis souvent retrouvé à conduire un groupe sur une période déterminée et pour dispenser un contenu précis et demandé. Dans ce contexte, et plus récemment dans celui de mes études, je suis capable de ressentir une dynamique de groupe, de la calmer ou de la stimuler. Je n’ai pas encore tous les outils d’observation et d’action nécessaire, mais selon mon attitude je perçois certains changements dans les groupes avec lesquels je travaille ou je collabore. Cependant, je n’ai encore jamais dû construire ma propre équipe et en gérer le management sur une durée indéterminée.</p>"
                },
                {
                    "category": "C13",
                    "power": 1,
                    "categoryLabel": "Novice",
                    "axisLabel": "Créativité et innovation : Générer des idées originales permettant de résoudre des problèmes. Concevoir et gérer le processus qui va de l’idée à l’innovation",
                    "why": "<p>J’ai besoin d’aller au contact avec le terrain pour mieux me représenter les problématiques rencontrées par les usagers•ères, les intervenants•es et les institutions. Interagir avec ces acteurs•trices me donnera une meilleure vue d’ensemble, je serais plus à même de faire fonctionner mon imagination.</p>"
                },
                {
                    "category": "C14",
                    "power": 1,
                    "categoryLabel": "Novice",
                    "axisLabel": "Agir entrepreneurial : démontrer une attitude volontaire dans laquelle les croyances et les barrières limitant la réflexion et l'action sont dépassées dans la mise en œuvre de projets à forts impacts positifs et durables.",
                    "why": "<p>J’espère pouvoir développer cette compétence dans notre premier projet de la Team Academy. Les cours donnent une ligne directrice, mais c’est en approfondissant ses recherches, en confrontant des avis, en questionnant le terrain, que l’on peut développer de réels projets à forts impacts positifs et durables.</p><p>Si je suis persuadé, je pourrai alors être convaincant et réduire les croyances limitantes. Je vais devoir développer une posture entrepreneuriale et volontaire pour gagner en crédibilité et proposer des idées originales de réflexions et d’actions.</p><p>Pour l’instant, j’ai clairement besoin d’évoluer avec d’autres personnes pour m’apprendre à endosser cette attitude et dépasser les croyances limitantes.</p>"
                }];

                this.skillAcademyTypeChart.innerRadius = am4core.percent(40);

                const categoryAxis = this.skillAcademyTypeChart.xAxes.push(new am4charts.CategoryAxis<any>());
                categoryAxis.renderer.grid.template.location = 0;
                categoryAxis.dataFields.category = 'category';
                categoryAxis.renderer.minGridDistance = 60;
                categoryAxis.renderer.labels.template.location = 0.5;
                categoryAxis.renderer.grid.template.strokeOpacity = 0.08;

                categoryAxis.renderer.labels.template.tooltip = new am4core.Tooltip();
                categoryAxis.renderer.labels.template.cloneTooltip = false;
                categoryAxis.renderer.labels.template.tooltipText = '{axisLabel}';
                categoryAxis.renderer.labels.template.tooltip.background.opacity = 0.7;
                categoryAxis.renderer.labels.template.tooltip.maxWidth = 200;
                categoryAxis.renderer.labels.template.tooltip.label.wrap = true;
                categoryAxis.cursorTooltipEnabled = false;
                categoryAxis.renderer.labels.template.tooltip.setBounds({ x: 0, y: 0, width: 2000, height: 2000 });
                categoryAxis.cursorTooltipEnabled = false;
                categoryAxis.renderer.labels.template.fill = am4core.color("#495C43");

                categoryAxis.renderer.labels.template.adapter.add("textOutput", function(text: any) {
                    console.info(text);
                    return '[font-size: 30px;text-decoration: underline]' + text + '[/]';
                });

                const valueAxis = this.skillAcademyTypeChart.yAxes.push(new am4charts.ValueAxis<any>());
                valueAxis.min = 0;
                valueAxis.max = 6;
                valueAxis.renderer.minGridDistance = 20;

                const series = this.skillAcademyTypeChart.series.push(new am4charts.RadarColumnSeries());
                series.dataFields.categoryX = 'category';
                series.dataFields.valueY = 'power';
                series.tooltipText = '{categoryLabel}';


                series.columns.template.events.on("hit", (ev) => {
                    if (ev && ev.target && ev.target.dataItem) {
                        this.skillAcademyTypeChart.closeAllPopups();
                        this.skillAcademyTypeChart.openPopup((<any>ev.target.dataItem.dataContext)['why']);
                    }
                });

                series.columns.template.strokeOpacity = 0;
                series.columns.template.radarColumn.cornerRadius = 5;
                series.columns.template.radarColumn.innerCornerRadius = 0;

                this.skillAcademyTypeChart.zoomOutButton.disabled = true;

                series.columns.template.adapter.add('fill', (fill, target) => {
                    if (target.dataItem)
                        return this.skillAcademyTypeChart.colors.getIndex(target.dataItem.index);
                    return undefined;
                });

                this.skillAcademyTypeChart.cursor = new am4charts.RadarCursor();
                this.skillAcademyTypeChart.cursor.behavior = 'none';
                this.skillAcademyTypeChart.cursor.lineX.disabled = true;
                this.skillAcademyTypeChart.cursor.lineY.disabled = true;
            }

        });
    }

    ngOnDestroy() {
        // Clean up chart when the component is removed
        this.browserOnly(() => {
            if (this.skillTypeChart) {
                this.skillTypeChart.dispose();
            }

            if (this.skillAcademyTypeChart) {
                this.skillAcademyTypeChart.dispose();
            }

        });
    }

}
