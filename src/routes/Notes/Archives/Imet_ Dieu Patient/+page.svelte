<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "la-porte-qui-ne-souvre-pas",
          "text": "La Porte Qui Ne S’Ouvre Pas",
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
  <title>Imet, Dieu Patient</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Imet, Dieu Patient</h1>
  </header>
  <div class="markdown-rendered">
		{@render laPorteQuiNeSouvrePas()}
  </div>
</article>

<LinkPreview />

{#snippet laPorteQuiNeSouvrePas()}
	<section>
		<h2 id="la-porte-qui-ne-souvre-pas">La Porte Qui Ne S’Ouvre Pas</h2>
	{@html renderMarkdown("\nUn vieil homme trouva une porte au milieu de nulle part.\n\nIl voulut l’ouvrir.\n\nMais elle n’avait ni poignée, ni serrure.\n\nAlors il attendit.\n\nLes jours passèrent.\nPuis les années.\n\nIl vieillissait.\n\nUn jour, il tomba.\n\nEt dans sa chute, il passa à travers la porte.\n\nDerrière, il vit tout ce qu’il avait été.\nEt tout ce qu’il deviendrait.\n\nAlors il comprit.\n\nLa porte ne s’ouvre pas.\n\nElle se traverse.\n")}
	{@render totem()}
	{@render chanson()}
	</section>
{/snippet}

{#snippet totem()}
	<section>
		<h3 id="totem">Totem</h3>
	{@html renderMarkdown("\nUne **porte sans poignée**, fendue en son centre\n")}

	</section>
{/snippet}

{#snippet chanson()}
	<section>
		<h3 id="chanson">Chanson</h3>
	{@html renderMarkdown("\n> Rien ne s’ouvre ni ne ferme\n> Rien ne naît ni ne meurt\n> Je passe et suis passé\n> Et le chemin demeure")}

	</section>
{/snippet}
