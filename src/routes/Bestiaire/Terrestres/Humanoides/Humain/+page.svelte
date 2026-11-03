<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "nature",
          "text": "Nature",
          "level": 2
      },
      {
          "id": "mentalit",
          "text": "Mentalité",
          "level": 2
      },
      {
          "id": "rputation",
          "text": "Réputation",
          "level": 2
      },
      {
          "id": "particularits",
          "text": "Particularités",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Humain"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Humain"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render nature()}
		{@render mentalit()}
		{@render rputation()}
		{@render particularits()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<p>Les Humains constituent l'espèce la plus répandue d'Aerethios.</p>\n<p>Ils ne possèdent ni dons innés remarquables ni faiblesses majeures.</p>"}
{/snippet}

{#snippet nature()}
	<section>
		<h2 id="nature">{@html "Nature"}</h2>
	{@html "<p>Les Humains sont capables de s'adapter à presque toutes les situations.</p>\n<p>Là où les autres peuples sont définis par leur origine ou leur nature, les Humains sont définis par leur capacité à évoluer.</p>"}

	</section>
{/snippet}

{#snippet mentalit()}
	<section>
		<h2 id="mentalit">{@html "Mentalité"}</h2>
	{@html "<p>Ils cherchent constamment à :</p>\n<ul><li>explorer ;</li><li>créer ;</li><li>apprendre ;</li><li>dépasser leurs limites.</li></ul>\n<p>Leur volonté est réputée particulièrement difficile à briser.</p>\n<p>Même face à des obstacles insurmontables, ils continuent souvent à avancer.</p>"}

	</section>
{/snippet}

{#snippet rputation()}
	<section>
		<h2 id="rputation">{@html "Réputation"}</h2>
	{@html "<p>Les autres peuples considèrent souvent les Humains comme imprévisibles.</p>\n<p>Ils sont capables de transformer des idées impossibles en réalités, parfois au prix de leur propre sécurité.</p>"}

	</section>
{/snippet}

{#snippet particularits()}
	<section>
		<h2 id="particularits">{@html "Particularités"}</h2>
	{@html "<ul><li>Grande capacité d'adaptation.</li><li>Forte volonté.</li><li>Curiosité naturelle.</li><li>Présents dans toutes les régions du monde.</li></ul>"}

	</section>
{/snippet}
