<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "gamesh-dieu-scintillant",
          "text": "Gamesh, Dieu Scintillant",
          "level": 2
      },
      {
          "id": "aerel-grande-mre",
          "text": "Aerel, Grande Mère",
          "level": 2
      },
      {
          "id": "radeon-dieu-dormant",
          "text": "Radeon, Dieu Dormant",
          "level": 2
      },
      {
          "id": "obel-dieu-affam",
          "text": "Obel, Dieu Affamé",
          "level": 2
      },
      {
          "id": "kira-dieu-pourpre",
          "text": "Kira, Dieu Pourpre",
          "level": 2
      },
      {
          "id": "imet-dieu-patient",
          "text": "Imet, Dieu Patient",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Dieux</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Dieux</h1>
  </header>
  <div class="markdown-rendered">
		{@render gameshDieuScintillant()}
		{@render aerelGrandeMre()}
		{@render radeonDieuDormant()}
		{@render obelDieuAffam()}
		{@render kiraDieuPourpre()}
		{@render imetDieuPatient()}
  </div>
</article>

<LinkPreview />

{#snippet gameshDieuScintillant()}
	<section>
		<h2 id="gamesh-dieu-scintillant"><a href="%%BASE%%/Notes/Archives/Gamesh_ Dieu Scintillant" class="wiki-link internal-link" data-wiki-href="/Notes/Archives/Gamesh_ Dieu Scintillant" data-wiki-fragment="">Gamesh, Dieu Scintillant</a></h2>
	{@html renderMarkdown("\nDieu de la possession et du partage.\n<img src=\"%%BASE%%/Dieu%20Scintillant.png\" alt=\"Dieu Scintillant.png\" class=\"wiki-image\" />\n\n")}

	</section>
{/snippet}

{#snippet aerelGrandeMre()}
	<section>
		<h2 id="aerel-grande-mre"><a href="%%BASE%%/Notes/Archives/Aerel_ Grande Mere" class="wiki-link internal-link" data-wiki-href="/Notes/Archives/Aerel_ Grande Mere" data-wiki-fragment="">Aerel, Grande Mère</a></h2>
	{@html renderMarkdown("\nDéesse de la fertilité et du plaisir.\n<img src=\"%%BASE%%/Grande%20M%C3%A8re.png\" alt=\"Grande Mère.png\" class=\"wiki-image\" />\n\n")}

	</section>
{/snippet}

{#snippet radeonDieuDormant()}
	<section>
		<h2 id="radeon-dieu-dormant"><a href="%%BASE%%/Notes/Archives/Radeon_ Dieu Dormant" class="wiki-link internal-link" data-wiki-href="/Notes/Archives/Radeon_ Dieu Dormant" data-wiki-fragment="">Radeon, Dieu Dormant</a></h2>
	{@html renderMarkdown("\nDieu des rêves et des ambitions.\n<img src=\"%%BASE%%/Dieu%20Dormant.png\" alt=\"Dieu Dormant.png\" class=\"wiki-image\" />\n<img src=\"%%BASE%%/Dieu%20Dormant%202.png\" alt=\"Dieu Dormant 2.png\" class=\"wiki-image\" />\n\n")}

	</section>
{/snippet}

{#snippet obelDieuAffam()}
	<section>
		<h2 id="obel-dieu-affam"><a href="%%BASE%%/Notes/Archives/Obel_ Dieu Affame" class="wiki-link internal-link" data-wiki-href="/Notes/Archives/Obel_ Dieu Affame" data-wiki-fragment="">Obel, Dieu Affamé</a></h2>
	{@html renderMarkdown("\nDieu d'élévation et de grandeur\n\n")}

	</section>
{/snippet}

{#snippet kiraDieuPourpre()}
	<section>
		<h2 id="kira-dieu-pourpre"><a href="%%BASE%%/Notes/Archives/Kira_ Dieu Pourpre" class="wiki-link internal-link" data-wiki-href="/Notes/Archives/Kira_ Dieu Pourpre" data-wiki-fragment="">Kira, Dieu Pourpre</a></h2>
	{@html renderMarkdown("\nDieu de la guerre et de l'amour.\n<img src=\"%%BASE%%/Dieu%20Pourpre.png\" alt=\"Dieu Pourpre.png\" class=\"wiki-image\" />\n\n")}

	</section>
{/snippet}

{#snippet imetDieuPatient()}
	<section>
		<h2 id="imet-dieu-patient"><a href="%%BASE%%/Notes/Archives/Imet_ Dieu Patient" class="wiki-link internal-link" data-wiki-href="/Notes/Archives/Imet_ Dieu Patient" data-wiki-fragment="">Imet, Dieu Patient</a></h2>
	{@html renderMarkdown("\nDieu de la vie et de la mort.")}

	</section>
{/snippet}
