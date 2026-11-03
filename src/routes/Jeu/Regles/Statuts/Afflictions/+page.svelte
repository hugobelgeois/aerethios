<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "saignement",
          "text": "Saignement",
          "level": 2
      },
      {
          "id": "poison",
          "text": "Poison",
          "level": 2
      },
      {
          "id": "surcharge",
          "text": "Surcharge",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Afflictions"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Afflictions"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render saignement()}
		{@render poison()}
		{@render surcharge()}
  </div>
</article>

<LinkPreview />

{#snippet saignement()}
	<section>
		<h2 id="saignement">{@html "Saignement"}</h2>
	{@html "<p>La cible perd Xd4 HP par tour jusqu'à être soignée.<br>\n<em>X représente le nombre de saignement appliqués.</em></p>\n<p>Soin :</p>\n<ul><li>kit de soin,</li><li>sort de soutien de DC 20.</li></ul>"}

	</section>
{/snippet}

{#snippet poison()}
	<section>
		<h2 id="poison">{@html "Poison"}</h2>
	{@html "<p>La cible prend 1d6 HP par tour pendant 3 tours ou jusqu'à être soigné.</p>\n<p>Chaque nouvelle application ajoute 3 tours.</p>\n<p>Soin :</p>\n<ul><li>antidote,</li><li>sort de soutien de DC 15.</li></ul>"}

	</section>
{/snippet}

{#snippet surcharge()}
	<section>
		<h2 id="surcharge">{@html "Surcharge"}</h2>
	{@html "<p>La cible perd 1d4 crystaux et perd 4 HP par crystal perdu.</p>\n<p>Une fois atteinte de Surcharge, la cible est immunisé pour le reste du combat.</p>"}

	</section>
{/snippet}
