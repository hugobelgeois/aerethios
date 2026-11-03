<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "bronze",
          "text": "Bronze",
          "level": 2
      },
      {
          "id": "argent",
          "text": "Argent",
          "level": 2
      },
      {
          "id": "or",
          "text": "Or",
          "level": 2
      },
      {
          "id": "platine",
          "text": "Platine",
          "level": 2
      },
      {
          "id": "lgendes",
          "text": "Légendes",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Arvens"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arvens"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render bronze()}
		{@render argent()}
		{@render or()}
		{@render platine()}
		{@render lgendes()}
  </div>
</article>

<LinkPreview />

{#snippet bronze()}
	<section>
		<h2 id="bronze">{@html "Bronze"}</h2>
	{@html "<blockquote>Niveau 1 à 3 = Poids morts</blockquote>\n<p>La majorité des gens qui rejoignent les Arvens ne se rendent pas compte du danger qui les attend et meurent lors de leurs aventures.</p>"}

	</section>
{/snippet}

{#snippet argent()}
	<section>
		<h2 id="argent">{@html "Argent"}</h2>
	{@html "<blockquote>Niveau 4 à 7 = Débutants</blockquote>\n<p>Ceux qui arrivent au rang argent on fait le plus dur et resteront sûrement encore en vie quelque temps.</p>\n<p>Il est donc intéressant pour les plus expérimentés de les épauler pour prendre la relève plus tard.</p>"}

	</section>
{/snippet}

{#snippet or()}
	<section>
		<h2 id="or">{@html "Or"}</h2>
	{@html "<blockquote>Niveau 8 à 12 = Aventuriers</blockquote>\n<p>Les rangs or ont fait leur preuve et sont capables d'effectuer des quêtes sans l'aide de rangs supérieurs.</p>"}

	</section>
{/snippet}

{#snippet platine()}
	<section>
		<h2 id="platine">{@html "Platine"}</h2>
	{@html "<blockquote>Niveau 13 à 18 = Héros</blockquote>\n<p>Les platines sont rares et réduisent le nombre d'aventures qu'ils font afin de conserver leurs forces pour les missions les plus dangereuses.</p>\n<p>Ils profitent de ce temps libre supplémentaire pour accompagner les rangs argents.</p>"}

	</section>
{/snippet}

{#snippet lgendes()}
	<section>
		<h2 id="lgendes">{@html "Légendes"}</h2>
	{@html "<blockquote>Niveau 19 à 20 = Légendes<br>Se débloque selon le continent :<br>- <strong>Diamant</strong> (Ovliin),<br>- <strong>Emeraude</strong> (Nirina),<br>- <strong>Rubis</strong> (Kothula),<br>- <strong>Topaze</strong> (Suraja).</blockquote>\n<p>Rares sont ceux qui possèdent ne serait-ce qu'un de ces titres</p>\n<p>Ils deviennent généralement des ambassadeurs de dirigeants, des chefs de guerre ou autre rôle empli de puissance.</p>"}

	</section>
{/snippet}
