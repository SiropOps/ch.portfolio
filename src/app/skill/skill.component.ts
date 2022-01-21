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

  private skillTypeChart!: am4charts.RadarChart;
  private skillAcademyTypeChart!: am4charts.RadarChart;

  constructor(@Inject(PLATFORM_ID) private platformId: any,
    private zone: NgZone,

  ) { }

  ngOnInit(): void {

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

        this.skillTypeChart.data = [
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
        ];

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
