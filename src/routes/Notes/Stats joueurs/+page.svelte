<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Stats joueurs</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Stats joueurs</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("|              | Force  | Dextérité | Mental | Perception |     Charisme      |\n| ------------ | :----: | :-------: | :----: | :--------: | :---------------: |\n| **Arek**     | **16** |  **10**   | **15** |   **10**   |       **8**       |\n|              |   +3   |     0     |   +2   |     0      |        -1         |\n| **Cira**     | **7**  |  **14**   | **10** |   **12**   |      **16**       |\n|              |   -2   |    +2     |   0    |     +1     |        +3         |\n| **Dara**     | **6**  |  **17**   | **14** |   **13**   | **7 (+1 wasabi)** |\n|              |   -2   |    +3     |   +2   |     +1     |        -1         |\n| **Haelrak**  | **8**  |  **15**   | **16** |   **12**   |       **6**       |\n|              |   -1   |    +2     |   +3   |     +1     |        -2         |\n| **Hazdaim**  | **9**  |  **14**   | **10** |   **12**   |      **12**       |\n|              |   -1   |    +2     |   0    |     +1     |        +1         |\n| **Léoric**   | **11** |  **11**   | **13** |   **11**   |      **11**       |\n|              |   0    |     0     |   +1   |     0      |         0         |\n| **Zveindel** | **10** |  **10**   | **15** |   **14**   |       **8**       |\n|              |   0    |     0     |   +2   |     +2     |        -1         |\n")}
{/snippet}
