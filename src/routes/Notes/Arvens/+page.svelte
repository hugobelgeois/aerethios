<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
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
  <title>Arvens</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arvens</h1>
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
		<h2 id="bronze">Bronze</h2>
	{@html renderMarkdown(">Niveau 1 à 3 = Poids morts\n\nLa majorité des gens qui rejoignent les Arvens ne se rendent pas compte du danger qui les attend et meurent lors de leurs aventures.\n")}

	</section>
{/snippet}

{#snippet argent()}
	<section>
		<h2 id="argent">Argent</h2>
	{@html renderMarkdown(">Niveau 4 à 7 = Débutants\n\nCeux qui arrivent au rang argent on fait le plus dur et resteront sûrement encore en vie quelque temps.\n\nIl est donc intéressant pour les plus expérimentés de les épauler pour prendre la relève plus tard.\n")}

	</section>
{/snippet}

{#snippet or()}
	<section>
		<h2 id="or">Or</h2>
	{@html renderMarkdown(">Niveau 8 à 12 = Aventuriers\n\nLes rangs or ont fait leur preuve et sont capables d'effectuer des quêtes sans l'aide de rangs supérieurs.\n")}

	</section>
{/snippet}

{#snippet platine()}
	<section>
		<h2 id="platine">Platine</h2>
	{@html renderMarkdown(">Niveau 13 à 18 = Héros\n\nLes platines sont rares et réduisent le nombre d'aventures qu'ils font afin de conserver leurs forces pour les missions les plus dangereuses.\n\nIls profitent de ce temps libre supplémentaire pour accompagner les rangs argents.\n")}

	</section>
{/snippet}

{#snippet lgendes()}
	<section>
		<h2 id="lgendes">Légendes</h2>
	{@html renderMarkdown(">Niveau 19 à 20 = Légendes\n>Se débloque selon le continent :\n>- **Diamant** (Ovliin),\n>- **Emeraude** (Nirina),\n>- **Rubis** (Kothula),\n>- **Topaze** (Suraja).\n\nRares sont ceux qui possèdent ne serait-ce qu'un de ces titres\n\nIls deviennent généralement des ambassadeurs de dirigeants, des chefs de guerre ou autre rôle empli de puissance.")}

	</section>
{/snippet}
