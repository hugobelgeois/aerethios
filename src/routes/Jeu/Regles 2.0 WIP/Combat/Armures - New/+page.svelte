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
          "id": "dfense",
          "text": "Défense",
          "level": 3
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
          "id": "lgres",
          "text": "Légères",
          "level": 3
      },
      {
          "id": "intermdiaires",
          "text": "Intermédiaires",
          "level": 3
      },
      {
          "id": "lourdes",
          "text": "Lourdes",
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
	{@html renderMarkdown("> - AC (Armor Class) = Difficulté à blesser le personnage.\n> AC = Défense + Modificateur\n")}
{/snippet}

{#snippet armures()}
	<section>
		<h2 id="armures">{@html applyBase("Armures")}</h2>
	{@html renderMarkdown("> Une armure nécessite 24 matériaux pour être forgée.\n> Si plusieurs matériaux sont utilisés, il faut que leur ratio soit toujours égal (24, 12-12, 8-8-8, 6-6-6-6, ...). ??\n\n| Catégorie             | Léger   | Intermédiaire        | Lourd      |\n| --------------------- | ------- | -------------------- | ---------- |\n| Défense               | 8       | 10                   | 12         |\n| Modificateur d'AC     | Mental  | Dextérité(Acrobatie) | Force ?    |\n| Résistances           | Magique | Magique & Physique   | Physique   |\n| Coût (pa/ unité)      | 10      | 20 \\* rareté         | 4 ^ rareté |\n| Instabilité/ matériau | +1      | +1.5                 | +2         |\n")}
	{@render dfense()}
	{@render instabilit()}
	</section>
{/snippet}

{#snippet dfense()}
	<section>
		<h3 id="dfense">{@html applyBase("Défense")}</h3>
	{@html renderMarkdown("> La défense finale est la défense moyenne des matériaux utilisés.\n\n```Exemple\n1 léger + 1 lourd = (8 + 12)/2 = 10\n```\n")}

	</section>
{/snippet}

{#snippet instabilit()}
	<section>
		<h3 id="instabilit">{@html applyBase("Instabilité")}</h3>
	{@html renderMarkdown("> Stabilité de base est de -4.\n\nUne armure est stable tant qu'elle ne dépasse pas 0 (arrondi vers le bas), sinon elle devient instable.\nUne fois instable, le joueur doit lancer 1d6 (1d10 ?) à chaque fois qu'il se fait attaquer.\n\tSi le jet est inférieur à sa stabilité, l'armure se casse et n'offrira plus de résistance aux prochaines attaques.\n\n```Exemple\n- 2 légers + 1 intermédiaire → -0.5 → -1 (arrondi) (stable)\n- 3 intermédiaires → 0.5 → 0 (arrondi) (stable)\n- 3 lourds → 2 (instable)\n```\n")}

	</section>
{/snippet}

{#snippet catgories()}
	<section>
		<h2 id="catgories">{@html applyBase("Catégories")}</h2>

	{@render lgres()}
	{@render intermdiaires()}
	{@render lourdes()}
	{@render raret()}
	</section>
{/snippet}

{#snippet lgres()}
	<section>
		<h3 id="lgres">{@html applyBase("Légères")}</h3>
	{@html renderMarkdown("> Si armure entièrement légère :\n\n- Chanvre, Coton, Daim, Fourrure, Laine, Lin, Soie\n")}

	</section>
{/snippet}

{#snippet intermdiaires()}
	<section>
		<h3 id="intermdiaires">{@html applyBase("Intermédiaires")}</h3>
	{@html renderMarkdown("> Si armure entièrement intermédiaire : Les dégâts subits par les huiles sont doublés.\n\n- Cuir, Ecaille, Os, Mailles\n")}

	</section>
{/snippet}

{#snippet lourdes()}
	<section>
		<h3 id="lourdes">{@html applyBase("Lourdes")}</h3>
	{@html renderMarkdown("> Si armure entièrement lourde : Désavantage en Magies & Dextérité(Discrétion).\n\n- Fer, Bronze, Acier, Titane, Mythril, Palladium, Adamantite, Orichalque\n")}

	</section>
{/snippet}

{#snippet raret()}
	<section>
		<h3 id="raret">{@html applyBase("Rareté")}</h3>
	{@html renderMarkdown("> Offre des bonus supplémentaires si au moins 12 des matériaux ont la même rareté.\n> Seul la rareté la plus haute de l'armure offre son bonus.\n\n| Déchet | Commun | Peu Commun | Rare  | Légendaire    |\n| ------ | ------ | ---------- | ----- | ------------- |\n| -      |        | +1 AC      | +2 AC | +3 AC ou 1 PA |\n")}

	</section>
{/snippet}

{#snippet boucliers()}
	<section>
		<h2 id="boucliers">{@html applyBase("Boucliers")}</h2>
	{@html renderMarkdown("\n| Armure   | Défense | Matériaux | Force >= | Stabilité |\n| -------- | ------- | :-------: | :------: | --------- |\n| Bocle    | 0       |     2     |   ---    | -1        |\n| Bouclier | -1      |     4     |    14    | -2        |\n| Pavois   | -3      |     8     |    17    | -4        |")}

	</section>
{/snippet}
