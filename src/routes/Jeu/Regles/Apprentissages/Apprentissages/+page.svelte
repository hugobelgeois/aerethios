<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "comptences",
          "text": "Compétences",
          "level": 2
      },
      {
          "id": "rgles-gnrales",
          "text": "Règles générales",
          "level": 3
      },
      {
          "id": "apprentissages-catgorises",
          "text": "Apprentissages catégorisées",
          "level": 3
      },
      {
          "id": "alchimie",
          "text": "Alchimie",
          "level": 4
      },
      {
          "id": "artisanat",
          "text": "Artisanat",
          "level": 4
      },
      {
          "id": "exploration",
          "text": "Exploration",
          "level": 4
      },
      {
          "id": "apprentissages-libres",
          "text": "Apprentissages libres",
          "level": 3
      },
      {
          "id": "apprendre",
          "text": "Apprendre",
          "level": 2
      },
      {
          "id": "difficult-dapprentissage",
          "text": "Difficulté d’apprentissage",
          "level": 3
      },
      {
          "id": "gain-dexprience",
          "text": "Gain d’expérience",
          "level": 3
      },
      {
          "id": "tutorer",
          "text": "Tutorer",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Apprentissages</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Apprentissages</h1>
  </header>
  <div class="markdown-rendered">
		{@render comptences()}
		{@render apprendre()}
		{@render tutorer()}
  </div>
</article>

<LinkPreview />

{#snippet comptences()}
	<section>
		<h2 id="comptences">{@html applyBase("Compétences")}</h2>
	{@html renderMarkdown("\nApprendre un apprentissage demande **temps**, **argent** et **pratique**.\nChaque apprentissage appartient à une **catégorie principale**, sauf les apprentissages **libres**, qui peuvent être appris à tout moment.\n")}
	{@render rglesGnrales()}
	{@render apprentissagesCatgorises()}
	{@render apprentissagesLibres()}
	</section>
{/snippet}

{#snippet rglesGnrales()}
	<section>
		<h3 id="rgles-gnrales">{@html applyBase("Règles générales")}</h3>
	{@html renderMarkdown("\n- Un joueur peut **s’investir dans une nouvelle catégorie** seulement **tous les 5 niveaux de personnage**.\n\n- À chaque nouvelle catégorie apprise, il choisit **une spécialisation** qui gagne **plus d’expérience**.\n\n- Les autres apprentissages de la catégorie progressent au rythme normal.\n\n- Le coût en **pièces d’or (po)** correspond au **prix d’une leçon**.\n\n- Un niveau est gagné lorsqu’un joueur cumule l’**expérience requise**.\n")}

	</section>
{/snippet}

{#snippet apprentissagesCatgorises()}
	<section>
		<h3 id="apprentissages-catgorises">{@html applyBase("Apprentissages catégorisées")}</h3>

	{@render alchimie()}
	{@render artisanat()}
	{@render exploration()}
	</section>
{/snippet}

{#snippet alchimie()}
	<section>
		<h4 id="alchimie">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Alchimie\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Alchimie\" data-wiki-fragment=\"\">Alchimie</a>")}</h4>
	{@html renderMarkdown("\n| Compétence          | Coût (po / leçon) | XP / niveau | Niveau max | Description                                                          |\n| ------------------- | ----------------- | ----------- | ---------- | -------------------------------------------------------------------- |\n| **<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Cuisinier\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Cuisinier\" data-wiki-fragment=\"\">Cuisinier</a>**   | 1 × niveau        | 10          | -          | Préparation de repas conférant des bonus temporaires                 |\n| **<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Potionniste\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Potionniste\" data-wiki-fragment=\"\">Potionniste</a>** | 2 × niveau        | 20          | -          | Création de potions, huiles et remèdes                               |\n| **<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Invocateur\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Invocateur\" data-wiki-fragment=\"\">Invocateur</a>**  | 3 × niveau        | 30          | -          | Animation ou transmutation d’entités à partir d’ingrédients magiques |\n")}

	</section>
{/snippet}

{#snippet artisanat()}
	<section>
		<h4 id="artisanat">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Artisanat\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Artisanat\" data-wiki-fragment=\"\">Artisanat</a>")}</h4>
	{@html renderMarkdown("\n| Compétence                                                    | Coût (po / leçon) | XP / niveau | Niveau max | Description                                      |\n| ------------------------------------------------------------- | ----------------- | ----------- | ---------- | ------------------------------------------------ |\n| **<span class=\"wiki-unresolved\">Artificier</span>**                                            | 2 × niveau        | 25          | -          | Conception d’objets explosifs ou mécano-magiques |\n| **<span class=\"wiki-unresolved\">Bijoutier</span>**                                             | 1 × niveau        | 30          | -          | Fabrication de bijoux ou catalyseurs de magie    |\n| **<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#kothula-wip\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Kothula%20(WIP)%5C\">Enchanteur (peau - Kothula)</a>** | 4 × niveau        | 30          | -          | Gravure de tatouages runiques sur la peau        |\n| **<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#nirina\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Nirina%5C\">Enchanteur (métal – Nirina)</a>**        | 3 × niveau        | 30          | -          | Gravure de runes sur les armes et armures        |\n| **<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#ovliin\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Ovliin%5C\">Enchanteur (os – Ovliin)</a>**           | 2 × niveau        | 30          | -          | Gravure de runes sur les os                      |\n| **<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#suraja\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Suraja%5C\">Enchanteur (tissu – Suraja)</a>**        | 2 × niveau        | 30          | -          | Enchantement de vêtements, capes et reliques     |\n| **<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Forgeron\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Forgeron\" data-wiki-fragment=\"\">Forgeron</a>**                                              | 1 × niveau        | 20          | -          | Fabrication d’armes, outils et armures           |\n| **<span class=\"wiki-unresolved\">Tanneur</span>**                                               | 1 × niveau        | 10          | -          | Travail du cuir, des peaux et des tissus         |\n\n> Tous les types d’Enchanteurs partagent la même **spécialisation Enchantement**.\n")}

	</section>
{/snippet}

{#snippet exploration()}
	<section>
		<h4 id="exploration">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Exploration/Exploration\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Exploration/Exploration\" data-wiki-fragment=\"\">Exploration</a>")}</h4>
	{@html renderMarkdown("\n| Compétence          | Coût (po / leçon) | XP / niveau | Niveau max | Description                                         |\n| ------------------- | ----------------- | ----------- | ---------- | --------------------------------------------------- |\n| **<span class=\"wiki-unresolved\">Cartographe</span>** | 1                 | 10          | 3          | Création et utilisation de cartes précises          |\n| **<span class=\"wiki-unresolved\">Chasseur</span>**    | 3                 | 10          | 4          | Pistage, piégeage, dépècement                       |\n| **<span class=\"wiki-unresolved\">Équitation</span>**  | 1                 | 15          | 3          | Maîtrise et combat monté                            |\n| **Natation**        | 1                 | 10          | 4          | Déplacement et survie aquatique                     |\n| **<span class=\"wiki-unresolved\">Navigation</span>**  | 2                 | 20          | 3          | Connaissance des vents, étoiles et routes maritimes |\n")}

	</section>
{/snippet}

{#snippet apprentissagesLibres()}
	<section>
		<h3 id="apprentissages-libres">{@html applyBase("Apprentissages libres")}</h3>
	{@html renderMarkdown("\n| Compétence        | Coût (po / leçon) | XP / niveau | Niveau max | Description                                    |\n| ----------------- | ----------------- | ----------- | ---------- | ---------------------------------------------- |\n| **Larcin**        | 3                 | 10          | 4          | Vol, crochetage et discrétion                  |\n| **Lire / Écrire** | 1                 | 50          | 1          | Alphabétisation et lecture de langues communes |\n")}

	</section>
{/snippet}

{#snippet apprendre()}
	<section>
		<h2 id="apprendre">{@html applyBase("Apprendre")}</h2>
	{@html renderMarkdown("\nLe joueur ne peut prendre que **3 leçons par jour** (8h/ leçon).\n\nPour chaque nuit que le joueur passe à étudier plutôt que dormir, il perd 10 HP.\n\nPendant ses leçons, **il ne peut effectuer aucune autre activité** (pas de déplacement, d’enquête, de fabrication, ..).\n")}
	{@render difficultDapprentissage()}
	{@render gainDexprience()}
	</section>
{/snippet}

{#snippet difficultDapprentissage()}
	<section>
		<h3 id="difficult-dapprentissage">{@html applyBase("Difficulté d’apprentissage")}</h3>
	{@html renderMarkdown("\n>Jet : **1d20 + Mental + Concentration**\n>*Le résultat doit être strictement supérieur aux valeurs du tableau ci-dessous.*\n\n| Niveau | Avec tuteur | Sans tuteur |\n| ------ | :---------: | :---------: |\n| 1      |     12      |      -      |\n| 2      |     16      |     20      |\n| 3      |     20      |     24      |\n| 4      |     24      |     28      |\n| 5      |     28      |     32      |\n| 6      |     32      |      -      |\n\n>**Exemple** : Quelqu'un qui veut passer du niveau 0 à 1 avec un tuteur doit faire plus que 12.\n")}

	</section>
{/snippet}

{#snippet gainDexprience()}
	<section>
		<h3 id="gain-dexprience">{@html applyBase("Gain d’expérience")}</h3>
	{@html renderMarkdown("\n| Jet              | Avec tuteur | Sans tuteur |\n| :--------------- | :---------: | :---------: |\n| Réussite         |   +1 exp    |   +1 exp    |\n| Réussie critique |   +2 exp    |      -      |\n| Echec critique   |      -      |   -1 exp    |\n\n- **Étude d'une spécialisation** : +1 exp\n\n> **L'apprentissage sans tuteur nécessite des prérequis** afin de gagner de l'expérience.\n> **Exemple** :\n> \t- un cuisinier doit consommer de vrais ingrédients de cuisine,\n> \t- un alchimiste de niveau 4 doit au moins faire des potions rares pour pouvoir gagner de l'expérience.\n")}

	</section>
{/snippet}

{#snippet tutorer()}
	<section>
		<h2 id="tutorer">{@html applyBase("Tutorer")}</h2>
	{@html renderMarkdown("\nLorsqu’un joueur atteint le **niveau maximum/4** dans une compétence, il peut **enseigner** cette discipline à d’autres joueurs ou à des PNJ, afin de **partager son savoir** ou **gagner de l’argent**.\n\n- Le tuteur ne peut rien faire d’autre pendant les leçons (max 2 leçons/ jour).\n\n- Pour chaque leçon, il ne peut avoir que 1d4 élèves (4 valant 0 élève) de niveau 1d4 (4 valant 0).\n\n- Il doit réussir un **1d20 + Mental + Concentration** par leçon pour transmettre efficacement ses connaissances.\n\n- Une réussite critique permet d’enseigner **deux fois plus vite** (double les points gagnés par l'élève).\n\n- Un échec critique fait **échouer la leçon** (aucun point gagné).")}

	</section>
{/snippet}
