<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Repos"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Repos"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<p>Le repos permet de récupérer de la vie et de la magie, ainsi que de revenir d'un comas.</p>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Court</th><th>Long</th><th>Sécurisé</th></tr></thead><tbody><tr><td><strong>Durée</strong></td><td>< 8h</td><td>8h</td><td>8h</td></tr><tr><td><strong>Lieu</strong></td><td>-</td><td>-</td><td>Dans un lieu sûr (maison personnelle ou de proche)</td></tr><tr><td><strong>HP</strong></td><td>+10</td><td>+20</td><td>+40</td></tr><tr><td><strong>MP</strong></td><td>+1 (si les HP sont pleins)</td><td>+1 (cumulatif si les HP sont pleins)<br>+1 (non cumulatif sinon)<br>-(5-crystaux) nécrose</td><td>+2 (cumulatif si les HP sont pleins)<br>+2 (non cumulatif sinon)<br>-(5-crystaux) nécrose</td></tr><tr><td><strong>Comas</strong></td><td>Impossible d'en revenir</td><td>-</td><td>-</td></tr></tbody></table></div>\n<p>Pendant un comas, le joueur ne peut pas régénérer des MP, et la régénération de HP est divisée par 2.</p>"}
{/snippet}
