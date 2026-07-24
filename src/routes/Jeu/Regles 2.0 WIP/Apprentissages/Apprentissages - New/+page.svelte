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
		{@render gnral()}
		{@render mtiers()}
		{@render fabrication()}
  </div>
</article>

<LinkPreview />

{#snippet gnral()}
	<section>
		<h2 id="gnral">{@html applyBase("Général")}</h2>
	{@html renderMarkdown("> Chaque leçon prend 1 jour, et chaque jour coûte 20pa.\n\n1d20 par leçon pour apprendre :\n   - 1 = La leçon n'a servie à rien\n   - 20 = La leçon compte double\n\n| Compétence        | Leçons Requises |\n| ----------------- | --------------- |\n| **Équitation**    | 30-60           |\n| **Lire / Écrire** | 100-500         |\n| **Natation**      | 30-60           |\n| **Navigation**    | 50-250          |\n")}

	</section>
{/snippet}

{#snippet mtiers()}
	<section>
		<h2 id="mtiers">{@html applyBase("Métiers")}</h2>
	{@html renderMarkdown("\nLe joueur peut choisir 1 catégorie de métier avec laquelle il est à l'aise lors de la création de son personnage.\nDans cette catégorie, il peut choisir 1 métier qu'il a déjà pratiqué et avec lequel il a des affinités.\nIl pourra pratiquer les autres métiers de sa catégorie, mais la difficulté augmentera de 50%.\n\tLes ressources d'un métier sont les mêmes pour les autres métiers d'une même catégorie.\n\nCertains métiers font partie de 2 catégories et nécessitent alors 2 personnage pour pouvoir travailler dessus (pas forcément en même temps).\n")}
	{@render artisanat__New()}
	{@render alchimie__New()}
	{@render rudition()}
	</section>
{/snippet}

{#snippet artisanat__New()}
	<section>
		<h3 id="artisanat---new">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" data-wiki-fragment=\"\">Artisanat - New</a>")}</h3>
	{@html renderMarkdown("\n| Compétence     | Description                                             |\n| -------------- | ------------------------------------------------------- |\n| **Artificier** | Fabrication d'automations, de mécanismes et d'explosifs |\n| **Bijoutier**  | Fabrication de bijoux ou catalyseurs de magie           |\n| **Enchanteur** | Création et application de capacités uniques            |\n| **Forgeron**   | Fabrication d'armes et d’armures                        |\n")}

	</section>
{/snippet}

{#snippet alchimie__New()}
	<section>
		<h3 id="alchimie---new">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" data-wiki-fragment=\"\">Alchimie - New</a>")}</h3>
	{@html renderMarkdown("\n| Compétence      | Description                                                          |\n| --------------- | -------------------------------------------------------------------- |\n| **Bijoutier**   | Fabrication de bijoux ou catalyseurs de magie                        |\n| **Cuisinier**   | Préparation de repas conférant des bonus temporaires                 |\n| **Invocateur**  | Animation ou transmutation d’entités à partir d’ingrédients magiques |\n| **Potionniste** | Création de potions, huiles et remèdes                               |\n")}

	</section>
{/snippet}

{#snippet rudition()}
	<section>
		<h3 id="rudition">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" data-wiki-fragment=\"\">Érudition</a>")}</h3>
	{@html renderMarkdown("\n| Compétence     | Description                                                                               |\n| -------------- | ----------------------------------------------------------------------------------------- |\n| **Enchanteur** | Création et application de capacités uniques                                              |\n| **Invocateur** | Animation ou transmutation d’entités à partir d’ingrédients magiques                      |\n| **Joaillier**  | Application de gemmes sur les armes                                                       |\n| **Runniste**   | Création de runes et de glyphes applicable sur des objets et entités pour les magicaliser |\n")}

	</section>
{/snippet}

{#snippet fabrication()}
	<section>
		<h2 id="fabrication">{@html applyBase("Fabrication")}</h2>
	{@html renderMarkdown("> 1d20 + Niveau du Métier + Aide(Niveau de métier du joueur qui aide / 2) arrondi vers la bas\n")}
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
	{@html renderMarkdown("> Les recettes permettent de ne pas jeter les dés.\n\nAvant de pouvoir fabriquer quelque chose, le joueur doit connaître sa recette.\nIl peut soit acheter des recettes pour être certain du résultat, soit proposer une recette au Maître du Jeu, et celui-ci déterminera si elle fonctionnera ou donnera tout autre chose.\n\nUne recette contient :\n- les ingrédients,\n- le résultat espéré,\n- les procédés utilisés pour la fabrication.\n\nUne fois la recette validée, le joueur lance les dés pour la fabriquer.\nUne fois fabriquée, le joueur note sur sa recette toutes les ressources utilisées, et le temps total que cela lui a pris.\n\nS'il refabrique cet objet, il pourra alors soit :\n- prendre le même nombre de ressources et de temps pour le créer sans lancer de dés,\n- relancer les dés et espérer prendre moins de temps et/ou de ressources pour mettre à jour sa recette.\n")}

	</section>
{/snippet}

{#snippet mcanique()}
	<section>
		<h3 id="mcanique">{@html applyBase("Mécanique")}</h3>
	{@html renderMarkdown("> Jeter les dés pour valider un recette, ou l'améliorer.\n\nLorsqu'un joueur consacre une période de travail à la fabrication, s'il possède des ustensiles, il peut prendre du temps pour fabriquer des choses :\n**1d20 + Niveau du Métier**\n\nChaque fois qu'un joueur travail, il lance les dés et augmente sa progression (Crafting Progress = CP).\n\tLe joueur peut se faire aider par quelqu'un avec le même métier afin de gagner **(Niveau de métier du joueur qui aide / 2) arrondi vers la bas** à son jet.\nLorsqu'il commence à travailler, les ressources sont consommées.\nUne fois que la CP a atteint la Difficulté de Fabrication, l'objet est créé.\n\nSi le jet de dé est inférieur au Taux d'Echec de l'ingrédient le plus rare, cela compte comme un échec.\nIl faut alors rajouter un ingrédient de qualité inférieur à l'ingrédient le plus rare pour rattraper la recette et servir de catalyseur, ce qui augmente de nouveau la difficulté de fabrication.\n\nPour savoir la Difficulté de Fabrication d'un objet, il faut additionner la difficulté de chaque ingrédient utilisé.\n\n")}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Apprentissages/Misc/Fabrication"} fragment={""} />
	{@html renderMarkdown("\n\nL'expérience requise pour monter le niveau d'un Métier équivaut à son niveau \\* 10.\n\tExemple : Forgeron niv3 nécessite 30xp.\n")}

	</section>
{/snippet}

{#snippet ressources()}
	<section>
		<h3 id="ressources">{@html applyBase("Ressources")}</h3>
	{@html renderMarkdown("\nLes ressources s'achètent, se récoltent dans la nature ou se récupèrent sur des créatures.\nOn considère qu'une unité pèse 0.5kg et qu'elle représente un ensemble de ressources similaires.\n\tExemple : Ressource de Troll (Peu Commun) -> Cela peut être du sang, des yeux, salive, os, ... selon les besoins du joueur.\n\nChaque jour de voyage, les joueurs peuvent récolter des matériaux pour leur catégorie de métier.\n\tIls doivent préciser le genre de ressources qu'ils récupèrent (légumes, fruits, racines, insectes, minerais, ...).\n\n")}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Apprentissages/Misc/Recolte"} fragment={""} />
	{@html renderMarkdown("\n\nPour ce qui est des créatures, elles possèdent chacune une liste qui représente les chances d'obtenir chaque rareté.\n")}

	</section>
{/snippet}

{#snippet ustensiles()}
	<section>
		<h3 id="ustensiles">{@html applyBase("Ustensiles")}</h3>
	{@html renderMarkdown("> Selon la catégorie de métier, le poids et le prix des ustensiles varient.\n> La rareté maximale des ingrédients utilisables est Peu Commun (3) de base.\n\n|           | Artisanat | Alchimie | Erudition |\n| --------- | --------- | -------- | --------- |\n| **Poids** | 10 kg     | 5 kg     | 1 kg      |\n| **Prix**  | 50 pa     | 1 po     | 5 po      |\n\nLe joueur peut faire construire une salle prévue pour son métier en multipliant le prix des ustensiles par 100.\n")}

	</section>
{/snippet}

{#snippet lieux()}
	<section>
		<h3 id="lieux">{@html applyBase("Lieux")}</h3>
	{@html renderMarkdown("> Selon le lieu où la fabrication se fait, le résultat est modifié, et la rareté maximale des ingrédients pouvant être utilisés change.\n\n")}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Apprentissages/Misc/Lieu"} fragment={""} />

	</section>
{/snippet}

{#snippet rgles()}
	<section>
		<h3 id="rgles">{@html applyBase("Règles")}</h3>
	{@html renderMarkdown("> Selon la catégorie de métier, les règles varient.\n\n|                                | Artisanat                                                                       | Alchimie                                                                       | Erudition                                                                      |\n| ------------------------------ | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |\n| **Durée d'1 lancé de dé**      | 4h                                                                              | 2h                                                                             | 1h                                                                             |\n| **Peut être interrompu**       | Oui                                                                             | Non                                                                            | Non                                                                            |\n| **Amélioration post création** | Oui                                                                             | Non                                                                            | Non                                                                            |\n| **Déconstruction possible**    | Oui (50% du temps de construction)<br>**(6+1d2) \\* 10%** de matériaux récupérés | Non                                                                            | Non                                                                            |\n| **Consomme des Crystaux**      | Non                                                                             | Non                                                                            | Oui<br>1 par heure de travail<br>Si plus de crystaux -> Echec                  |\n| **Effet d'échec**              | +1 ingrédient inférieur                                                         | +1 ingrédient inférieur<br>Possibilité d'effet négatif ajouté à l'objet (DC 5) | +1 ingrédient inférieur<br>Possibilité d'effet négatif ajouté au joueur (DC 5) |")}

	</section>
{/snippet}
