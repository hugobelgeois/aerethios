<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "armes",
          "text": "Armes",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Tests</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Tests</h1>
  </header>
  <div class="markdown-rendered">
		{@render armes()}
  </div>
</article>

<LinkPreview />

{#snippet armes()}
	<section>
		<h2 id="armes">Armes</h2>
	{@html renderMarkdown("\r\n| Catégorie                                 | Type                            | Concentration | Revêtement | Entretien        | Infusion                  |         **Dégâts**          | Magie | Style                        | Huiles/Résines |\r\n| ----------------------------------------- | ------------------------------- | ------------- | ---------- | ---------------- | ------------------------- | :-------------------------: | ----- | ---------------------------- | -------------- |\r\n| Courte, 1 Main, 2 Mains<br>2d10, 2d8, 2d6 | C, P, T<br>-3DR Lourde, -, -1DR | 6, 7, 8, 9    | 0, 1, 2    | -4, -2, -1, 0, 1 | -9, -6, -3, -5, -2, 5, 10 |                             |       | 1, 2, 3, 4<br>-1, -2, -3, -4 |                |\r\n|                                           |                                 | 6:9           | 0:2        | -4:1             | -9:10 dmg<br>0:10 mod     |          **2:12**           | 1:12  | -4:4                         |                |\r\n| 2x (2d10) .5dmg                           |                                 |               |            |                  | 5:10 dmg                  |          **3:11**           |       | 0:10                         |                |\r\n| 2x (2d10) .5dmg                           |                                 |               |            |                  | -2 dmg<br>0:10 mod        | **0:5<br>11:21 touche ~16** | -     | 0:10                         |                |\r\n| 2x (2d10) .5dmg                           |                                 |               |            |                  | -9:-3 dmg                 |           **0:4**           | 1:16  | 0:10                         | -              |\r\n|                                           |                                 |               |            |                  |                           |                             |       |                              |                |\r\n| 2d8 1dmg                                  |                                 |               |            |                  | 5:10 dmg                  |          **7:22**           | -     | 0:16                         |                |\r\n| 2d8 1dmg                                  |                                 |               |            |                  | -2 dmg<br>0:10 mod        | **5:20<br>9:19 touche ~14** | -     | 0:16                         |                |\r\n| 2d8 1dmg                                  |                                 |               |            |                  | -9:-3 dmg                 |           **0:9**           | 1:21  | 0:16                         | -              |\r\n|                                           |                                 |               |            |                  |                           |                             |       |                              |                |\r\n| 2d6 1.5 dmg                               |                                 |               |            |                  | 5:10 dmg                  |          **10:33**          | -     | 0:22                         |                |\r\n| 2d6 1.5 dmg                               |                                 |               |            |                  | -2 dmg<br>0:10 mod        | **0:15<br>7:17 touche ~12** | -     | 0:22                         |                |\r\n| 2d6 1.5 dmg                               |                                 |               |            |                  | -9:-3 dmg                 |          **0:13**           | 1:25  | 0:22                         | -              |")}

	</section>
{/snippet}
