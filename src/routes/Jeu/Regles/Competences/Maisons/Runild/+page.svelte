<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "1-po",
          "text": "1 po",
          "level": 2
      },
      {
          "id": "50-po",
          "text": "50 po",
          "level": 2
      },
      {
          "id": "100-po",
          "text": "100 po",
          "level": 2
      },
      {
          "id": "500-po",
          "text": "500 po",
          "level": 2
      },
      {
          "id": "1000-po",
          "text": "1000 po",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Runild</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Runild</h1>
  </header>
  <div class="markdown-rendered">
		{@render _Po()}
		{@render _0Po()}
		{@render _00Po()}
		{@render _00Po_2()}
		{@render _000Po()}
  </div>
</article>

<LinkPreview />

{#snippet _Po()}
	<section>
		<h2 id="1-po">{@html applyBase("1 po")}</h2>
	{@html renderMarkdown("\n- Accès à l'hôtel des ventes.\n")}

	</section>
{/snippet}

{#snippet _0Po()}
	<section>
		<h2 id="50-po">{@html applyBase("50 po")}</h2>
	{@html renderMarkdown("\n- Accès à l'hôtel des ventes,\n- **N'est pas taxé par la banque lors d'un retrait.**\n")}

	</section>
{/snippet}

{#snippet _00Po()}
	<section>
		<h2 id="100-po">{@html applyBase("100 po")}</h2>
	{@html renderMarkdown("\n- Accès à l'hôtel des ventes,\n- N'est pas taxé par la banque lors d'un retrait,\n- **Octroie 10% de réduction cher les marchands Runild.**\n")}

	</section>
{/snippet}

{#snippet _00Po_2()}
	<section>
		<h2 id="500-po">{@html applyBase("500 po")}</h2>
	{@html renderMarkdown("\n- Accès à l'hôtel des ventes,\n- N'est pas taxé par la banque lors d'un retrait,\n- Octroie 10% de réduction cher les marchands Runild,\n- **Le compte bancaire peut être bloqué tous les mois pour que la somme actuellement présente engrange 1% de bénéfices.**\n")}

	</section>
{/snippet}

{#snippet _000Po()}
	<section>
		<h2 id="1000-po">{@html applyBase("1000 po")}</h2>
	{@html renderMarkdown("\n- Accès à l'hôtel des ventes,\n- N'est pas taxé par la banque lors d'un retrait,\n- Octroie 10% de réduction cher les marchands Runild,\n- Le compte bancaire peut être bloqué tous les mois pour que la somme actuellement présente engrange **2%** de bénéfices,\n-")}

	</section>
{/snippet}
