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
  <title>Arc 3 - 13b - 03.10.25</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 3 - 13b - 03.10.25</h1>
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
	{@html renderMarkdown("> Le Dieu Dormant les envoie dans l'antre du masque qui est occupé dans un conflit\n")}
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">Détails</h2>
	{@html renderMarkdown("\nLieu actuel : Suraja, Irkma + Dimension du masque\n\nObjectif : Infiltrer la dimension du masque pour en savoir plus sur lui\n\nPnjs notables : Dieu Dormant, Rysom Javak\n")}

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
	{@html renderMarkdown("\nLe Dieu Dormant leur rend visite pour leur dire que le masque est occupé à Nirina, et que c'est le moment de se rendre dans son antre pour en savoir plus\nS'ils refusent, le dieu dit qu'il ne leur demandait pas leur avis et les y envoie\n\nEn tombant dans son antre, ils peuvent essayer d'attraper un des corps suspendu\nCe joueur supplémentaire est Rysom Javak\n\n__Co-dm__\nChaque joueur va décrire comment il imagine l'environnement, quels dangers il contient, et le vrai mj va adapter une petite aventure/épreuve autour\n\nA la fin de leurs épreuves, ils voient un coeur battre au centre d'une salle sombre\nS'ils plantent une arme dedans, ils se font éjecter de l'antre\n")}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">Joueurs</h2>
	{@html renderMarkdown("\n- [ ] Diego 14\n- [x] Loïc 11\n- [ ] Lucas 4\n- [x] Michel 16\n- [ ] Nolan 3\n- [x] Thomas 15\n- [ ] William 7\n\n|     Précédent     |      Suivant      |\n| :---------------: | :---------------: |\n| <a href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 12 - 19.09.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 12 - 19.09.25\" data-wiki-fragment=\"\">Arc 3 - 12 - 19.09.25</a> | <a href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 14 - 11.10.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 14 - 11.10.25\" data-wiki-fragment=\"\">Arc 3 - 14 - 11.10.25</a> |")}

	</section>
{/snippet}
