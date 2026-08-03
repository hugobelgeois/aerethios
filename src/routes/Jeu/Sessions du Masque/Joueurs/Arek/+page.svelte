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
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Arek</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arek</h1>
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
	{@html renderMarkdown("---\r\nHP: 50 / 50\r\nMP: 9 / 9\r\nAC: 5 (-3 bouclier)\r\nDR: 60 (+34 bouclier)\r\nToken: 2/4\r\n---\r\n<img src=\"%%BASE%%/arek.png\" alt=\"arek.png\" width=\"300\" class=\"wiki-image\" />\r\n\r\n**Niveau** : 12\r\n\r\n|                                      Arvens                                      | Runild | Scienctes | Templis |\r\n| :------------------------------------------------------------------------------: | :----: | :-------: | :-----: |\r\n| <span class=\"wiki-unresolved\">Or</span> 3 |   -    |     -     |    2    |\r\n\r")}
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
	{@html renderMarkdown(">55 points à mettre au niveau 1 (min 7, max 14)\r\n>+1 points par niveau sauf les niveaux 1, 5, 10, 15 et 20\r\n\r\n| Force | Dextérité | Mental | Perception | Charisme |\r\n| :---: | :-------: | :----: | :--------: | :------: |\r\n|  19   |    10     |   18   |     10     |    8     |\r\n|  +4   |     0     |   +4   |     0      |    -1    |\r\n\r")}

	</section>
{/snippet}

{#snippet magie()}
	<section>
		<h3 id="magie">{@html applyBase("Magie")}</h3>
	{@html renderMarkdown("> **Maîtrise** : 1\r\n> **Crystaux** : 9\r\n\r\n| Air | Eau | Roche | Feu | Foudre | Lumière | Ténèbres |\r\n| :-: | :-: | :---: | :-: | :----: | :-----: | :------: |\r\n|  -  |  -  |   7   |  4  |   -    |    9    |    -     |\r\n|  -  |  -  |  1d6  | 1d4 |   -    | 1d8 +5  |    -     |\r\n\r")}

	</section>
{/snippet}

{#snippet comptences()}
	<section>
		<h2 id="comptences">{@html applyBase("Compétences")}</h2>
	{@html renderMarkdown("\r\n|             **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Force\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Force\" data-wiki-fragment=\"\">Force</a>**              | **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Dexterite\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Dexterite\" data-wiki-fragment=\"\">Dextérité</a>** |                 **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Mental\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Mental\" data-wiki-fragment=\"\">Mental</a>**                 | **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Perception\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Perception\" data-wiki-fragment=\"\">Perception</a>** | **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Charisme\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Charisme\" data-wiki-fragment=\"\">Charisme</a>** |\r\n| :------------------------------------: | :---------------: | :--------------------------------------------: | :----------------: | :--------------: |\r\n| Athlétisme<br>*- Mule*<br>*- Momentum* |                   |                  Intelligence                  |                    |      Meneur      |\r\n|         Barbare<br>*- Bagarre*         |                   |   Sagesse<br>- ~~Assidue~~<br>*- Insensible*   |                    |                  |\r\n|      Paladin<br>*- Impénétrable*       |                   | Volonté<br>*- Résistance*<br>*- Imperturbable* |                    |                  |\r\n|                                        |                   |                                                |                    |                  |\r\n|           **Cafard**<br>+ -            |                   |                                                |                    |                  |\r\n\r")}

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
	{@html renderMarkdown("\r\n| Court | 1 Main | 2 Mains | Haste | Distance |\r\n| :---: | :----: | :-----: | :---: | :------: |\r\n|   7   |   8    |    0    |   0   |    0     |\r\n|  +3   |   +4   |    0    |   0   |    0     |\r\n\r\n| Arme                                         | Dégâts                                                                    | Poids (kg) |                             Propriétés                             |\r\n| -------------------------------------------- | ------------------------------------------------------------------------- | :--------: | :----------------------------------------------------------------: |\r\n| Hache<br>Orichalque<br>1 Main<br>(lourd)<br> | (1d8+8Force(Monk))<br>+36 +10Nirina<br>VS Démons<br>Ténèbres 4<br>= 41-48 |    7.5     |                             Force > 15                             |\r\n| Hache <br>Orichalque<br>1 Main<br>(lourd)    | (1d8+8Force(Monk))<br>+36 +2Nirina<br>VS Démons<br>Ténèbres 4<br>= 41-48  |    7.5     |                             Force > 15                             |\r\n| Epée<br>Palladium<br>1 Main<br>(lourd)       | (1d8+8Force(Monk))<br>+30 +3Nirina<br>VS Anges<br>Ténèbres 4<br>= 35-42   |     6      | Force > 15<br>Sang de dieu : <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#lacration\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Lac%C3%A9ration%5C\">Lacération</a> |\r\n\r")}

	</section>
{/snippet}

{#snippet armures()}
	<section>
		<h3 id="armures">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Combat/Armures\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Combat/Armures\" data-wiki-fragment=\"\">Armures</a>")}</h3>
	{@html renderMarkdown("\r\n| Armure                                     | AC  |                       DR                        |   Enchantement    | Poids (kg) | Dégâts |                                                    Propriétés                                                    |\r\n| ------------------------------------------ | :-: | :---------------------------------------------: | :---------------: | :--------: | :----: | :--------------------------------------------------------------------------------------------------------------: |\r\n| Armure<br>Paladium<br>Enchant Nirina 6 + 3 |  5  | 35<br>+16(Impénétrable)<br>+ 6+3 Nirina<br>= 60 |                   |     36     |   -    |                       Dextérité(Discrétion) impossible<br><br>Magies impossibles en combat                       |\r\n| Cape Fourrure                              |  -  |                        -                        | Feu 5<br>Foudre 1 |     2      |   -    |                                      Fusion = 1 crystal gratuit par action                                       |\r\n| Bouclier d'Estoc                           | -3  |     30 (Orichalque 75%)<br>+4Nirina<br>= 34     |     Foudre 5      |     12     | 1d4 +4 |                                          <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#charge\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Charge%5C\">Charge</a>                                           |\r\n| Armure<br>Os Gammoth                       |  8  |    20(Os rare)<br>+16(Impénétrable)<br>= 36     |      Glace 4      |     18     |   -    | Désavantage en Dextérité (Discrétion)<br><br> Désavantage en Magies en combat<br> <br> 1 invulnérabilité magique |\r\n\r")}

	</section>
{/snippet}

{#snippet apprentissages()}
	<section>
		<h2 id="apprentissages">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Apprentissages\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Apprentissages\" data-wiki-fragment=\"\">Apprentissages</a>")}</h2>
	{@html renderMarkdown("\r\n| Apprentissage            | Niveau | Expérience |\r\n| ------------------------ | :----: | :--------: |\r\n| Enchanteur (os – Ovliin) |   1    |            |\r\n| Lire / Écrire            |   1    |            |\r\n| Potionniste              |   4    |            |\r\n\r")}

	</section>
{/snippet}

{#snippet inventaire()}
	<section>
		<h2 id="inventaire">{@html applyBase("Inventaire")}</h2>
	{@html renderMarkdown("\r\n**Poids maximum** : 70+80 = 150kg\r\n- *Force > 10 : 40 + (Force Modificateur x 10)*\r\n- *Force < 10 : 40 + (Force Modificateur x 2)*\r\n\r\n| Qty | Nom     | Poids (kg) |\r\n| --- | ------- | ---------: |\r\n| 3   | Armes   |         21 |\r\n| 4   | Armures |         68 |\r\n\r")}

	</section>
{/snippet}

{#snippet connaissances()}
	<section>
		<h2 id="connaissances">{@html applyBase("Connaissances")}</h2>
	{@html renderMarkdown("\r\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Dara\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Dara\" data-wiki-fragment=\"\">Dara</a>\r\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Haelrak\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Haelrak\" data-wiki-fragment=\"\">Haelrak</a>\r\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Halfdan\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Halfdan\" data-wiki-fragment=\"\">Halfdan</a>\r\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Hazdaim\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Hazdaim\" data-wiki-fragment=\"\">Hazdaim</a>\r\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Leoric\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Leoric\" data-wiki-fragment=\"\">Léoric</a>\r\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Zveindel\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Zveindel\" data-wiki-fragment=\"\">Zveindel</a>\r\n\r\n- <span class=\"wiki-unresolved\">Dieu Dormant</span>\r\n- <a href=\"%%BASE%%/0_Private/Billy\" class=\"wiki-link internal-link\" data-wiki-href=\"/0_Private/Billy\" data-wiki-fragment=\"\">Billy</a>\r\n- <span class=\"wiki-unresolved\">Perseus</span>\r\n- <span class=\"wiki-unresolved\">Bryumnes</span>\r\n- <span class=\"wiki-unresolved\">Einar</span>\r\n- <span class=\"wiki-unresolved\">Chlorys</span>\r\n- <span class=\"wiki-unresolved\">Zaledra</span>")}

	</section>
{/snippet}
