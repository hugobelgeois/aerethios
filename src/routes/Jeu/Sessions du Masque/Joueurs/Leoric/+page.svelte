<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "attributs",
          "text": "Attributs",
          "level": 2
      },
      {
          "id": "combat",
          "text": "Combat",
          "level": 3
      },
      {
          "id": "magie",
          "text": "Magie",
          "level": 3
      },
      {
          "id": "comptences",
          "text": "Compétences",
          "level": 2
      },
      {
          "id": "equipement",
          "text": "Equipement",
          "level": 2
      },
      {
          "id": "armes",
          "text": "Armes",
          "level": 3
      },
      {
          "id": "armures",
          "text": "Armures",
          "level": 3
      },
      {
          "id": "apprentissages",
          "text": "Apprentissages",
          "level": 2
      },
      {
          "id": "inventaire",
          "text": "Inventaire",
          "level": 2
      },
      {
          "id": "invocations",
          "text": "Invocations",
          "level": 2
      },
      {
          "id": "connaissances",
          "text": "Connaissances",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Léoric</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Léoric</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render attributs()}
		{@render comptences()}
		{@render equipement()}
		{@render apprentissages()}
		{@render inventaire()}
		{@render invocations()}
		{@render connaissances()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown(">Si vous voulez une image, envoyez-la moi et je la transforme pour avoir un style graphique similaire au reste\n\n**Niveau** : 10\n\n|       Arvens        | Runild |        Scienctes         | Templis |\n| :-----------------: | :----: | :----------------------: | :-----: |\n| <span class=\"wiki-unresolved\">Or</span> 1 |   -    | <span class=\"wiki-unresolved\">Mage</span> |    -    |\n")}
{/snippet}

{#snippet attributs()}
	<section>
		<h2 id="attributs">{@html applyBase("Attributs")}</h2>

	{@render combat()}
	{@render magie()}
	</section>
{/snippet}

{#snippet combat()}
	<section>
		<h3 id="combat">{@html applyBase("Combat")}</h3>
	{@html renderMarkdown(">55 points à mettre au niveau 1 (min 7, max 14)\n>+1 points par niveau sauf les niveaux 1, 5, 10, 15 et 20\n\n| Force | Dextérité | Mental | Perception | Charisme |\n| :---: | :-------: | :----: | :--------: | :------: |\n|  11   |    11     |   18   |     11     |    11    |\n|   0   |     0     |   0    |     0      |    0     |\n")}

	</section>
{/snippet}

{#snippet magie()}
	<section>
		<h3 id="magie">{@html applyBase("Magie")}</h3>
	{@html renderMarkdown("> **Maîtrise** : 2\n> **Crystaux** : 9\n\n| Air | Eau | Roche | Feu | Foudre | Lumière | Ténèbres |\n| :-: | :-: | :---: | :-: | :----: | :-----: | :------: |\n|  -  |  -  |   5   | 10  |   5    |    -    |    9     |\n|  -  |  -  |  1d6  | 1d8 |  1d6   |    -    |   1d8    |\n")}

	</section>
{/snippet}

{#snippet comptences()}
	<section>
		<h2 id="comptences">{@html applyBase("Compétences")}</h2>
	{@html renderMarkdown("\n| **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Force\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Force\" data-wiki-fragment=\"\">Force</a>** | **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Dexterite\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Dexterite\" data-wiki-fragment=\"\">Dextérité</a>** |                **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Mental\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Mental\" data-wiki-fragment=\"\">Mental</a>**                 | **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Perception\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Perception\" data-wiki-fragment=\"\">Perception</a>** | **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Charisme\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Charisme\" data-wiki-fragment=\"\">Charisme</a>** |\n| :-----------: | :---------------: | :-------------------------------------------: | :----------------: | :--------------: |\n|               |                   |         Arcaniste<br>- Amplification          |                    |                  |\n|               |                   | Intelligence<br>- Efficacité<br>- Redirection |                    |                  |\n|               |                   |            Volonté<br>- Résistance            |                    |                  |\n")}

	</section>
{/snippet}

{#snippet equipement()}
	<section>
		<h2 id="equipement">{@html applyBase("Equipement")}</h2>

	{@render armes()}
	{@render armures()}
	</section>
{/snippet}

{#snippet armes()}
	<section>
		<h3 id="armes">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Combat/Armes\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Combat/Armes\" data-wiki-fragment=\"\">Armes</a>")}</h3>
	{@html renderMarkdown("\n| Court | 1 Main | 2 Mains | Haste | Distance |\n| :---: | :----: | :-----: | :---: | :------: |\n|   7   |   0    |    0    |   0   |    0     |\n|  +3   |   0    |    0    |   0   |    0     |\n\n| Arme                                                   | Dégâts                                                                  | Poids (kg) |         Propriétés          |\n| ------------------------------------------------------ | ----------------------------------------------------------------------- | :--------: | :-------------------------: |\n| 2 Poings<br>Titane<br>Court                            | 2d12<br>+7<br>VS Invocations<br>= 9-31                                  |   2x1.5    | <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#lger\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"L%C3%A9ger%5C\">Léger</a> |\n| 2 Poings Gammoth<br>Os<br>Court                        | 2d12<br>+6<br>Glace<br>= 8-30                                           |   2x0.75   | <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#lger\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"L%C3%A9ger%5C\">Léger</a> |\n| 2 Poings Sharah<br>Adamantite (Or)<br>Court<br>(lourd) | (1d12+0Force(Monk))<br>+20 <br>Crit 1<br>VS Mythiques<br>Air<br>= 21-32 |    2x4     | <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#lger\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"L%C3%A9ger%5C\">Léger</a> |\n")}

	</section>
{/snippet}

{#snippet armures()}
	<section>
		<h3 id="armures">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Combat/Armures\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Combat/Armures\" data-wiki-fragment=\"\">Armures</a>")}</h3>
	{@html renderMarkdown("\n| Armure                |          AC           |           DR           |      Enchantement      | Poids (kg) | Dégâts |                     Propriétés                     |\n| --------------------- | :-------------------: | :--------------------: | :--------------------: | :--------: | :----: | :------------------------------------------------: |\n| Armure Mailles<br>Fer | 13<br>+0(Dex)<br>= 13 | 18<br>+5(Impé)<br>= 23 |           -            |     12     |   -    |                         -                          |\n| Cape en fourrure      |           -           |           -            | Ténèbres 2<br>Foudre 1 |     1      |   -    | Les sorts élétistes à 1 crystal ne le consomme pas |\n")}

	</section>
{/snippet}

{#snippet apprentissages()}
	<section>
		<h2 id="apprentissages">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Apprentissages\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Apprentissages\" data-wiki-fragment=\"\">Apprentissages</a>")}</h2>
	{@html renderMarkdown("\n| Apprentissage               | Niveau | Expérience |\n| --------------------------- | :----: | :--------: |\n| Invocateur                  |   2    |            |\n| Larcin                      |   1    |            |\n| Potionniste                 |   1    |            |\n")}

	</section>
{/snippet}

{#snippet inventaire()}
	<section>
		<h2 id="inventaire">{@html applyBase("Inventaire")}</h2>
	{@html renderMarkdown("\n**Poids maximum** : 40kg\n- *Force > 10 : 40 + (Force Modificateur x 10)*\n- *Force < 10 : 40 + (Force Modificateur x 2)*\n\n| Qty | Nom     | Poids (kg) |\n| --- | ------- | ---------: |\n| 3   | Armes   |       12.5 |\n| 2   | Armures |         13 |\n")}

	</section>
{/snippet}

{#snippet invocations()}
	<section>
		<h2 id="invocations">{@html applyBase("Invocations")}</h2>
	{@html renderMarkdown("\n| Nom               | Coût | AC  | DR  | HP  |  Léger   |  Lourd   |        Magie        |\n| ----------------- | :--: | :-: | :-: | :-: | :------: | :------: | :-----------------: |\n| ~~Bigard~~            |  ~~-~~   | ~~20~~  |  ~~2~~  | ~~50~~  | ~~2d8 + 12~~ |    ~~-~~     |      ~~20(1d10)~~       |\n| Elémentaire lvl 1 |  25  | 12  |  5  | 30  | 2d6 + 8  | 3d6 + 12 |  1d4 x 8<br>- 5 HP  |\n| Elémentaire lvl 2 |  50  |  8  | 15  | 60  | 3d6 + 12 | 4d6 + 18 | 1d4 x 10<br>- 10 HP |\n| Elémentaire lvl 3 | 100  |  4  | 30  | 120 | 4d6 + 16 | 5d8 + 25 | 2d4 x 10<br>- 20 HP |\nL'élémentaire n'a pas besoin de jet pour être invoqué dans un lieu safe.\nOn part du principe que les dés de magie font le maximum à chaque fois, il faut consommer le nombre de crystaux pour atteindre la valeur souhaité.\nA chaque réveil, après la régénération des crystaux, l'élémentaire consomme 1 crystal pour rester présent.\n1 seul élémentaire invocable en même temps.\n")}

	</section>
{/snippet}

{#snippet connaissances()}
	<section>
		<h2 id="connaissances">{@html applyBase("Connaissances")}</h2>
	{@html renderMarkdown("\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Arek\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Arek\" data-wiki-fragment=\"\">Arek</a>\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Dara\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Dara\" data-wiki-fragment=\"\">Dara</a>\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Haelrak\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Haelrak\" data-wiki-fragment=\"\">Haelrak</a>\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Halfdan\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Halfdan\" data-wiki-fragment=\"\">Halfdan</a>\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Hazdaim\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Hazdaim\" data-wiki-fragment=\"\">Hazdaim</a>\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Zveindel\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Zveindel\" data-wiki-fragment=\"\">Zveindel</a>\n\n- <span class=\"wiki-unresolved\">Dieu Dormant</span>\n- <a href=\"%%BASE%%/0_Private/Billy\" class=\"wiki-link internal-link\" data-wiki-href=\"/0_Private/Billy\" data-wiki-fragment=\"\">Billy</a>\n- <span class=\"wiki-unresolved\">Perseus</span>\n- <span class=\"wiki-unresolved\">Bryumnes</span>\n- <span class=\"wiki-unresolved\">Einar</span>\n- <span class=\"wiki-unresolved\">Chlorys</span>\n- <span class=\"wiki-unresolved\">Zaledra</span>")}

	</section>
{/snippet}
