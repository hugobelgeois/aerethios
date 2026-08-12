<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Repos</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Repos</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("Le repos permet de récupérer de la vie et de la magie, ainsi que de revenir d'un comas.\n\n|           | Court                      | Long                                                             | Sécurisé                                                         |\n| --------- | -------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |\n| **Durée** | < 8h                       | 8h                                                               | 8h                                                               |\n| **Lieu**  | -                          | -                                                                | Dans un lieu sûr (ville, maison personnelle)                     |\n| **HP**    | +10                        | +20                                                              | +40                                                              |\n| **MP**    | +1 (si les HP sont pleins) | +1 (cumulatif si les HP sont pleins)<br>+1 (non cumulatif sinon) | +2 (cumulatif si les HP sont pleins)<br>+2 (non cumulatif sinon) |\n| **Comas** | Impossible                 | -                                                                | -                                                                |\n\nPendant un comas, le joueur ne peut pas régénérer des MP, et la régénération de HP est divisée par 2.")}
{/snippet}
