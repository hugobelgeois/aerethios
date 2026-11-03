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
  <title>{"Arc 2 - 06 - 18.05.25"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 2 - 06 - 18.05.25"}</h1>
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
	{@html "<p>Lieu actuel : Ovliin, voyage entre Siv et Ruvik</p>\n<p>Objectif : Rejoindre Ruvik pour se renseigner sur Orvain</p>\n<p>Pnjs notables : Einar</p>"}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html "Scénario"}</h2>
	{@html "<p>J-41<br>Voyage vers Ruvik  </p>\n<p>J-43<br>Rencontre d'un Gammoth<br>Dara utilise les ténèbres pour qu'il attaque son troupeau  </p>\n<p>J-48<br>Rencontre de Einar qui les héberge, les nourri et les emmène à la capitale</p>"}

	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html "Notes"}</h2>
	{@html "<p>Voyage vers la capitale</p>\n<ul><li>Troupeau de mamouthons et un Gammoth</li><li>Vivres limités</li></ul>\n<p>Plus loin, ils arrivent sur la route principale et tombent sur une maison<br>\nDedans se trouve Einar<br>\nIl doit aller à la capitale pour faire son travail de bourreau, il en profitera pour dire bonjour à sa fille Bryumnes, chef de guerre d'Ovliin</p>\n<p>Voyage</p>\n<ul><li>S'ils se font attaquer, Einar ne se bat pas car il ne veut plus tuer s'il n'est pas sûr des méfaits d'une personne</li></ul>"}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html "Joueurs"}</h2>
	{@html applyBase("<ul><li><input type=\"checkbox\" disabled checked> Diego 8</li><li><input type=\"checkbox\" disabled> Loïc 5</li><li><input type=\"checkbox\" disabled checked> Michel 8</li><li><input type=\"checkbox\" disabled checked> Thomas 8</li><li><input type=\"checkbox\" disabled> William 3</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Précédent</th><th>Suivant</th></tr></thead><tbody><tr><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 05 - 27.04.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 05 - 27.04.25\" data-wiki-fragment=\"\">Arc 2 - 05 - 27.04.25</a></td><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 07 - 21.05.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 07 - 21.05.25\" data-wiki-fragment=\"\">Arc 2 - 07 - 21.05.25</a></td></tr></tbody></table></div>")}

	</section>
{/snippet}
