<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
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
  <title>Arc 2.5 - 10 - 05.08.25 Loic</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 2.5 - 10 - 05.08.25 Loic</h1>
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
	{@html renderMarkdown("> Résumé\n")}
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">Détails</h2>
	{@html renderMarkdown("\nLieu actuel : Ovliin,\n\nObjectif :\n\nPnjs notables : Bigard, Mattivi, Marvik, Syrithia, Dieu Savoir\n")}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">Scénario</h2>


	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">Notes</h2>
	{@html renderMarkdown("\n> Formation scientifique forcée par ses parents à 15 ans\n> ~~Etudie 1 an puis se redirige vers la religion~~\n>\n> *Se fait bien voir par son père grâce à ses connaissances alchimique du \"futur\"\n> Apprends la magie*\n> Rencontre de Bigard et Mattivi\n>\n> *Se fait bien voir par l'Académie grâce à ses connaissances\n> Apprend le feu à 16 ans*\n> ~~Redirection vers la religion~~\n> *Continue ses études\n>\n> Apprend les ténèbres à 18 ans, et la foudre à 20 ans*\n> ~~Don de sa vue à 21 ans\n> Purge un village de sa douleur à 24 ans\n> Pélérinage à travers les 72 temples, rencontre avec Marvik~~\n>\n> *Travail avec Bigard pour créer un élémentaire avec une capacité de réflexion propre\n> Rencontre avec Marvik\n> Redirection vers la religion\n> Bigard accompagne pour flexer son élémentaire devant un dieu*\n>\n> *Apprend la magie solide pendant son pèlerinage*\n>\n> *Rencontre de Syrithia à 28 ans\n> Rencontre du Dieu Savoir 3 mois après\n> Flexe l'élémentaire\n> Le dieu propose le savoir de faire un élémentaire ultime contre tous les souvenirs de Léoric\n> Il refuse*\n> Il continue son pèlerinage pour se rendre au début du jdr\n\nRésultat :\n- Nouvelle magie de feu et de solide\n- Nouveau style de magie :\n  - Golem de feu\n- Perte de maîtrise càc pour compenser la magie\n- Perte de ses rangs Templis\n- Réputation de mage prometteur dans sa région d'Ovliin\n- Relation avec certains Doigts (Syrithia, Marvik, Vorithar)\n")}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">Joueurs</h2>
	{@html renderMarkdown("\n- [ ] Diego\n- [x] Loïc\n- [ ] Michel\n- [ ] Thomas\n- [ ] William\n\n|     Précédent     |  Suivant  |\n| :-----------------------: | :-------: |\n| <a href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" data-wiki-fragment=\"\">Arc 2 - 09b - 27.06.25</a> | <a href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3\" data-wiki-fragment=\"\">Arc 3</a> |")}

	</section>
{/snippet}
