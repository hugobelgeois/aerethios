<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "armures",
          "text": "Armures",
          "level": 2
      },
      {
          "id": "instabilit",
          "text": "Instabilité",
          "level": 3
      },
      {
          "id": "catgories",
          "text": "Catégories",
          "level": 2
      },
      {
          "id": "lgre",
          "text": "Légère",
          "level": 3
      },
      {
          "id": "lourde",
          "text": "Lourde",
          "level": 3
      },
      {
          "id": "raret",
          "text": "Rareté",
          "level": 3
      },
      {
          "id": "boucliers",
          "text": "Boucliers",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Armures - New</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Armures - New</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render armures()}
		{@render catgories()}
		{@render boucliers()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("> AC (Armor Class) = Difficulté à blesser le personnage.\n")}
{/snippet}

{#snippet armures()}
	<section>
		<h2 id="armures">{@html applyBase("Armures")}</h2>
	{@html renderMarkdown("> Une armure nécessite 24 matériaux pour être forgée.\n> Si différents types de matériaux sont utilisés, il faut que leur quantité soit toujours proportionnelle (24, 12-12, 8-8-8, 6-6-6-6, ...).\n\n| Catégorie           | Légère                   | Lourde      |\n| ------------------- | ------------------------ | ----------- |\n| AC                  | 5 + Dextérité(Acrobatie) | 10 + Force  |\n| Modificateur max    | 2 \\* rareté              | 1 \\* rareté |\n| Résistances         | Magique                  | Physique    |\n| Coût (pa/ unité)    | 20 \\* rareté             | 4 ^ rareté  |\n| Stabilité/ matériau | -1                       | -1.5        |\n\nL'AC pour les armures composées de multiples matériaux est l'AC moyen des catégories et de leur modificateur utilisés.\n")}
	{@render instabilit()}
	</section>
{/snippet}

{#snippet instabilit()}
	<section>
		<h3 id="instabilit">{@html applyBase("Instabilité")}</h3>
	{@html renderMarkdown("> Stabilité de base est de 3.\n\nUne armure est stable tant qu'elle ne dépasse pas 0, sinon elle devient instable.\nUne fois instable, si `jet ennemi >= AC du joueur + (4 * Stabilité)`, l'armure se casse et n'offrira plus de résistance aux prochaines attaques.\n```Exemple\n- 3 légères            → 0 (stable)\n- 2 légères + 1 lourde → -0.5 (instable) → AC + (4 * -0.5)\n- 3 lourdes            → -1.5 (instable) → AC + (4 * -1.5)\n```\n")}

	</section>
{/snippet}

{#snippet catgories()}
	<section>
		<h2 id="catgories">{@html applyBase("Catégories")}</h2>

	{@render lgre()}
	{@render lourde()}
	{@render raret()}
	</section>
{/snippet}

{#snippet lgre()}
	<section>
		<h3 id="lgre">{@html applyBase("Légère")}</h3>
	{@html renderMarkdown("> Si armure entièrement légère : ? Les dégâts subits par les huiles sont doublés ?\n\n- Cuir, Ecaille, Os, Mailles\n")}

	</section>
{/snippet}

{#snippet lourde()}
	<section>
		<h3 id="lourde">{@html applyBase("Lourde")}</h3>
	{@html renderMarkdown("> Si armure entièrement lourde : Désavantage en Magies & Dextérité(Discrétion).\n\n- Fer, Bronze, Acier, Titane, Mythril, Palladium, Adamantite, Orichalque\n")}

	</section>
{/snippet}

{#snippet raret()}
	<section>
		<h3 id="raret">{@html applyBase("Rareté")}</h3>
	{@html renderMarkdown("> Offre des bonus supplémentaires si tous les matériaux ont la même rareté, peu importe leur catégorie.\n\n| Rareté        | Déchet | Commun | Peu Commun | Rare  | Légendaire        |\n| ------------- | ------ | ------ | ---------- | ----- | ----------------- |\n| **Bonus**     | -1 AC  | -      | +1 AC      | +2 AC | +3 AC (ou 1 PA ?) |\n| **Prérequis** | -      | 1      | 2          | 3     | 4                 |\n\nLe prérequis est la valeur minimum que le modificateur lié à la catégorie doit avoir pour pouvoir porter cette armure.\nSi l'armure possède des matériaux légers et lourds, elle doit satisfaire le prérequis pour chaque modificateur.\n")}

	</section>
{/snippet}

{#snippet boucliers()}
	<section>
		<h2 id="boucliers">{@html applyBase("Boucliers")}</h2>
	{@html renderMarkdown("\n| Armure   | AC  | Matériaux | Force >= | Stabilité |\n| -------- | --- | :-------: | :------: | --------- |\n| Bocle    | 0   |     2     |   ---    | 0         |\n| Bouclier | -1  |     4     |    14    | 1         |\n| Pavois   | -3  |     8     |    17    | 2         |")}

	</section>
{/snippet}
