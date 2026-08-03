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
          "id": "connaissances",
          "text": "Connaissances",
          "level": 2
      },
      {
          "id": "notes",
          "text": "Notes",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Hazdaim</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Hazdaim</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render attributs()}
		{@render comptences()}
		{@render equipement()}
		{@render apprentissages()}
		{@render inventaire()}
		{@render connaissances()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("---\r\nHP: 50 / 50\r\nMP: 9 / 9\r\nAC: 14\r\nDR: 12\r\nToken: 2/4\r\n---\r\n<img src=\"%%BASE%%/hazdaim.png\" alt=\"hazdaim.png\" width=\"300\" class=\"wiki-image\" />\r\n\r\n**Niveau** : 10\r\n\r\n|       Arvens        | Runild | Scienctes | Templis |\r\n| :-----------------: | :----: | :-------: | :-----: |\r\n| <span class=\"wiki-unresolved\">Or</span> 2 |   -    |     -     |    -    |\r\n\r")}
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
	{@html renderMarkdown(">55 points à mettre au niveau 1 (min 7, max 14)\r\n>+1 points par niveau sauf les niveaux 1, 5, 10, 15 et 20\r\n\r\n| Force | Dextérité | Mental | Perception | Charisme |\r\n| :---: | :-------: | :----: | :--------: | :------: |\r\n|  10   |    15     |   10   |     12     |    15    |\r\n|   0   |    +2     |   0    |     +1     |    +2    |\r\n\r")}

	</section>
{/snippet}

{#snippet magie()}
	<section>
		<h3 id="magie">{@html applyBase("Magie")}</h3>
	{@html renderMarkdown("> **Maîtrise** : 1\r\n> **Crystaux** : 9\r\n\r\n| Air | Eau | Roche | Feu | Foudre | Lumière | Ténèbres |\r\n| :-: | :-: | :---: | :-: | :----: | :-----: | :------: |\r\n|  1  |  -  |   -   |  -  |   8    |    6    |    1     |\r\n| 1d4 |  -  |   -   |  -  |  1d6   |   1d6   |   1d4    |\r\n\r")}

	</section>
{/snippet}

{#snippet comptences()}
	<section>
		<h2 id="comptences">{@html applyBase("Compétences")}</h2>
	{@html renderMarkdown("\r\n| **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Force\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Force\" data-wiki-fragment=\"\">Force</a>** |            **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Dexterite\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Dexterite\" data-wiki-fragment=\"\">Dextérité</a>**             | **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Mental\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Mental\" data-wiki-fragment=\"\">Mental</a>** |      **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Perception\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Perception\" data-wiki-fragment=\"\">Perception</a>**      |        **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Charisme\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Charisme\" data-wiki-fragment=\"\">Charisme</a>**        |\r\n| :-----------: | :--------------------------------------: | :------------: | :--------------------------: | :----------------------------: |\r\n|  Athlétisme   |                Acrobatie                 |                |           Chasseur           | Diplomate<br>*- Encouragement* |\r\n|               |                 Assassin                 |                | Naturaliste<br>*- Créatures* |             Meneur             |\r\n|               | Bretteur<br>*- Ambidextre*<br>*- Parade* |                |                              | Tromperie<br>*- Manipulation*  |\r\n|               |         **Sixième sens**<br>+ -          |                |                              |      **Epicentre**<br>+ -      |\r\n\r")}

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
	{@html renderMarkdown("\r\n| Court | 1 Main | 2 Mains | Haste | Distance |\r\n| :---: | :----: | :-----: | :---: | :------: |\r\n|   2   |   8    |    0    |   0   | 2 (1xp)  |\r\n|  +1   |   +4   |    0    |   0   |    +1    |\r\n\r\n| Arme                                                      | Dégâts                                                                   | Poids (kg) |         Propriétés          |\r\n| --------------------------------------------------------- | ------------------------------------------------------------------------ | :--------: | :-------------------------: |\r\n| Lame Revers<br>Orichalque<br>1 Main<br>(léger)            | (3d8+4Dex(Ranger))<br>+12 +3Nirina<br>VS Démons<br>Ténèbres 3<br>= 22-43 |    2.5     |              -              |\r\n| Lame Revers<br>Palladium<br>1 Main<br>(léger)             | (3d8+4Dex(Ranger))<br>+10 +6Nirina<br>VS Anges<br>Ténèbres 3<br>= 23-44  |     2      |              -              |\r\n| Arbalète Sharah<br>Adamantite (Or)<br>Distance<br>(léger) | (3d8+4Dex(Ranger))<br>+10<br>Crit 3<br>VS Mythiques<br>Air<br>= 15-36    |     2      | <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#lger\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"L%C3%A9ger%5C\">Léger</a> |\r\n| Lame Revers<br>Titane<br>1 Main                           | 2d8<br>+14<br>Crit 2<br>VS Invocations<br>= 16-30                        |     3      |              -              |\r\n| Lame Revers<br>Titane<br>1 Main                           | 2d8<br>+14<br>Crit 2<br>VS Invocations<br>= 16-30                        |     3      |              -              |\r\n\r")}

	</section>
{/snippet}

{#snippet armures()}
	<section>
		<h3 id="armures">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Combat/Armures\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Combat/Armures\" data-wiki-fragment=\"\">Armures</a>")}</h3>
	{@html renderMarkdown("\r\n| Armure        |          AC           |               DR               |   Enchantement   | Poids (kg) | Dégâts |                     Propriétés                      |\r\n| ------------- | :-------------------: | :----------------------------: | :--------------: | :--------: | :----: | :-------------------------------------------------: |\r\n| Armure Cuir   | 12<br>+2(Dex)<br>= 14 | 9(peu commun)<br>+3(Impé) = 12 | Roche 2<br>Feu 2 |     12     |   -    |       Résiste à <a href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#poison\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Poison%5C\">Poison</a>       |\r\n| Cape Fourrure |           -           |               -                |    Ténèbres 5    |     1      |   -    | Les sorts croitistes à 1 crystal ne le consomme pas |\r\n\r")}

	</section>
{/snippet}

{#snippet apprentissages()}
	<section>
		<h2 id="apprentissages">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Apprentissages\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Apprentissages\" data-wiki-fragment=\"\">Apprentissages</a>")}</h2>
	{@html renderMarkdown("\r\n| Apprentissage               | Niveau | Expérience |\r\n| --------------------------- | :----: | :--------: |\r\n| Chasseur                    |   1    |     6      |\r\n| Enchanteur (métal – Nirina) |   1    |     4      |\r\n| Larcin                      |   1    |     3      |\r\n| Lire / Écrire               |   1    |            |\r\n| Navigation                  |   1    |            |\r\n\r")}

	</section>
{/snippet}

{#snippet inventaire()}
	<section>
		<h2 id="inventaire">{@html applyBase("Inventaire")}</h2>
	{@html renderMarkdown("\r\n**Poids maximum** : 35kg\r\n- *Force > 10 : 40 + (Force Modificateur x 10)*\r\n- *Force < 10 : 40 + (Force Modificateur x 2)*\r\n\r\n| Qty | Nom     | Poids (kg) |\r\n| --- | ------- | ---------: |\r\n| 5   | Armes   |       12.5 |\r\n| 2   | Armures |         13 |\r\n\r")}

	</section>
{/snippet}

{#snippet connaissances()}
	<section>
		<h2 id="connaissances">{@html applyBase("Connaissances")}</h2>
	{@html renderMarkdown("\r\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Arek\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Arek\" data-wiki-fragment=\"\">Arek</a>\r\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Dara\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Dara\" data-wiki-fragment=\"\">Dara</a>\r\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Haelrak\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Haelrak\" data-wiki-fragment=\"\">Haelrak</a>\r\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Halfdan\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Halfdan\" data-wiki-fragment=\"\">Halfdan</a>\r\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Leoric\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Leoric\" data-wiki-fragment=\"\">Léoric</a>\r\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Zveindel\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Zveindel\" data-wiki-fragment=\"\">Zveindel</a>\r\n\r\n- <span class=\"wiki-unresolved\">Dieu Dormant</span>\r\n- <a href=\"%%BASE%%/0_Private/Billy\" class=\"wiki-link internal-link\" data-wiki-href=\"/0_Private/Billy\" data-wiki-fragment=\"\">Billy</a>\r\n- <span class=\"wiki-unresolved\">Perseus</span>\r\n- <span class=\"wiki-unresolved\">Bryumnes</span>\r\n- <span class=\"wiki-unresolved\">Einar</span>\r\n- <span class=\"wiki-unresolved\">Chlorys</span>\r\n- <span class=\"wiki-unresolved\">Zaledra</span>\r\n\r")}
	{@render notes()}
	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h3 id="notes">{@html applyBase("Notes")}</h3>
	{@html renderMarkdown("> Stock ailleurs\r\n\r\n|                                     |                              |     |     |                                   |\r\n| ----------------------------------- | ---------------------------- | :-: | :-: | --------------------------------- |\r\n| Lame Revers Gammoth<br>Os<br>1 Main | 2d8<br>+6<br>Glace<br>= 8-22 | 1.5 |  -  | Stockée dans sa chambre du manoir |\r\n| Lame Revers Gammoth<br>Os<br>1 Main | 2d8 + 6<br>Glace<br>= 8-22   | 1.5 |  -  | Stockée dans sa chambre du manoir |")}

	</section>
{/snippet}
