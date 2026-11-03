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
  <title>{"Arc 2.5 - 10 - 06.07.25 Diego"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 2.5 - 10 - 06.07.25 Diego"}</h1>
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
	{@html "<blockquote>Résumé</blockquote>"}
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html "Détails"}</h2>
	{@html "<p>Lieu actuel : Suraja, [[]]</p>\n<p>Objectif :</p>\n<p>Pnjs notables : -</p>"}

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
	{@html "<blockquote>Commerce avec son père dans la ville voisine<br>Négocie un achat d'un petit Lagiacrus, <em>Dracodo</em><br><br><del>Fast forward, le nécromancien arrive</del><br>Dara s'enfuit avec la Toile et le Lagiacrus <em>avant que le nécromancien n'arrive</em><br>~~Il est pourchassé par un membre de sa famille mort-vivant<br>Combat contre lui et le Lagiacrus se sacrifie~~<br><br>Fast forward, il a erré de ville en villages pour fuir le nécromancien et pour survivre de quêtes et de troque pendant plusieurs années<br>*Il profite de son renouveau pour apprendre l'eau au lieu de la foudre<br>Avec sa maturité du \"futur\", il en profite pour se créer un réseau ainsi qu'un fond de commerce dans Suraja*<br>Il fini par arriver au port Nord de Suraja avant de prendre un bateau qui le mène au début du jdr</blockquote>\n<p>Résultat :</p>\n<ul><li>Nouvelle magie d'eau</li><li>Lagiacrus</li><li>Réseau légal de commerce dans Suraja</li></ul>"}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html "Joueurs"}</h2>
	{@html applyBase("<ul><li><input type=\"checkbox\" disabled checked> Diego</li><li><input type=\"checkbox\" disabled> Loïc</li><li><input type=\"checkbox\" disabled> Michel</li><li><input type=\"checkbox\" disabled> Thomas</li><li><input type=\"checkbox\" disabled> William</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Précédent</th><th>Suivant</th></tr></thead><tbody><tr><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" data-wiki-fragment=\"\">Arc 2 - 09b - 27.06.25</a></td><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3\" data-wiki-fragment=\"\">Arc 3</a></td></tr></tbody></table></div>")}

	</section>
{/snippet}
