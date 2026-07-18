<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "le-march-vide",
          "text": "Le Marché Vide",
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
  <title>Gamesh, Dieu Scintillant</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Gamesh, Dieu Scintillant</h1>
  </header>
  <div class="markdown-rendered">
		{@render leMarchVide()}
  </div>
</article>

<LinkPreview />

{#snippet leMarchVide()}
	<section>
		<h2 id="le-march-vide">Le Marché Vide</h2>
	{@html renderMarkdown("\nOn raconte qu’un jour, un homme trouva une place au centre d’une ville.\n\nUne place parfaite. Pavée d’or.\nMais vide.\n\nPas un marchand. Pas une voix.\nSeulement une inscription gravée dans la pierre :\n\n> _“Tout peut être acheté.”_\n\nL’homme rit.\n\nIl posa une pièce.\n\nRien.\n\nAlors il parla :\n— “Je veux du pain.”\n\nUn pain apparut.\n\nIl mangea. Rassasié, il repartit.\n\nMais en sortant de la place, il oublia le goût du pain.\nPuis le visage de sa mère.\nPuis son propre nom.\n\nIl revint en courant.\n\n— “Rends-moi ce que j’ai perdu !”\n\nLa place répondit :\n\n> _“Tout peut être acheté.”_\n\nAlors il comprit.\n\nEt cette fois, il posa quelque chose de plus lourd.\n")}
	{@render totem()}
	{@render chanson()}
	</section>
{/snippet}

{#snippet totem()}
	<section>
		<h3 id="totem">Totem</h3>
	{@html renderMarkdown("\nUne **balance brisée** dont les deux plateaux sont **toujours à niveau**.\n")}

	</section>
{/snippet}

{#snippet chanson()}
	<section>
		<h3 id="chanson">Chanson</h3>
	{@html renderMarkdown("\n> Rien ne vient sans départ\n> Rien ne reste sans prix\n> Ce que je prends t’appartient\n> Ce que je donne me suit")}

	</section>
{/snippet}
