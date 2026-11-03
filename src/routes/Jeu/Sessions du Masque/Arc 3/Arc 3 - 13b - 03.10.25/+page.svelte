<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "dtails",
          "text": "Détails",
          "level": 2
      },
      {
          "id": "scnario",
          "text": "Scénario",
          "level": 2
      },
      {
          "id": "notes",
          "text": "Notes",
          "level": 2
      },
      {
          "id": "joueurs",
          "text": "Joueurs",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Arc 3 - 13b - 03.10.25"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 3 - 13b - 03.10.25"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render dtails()}
		{@render scnario()}
		{@render notes()}
		{@render joueurs()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<blockquote>Le Dieu Dormant les envoie dans l'antre du masque qui est occupé dans un conflit</blockquote>"}
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html "Détails"}</h2>
	{@html "<p>Lieu actuel : Suraja, Irkma + Dimension du masque</p>\n<p>Objectif : Infiltrer la dimension du masque pour en savoir plus sur lui</p>\n<p>Pnjs notables : Dieu Dormant, Rysom Javak</p>"}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html "Scénario"}</h2>


	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html "Notes"}</h2>
	{@html "<p>Le Dieu Dormant leur rend visite pour leur dire que le masque est occupé à Nirina, et que c'est le moment de se rendre dans son antre pour en savoir plus<br>\nS'ils refusent, le dieu dit qu'il ne leur demandait pas leur avis et les y envoie</p>\n<p>En tombant dans son antre, ils peuvent essayer d'attraper un des corps suspendu<br>\nCe joueur supplémentaire est Rysom Javak</p>\n<p><strong>Co-dm</strong><br>\nChaque joueur va décrire comment il imagine l'environnement, quels dangers il contient, et le vrai mj va adapter une petite aventure/épreuve autour</p>\n<p>A la fin de leurs épreuves, ils voient un coeur battre au centre d'une salle sombre<br>\nS'ils plantent une arme dedans, ils se font éjecter de l'antre</p>"}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html "Joueurs"}</h2>
	{@html applyBase("<ul><li><input type=\"checkbox\" disabled> Diego 14</li><li><input type=\"checkbox\" disabled checked> Loïc 11</li><li><input type=\"checkbox\" disabled> Lucas 4</li><li><input type=\"checkbox\" disabled checked> Michel 16</li><li><input type=\"checkbox\" disabled> Nolan 3</li><li><input type=\"checkbox\" disabled checked> Thomas 15</li><li><input type=\"checkbox\" disabled> William 7</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Précédent</th><th>Suivant</th></tr></thead><tbody><tr><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 12 - 19.09.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 12 - 19.09.25\" data-wiki-fragment=\"\">Arc 3 - 12 - 19.09.25</a></td><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 14 - 11.10.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 14 - 11.10.25\" data-wiki-fragment=\"\">Arc 3 - 14 - 11.10.25</a></td></tr></tbody></table></div>")}

	</section>
{/snippet}
