<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "combat",
          "text": "Combat",
          "level": 2
      },
      {
          "id": "v2",
          "text": "v2",
          "level": 3
      },
      {
          "id": "utilitaire",
          "text": "Utilitaire",
          "level": 2
      },
      {
          "id": "toiles-clestes",
          "text": "Toiles Célestes",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Magie"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Magie"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render combat()}
		{@render utilitaire()}
		{@render toilesClestes()}
  </div>
</article>

<LinkPreview />

{#snippet combat()}
	<section>
		<h2 id="combat">{@html "Combat"}</h2>
	{@html "<blockquote>Dé + Mental(Arcaniste|Intelligence|Sagesse) >= AC -> DR - (Résultat * (Crystaux + Toile Célèste)) = Dégâts au HP</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Dé de précision</th><th>Résultat (Mental [-5:10])</th><th>Crystaux max (% de la Magie)<br>Arrondi vers le haut</th><th>Dégâts (Magie [0:10])</th></tr></thead><tbody><tr><td>2d12</td><td>[-3:34]</td><td>10%</td><td>[3:34]</td></tr><tr><td>2d8</td><td>[-3:26]</td><td>20%</td><td>[3:52]</td></tr><tr><td>1d12</td><td>[-4:22]</td><td>40%</td><td>[4:88]</td></tr><tr><td>1d8</td><td>[-4:18]</td><td>70%</td><td>[4:126]</td></tr><tr><td>1d4</td><td>[-4:14]</td><td>100%</td><td>[4:140]</td></tr></tbody></table></div>\n<p>Si l'attaque n'atteint pas l'AC, lancer 1d4 pour savoir combien de crystaux ont été consommé.</p>"}
	{@render v2()}
	</section>
{/snippet}

{#snippet v2()}
	<section>
		<h3 id="v2">{@html "v2"}</h3>
	{@html "<p>(Dé de magie + Maîtrise) x Nombre de crystaux + Toile Célèste = Dégâts</p>\n<p>(1d12 + [0:10]) x [1:20] + ? = [1:440]</p>"}

	</section>
{/snippet}

{#snippet utilitaire()}
	<section>
		<h2 id="utilitaire">{@html "Utilitaire"}</h2>
	{@html "<blockquote>1d20 + Mental (Arcaniste|Intelligence|Sagesse) >= DC</blockquote>\n<p>S'il s'agit d'un buff, le coût en crystaux varie selon le type de stats que l'on souhaite buffer.</p>\n<p>S'il s'agit d'une action particulière, le MJ décide du coût en crystaux.</p>"}

	</section>
{/snippet}

{#snippet toilesClestes()}
	<section>
		<h2 id="toiles-clestes">{@html "Toiles Célestes"}</h2>
	{@html "<p>S'il s'agit d'une Toile basée sur les magies courantes, on ajoute la valeur de la Toile</p>"}

	</section>
{/snippet}
