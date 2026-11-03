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
  <title>{"Arc 2.5 - 10 - 05.08.25 Loic"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 2.5 - 10 - 05.08.25 Loic"}</h1>
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
	{@html "<p>Lieu actuel : Ovliin,</p>\n<p>Objectif :</p>\n<p>Pnjs notables : Bigard, Mattivi, Marvik, Syrithia, Dieu Savoir</p>"}

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
	{@html "<blockquote>Formation scientifique forcée par ses parents à 15 ans<br><del>Etudie 1 an puis se redirige vers la religion</del><br><br>*Se fait bien voir par son père grâce à ses connaissances alchimique du \"futur\"<br>Apprends la magie*<br>Rencontre de Bigard et Mattivi<br><br>*Se fait bien voir par l'Académie grâce à ses connaissances<br>Apprend le feu à 16 ans*<br><del>Redirection vers la religion</del><br>*Continue ses études<br><br>Apprend les ténèbres à 18 ans, et la foudre à 20 ans*<br>~~Don de sa vue à 21 ans<br>Purge un village de sa douleur à 24 ans<br>Pélérinage à travers les 72 temples, rencontre avec Marvik~~<br><br>*Travail avec Bigard pour créer un élémentaire avec une capacité de réflexion propre<br>Rencontre avec Marvik<br>Redirection vers la religion<br>Bigard accompagne pour flexer son élémentaire devant un dieu*<br><br><em>Apprend la magie solide pendant son pèlerinage</em><br><br>*Rencontre de Syrithia à 28 ans<br>Rencontre du Dieu Savoir 3 mois après<br>Flexe l'élémentaire<br>Le dieu propose le savoir de faire un élémentaire ultime contre tous les souvenirs de Léoric<br>Il refuse*<br>Il continue son pèlerinage pour se rendre au début du jdr</blockquote>\n<p>Résultat :</p>\n<ul><li>Nouvelle magie de feu et de solide</li><li>Nouveau style de magie :</li><li>Golem de feu</li><li>Perte de maîtrise càc pour compenser la magie</li><li>Perte de ses rangs Templis</li><li>Réputation de mage prometteur dans sa région d'Ovliin</li><li>Relation avec certains Doigts (Syrithia, Marvik, Vorithar)</li></ul>"}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html "Joueurs"}</h2>
	{@html applyBase("<ul><li><input type=\"checkbox\" disabled> Diego</li><li><input type=\"checkbox\" disabled checked> Loïc</li><li><input type=\"checkbox\" disabled> Michel</li><li><input type=\"checkbox\" disabled> Thomas</li><li><input type=\"checkbox\" disabled> William</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Précédent</th><th>Suivant</th></tr></thead><tbody><tr><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" data-wiki-fragment=\"\">Arc 2 - 09b - 27.06.25</a></td><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3\" data-wiki-fragment=\"\">Arc 3</a></td></tr></tbody></table></div>")}

	</section>
{/snippet}
