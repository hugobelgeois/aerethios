<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
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
  <title>Humain</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Humain</h1>
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
	{@html renderMarkdown("Les Humains constituent l'espèce la plus répandue d'Aerethios.\n\nIls ne possèdent ni dons innés remarquables ni faiblesses majeures.\n")}
{/snippet}

{#snippet nature()}
	<section>
		<h2 id="nature">{@html applyBase("Nature")}</h2>
	{@html renderMarkdown("\nLes Humains sont capables de s'adapter à presque toutes les situations.\n\nLà où les autres peuples sont définis par leur origine ou leur nature, les Humains sont définis par leur capacité à évoluer.\n")}

	</section>
{/snippet}

{#snippet mentalit()}
	<section>
		<h2 id="mentalit">{@html applyBase("Mentalité")}</h2>
	{@html renderMarkdown("\nIls cherchent constamment à :\n- explorer ;\n- créer ;\n- apprendre ;\n- dépasser leurs limites.\n\nLeur volonté est réputée particulièrement difficile à briser.\n\nMême face à des obstacles insurmontables, ils continuent souvent à avancer.\n")}

	</section>
{/snippet}

{#snippet rputation()}
	<section>
		<h2 id="rputation">{@html applyBase("Réputation")}</h2>
	{@html renderMarkdown("\nLes autres peuples considèrent souvent les Humains comme imprévisibles.\n\nIls sont capables de transformer des idées impossibles en réalités, parfois au prix de leur propre sécurité.\n")}

	</section>
{/snippet}

{#snippet particularits()}
	<section>
		<h2 id="particularits">{@html applyBase("Particularités")}</h2>
	{@html renderMarkdown("\n- Grande capacité d'adaptation.\n- Forte volonté.\n- Curiosité naturelle.\n- Présents dans toutes les régions du monde.")}

	</section>
{/snippet}
