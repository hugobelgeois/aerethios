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
          "id": "armes-de-mles---new--armes--distances---new",
          "text": "Armes de mêlées - New | Armes à distances - New",
          "level": 3
      },
      {
          "id": "armures---new",
          "text": "Armures - New",
          "level": 3
      },
      {
          "id": "apprentissages---new",
          "text": "Apprentissages - New",
          "level": 2
      },
      {
          "id": "inventaire",
          "text": "Inventaire",
          "level": 2
      },
      {
          "id": "notes",
          "text": "Notes",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Ronronov</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Ronronov</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render attributs()}
		{@render comptences()}
		{@render equipement()}
		{@render apprentissages__New()}
		{@render inventaire()}
		{@render notes()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown(">Si vous voulez une image, envoyez-la moi et je la transforme pour avoir un style graphique similaire au reste\r\n\r")}
{/snippet}

{#snippet attributs()}
	<section>
		<h2 id="attributs">{@html applyBase("Attributs")}</h2>
	{@html renderMarkdown("> Niveau 1\r\n\r")}
	{@render combat()}
	{@render magie()}
	</section>
{/snippet}

{#snippet combat()}
	<section>
		<h3 id="combat">{@html applyBase("Combat")}</h3>
	{@html renderMarkdown(">55 points à mettre au niveau 1 (min 7, max 14)\r\n>+1 points par niveau sauf les niveaux 1, 5, 10, 15 et 20\r\n\r\n| Force | Dextérité | Mental | Perception | Charisme |\r\n| :---: | :-------: | :----: | :--------: | :------: |\r\n|       |           |        |            |          |\r\n|       |           |        |            |          |\r\n\r")}

	</section>
{/snippet}

{#snippet magie()}
	<section>
		<h3 id="magie">{@html applyBase("Magie")}</h3>
	{@html renderMarkdown("> **Maîtrise** :\r\n> **Crystaux** :\r\n\r\n| Air | Eau | Roche | Feu | Foudre | Lumière | Ténèbres |\r\n| :-: | :-: | :---: | :-: | :----: | :-----: | :------: |\r\n|     |     |       |     |        |         |          |\r\n|     |     |       |     |        |         |          |\r\n\r")}

	</section>
{/snippet}

{#snippet comptences()}
	<section>
		<h2 id="comptences">{@html applyBase("Compétences")}</h2>
	{@html renderMarkdown("\r\n| **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Force\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Force\" data-wiki-fragment=\"\">Force</a>** | **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Dexterite\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Dexterite\" data-wiki-fragment=\"\">Dextérité</a>** | **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Mental\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Mental\" data-wiki-fragment=\"\">Mental</a>** | **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Perception\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Perception\" data-wiki-fragment=\"\">Perception</a>** | **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Charisme\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Charisme\" data-wiki-fragment=\"\">Charisme</a>** |\r\n| :-----------: | :---------------: | :------------: | :----------------: | :--------------: |\r\n|               |                   |                |                    |                  |\r\n\r")}

	</section>
{/snippet}

{#snippet equipement()}
	<section>
		<h2 id="equipement">{@html applyBase("Equipement")}</h2>

	{@render armesDeMles__New_Armes_Distances__New()}
	{@render armures__New()}
	</section>
{/snippet}

{#snippet armesDeMles__New_Armes_Distances__New()}
	<section>
		<h3 id="armes-de-mles---new--armes--distances---new">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Combat/Armes de melees - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Combat/Armes de melees - New\" data-wiki-fragment=\"\">Armes de mêlées - New</a> | <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Combat/Armes a distances - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Combat/Armes a distances - New\" data-wiki-fragment=\"\">Armes à distances - New</a>")}</h3>
	{@html renderMarkdown("\r\n| Court | 1 Main | 2 Mains | Corde | Feu |\r\n| :---: | :----: | :-----: | :---: | --- |\r\n|       |        |         |       |     |\r\n|       |        |         |       |     |\r\n\r\n| Arme | Dégâts | Enchantements | Poids (kg) | Propriétés |\r\n| ---- | :----: | :-----------: | :--------: | :--------: |\r\n|      |        |               |            |            |\r\n\r")}

	</section>
{/snippet}

{#snippet armures__New()}
	<section>
		<h3 id="armures---new">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Combat/Armures - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Combat/Armures - New\" data-wiki-fragment=\"\">Armures - New</a>")}</h3>
	{@html renderMarkdown("\r\n| Armure | AC  | DR  | Enchantement | Poids (kg) | Dégâts | Propriétés |\r\n| ------ | :-: | :-: | :----------: | :--------: | :----: | :--------: |\r\n|        |     |     |              |            |        |            |\r\n\r")}

	</section>
{/snippet}

{#snippet apprentissages__New()}
	<section>
		<h2 id="apprentissages---new">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Apprentissages - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Apprentissages - New\" data-wiki-fragment=\"\">Apprentissages - New</a>")}</h2>
	{@html renderMarkdown("\r\n- \r\n\r")}

	</section>
{/snippet}

{#snippet inventaire()}
	<section>
		<h2 id="inventaire">{@html applyBase("Inventaire")}</h2>
	{@html renderMarkdown("\r\n**Poids maximum** :\r\n- *Force > 10 : 40 + (Force Modificateur x 10)*\r\n- *Force < 10 : 40 + (Force Modificateur x 2)*\r\n\r\n| Qty | Nom     | Poids (kg) |\r\n| --- | ------- | ---------: |\r\n|     | Armes   |            |\r\n|     | Armures |            |\r\n\r")}

	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html applyBase("Notes")}</h2>
	{@html renderMarkdown("\r\nCalico (Meowscular Chef MHW) de Kothula\r\nAncien prêtre, il a été réquisitionné par l'armée pour soigner les arrières troupes, avant de devenir cuisinier\r\nIl connait déjà Diego qui est un habitué de son restaurant")}

	</section>
{/snippet}
