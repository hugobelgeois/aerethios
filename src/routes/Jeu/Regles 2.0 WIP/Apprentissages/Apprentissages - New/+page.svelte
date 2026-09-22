<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "gnral",
          "text": "Général",
          "level": 2
      },
      {
          "id": "mtiers",
          "text": "Métiers",
          "level": 2
      },
      {
          "id": "artisanat---new",
          "text": "Artisanat - New",
          "level": 3
      },
      {
          "id": "alchimie---new",
          "text": "Alchimie - New",
          "level": 3
      },
      {
          "id": "rudition",
          "text": "Érudition",
          "level": 3
      },
      {
          "id": "fabrication",
          "text": "Fabrication",
          "level": 2
      },
      {
          "id": "recette",
          "text": "Recette",
          "level": 3
      },
      {
          "id": "mcanique",
          "text": "Mécanique",
          "level": 3
      },
      {
          "id": "ressources",
          "text": "Ressources",
          "level": 3
      },
      {
          "id": "ustensiles",
          "text": "Ustensiles",
          "level": 3
      },
      {
          "id": "lieux",
          "text": "Lieux",
          "level": 3
      },
      {
          "id": "rgles",
          "text": "Règles",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Apprentissages - New</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Apprentissages - New</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render gnral()}
		{@render mtiers()}
		{@render fabrication()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("---\r\ntags:\r\n  - Règles\r\n---\r")}
{/snippet}

{#snippet gnral()}
	<section>
		<h2 id="gnral">{@html applyBase("Général")}</h2>
	{@html renderMarkdown("> Chaque leçon prend 1 jour, et chaque jour coûte 20pa.\r\n\r\n1d20 par leçon pour apprendre :\r\n   - 1 = La leçon n'a servie à rien\r\n   - 20 = La leçon donne 2 points d'expérience\r\n\r\n| Compétence        | Leçons Requises |\r\n| ----------------- | --------------- |\r\n| **Équitation**    | 30-60           |\r\n| **Lire / Écrire** | 100-500         |\r\n| **Natation**      | 30-60           |\r\n| **Navigation**    | 50-250          |\r\n\r")}

	</section>
{/snippet}

{#snippet mtiers()}
	<section>
		<h2 id="mtiers">{@html applyBase("Métiers")}</h2>
	{@html renderMarkdown("\r\nLe joueur peut choisir 1 catégorie de métier avec laquelle il est à l'aise lors de la création de son personnage.\r\nDans cette catégorie, il peut choisir 1 métier qu'il a déjà pratiqué et avec lequel il a des affinités.\r\nIl pourra pratiquer les autres métiers de sa catégorie, mais la difficulté augmentera de 50%.\r\n\tLes ressources d'un métier sont les mêmes pour les autres métiers d'une même catégorie.\r\n\r\nCertains métiers font partie de 2 catégories et nécessitent alors 2 personnage pour pouvoir travailler dessus (pas forcément en même temps).\r\n\r")}
	{@render artisanat__New()}
	{@render alchimie__New()}
	{@render rudition()}
	</section>
{/snippet}

{#snippet artisanat__New()}
	<section>
		<h3 id="artisanat---new">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" data-wiki-fragment=\"\">Artisanat - New</a>")}</h3>
	{@html renderMarkdown("\r\n| Compétence     | Description                                                            |\r\n| -------------- | ---------------------------------------------------------------------- |\r\n| **Artificier** | Fabrication d'armes à feu, d'automations, de mécanismes et d'explosifs |\r\n| **Bijoutier**  | Fabrication de bijoux ou catalyseurs de magie                          |\r\n| **Enchanteur** | Création et application de capacités uniques                           |\r\n| **Forgeron**   | Fabrication d'armes (sauf armes à feu) et d’armures                    |\r\n\r")}

	</section>
{/snippet}

{#snippet alchimie__New()}
	<section>
		<h3 id="alchimie---new">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" data-wiki-fragment=\"\">Alchimie - New</a>")}</h3>
	{@html renderMarkdown("\r\n| Compétence      | Description                                                          |\r\n| --------------- | -------------------------------------------------------------------- |\r\n| **Bijoutier**   | Fabrication de bijoux ou catalyseurs de magie                        |\r\n| **Cuisinier**   | Préparation de repas conférant des bonus temporaires                 |\r\n| **Invocateur**  | Animation ou transmutation d’entités à partir d’ingrédients magiques |\r\n| **Potionniste** | Création de potions, huiles et remèdes                               |\r\n\r")}

	</section>
{/snippet}

{#snippet rudition()}
	<section>
		<h3 id="rudition">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" data-wiki-fragment=\"\">Érudition</a>")}</h3>
	{@html renderMarkdown("\r\n| Compétence     | Description                                                                               |\r\n| -------------- | ----------------------------------------------------------------------------------------- |\r\n| **Enchanteur** | Création et application de capacités uniques                                              |\r\n| **Invocateur** | Animation ou transmutation d’entités à partir d’ingrédients magiques                      |\r\n| **Joaillier**  | Application de gemmes sur les armes                                                       |\r\n| **Runniste**   | Création de runes et de glyphes applicable sur des objets et entités pour les magicaliser |\r\n\r")}

	</section>
{/snippet}

{#snippet fabrication()}
	<section>
		<h2 id="fabrication">{@html applyBase("Fabrication")}</h2>
	{@html renderMarkdown("> `1d20 + Niveau du Métier + Aide(Niveau de métier du personnage qui aide / 2)`\r\n\r")}
	{@render recette()}
	{@render mcanique()}
	{@render ressources()}
	{@render ustensiles()}
	{@render lieux()}
	{@render rgles()}
	</section>
{/snippet}

{#snippet recette()}
	<section>
		<h3 id="recette">{@html applyBase("Recette")}</h3>
	{@html renderMarkdown("> Les recettes permettent de ne pas jeter les dés.\r\n\r\nAvant de pouvoir fabriquer quelque chose, le joueur doit connaître sa recette.\r\nIl peut soit acheter des recettes pour être certain du résultat, soit proposer une recette au Maître du Jeu, et celui-ci déterminera si elle fonctionnera ou donnera tout autre chose.\r\n\r\nUne recette contient :\r\n- les ingrédients,\r\n- le résultat espéré,\r\n- les procédés utilisés pour la fabrication.\r\n\r\nUne fois la recette validée, le joueur lance les dés pour la fabriquer.\r\nUne fois fabriquée, le joueur note sur sa recette toutes les ressources utilisées, et le temps total que cela lui a pris.\r\n\r\nS'il refabrique cet objet, il pourra alors soit :\r\n- prendre le même nombre de ressources et de temps pour le créer sans lancer de dés,\r\n- relancer les dés et espérer prendre moins de temps et/ou de ressources pour mettre à jour sa recette.\r\n\r")}

	</section>
{/snippet}

{#snippet mcanique()}
	<section>
		<h3 id="mcanique">{@html applyBase("Mécanique")}</h3>
	{@html renderMarkdown("> Jeter les dés pour valider un recette, ou l'améliorer.\r\n\r\nLorsqu'un joueur consacre une période de travail à la fabrication, s'il possède des ustensiles, il peut prendre du temps pour fabriquer des choses :\r\n`1d20 + Niveau du Métier`\r\n\r\nChaque fois qu'un joueur travail, il lance les dés et augmente sa progression (Crafting Progress = CP).\r\n\tLe joueur peut se faire aider par une personne (pas plus) avec le même métier afin de gagner `(Niveau de métier du joueur qui aide / 2)` à son jet.\r\nLorsqu'il commence à travailler, les ressources sont consommées.\r\nUne fois que la CP a atteint la Difficulté de Fabrication, l'objet est créé.\r\n\r\nSi le jet de dé est inférieur au Taux d'Echec de l'ingrédient le plus rare, cela compte comme un échec.\r\nIl faut alors rajouter un ingrédient de 2 qualité inférieur à l'ingrédient le plus rare pour rattraper la recette et servir de catalyseur, ce qui augmente de nouveau la difficulté de fabrication.\r\n\r\nPour savoir la Difficulté de Fabrication d'un objet, il faut additionner la difficulté de chaque ingrédient utilisé.\r\n\r\n")}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Apprentissages/Misc/Rappel"} fragment={"Fabrication"} />
	{@html renderMarkdown("\r\n\r\nL'expérience requise pour monter le niveau d'un Métier équivaut à son **niveau+1 \\* 10**.\r\n```Exemple\r\nForgeron niveau 3 nécessite 30xp pour passer niveau 4.\r\n```\r\n\r")}

	</section>
{/snippet}

{#snippet ressources()}
	<section>
		<h3 id="ressources">{@html applyBase("Ressources")}</h3>
	{@html renderMarkdown("\r\nLes ressources s'achètent, se récoltent dans la nature ou se récupèrent sur des créatures.\r\nOn considère qu'une unité représente un ensemble de ressources similaires.\r\n\tExemple : Ressource de Troll (Peu Commun) -> Cela peut être du sang, des yeux, salive, os, ... selon les besoins du joueur.\r\n\r\nChaque jour de voyage, les joueurs peuvent récolter des matériaux pour leur catégorie de métier en lançant `1d100`.\r\n\tIls doivent préciser le genre de ressources qu'ils veulent récupérer (légumes, fruits, racines, insectes, minerais, ...).\r\n\r\n")}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Apprentissages/Misc/Rappel"} fragment={"Récolte"} />
	{@html renderMarkdown("\r\n\r\nPour ce qui est des créatures, elles possèdent chacune une liste qui représente les chances d'obtenir chaque rareté.\r\n\r")}

	</section>
{/snippet}

{#snippet ustensiles()}
	<section>
		<h3 id="ustensiles">{@html applyBase("Ustensiles")}</h3>
	{@html renderMarkdown("> Selon la catégorie de métier, le poids et le prix des ustensiles varient.\r\n\r\n|           | Artisanat      | Alchimie      | Erudition     |\r\n| --------- | -------------- | ------------- | ------------- |\r\n| **Poids** | 10 kg<br>Lourd | 5 kg<br>Lourd | 1 kg<br>Léger |\r\n| **Prix**  | 50 pa          | 1 po          | 5 po          |\r\n\r\nLe joueur peut faire construire un **lieu conçu pour** pour son métier en multipliant le prix des ustensiles par 100.\r\n\r")}

	</section>
{/snippet}

{#snippet lieux()}
	<section>
		<h3 id="lieux">{@html applyBase("Lieux")}</h3>
	{@html renderMarkdown("> Selon le lieu où la fabrication se fait, le résultat est modifié, et la rareté maximale des ingrédients pouvant être utilisés change.\r\n> La rareté maximale des ingrédients utilisables est Peu Commun (3) de base.\r\n\r\n")}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Apprentissages/Misc/Rappel"} fragment={"Lieu"} />

	</section>
{/snippet}

{#snippet rgles()}
	<section>
		<h3 id="rgles">{@html applyBase("Règles")}</h3>
	{@html renderMarkdown("> Selon la catégorie de métier, les règles varient.\r\n\r\n|                                                               | Artisanat                  | Alchimie                                                                             | Erudition                                                                             |\r\n| ------------------------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |\r\n| **Durée d'1 lancé de dé**                                     | 4h                         | 2h                                                                                   | 1h                                                                                    |\r\n| **Peut être interrompu**                                      | Oui                        | Oui                                                                                  | Non                                                                                   |\r\n| **Amélioration post création**                                | Oui                        | Non                                                                                  | Non                                                                                   |\r\n| **Déconstruction possible**<br>*50% du temps de construction* | 50% de matériaux récupérés | Non                                                                                  | Non                                                                                   |\r\n| **Consomme des Crystaux**                                     | Non                        | Non                                                                                  | Oui<br>1 par heure de travail<br>Si plus de crystaux -> Echec                         |\r\n| **Effet d'échec**                                             | +1 ingrédient inférieur    | +1 ingrédient inférieur<br>Possibilité d'effet négatif ajouté à l'objet (`1d20 < 5`) | Perte de l'objet de base<br>Possibilité d'effet négatif ajouté au joueur (`1d20 < 5`) |")}

	</section>
{/snippet}
