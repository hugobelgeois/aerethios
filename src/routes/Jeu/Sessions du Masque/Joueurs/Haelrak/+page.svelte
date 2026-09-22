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
  <title>Haelrak</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Haelrak</h1>
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
	{@html renderMarkdown("---\r\nHP: 50 / 50\r\nMP: 14 / 14\r\nAC: 14\r\nDR: 12\r\nToken: 2/4\r\n---\r\n>Si vous voulez une image, envoyez-la moi et je la transforme pour avoir un style graphique similaire au reste\r\n\r\n**Niveau** : 5.5\r\n\r\n|                                          Arvens                                          | Runild |        Scienctes         | Templis |\r\n| :--------------------------------------------------------------------------------------: | :----: | :----------------------: | :-----: |\r\n| <span class=\"wiki-unresolved\">Argent</span> 3 |   -    | <a href=\"%%BASE%%/Notes/Scienctes#mage\" class=\"wiki-link internal-link\" data-wiki-href=\"/Notes/Scienctes\" data-wiki-fragment=\"Mage%5C\">Mage</a> |    -    |\r\n\r")}
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
	{@html renderMarkdown(">55 points à mettre au niveau 1 (min 7, max 14)\r\n>+1 points par niveau sauf les niveaux 1, 5, 10, 15 et 20\r\n\r\n| Force | Dextérité | Mental | Perception | Charisme |\r\n| :---: | :-------: | :----: | :--------: | :------: |\r\n|   8   |    16     |   20   |     12     |    6     |\r\n|  -1   |    +3     |   +5   |     +1     |    -2    |\r\n\r")}

	</section>
{/snippet}

{#snippet magie()}
	<section>
		<h3 id="magie">{@html applyBase("Magie")}</h3>
	{@html renderMarkdown("> **Maîtrise** : 2\r\n> **Crystaux** : 14\r\n\r\n| Air | Eau | Roche |   Feu   | Foudre | Lumière | Ténèbres |\r\n| :-: | :-: | :---: | :-----: | :----: | :-----: | :------: |\r\n|  8  | 11  |   -   | ~~(4)~~ |   11   |    -    |    -     |\r\n| 1d6 | 1d8 |   -   |    -    |  1d8   |    -    |    -     |\r\n\r")}

	</section>
{/snippet}

{#snippet comptences()}
	<section>
		<h2 id="comptences">{@html applyBase("Compétences")}</h2>
	{@html renderMarkdown("\r\n| **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Force\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Force\" data-wiki-fragment=\"\">Force</a>** |      **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Dexterite\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Dexterite\" data-wiki-fragment=\"\">Dextérité</a>**      |                 **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Mental\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Mental\" data-wiki-fragment=\"\">Mental</a>**                  | **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Perception\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Perception\" data-wiki-fragment=\"\">Perception</a>**  | **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Charisme\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Charisme\" data-wiki-fragment=\"\">Charisme</a>** |\r\n| :-----------: | :-------------------------: | :---------------------------------------------: | :-----------------: | :--------------: |\r\n|  Athlétisme   |   Acrobatie<br>*- Matrix*   | Arcaniste<br>*- Amplification*<br>*- Résonance* |      Survivant      |    Diplomate     |\r\n|               | Assassin<br>*- Coup précis* |         Intelligence<br>*- Redirection*         | Voyeur<br>*- Magie* |                  |\r\n|               | Ranger<br>*- Point Faible*  | Volonté<br>*- Imperturbable*<br>*- Résistance*  |                     |                  |\r\n|               |                             |                 **Potter**<br>+                 |                     |                  |\r\n\r")}

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
	{@html renderMarkdown("\r\n| Court | 1 Main | 2 Mains | Haste | Distance |\r\n| :---: | :----: | :-----: | :---: | :------: |\r\n|   0   |   0    |    0    |   6   |    2     |\r\n|   0   |   0    |    0    |  +3   |    +1    |\r\n\r\n| Arme                                                                         | Dégâts                                                     | Poids (kg) |                            Propriétés                            |\r\n| ---------------------------------------------------------------------------- | ---------------------------------------------------------- | :--------: | :--------------------------------------------------------------: |\r\n| Trident<br>Fer (Electrum)<br>Haste                                           | 3d6<br>+4<br>VS Magiques<br>= 7-22                         |     4      | <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#porte\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Port%C3%A9e%5C\">Portée</a><br><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#jetable\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Jetable%5C\">Jetable</a> |\r\n| Fauchard Sharah<br>Adamantite (Or)<br>Haste<br>(léger)<br>(lier au pistolet) | (4d6+4Dex(Ranger))<br>+5<br>VS Mythiques<br>Air<br>= 11-31 |     8      |                <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#porte\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Port%C3%A9e%5C\">Portée</a><br>                 |\r\n| Fusil Sharah<br>Adamantite<br>Distance<br>(léger)<br>(lier au fauchard)      | (4d4+4Dex(Ranger))<br>+15<br>= 21-33                       |     2      |                                                                  |\r\n\r")}

	</section>
{/snippet}

{#snippet armures()}
	<section>
		<h3 id="armures">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Combat/Armures\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Combat/Armures\" data-wiki-fragment=\"\">Armures</a>")}</h3>
	{@html renderMarkdown("\r\n| Armure             |           AC           |                 DR                 |  Enchantement  | Poids (kg) | Dégâts |               Propriétés                |\r\n| ------------------ | :--------------------: | :--------------------------------: | :------------: | :--------: | :----: | :-------------------------------------: |\r\n| Armure<br>Cuir     | 12<br>+2(Dex) <br>= 14 | 9(peu commun) <br>+3(Impé)<br>= 12 |       -        |     12     |   -    | Résiste à <a href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#poison\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Poison%5C\">Poison</a> |\r\n| Veste longue Coton |           -            |                 -                  | Air 1<br>Feu 1 |     1      |   -    |   Air = 2 crystaux bonus par attaque    |\r\n\r")}

	</section>
{/snippet}

{#snippet apprentissages()}
	<section>
		<h2 id="apprentissages">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Apprentissages\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Apprentissages\" data-wiki-fragment=\"\">Apprentissages</a>")}</h2>
	{@html renderMarkdown("\r\n| Apprentissage | Niveau | Expérience |\r\n| ------------- | :----: | :--------: |\r\n| Cuisinier     |   1    |            |\r\n| Invocateur    |   1    |            |\r\n| Natation      |   1    |     1      |\r\n| Potionniste   |   2    |     3      |\r\n\r")}

	</section>
{/snippet}

{#snippet inventaire()}
	<section>
		<h2 id="inventaire">{@html applyBase("Inventaire")}</h2>
	{@html renderMarkdown("\r\n**Poids maximum** : 38kg\r\n- *Force > 10 : 40 + (Force Modificateur x 10)*\r\n- *Force < 10 : 40 + (Force Modificateur x 2)*\r\n\r\n| Qty | Nom     | Poids (kg) |\r\n| --- | ------- | ---------: |\r\n| 3   | Armes   |         14 |\r\n| 2   | Armures |         13 |\r\n\r")}

	</section>
{/snippet}

{#snippet connaissances()}
	<section>
		<h2 id="connaissances">{@html applyBase("Connaissances")}</h2>
	{@html renderMarkdown("\r\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Arek\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Arek\" data-wiki-fragment=\"\">Arek</a>\r\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Dara\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Dara\" data-wiki-fragment=\"\">Dara</a>\r\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Old/Halfdan\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Old/Halfdan\" data-wiki-fragment=\"\">Halfdan</a>\r\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Hazdaim\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Hazdaim\" data-wiki-fragment=\"\">Hazdaim</a>\r\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Leoric\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Leoric\" data-wiki-fragment=\"\">Léoric</a>\r\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Old/Zveindel\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Old/Zveindel\" data-wiki-fragment=\"\">Zveindel</a>\r\n\r\n- <span class=\"wiki-unresolved\">Dieu Dormant</span>\r\n- <a href=\"%%BASE%%/0_Private/Billy\" class=\"wiki-link internal-link\" data-wiki-href=\"/0_Private/Billy\" data-wiki-fragment=\"\">Billy</a>\r\n- <span class=\"wiki-unresolved\">Perseus</span>\r\n- <span class=\"wiki-unresolved\">Bryumnes</span>\r\n- <span class=\"wiki-unresolved\">Einar</span>\r\n- <span class=\"wiki-unresolved\">Chlorys</span>\r\n- <span class=\"wiki-unresolved\">Zaledra</span>")}

	</section>
{/snippet}
