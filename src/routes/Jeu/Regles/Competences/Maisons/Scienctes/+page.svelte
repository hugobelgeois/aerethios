<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "initi",
          "text": "Initié",
          "level": 2
      },
      {
          "id": "mage",
          "text": "Mage",
          "level": 2
      },
      {
          "id": "archimage",
          "text": "Archimage",
          "level": 2
      },
      {
          "id": "hiromage",
          "text": "Hiéromage",
          "level": 2
      },
      {
          "id": "magister",
          "text": "Magister",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Scienctes</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Scienctes</h1>
  </header>
  <div class="markdown-rendered">
		{@render initi()}
		{@render mage()}
		{@render archimage()}
		{@render hiromage()}
		{@render magister()}
  </div>
</article>

<LinkPreview />

{#snippet initi()}
	<section>
		<h2 id="initi">{@html applyBase("Initié")}</h2>
	{@html renderMarkdown("\n| Crystaux | Maîtrise Magique | Magies Débloquées | Points magiques |\n| :------: | :--------------: | :---------------: | :-------------: |\n|    5     |        1         |         3         |    20 [2-10]    |\n\n- **se concentrer pour récupérer 1 crystal (ne permet pas de prendre 10/20 en même temps).**\n")}

	</section>
{/snippet}

{#snippet mage()}
	<section>
		<h2 id="mage">{@html applyBase("Mage")}</h2>
	{@html renderMarkdown("\n| Crystaux | Maîtrise Magique | Magies Débloquées | Points magiques |\n| :------: | :--------------: | :---------------: | :-------------: |\n|  **10**  |      **2**       |       **4**       |  **30 [3-11]**  |\n\n- se concentrer pour récupérer **2 crystaux** (ne permet pas de prendre 10/20 en même temps),\n- **la régénération passive de crystaux est doublée.**\n")}

	</section>
{/snippet}

{#snippet archimage()}
	<section>
		<h2 id="archimage">{@html applyBase("Archimage")}</h2>
	{@html renderMarkdown("\n| Crystaux | Maîtrise Magique | Magies Débloquées | Points magiques |\n| :------: | :--------------: | :---------------: | :-------------: |\n|  **15**  |      **3**       |       **5**       |  **40 [4-12]**  |\n\n- se concentrer pour récupérer **3 crystaux** (ne permet pas de prendre 10/20 en même temps),\n- la régénération passive de crystaux est doublée,\n- **augmente les dégâts magiques de 2 par crystal.**\n")}

	</section>
{/snippet}

{#snippet hiromage()}
	<section>
		<h2 id="hiromage">{@html applyBase("Hiéromage")}</h2>
	{@html renderMarkdown("\n| Crystaux | Maîtrise Magique | Magies Débloquées | Points magiques |\n| :------: | :--------------: | :---------------: | :-------------: |\n|  **20**  |      **4**       |       **6**       |  **50 [5-13]**  |\n\n- se concentrer pour récupérer **4 crystaux** (ne permet pas de prendre 10/20 en même temps),\n- la régénération passive de crystaux est doublée,\n- augmente les dégâts magiques de **4 par crystal**.\n")}

	</section>
{/snippet}

{#snippet magister()}
	<section>
		<h2 id="magister">{@html applyBase("Magister")}</h2>
	{@html renderMarkdown("\n| Crystaux | Maîtrise Magique | Magies Débloquées | Points magiques |\n| :------: | :--------------: | :---------------: | :-------------: |\n|    20    |      **5**       |       **7**       |  **60 [6-14]**  |\n\n- se concentrer pour récupérer **5 crystaux** (ne permet pas de prendre 10/20 en même temps),\n- la régénération passive de crystaux est doublée,\n- augmente les dégâts magiques de **6 par crystal.**")}

	</section>
{/snippet}
