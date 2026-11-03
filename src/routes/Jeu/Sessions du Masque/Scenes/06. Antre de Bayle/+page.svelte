<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "description",
          "text": "Description",
          "level": 2
      },
      {
          "id": "dtails",
          "text": "Détails",
          "level": 2
      },
      {
          "id": "maps",
          "text": "Maps",
          "level": 3
      },
      {
          "id": "rencontres",
          "text": "Rencontres",
          "level": 3
      },
      {
          "id": "intrigues",
          "text": "Intrigues",
          "level": 2
      },
      {
          "id": "actions-des-joueurs",
          "text": "Actions des joueurs",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"06. Antre de Bayle"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"06. Antre de Bayle"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render description()}
		{@render dtails()}
		{@render intrigues()}
		{@render actionsDesJoueurs()}
  </div>
</article>

<LinkPreview />

{#snippet description()}
	<section>
		<h2 id="description">{@html "Description"}</h2>
	{@html "<blockquote>Description à lire aux joueurs en entrant dans cette scène.</blockquote>\n<p>\t...</p>"}

	</section>
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html "Détails"}</h2>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Lieu</th><th>Météo</th><th>Heure</th><th>Musique</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td></tr></tbody></table></div>"}
	{@render maps()}
	{@render rencontres()}
	</section>
{/snippet}

{#snippet maps()}
	<section>
		<h3 id="maps">{@html "Maps"}</h3>


	</section>
{/snippet}

{#snippet rencontres()}
	<section>
		<h3 id="rencontres">{@html "Rencontres"}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Nom</th><th>Rôle</th><th>Race</th><th>Sexe</th><th>Age</th><th>Personnalité</th><th>Accent</th><th>Equipement</th></tr></thead><tbody><tr><td>Bayle</td><td>Ennemi de Placidusax et Fortissax</td><td>Dragon</td><td></td><td>-</td><td>Agressif, ne parle pas</td><td>-</td><td><span class=\"wiki-unresolved\">6-Bayle.jpg\\</span></td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet intrigues()}
	<section>
		<h2 id="intrigues">{@html "Intrigues"}</h2>
	{@html "<blockquote>Evénements et leur conclusion sans l'intervention des joueurs</blockquote>\n<p>-</p>"}

	</section>
{/snippet}

{#snippet actionsDesJoueurs()}
	<section>
		<h2 id="actions-des-joueurs">{@html "Actions des joueurs"}</h2>
	{@html "<ul><li></li></ul>"}

	</section>
{/snippet}
