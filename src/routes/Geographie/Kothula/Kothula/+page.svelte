<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "capitale",
          "text": "Capitale",
          "level": 2
      },
      {
          "id": "mtropole",
          "text": "Métropole",
          "level": 2
      },
      {
          "id": "grande-ville",
          "text": "Grande Ville",
          "level": 2
      },
      {
          "id": "ville",
          "text": "Ville",
          "level": 2
      },
      {
          "id": "bourg",
          "text": "Bourg",
          "level": 2
      },
      {
          "id": "village",
          "text": "Village",
          "level": 2
      },
      {
          "id": "hameau",
          "text": "Hameau",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Kothula</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Kothula</h1>
  </header>
  <div class="markdown-rendered">
		{@render capitale()}
		{@render mtropole()}
		{@render grandeVille()}
		{@render ville()}
		{@render bourg()}
		{@render village()}
		{@render hameau()}
  </div>
</article>

<LinkPreview />

{#snippet capitale()}
	<section>
		<h2 id="capitale">{@html applyBase("Capitale")}</h2>
	{@html renderMarkdown("<span class=\"wiki-unresolved\">Alegael</span>\n")}

	</section>
{/snippet}

{#snippet mtropole()}
	<section>
		<h2 id="mtropole">{@html applyBase("Métropole")}</h2>
	{@html renderMarkdown("<span class=\"wiki-unresolved\">Chenav</span>\n<span class=\"wiki-unresolved\">Eogulf</span>\n<span class=\"wiki-unresolved\">Gelbiq</span>\n<span class=\"wiki-unresolved\">Izmir</span>\n<span class=\"wiki-unresolved\">Kamini</span>\n<span class=\"wiki-unresolved\">Payiong</span>\n<span class=\"wiki-unresolved\">Valdos</span>\n")}

	</section>
{/snippet}

{#snippet grandeVille()}
	<section>
		<h2 id="grande-ville">{@html applyBase("Grande Ville")}</h2>


	</section>
{/snippet}

{#snippet ville()}
	<section>
		<h2 id="ville">{@html applyBase("Ville")}</h2>


	</section>
{/snippet}

{#snippet bourg()}
	<section>
		<h2 id="bourg">{@html applyBase("Bourg")}</h2>


	</section>
{/snippet}

{#snippet village()}
	<section>
		<h2 id="village">{@html applyBase("Village")}</h2>


	</section>
{/snippet}

{#snippet hameau()}
	<section>
		<h2 id="hameau">{@html applyBase("Hameau")}</h2>


	</section>
{/snippet}
