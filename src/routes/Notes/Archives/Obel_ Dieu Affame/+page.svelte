<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "le-roi-trop-grand",
          "text": "Le Roi Trop Grand",
          "level": 2
      },
      {
          "id": "totem",
          "text": "Totem",
          "level": 3
      },
      {
          "id": "chanson",
          "text": "Chanson",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Obel, Dieu Affamé</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Obel, Dieu Affamé</h1>
  </header>
  <div class="markdown-rendered">
		{@render leRoiTropGrand()}
  </div>
</article>

<LinkPreview />

{#snippet leRoiTropGrand()}
	<section>
		<h2 id="le-roi-trop-grand">Le Roi Trop Grand</h2>
	{@html renderMarkdown("\nUn roi voulait être plus grand que tous les rois.\n\nAlors il mangea.\n\nIl mangea la viande des bêtes.\nPuis les récoltes.\nPuis les terres.\n\nMais cela ne suffit pas.\n\nAlors il mangea ses ennemis.\nPuis ses alliés.\nPuis son peuple.\n\nEt enfin, il devint immense.\n\nMais il était seul.\n\nAlors il parla au ciel :\n\n— “Je suis le plus grand.”\n\nEt le ciel répondit :\n\n> _“Tu es ce qu’il reste.”_\n\nLe roi regarda ses mains.\n\nEt il comprit qu’il avait tout perdu…\npour devenir cela.\n")}
	{@render totem()}
	{@render chanson()}
	</section>
{/snippet}

{#snippet totem()}
	<section>
		<h3 id="totem">Totem</h3>
	{@html renderMarkdown("\nUne **bouche ouverte** dont l’intérieur forme une **montagne**\n")}

	</section>
{/snippet}

{#snippet chanson()}
	<section>
		<h3 id="chanson">Chanson</h3>
	{@html renderMarkdown("\n> Rien ne croît sans chute\n> Rien ne monte sans perte\n> Ce que je prends me change\n> Ce que je perds me fait")}

	</section>
{/snippet}
