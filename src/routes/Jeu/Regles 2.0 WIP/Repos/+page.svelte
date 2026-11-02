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
	{@html renderMarkdown("Le repos permet de récupérer de la vie et de la magie, ainsi que de revenir d'un comas.\r\n\r\n|           | Court                      | Long                                                                                      | Sécurisé                                                                                  |\r\n| --------- | -------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |\r\n| **Durée** | < 8h                       | 8h                                                                                        | 8h                                                                                        |\r\n| **Lieu**  | -                          | -                                                                                         | Dans un lieu sûr (maison personnelle ou de proche)                                        |\r\n| **HP**    | +10                        | +20                                                                                       | +40                                                                                       |\r\n| **MP**    | +1 (si les HP sont pleins) | +1 (cumulatif si les HP sont pleins)<br>+1 (non cumulatif sinon)<br>-(5-crystaux) nécrose | +2 (cumulatif si les HP sont pleins)<br>+2 (non cumulatif sinon)<br>-(5-crystaux) nécrose |\r\n| **Comas** | Impossible d'en revenir    | -                                                                                         | -                                                                                         |\r\n\r\nPendant un comas, le joueur ne peut pas régénérer des MP, et la régénération de HP est divisée par 2.")}
{/snippet}
