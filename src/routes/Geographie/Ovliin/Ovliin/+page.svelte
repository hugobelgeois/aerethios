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
          "id": "mtropol",
          "text": "Métropol",
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
  <title>Ovliin</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Ovliin</h1>
  </header>
  <div class="markdown-rendered">
		{@render capitale()}
		{@render mtropol()}
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
	{@html renderMarkdown("<span class=\"wiki-unresolved\">Ruvik</span>\n")}

	</section>
{/snippet}

{#snippet mtropol()}
	<section>
		<h2 id="mtropol">Métropol</h2>
	{@html renderMarkdown("<span class=\"wiki-unresolved\">Bizmor</span>\n<span class=\"wiki-unresolved\">Brek</span>\n<span class=\"wiki-unresolved\">Gronok</span>\n<span class=\"wiki-unresolved\">Kraken</span>\n<span class=\"wiki-unresolved\">Mirnjoll</span>\n<span class=\"wiki-unresolved\">Ruskit</span>\n<span class=\"wiki-unresolved\">Siv</span>\n<span class=\"wiki-unresolved\">Urvalsn</span>\n<span class=\"wiki-unresolved\">Viskars</span>\n<span class=\"wiki-unresolved\">Wolg</span>\n<span class=\"wiki-unresolved\">Zuvir</span>\n")}

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
