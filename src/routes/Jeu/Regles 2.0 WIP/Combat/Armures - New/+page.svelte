<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
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
  <title>{"Armures - New"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Armures - New"}</h1>
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
	{@html "<blockquote>AC (Armor Class) = Difficulté à blesser le personnage.</blockquote>"}
{/snippet}

{#snippet armures()}
	<section>
		<h2 id="armures">{@html "Armures"}</h2>
	{@html "<blockquote>Une armure nécessite 24 matériaux pour être forgée.<br>Si différents types de matériaux sont utilisés, il faut que leur quantité soit toujours proportionnelle (24, 12-12, 8-8-8, 6-6-6-6, ...).</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Catégorie</th><th>Légère</th><th>Lourde</th></tr></thead><tbody><tr><td>AC</td><td>5 + Dextérité(Acrobatie)</td><td>10 + Force</td></tr><tr><td>Modificateur max</td><td>2 \\* rareté</td><td>1 \\* rareté</td></tr><tr><td>Résistances</td><td>Magique</td><td>Physique</td></tr><tr><td>Coût (pa/ unité)</td><td>20 \\* rareté</td><td>4 ^ rareté</td></tr><tr><td>Stabilité/ matériau</td><td>-1</td><td>-1.5</td></tr></tbody></table></div>\n<p>L'AC pour les armures composées de multiples matériaux est l'AC moyen des catégories et de leur modificateur utilisés.</p>"}
	{@render instabilit()}
	</section>
{/snippet}

{#snippet instabilit()}
	<section>
		<h3 id="instabilit">{@html "Instabilité"}</h3>
	{@html "<blockquote>Stabilité de base est de 3.</blockquote>\n<p>Une armure est stable tant qu'elle ne dépasse pas 0, sinon elle devient instable.<br>\nUne fois instable, si <code>jet ennemi >= AC du joueur + (4 * Stabilité)</code>, l'armure se casse et n'offrira plus de résistance aux prochaines attaques.</p>\n<pre><code class=\"language-Exemple\">- 3 légères            → 0 (stable)\n- 2 légères + 1 lourde → -0.5 (instable) → AC + (4 * -0.5)\n- 3 lourdes            → -1.5 (instable) → AC + (4 * -1.5)</code></pre>"}

	</section>
{/snippet}

{#snippet catgories()}
	<section>
		<h2 id="catgories">{@html "Catégories"}</h2>

	{@render lgre()}
	{@render lourde()}
	{@render raret()}
	</section>
{/snippet}

{#snippet lgre()}
	<section>
		<h3 id="lgre">{@html "Légère"}</h3>
	{@html "<blockquote>Si armure entièrement légère : ? Les dégâts subits par les huiles sont doublés ?</blockquote>\n<ul><li>Cuir, Ecaille, Os, Mailles</li></ul>"}

	</section>
{/snippet}

{#snippet lourde()}
	<section>
		<h3 id="lourde">{@html "Lourde"}</h3>
	{@html "<blockquote>Si armure entièrement lourde : Désavantage en Magies & Dextérité(Discrétion).</blockquote>\n<ul><li>Fer, Bronze, Acier, Titane, Mythril, Palladium, Adamantite, Orichalque</li></ul>"}

	</section>
{/snippet}

{#snippet raret()}
	<section>
		<h3 id="raret">{@html "Rareté"}</h3>
	{@html "<blockquote>Offre des bonus supplémentaires si tous les matériaux ont la même rareté, peu importe leur catégorie.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Déchet</th><th>Commun</th><th>Peu Commun</th><th>Rare</th><th>Légendaire</th></tr></thead><tbody><tr><td><strong>Bonus</strong></td><td>-1 AC</td><td>-</td><td>+1 AC</td><td>+2 AC</td><td>+3 AC</td></tr><tr><td><strong>Prérequis</strong></td><td>-</td><td>1</td><td>2</td><td>3</td><td>4</td></tr></tbody></table></div>\n<p>Le prérequis est la valeur minimum que le modificateur lié à la catégorie doit avoir pour pouvoir porter cette armure.<br>\nSi l'armure possède des matériaux légers et lourds, elle doit satisfaire le prérequis pour chaque modificateur.</p>"}

	</section>
{/snippet}

{#snippet boucliers()}
	<section>
		<h2 id="boucliers">{@html "Boucliers"}</h2>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Armure</th><th>AC</th><th>Matériaux</th><th>Force >=</th><th>Stabilité</th></tr></thead><tbody><tr><td>Bocle</td><td>0</td><td>2</td><td>---</td><td>0</td></tr><tr><td>Bouclier</td><td>-1</td><td>4</td><td>14</td><td>1</td></tr><tr><td>Pavois</td><td>-3</td><td>8</td><td>17</td><td>2</td></tr></tbody></table></div>"}

	</section>
{/snippet}
