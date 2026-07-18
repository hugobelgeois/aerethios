<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
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
  <title>Cira</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Cira</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render attributs()}
		{@render comptences()}
		{@render equipement()}
		{@render inventaire()}
		{@render connaissances()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown(">Si vous voulez une image, envoyez-la moi et je la transforme pour avoir un style graphique similaire au reste\n\n**Niveau** : 8\n\n|                                      Arvens                                      |          Runild          | Scienctes | Templis |\n| :------------------------------------------------------------------------------: | :----------------------: | :-------: | :-----: |\n| <span class=\"wiki-unresolved\">Or</span> 1 | <a href=\"%%BASE%%/Jeu/Regles/Competences/Maisons/Runild#100-po\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Maisons/Runild\" data-wiki-fragment=\"100%20po%5C\">Riche</a> |           |         |\n")}
{/snippet}

{#snippet attributs()}
	<section>
		<h2 id="attributs">Attributs</h2>

	{@render combat()}
	{@render magie()}
	</section>
{/snippet}

{#snippet combat()}
	<section>
		<h3 id="combat">Combat</h3>
	{@html renderMarkdown(">55 points à mettre au niveau 1 (min 7, max 14)\n>+1 points par niveau sauf les niveaux 1, 5, 10, 15 et 20\n\n| Force | Dextérité | Mental | Perception | Charisme |\n| :---: | :-------: | :----: | :--------: | :------: |\n|   8   |    15     |   10   |     12     |    16    |\n|  -1   |    +2     |   0    |     +1     |    +3    |\n")}

	</section>
{/snippet}

{#snippet magie()}
	<section>
		<h3 id="magie">Magie</h3>
	{@html renderMarkdown("> **Maîtrise** : 1\n> **Crystaux** : 10\n\n| Air | Eau | Roche | Feu | Foudre | Lumière | Ténèbres |\n| :-: | :-: | :---: | :-: | :----: | :-----: | :------: |\n|  6  |  4  |   -   |  -  |   -    |    -    |    -     |\n| 1d6 | 1d4 |   -   |  -  |   -    |    -    |    -     |\n")}

	</section>
{/snippet}

{#snippet comptences()}
	<section>
		<h2 id="comptences">Compétences</h2>
	{@html renderMarkdown("\n| **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Force\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Force\" data-wiki-fragment=\"\">Force</a>** | **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Dexterite\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Dexterite\" data-wiki-fragment=\"\">Dextérité</a>** | **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Mental\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Mental\" data-wiki-fragment=\"\">Mental</a>** | **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Perception\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Perception\" data-wiki-fragment=\"\">Perception</a>** | **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Charisme\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Charisme\" data-wiki-fragment=\"\">Charisme</a>** |\n| :-----------: | :---------------: | :------------: | :----------------: | :--------------: |\n|               |                   |                |                    |                  |\n")}

	</section>
{/snippet}

{#snippet equipement()}
	<section>
		<h2 id="equipement">Equipement</h2>

	{@render armes()}
	{@render armures()}
	</section>
{/snippet}

{#snippet armes()}
	<section>
		<h3 id="armes"><a href="%%BASE%%/Jeu/Regles/Combat/Armes" class="wiki-link internal-link" data-wiki-href="/Jeu/Regles/Combat/Armes" data-wiki-fragment="">Armes</a></h3>
	{@html renderMarkdown("\n| Court | 1 Main | 2 Mains | Haste | Distance |\n| :---: | :----: | :-----: | :---: | :------: |\n|   8   |   5    |    0    |   0   |    0     |\n|  +4   |   +2   |    0    |   0   |    0     |\n\n| Arme                                                | Dégâts                                                        | Poids (kg) |                              Propriétés                              |\n| --------------------------------------------------- | :------------------------------------------------------------ | :--------: | :------------------------------------------------------------------: |\n| Dague<br>Acier<br>Court<br>(léger)                  | 3d12 + Dextérité(Ranger)<br>+3<br>VS Mutants<br>Feu<br>= 8-42 |    0.5     | <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#jetable\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Jetable%5C\">Jetable</a><br><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#critique\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Critique%5C\">Critique</a> |\n| Dague<br>Orichalque (Sombronce)<br>Court<br>(lourd) | 1d12<br>+24 + Force(Monk)<br>VS Naturels<br>Glace<br>= 23-34  |    1.5     | <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#jetable\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Jetable%5C\">Jetable</a><br><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#critique\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Critique%5C\">Critique</a> |\n")}

	</section>
{/snippet}

{#snippet armures()}
	<section>
		<h3 id="armures"><a href="%%BASE%%/Jeu/Regles/Combat/Armures" class="wiki-link internal-link" data-wiki-href="/Jeu/Regles/Combat/Armures" data-wiki-fragment="">Armures</a></h3>
	{@html renderMarkdown("\n| Armure         |          AC           |              DR              | Enchantement | Poids (kg) | Dégâts |               Propriétés                |\n| -------------- | :-------------------: | :--------------------------: | :----------: | :--------: | :----: | :-------------------------------------: |\n| Armure<br>Cuir | 14<br>+3(Dex)<br>= 17 | 12(rare)<br>+0(Impé)<br>= 12 |      -       |     12     |   -    | Résiste à <a href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#poison\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Poison%5C\">Poison</a> |\n")}

	</section>
{/snippet}

{#snippet inventaire()}
	<section>
		<h2 id="inventaire">Inventaire</h2>
	{@html renderMarkdown("\n**Poids maximum** : 38kg\n- *Force > 10 : 40 + (Force Modificateur x 10)*\n- *Force < 10 : 40 + (Force Modificateur x 2)*\n\n| Qty | Nom | Poids (kg) |\n| --- | --- | ---------: |\n|     |     |            |\n")}

	</section>
{/snippet}

{#snippet connaissances()}
	<section>
		<h2 id="connaissances">Connaissances</h2>
	{@html renderMarkdown("\n-")}

	</section>
{/snippet}
