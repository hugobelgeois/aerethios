<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "mle",
          "text": "Mêlée",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Dégâts</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Dégâts</h1>
  </header>
  <div class="markdown-rendered">
		{@render mle()}
  </div>
</article>

<LinkPreview />

{#snippet mle()}
	<section>
		<h2 id="mle">{@html applyBase("Mêlée")}</h2>
	{@html renderMarkdown("\n| Base           | Court     | 1 Main     | 2 Mains    |\n| -------------- | --------- | ---------- | ---------- |\n| **Contondant** | 6 [7-17]  | 12 [13-20] | 16 [17-22] |\n| **Tranchant**  | 4 [5-15]  | 8 [9-16]   | 12 [13-18] |\n| **Perforant**  | 3 [4-14]  | 6 [7-14]   | 9 [10-15]  |\n|                | +[1 - 10] | +[1 - 8]   | +[1 - 6]   |\n\n| Infusions | Huiles<br>(sauf contondant) | Magie     |\n| --------- | --------------------------- | --------- |\n| +[2 - 16] | -                           | -         |\n| -[1 - 6]  | +[1 - 5]                    | -         |\n| -[2 - 10] | -                           | +[1 - 15] |\n\n| Base           | Maniement |       Base | Ligne 1 : Infusion | Ligne 2 : Huile | Ligne 3 : Magie |\n| -------------- | --------- | ---------: | -----------------: | --------------: | --------------: |\n| **Contondant** | Court     |   6 [7–17] |         **[9–33]** |      **[1–16]** |     **[-2–30]** |\n| **Contondant** | 1 Main    | 12 [13–20] |        **[15–36]** |      **[7–19]** |      **[3–33]** |\n| **Contondant** | 2 Mains   | 16 [17–22] |        **[19–38]** |     **[11–21]** |      **[7–35]** |\n| **Tranchant**  | Court     |   4 [5–15] |         **[7–31]** |      **[0–19]** |     **[-5–28]** |\n| **Tranchant**  | 1 Main    |   8 [9–16] |        **[11–32]** |      **[4–20]** |     **[-1–29]** |\n| **Tranchant**  | 2 Mains   | 12 [13–18] |        **[15–34]** |      **[8–22]** |      **[3–31]** |\n| **Perforant**  | Court     |   3 [4–14] |         **[6–30]** |     **[-1–18]** |     **[-6–27]** |\n| **Perforant**  | 1 Main    |   6 [7–14] |         **[8–30]** |      **[2–18]** |     **[-3–27]** |\n| **Perforant**  | 2 Mains   |  9 [10–15] |        **[12–31]** |      **[5–19]** |      **[0–28]** |\n\n+VS\n+Surprise [1-10]\n+Cuisine [1-4] -> [0-2]\n+Compétence [0-14]\n\n= [0 - 24]\n\nDégâts max : Contondant 2 Mains : 62 DMG\n\nNote\n- Perforant est globalement plus faible que le reste\n- Contondant 1/2 Mains est plus fort que le reste")}

	</section>
{/snippet}
