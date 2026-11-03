<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "bte",
          "text": "Bête",
          "level": 1
      },
      {
          "id": "insectode",
          "text": "Insectoïde",
          "level": 1
      },
      {
          "id": "ncrophages",
          "text": "Nécrophages",
          "level": 1
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Naturels"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Naturels"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render bte()}
		{@render insectode()}
		{@render ncrophages()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<p>Toutes les créatures qui existent dans le vrai monde mais dont la taille peut avoir été modifiée</p>"}
{/snippet}

{#snippet bte()}
	<section>
		<h1 id="bte">{@html "<span class=\"wiki-unresolved\">Bête</span>"}</h1>


	</section>
{/snippet}

{#snippet insectode()}
	<section>
		<h1 id="insectode">{@html "<span class=\"wiki-unresolved\">Insectoïde</span>"}</h1>


	</section>
{/snippet}

{#snippet ncrophages()}
	<section>
		<h1 id="ncrophages">{@html "<span class=\"wiki-unresolved\">Nécrophages</span>"}</h1>


	</section>
{/snippet}
