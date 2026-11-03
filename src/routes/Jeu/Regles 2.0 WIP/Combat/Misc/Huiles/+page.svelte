<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "huiles",
          "text": "Huiles",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Huiles"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Huiles"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render huiles()}
  </div>
</article>

<LinkPreview />

{#snippet huiles()}
	<section>
		<h3 id="huiles">{@html "Huiles"}</h3>
	{@html applyBase("<blockquote>Fait par un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New#huiles\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" data-wiki-fragment=\"Huiles\">Potionniste</a> pour déterminer les dégâts (DMG arrondi vers le bas).</blockquote>\n<p>Ajoute temporairement l'effet d'1 huile à l'arme (dure 1 combat et n'est pas cumulable).</p>\n<p>Les huiles ne s'appliquent que sur les armes Tranchantes, Perforantes et à Corde.</p>")}

	</section>
{/snippet}
