<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
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
  <title>Suraja</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Suraja</h1>
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
		<h2 id="capitale">Capitale</h2>
	{@html renderMarkdown("<span class=\"wiki-unresolved\">Rhadiz</span>\n")}

	</section>
{/snippet}

{#snippet mtropole()}
	<section>
		<h2 id="mtropole">Métropole</h2>
	{@html renderMarkdown("<span class=\"wiki-unresolved\">Azurv</span>\n<span class=\"wiki-unresolved\">Eynamar</span>\n<span class=\"wiki-unresolved\">Irkma</span>\n<span class=\"wiki-unresolved\">Korkaahn</span>\n<span class=\"wiki-unresolved\">Myurnil</span>\n<span class=\"wiki-unresolved\">Xubilayl</span>\n<span class=\"wiki-unresolved\">Zonig</span>\n")}

	</section>
{/snippet}

{#snippet grandeVille()}
	<section>
		<h2 id="grande-ville">Grande Ville</h2>


	</section>
{/snippet}

{#snippet ville()}
	<section>
		<h2 id="ville">Ville</h2>


	</section>
{/snippet}

{#snippet bourg()}
	<section>
		<h2 id="bourg">Bourg</h2>


	</section>
{/snippet}

{#snippet village()}
	<section>
		<h2 id="village">Village</h2>


	</section>
{/snippet}

{#snippet hameau()}
	<section>
		<h2 id="hameau">Hameau</h2>


	</section>
{/snippet}
